const groupAppName = 'Custom Tests';
const baseUrlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/modal-1.7/'; // your baseline url
const urlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/modal-demo-scroll/'; // your custom test url

// add your custom tests here
const customNamingFormat = [
  {
    testId: 'modal-icons',
    patternName: 'Modal Icons Demo',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/modal-1.7/',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/modal-demo/',
    appName: groupAppName,
    viewportWidth: 1000,
    viewportHeight: 800
  },
  {
    testId: 'sg-code-comps',
    patternName: 'SG code Comps',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/styleguide/comps-code.html',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/styleguide/comps-design.html',
    appName: groupAppName,
    viewportWidth: 1000,
    viewportHeight: 800
  },
  {
    testId: 'datepicker-hover-state',
    patternName: 'Datepicker Hover State',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/datepicker-pattern-3.0',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/datepicker-pattern',
    appName: groupAppName,
    viewportWidth: 1000,
    viewportHeight: 800
  },
  {
    testId: 'icon-link-code-comps',
    patternName: 'Icon links code meets comps',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/patterns-library-test/icon-links-comps.html',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/patterns-library-test/icon-links-code.html',
    appName: groupAppName,
    viewportWidth: 1000,
    viewportHeight: 800
  }
];

const customTests = customNamingFormat;

module.exports = customTests;