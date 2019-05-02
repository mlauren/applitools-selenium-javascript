const groupAppName = 'Custom Tests';
const baseUrlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/demos/'; // your baseline url
const urlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/david-dev/demos/'; // your custom test url

// add your custom tests here
const customNamingFormat = [
  {
    testId: 'custom-example-1',
    patternName: 'Custom: Example 1',
    baseUrl: baseUrlPrefix + 'custom-example-1.html',
    url: urlPrefix + 'custom-example-1.html',
    appName: groupAppName,
  }
];

const customTests = customNamingFormat;

module.exports = customTests;