require("chromedriver");

var webdriver = require("selenium-webdriver");
var Capabilities = webdriver.Capabilities;
var Builder = webdriver.Builder;
var By = webdriver.By;

var SeleniumSDK = require("eyes.selenium");
var Eyes = SeleniumSDK.Eyes;
var ConsoleLogHandler = SeleniumSDK.ConsoleLogHandler;

//Runs different tests based on CLI input such as "part1", "part2" and so on.
var testSelector = require("./testSelector.js");

// Open a Chrome browser.
var driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// Initialize the eyes SDK and set your private API key.
var eyes = new Eyes();

//⚠️️️  Please set the APPLITOOLS_API_KEY environment variable
//on Mac: export APPLITOOLS_API_KEY='YOUR_API_KEY'
//on windows: set APPLITOOLS_API_KEY='YOUR_API_KEY'
//Note: You can get your API key by logging into Applitools | Click on the person icon (top-right corner) | Click on the "My API key" menu
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

//eyes.setLogHandler(new ConsoleLogHandler(false));

try {
  // Start the test and set the browser's viewport size to 800x600.
  eyes.open(driver, testSelector.appName, testSelector.testName, {
    width: testSelector.viewportWidth,
    height: testSelector.viewportHeight
  });

  // Navigate the browser to the "hello world!" web-site.
  driver.get(testSelector.url);

  // Visual checkpoint #1.
  eyes.checkWindow(testSelector.windowName);

  //Only go to the main app page if the test/tutorial needs it
  if (testSelector.goto2ndPage) {
    // Click the "Click me!" button.
    driver.findElement(By.id("log-in")).click();

    // Visual checkpoint #2.
    eyes.checkWindow("Click!");
  }

  // End the test.
  eyes.close(false);
} finally {
  // Close the browser.
  driver.quit();

  // If the test was aborted before eyes.close was called ends the test as aborted.
  eyes.abortIfNotClosed();
}
