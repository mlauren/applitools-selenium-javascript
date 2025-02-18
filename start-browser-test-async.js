'use strict';

require('chromedriver'); // eslint-disable-line node/no-unpublished-require
const { Builder, Capabilities, By } = require('selenium-webdriver');
const { Eyes, StitchMode, VisualGridRunner, Target, ConsoleLogHandler, Configuration, BrowserType, DeviceName, ScreenOrientation, BatchInfo } = require('@applitools/eyes-selenium');

var testSelector = require("./testSelector.js");

function initializeEyes(runner) {
  // Create Eyes object with the runner, meaning it'll be a Visual Grid eyes.
  const eyes = new Eyes(runner);
  // Set logger
  eyes.setLogHandler(new ConsoleLogHandler(false));

  // Create Configuration
  const configuration = new Configuration();

  configuration.setForceFullPageScreenshot(true);
  
  eyes.setStitchMode(StitchMode.CSS);

  configuration.setServerUrl("https://kpeyes.applitools.com")

  // Set API key
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY);

  // Set a proxy if required
  // configuration.setProxy('http://localhost:8888');

  // Set the AUT name
  configuration.setAppName(testSelector.appName);

  // Set a test name
  configuration.setTestName(testSelector.testName);

  // Set a batch name so all the different browser and mobile combinations are part of the same batch
  configuration.setBatch(new BatchInfo(testSelector.testName + " " + testSelector.url));

  // Add Chrome browsers with different Viewports
  configuration.addBrowser(1000, 800, BrowserType.CHROME);

  configuration.addBrowser(800, 600, BrowserType.CHROME);
  configuration.addBrowser(700, 500, BrowserType.CHROME);

  // // Add Firefox browser with different Viewports
  // configuration.addBrowser(1200, 800, BrowserType.FIREFOX);
  // configuration.addBrowser(1600, 1200, BrowserType.FIREFOX);

  // Add iPhone 4 device emulation
  configuration.addDeviceEmulation(DeviceName.iPad, ScreenOrientation.PORTRAIT);
  configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);
  // configuration.addDeviceEmulation(DeviceName.iPhone_6_7_8, ScreenOrientation.PORTRAIT);
  // configuration.addDeviceEmulation(DeviceName.Galaxy_S5, ScreenOrientation.PORTRAIT);


  // Set the configuration object to eyes
  eyes.setConfiguration(configuration);
  return eyes;
}

async function runTest(url, runner) {
  //Initialize Eyes with Visual Grid Runner
  const eyes = initializeEyes(runner);

  // Create a new Webdriver
  const webDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

  try {
    // Navigate to the URL we want to test
    await webDriver.get(url);

    if (await testSelector.clickElement) {
      await webDriver.findElement(By.css(testSelector.clickElement)).click();
    }
    //Mouseover on an element
    if (await testSelector.hoverElement) {
      let elem = await webDriver.findElement(By.css(testSelector.hoverElement)); 

      await webDriver.actions().move({origin: elem}).perform(); 
    }

    // Call Open on eyes to initialize a test session
    await eyes.open(webDriver);

    // Check the page
    await eyes.check('testSelector.testName ' + url, Target.window());

    //'#modal-fullscreen-no-bar > div.modal-content > div.modal-inner'
    // modal-demo : "#modal-fullscreen-no-bar > div > div.modal-inner"
    // await eyes.check(testSelector.testName + " " + testSelector.url, Target.region(By.css('#example-modal-two'), null).fully());

    // Close eyes asynchronously
    await eyes.closeAsync();
  } catch (e) {
    console.log('Error', e); // eslint-disable-line
  } finally {
    // Close the browser
    await webDriver.quit();
  }
}

(async () => {
  // Create a runner with concurrency of 10
  const runner = new VisualGridRunner(10);

  try {
    // Define links to process
    const urlsToTest = [
      testSelector.url
    ];

    // Run test for each link
    for (const url of urlsToTest) {
      await runTest(url, runner);
    }

    // Get all results at once
    const results = await runner.getAllTestResults(false);
    // Print results
    console.log(results); // eslint-disable-line
  } catch (e) {
    // if results failed, it goes here
    console.log('Error', e); // eslint-disable-line
  }
})();
