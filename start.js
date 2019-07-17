
const { Builder, Capabilities, By } = require('selenium-webdriver');

const { Eyes, Target, ConsoleLogHandler } = require('@applitools/eyes-selenium'); // should be replaced to ''


//Runs different tests based on CLI input such as "part1", "part2" and so on.
var testSelector = require("./testSelector.js");

// Open a Chrome browser.
var driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// Initialize the eyes SDK and set your private API key.
var eyes = new Eyes();

eyes.setLogHandler(new ConsoleLogHandler(true));


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

try {

  eyes.setSaveFailedTests(true);

  if (!testSelector.singleElement) {
    eyes.setScaleRatio(2.0);
  }

  // Eyes.StitchMode = StitchModes.CSS;
  // Start the test and set the browser's viewport size.
  eyes.open(driver, testSelector.appName, testSelector.testName, {
    width: testSelector.viewportWidth,
    height: testSelector.viewportHeight
  });

  // Navigate the browser to the base url
  driver.get(testSelector.baseUrl);

  if (testSelector.clickElement) {
    driver.findElement(By.css(testSelector.clickElement)).click();
  }
  //Mouseover on an element
  if (testSelector.hoverElement) {
    driver.findElement(By.css(testSelector.hoverElement))
    .then(function(elem) {
      driver.actions().mouseMove(elem).perform();
      driver.sleep(5000);
    });
  }

  if (testSelector.checkSelector) {
    if (testSelector.checkSelector) {
      eyes.check("name", Target.region(By.id(testSelector.checkSelector), null));
    }
  } else {
    eyes.checkWindow(testSelector.windowName);
  }

  // End the test.
  eyes.close(false);

  eyes.setSaveFailedTests(false);

  // Start the test and set the browser's viewport size
  eyes.open(driver, testSelector.appName, testSelector.testName, {
    width: testSelector.viewportWidth,
    height: testSelector.viewportHeight
  });

  // Navigate the browser to the test url
  driver.get(testSelector.url);

  if (testSelector.clickElement) {
    driver.findElement(By.css(testSelector.clickElement)).click();
  }
  //Mouseover on an element
  if (testSelector.hoverElement) {
    driver.findElement(By.css(testSelector.hoverElement))
    .then(function(elem) {
      driver.actions().mouseMove(elem).perform();
      driver.sleep(5000);
    });
  }

  if (testSelector.singleElement) {
    if (testSelector.checkSelector) {
      eyes.check("name", Target.region(By.css(testSelector.checkSelector), null));
    }
  } else {
    eyes.checkWindow(testSelector.windowName);
  }

  eyes.close();

} finally {
  // Close the browser
  driver.quit();

  // If the test was aborted before eyes.close was called ends the test as aborted
  eyes.abortIfNotClosed();
}
