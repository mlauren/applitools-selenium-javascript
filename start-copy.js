'use strict';

require('chromedriver'); // eslint-disable-line node/no-unpublished-require
const { Builder, Capabilities } = require('selenium-webdriver');
const { Eyes, VisualGridRunner, Target, ConsoleLogHandler, Configuration, BrowserType, DeviceName, ScreenOrientation, BatchInfo } = require('@applitools/eyes-selenium'); // should be replaced to ''

const testSelector = require("./testSelector.js");


function initializeEyes() {
  // Create Eyes object with the runner, meaning it'll be a Visual Grid eyes.
  const eyes = new Eyes();
  // Set logger
  eyes.setLogHandler(new ConsoleLogHandler(false));

  eyes.setServerUrl("https://kpeyes.applitools.com")

  //⚠️️️  Please set the APPLITOOLS_API_KEY environment variable
  //on Mac: export APPLITOOLS_API_KEY='YOUR_API_KEY'
  //on windows: set APPLITOOLS_API_KEY='YOUR_API_KEY'
  //Note: You can get your API key by logging into Applitools | Click on the Person icon (top-right corner) | Click on the "My API key" menu
  eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

  //scroll the entire page
  eyes.setForceFullPageScreenshot(true);

  if (!process.env.APPLITOOLS_API_KEY) {
    console.log(`
      ⚠️️️  Please set the APPLITOOLS_API_KEY environment variable

          * On Mac: export APPLITOOLS_API_KEY='YOUR_API_KEY'
          
          * On windows: set APPLITOOLS_API_KEY='YOUR_API_KEY'
          
          * Please Note: You can get your API key by logging into applitools.com | Click on the person icon (top-right corner) | Click on the "My API key" menu
      `);
    process.exit(0);
  }

  return eyes;
}

async function runTest(url) {
  //Initialize Eyes with Visual Grid Runner
  const eyes = initializeEyes();

  eyes.setSaveFailedTests(true);

  if (!testSelector.singleElement) {
    eyes.setScaleRatio(2.0);
  }

  var driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

  try {
  
    // Eyes.StitchMode = StitchModes.CSS;
    // Start the test and set the browser's viewport size.
    await eyes.open(driver, testSelector.appName, testSelector.testName, {
      width: testSelector.viewportWidth,
      height: testSelector.viewportHeight
    });
  
    // Navigate the browser to the base url
    await driver.get(testSelector.baseUrl);
  
    if (testSelector.clickElement) {
      await driver.findElement(By.css(testSelector.clickElement)).click();
    }
    //Mouseover on an element
    if (testSelector.hoverElement) {
      await driver.findElement(By.css(testSelector.hoverElement))
        .then(function(elem) {
          driver.actions().mouseMove(elem).perform();
          driver.sleep(5000);
        });
    }
  
    if (testSelector.singleElement) {
      if (testSelector.checkSelector) {
        await eyes.check("name", Target.region(By.css(testSelector.checkSelector), null));
      }
    } else {
      await eyes.checkWindow(testSelector.windowName);
    }
  
    // // End the test.
    // await eyes.close(false);
  
    // await eyes.setSaveFailedTests(false);
  
    // // Start the test and set the browser's viewport size
    // await eyes.open(driver, testSelector.appName, testSelector.testName, {
    //   width: testSelector.viewportWidth,
    //   height: testSelector.viewportHeight
    // });
  
    // // Navigate the browser to the test url
    // await driver.get(testSelector.url);
  
    // if (testSelector.clickElement) {
    //   await driver.findElement(By.css(testSelector.clickElement)).click();
    // }
    // //Mouseover on an element
    // if (testSelector.hoverElement) {
    //   await driver.findElement(By.css(testSelector.hoverElement))
    //   .then(function(elem) {
    //     driver.actions().mouseMove(elem).perform();
    //     // driver.sleep(5000);
    //   });
    // }
  
    // if (testSelector.singleElement) {
    //   if (testSelector.checkSelector) {
    //     await eyes.check(testSelector.windowName, Target.region(By.css(testSelector.checkSelector), null));
    //   }
    // } else {
    //   await eyes.checkWindow(testSelector.windowName);
    // }
  
    await eyes.close();
  } catch (e) {
    console.log('Error', e); // eslint-disable-line
  } finally {
    // Close the browser
    await driver.quit();
  }
}

(async () => {

  try {
    // Run test for each link
    for (const url of [testSelector.baseUrl, testSelector.url]) {
      await runTest(url);
    }

  } catch (e) {
    // if results failed, it goes here
    console.log('Error', e); // eslint-disable-line
  }
})();
