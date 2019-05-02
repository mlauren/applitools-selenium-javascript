const patternLibraryTests = require('./test/pattern-library');
const styleGuideTests = require('./test/style-guide');
const customTests = require('./test/custom');
const totalTests = patternLibraryTests.concat(styleGuideTests, customTests);

const processTestName = process.argv[2];

if (!processTestName) {
  console.log(
    "MISSING TEST NAME. Valid names are: 'action-area', 'content-toggle', 'sg-grid', etc. See files in test folder to view."
  );
  process.exit(0);
}

// tests
totalTests.forEach(function(test) {
    let testsToRun;
    if (processTestName === test.testId) {
      testsToRun = {
        url: test.url,
        baseUrl: test.baseUrl,
        appName: test.appName,
        windowName: test.windowName || test.patternName,
        testName: test.patternName,
        goto2ndPage: test.goto2ndPage || false,
        viewportWidth: test.viewportWidth || 1200,
        viewportHeight: test.viewportHeight || 700
      };
      console.log('**********************************************');
      console.log('RUNNING...', processTestName);
      console.log('TEST APP URL:', testsToRun.url);
      console.log('APPLICATION NAME:', testsToRun.appName);
      console.log('TEST PAGE NAME:', testsToRun.windowName);
      console.log('VIEWPORT WIDTH:', testsToRun.viewportWidth);
      console.log('VIEWPORT HEIGHT:', testsToRun.viewportHeight);
      console.log('**********************************************');
      module.exports = testsToRun;
    }
});



