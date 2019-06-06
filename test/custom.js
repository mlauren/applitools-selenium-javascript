const groupAppName = 'Custom Tests';
const baseUrlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/styleguide/button1.html'; // your baseline url
const urlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/styleguide/button2.html'; // your custom test url

// add your custom tests here
const customNamingFormat = [
  {
    testId: 'buttons-ux',
    patternName: 'Buttons UX',
    baseUrl: baseUrlPrefix,
    url: urlPrefix,
    appName: groupAppName,
  }
];

const customTests = customNamingFormat;

module.exports = customTests;