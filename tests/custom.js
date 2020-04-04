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
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/datepicker-pattern',
    url: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/datepicker-pattern',
    appName: groupAppName,
    clickElement: "#singlePickerTrigger-0",
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
  },
  {
    testId: 'pl-test',
    patternName: 'PL Test',
    baseUrl: 'http://localhost:8080/demos/carousel-demo.html',
    url: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/demos/carousel-demo.html',
    appName: "Patterns Library Carousel Demo",
    viewportWidth: 1000,
    viewportHeight: 800
  },
  {
    testId: 'ratings-reviews',
    patternName: 'Ratings and Reviews',
    baseUrl: '',
    url: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/styleguide/ratings.html',
    appName: "Styleguide Ratings and Reviews",
    viewportWidth: 1000,
    viewportHeight: 800
  },
  {
    testId: 'kporg-demo-test',
    patternName: 'Kp Org Demo Test',
    baseUrl: '',
    url: 'https://healthy.kaiserpermanente.org/',
    appName: "Kaiser Permanente Front Page",
    viewportWidth: 1000,
    viewportHeight: 800
  },
  {
    testId: 'kporg-doctors-reviews-test',
    patternName: 'Kp Doctors Review Test',
    baseUrl: '',
    url: 'https://wppdev3.kaiserpermanente.org/oregon-washington/clinicians/douglas-ackerman-0077272',
    appName: "Kaiser Permanente Front Page",
    viewportWidth: 1000,
    viewportHeight: 800
  },
  {
    testId: 'styleguide-grid',
    patternName: 'Styleguide Grid',
    baseUrl: '',
    url: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/styleguide-grid/grid.html',
    appName: "Styleguide",
    viewportWidth: 1000,
    viewportHeight: 800
  },
  {
    testId: 'forms-selectables',
    patternName: 'Form Pattern',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/form-pattern/',
    url: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/form-pattern-STYLGD-4313/',
    appName: "Patterns Library - Forms Pattern",
    viewportWidth: 1000,
    viewportHeight: 800, 
    ignoreEls: ["#"]
  },
  {
    testId: 'datepicker-custom',
    patternName: 'datepicker',
    url: 'http://localhost:8080/',
    appName: "Datepicker Pattern",
    viewportWidth: 1000,
    viewportHeight: 800,
    clickElement: "#singlePickerTrigger-3"
  },
  {
    testId: 'footer-test-lauren',
    patternName: 'footer-pattern',
    baseUrl: 'https://healthy.kaiserpermanente.org/',
    url: 'http://cskpcloudxn1713.cloud.kp.org/nancy-dev/footer-pattern/',
    appName: "Patterns Library",
    viewportWidth: 1000,
    viewportHeight: 800,
    checkSelector: ".kp-footer"
  },
  {
    testId: 'modal-test-lauren',
    patternName: 'modal-pattern',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/modal-pattern-3.0/',
    url: 'http://cskpcloudxn1713.cloud.kp.org/nancy-dev/modal-pattern/full-screen-test.html',
    appName: "Patterns Library",
    viewportWidth: 1000,
    viewportHeight: 800,
    clickElement: "#fullscreen-modal-open-no-bar"
  },
  {
    testId: 'side-nav-test-lauren',
    patternName: 'side-nav-pattern',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/demos/side-navigation-demo2.html',
    url: 'http://cskpcloudxn1713.cloud.kp.org/manizhah-dev/patterns-library/demos/side-navigation-demo2.html',
    appName: "Patterns Library",
    viewportWidth: 1000,
    viewportHeight: 800,
    // clickElement: "#fullscreen-modal-open-no-bar"
  },
  {
    testId: 'nav-tray-mobile-test',
    patternName: 'nav-tray',
    baseUrl: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/nav-tray-1.0/',
    url: 'http://cskpcloudxn1713.cloud.kp.org/lauren-dev/nav-tray/',
    appName: "Patterns Library",
    viewportWidth: 525,
    viewportHeight: 800,
    clickElement: "#mobile-menu-open-0"
  }
];

const customTests = customNamingFormat;

module.exports = customTests;