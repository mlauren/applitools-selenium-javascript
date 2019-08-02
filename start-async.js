'use strict';

// require('chromedriver'); // eslint-disable-line node/no-unpublished-require
require('chromedriver'); // eslint-disable-line node/no-unpublished-require

const { Builder, Capabilities, By, Actions } = require('selenium-webdriver');
const { Eyes, StitchMode, Target, ConsoleLogHandler, BatchInfo } = require('@applitools/eyes-selenium'); // should be replaced to '@applitools/eyes-selenium'

const testSelector = require("./testSelector.js");


(async () => {
  // Open a Chrome browser.
  const driver = new Builder()
    // .usingServer('http://localhost:4444/wd/hub')
    .withCapabilities(Capabilities.chrome())
    .build();

  // Initialize the eyes SDK and set your private API key.
  const eyes = new Eyes();
  // eyes.setApiKey('Your API Key');
  eyes.setLogHandler(new ConsoleLogHandler(false));
  // eyes.setProxy('http://localhost:8888');

  eyes.setServerUrl("https://kpeyes.applitools.com")

  //⚠️️️  Please set the APPLITOOLS_API_KEY environment variable
  //on Mac: export APPLITOOLS_API_KEY='YOUR_API_KEY'
  //on windows: set APPLITOOLS_API_KEY='YOUR_API_KEY'
  //Note: You can get your API key by logging into Applitools | Click on the Person icon (top-right corner) | Click on the "My API key" menu
  eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

  //scroll the entire page
  eyes.setForceFullPageScreenshot(true);
  eyes.setStitchMode(StitchMode.CSS);


  const batchInfo = new BatchInfo();
  batchInfo.setSequenceName('alpha sequence');
  eyes.setBatch(batchInfo);

  try {
    // Start the test and set the browser's viewport size to 800x600.
    await eyes.open(driver, testSelector.appName, testSelector.testName, {
      width: testSelector.viewportWidth,
      height: testSelector.viewportHeight 
    });

    // Check base url
    await driver.get(testSelector.url);

    if (await testSelector.clickElement) {
      await driver.findElement(By.css(testSelector.clickElement)).click();
    }
    //Mouseover on an element
    if (await testSelector.hoverElement) {
      let elem = await driver.findElement(By.css(testSelector.hoverElement)); 

      await driver.actions().move({origin: elem}).perform(); 
    }
    
    // Visual checkpoint #1.
    // @TODO if element selector not found
    if (testSelector.checkSelector) {
      await eyes.check(testSelector.testName + " " + testSelector.url, Target.region(By.css(testSelector.checkSelector), null));
    }
    else {
      await eyes.check(testSelector.testName + " " + testSelector.url, Target.window());
    }

    await eyes.closeAsync();
    // const results = await eyes.getRunner().getAllTestResults();

    // for (var result in results) {
    //   console.log("My Indiv Result: " + result);
    //   // await expect(results.getStatus()).to.equal('Passed');
    //   // await expect(result).to.equal('_passed');
    // }

    // wait until results come back
    // await eyes.close();

  } finally {
    // Close the browser.
    await driver.quit();

    // If the test was aborted before eyes.close was called ends the test as aborted.
    await eyes.abortIfNotClosed();
  }
})();
