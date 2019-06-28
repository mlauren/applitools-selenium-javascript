'use strict';

require('chromedriver'); // eslint-disable-line node/no-unpublished-require
const { Builder, Capabilities } = require('selenium-webdriver');
const { Eyes, VisualGridRunner, Target, ConsoleLogHandler, Configuration, BrowserType, DeviceName, ScreenOrientation, BatchInfo } = require('@applitools/eyes-selenium');

function initializeEyes(runner) {
  // Create Eyes object with the runner, meaning it'll be a Visual Grid eyes.
  const eyes = new Eyes(runner);
  // Set logger
  eyes.setLogHandler(new ConsoleLogHandler(false));

  // Create Configuration
  const configuration = new Configuration();

  configuration.setForceFullPageScreenshot(true);

  configuration.setServerUrl("https://kpeyes.applitools.com")

  // Set API key
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY);


  // If dedicated or on-prem cloud, uncomment and enter the cloud url
  // Default: https://eyes.applitools.com
  // configuration.setServerUrl("https://testeyes.applitools.com");

  // Set a proxy if required
  // configuration.setProxy('http://localhost:8888');

  // Set the AUT name
  configuration.setAppName('Eyes Examples');

  // Set a test name
  configuration.setTestName('My first Javascript test!');

  // Set a batch name so all the different browser and mobile combinations are part of the same batch
  configuration.setBatch(new BatchInfo("VIP Browser combo batch"));

  // Add Chrome browsers with different Viewports
  configuration.addBrowser(800, 600, BrowserType.CHROME);
  configuration.addBrowser(700, 500, BrowserType.CHROME);

  // Add Firefox browser with different Viewports
  configuration.addBrowser(1200, 800, BrowserType.FIREFOX);
  configuration.addBrowser(1600, 1200, BrowserType.FIREFOX);

  // Add iPhone 4 device emulation
  configuration.addDeviceEmulation(DeviceName.iPad, ScreenOrientation.PORTRAIT);

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

    // Call Open on eyes to initialize a test session
    await eyes.open(webDriver);

    // Check the page
    await eyes.check('Main Page ' + url, Target.window());

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
      'http://cskpcloudxn1713.cloud.kp.org/styleguide/typography.html'
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
