const groupAppName = 'Custom Tests';
const baseUrlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/modal-1.7/'; // your baseline url
const urlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/modal-demo-scroll/'; // your custom test url

// add your custom tests here
const customNamingFormat = [
  {
    testId: 'modal-icons',
    patternName: 'Modal Icons Demo',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/demos/modal-demo.html',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/patterns-library-test/demos/modal-demo.html',
    appName: groupAppName,
    clickElement: "[data-modal-trigger='example-modal-one']",
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
    clickElement: "#singlePickerTrigger-0",
    hoverElement: ".calendars:first-of-type .day.disabled:first-of-type",
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
  },
  {
    testId: 'datepicker-check-icons',
    patternName: 'Datepicker Check Icons',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/datepicker-pattern-3.0',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/datepicker-pattern',
    appName: groupAppName,
    viewportWidth: 1000,
    viewportHeight: 800,
    checkSelector: "#singlePickerTrigger-0"
  },
  {
    testId: 'styleguide-dropdowns',
    patternName: 'Datepicker Check Icons',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/styleguide/select.html',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/styleguide/select.html',
    appName: groupAppName,
    viewportWidth: 1000,
    viewportHeight: 800,
  },
  {
    testId: 'styleguide-dropdowns-2',
    patternName: 'Datepicker Check Icons',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/demos/action-area-demo.html',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/lauren-dev/patterns-library-test/demos/action-area-demo.html',
    appName: groupAppName,
    viewportWidth: 1000,
    viewportHeight: 800,
  },
  {
    testId: 'region-picker-test',
    patternName: 'Region picker test',
    baseUrl: 'https://ss003.kaiserpermanente.org/why-kp/test',
    url: 'https://ss003.kaiserpermanente.org/why-kp/test',
    appName: "Region Picker AEM",
    viewportWidth: 1000,
    viewportHeight: 800,
    checkSelector: '.region-picker.section',
    // checkSelector: '.region-picker-pattern.section',
  }
];

const customTests = customNamingFormat;

module.exports = customTests;