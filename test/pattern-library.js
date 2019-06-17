// shared variables
const groupAppName = 'Pattern Library';
const baseUrlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/demos/'; // your baseline url
const urlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/patterns-library/david-dev/demos/';

// pattern test IDs
const testIds = [
  'accordion',
  'action-area',
  'adaptive-template',
  'autocomplete-search',
  'breadcrumbs',
  'carousel',
  'content-toggle',
  'datepicker',
  'feed',
  'forms-clear',
  'forms-dropdown',
  'forms-error',
  'icon-links',
  'loading-indicator',
  'modal',
  'notifications',
  'pagination',
  'pop-up',
  'progress-bar',
  'proxy-picker',
  'region-picker',
  'search-results',
  'selectables',
  'step-indicator',
  'tables',
  'tabs',
  'text-area',
  'timer',
  'tooltip',
  'view-more-view-less'
];

// create object array of tests that follow standard naming conventions
const standardNamingFormat = testIds.map(function(id) {
  let testData = {
    testId: id,
    patternName: 'PL: ' + id.replace(/\b\w/g, function(name){ return name.toUpperCase() }).replace(/-/g, ' '),
    baseUrl: baseUrlPrefix + id + '-demo.html',
    url: urlPrefix + id + '-demo.html',
    appName: groupAppName,
  }
  return testData;
});

// additional tests for custom naming conventions
const customNamingFormat = [
  {
    testId: 'stress-test-1',
    patternName: 'PL: Stress Test 1',
    baseUrl: baseUrlPrefix + 'modal-contentToggle-show-MoreLess-with-popup-demo.html',
    url: urlPrefix + 'modal-contentToggle-show-MoreLess-with-popup-demo.html',
    appName: groupAppName,
  },
  {
    testId: 'stress-test-2',
    patternName: 'PL: Stress Test 2',
    baseUrl: baseUrlPrefix + 'popup-with-content-toggle-in-modal-demo.html',
    url: urlPrefix + 'popup-with-content-toggle-in-modal-demo.html',
    appName: groupAppName,
  },
  {
    testId: 'forms-error-2',
    patternName: 'PL: Forms Error 2',
    baseUrl: baseUrlPrefix + 'forms-error-demo2.html',
    url: urlPrefix + 'forms-error-demo2.html',
    appName: groupAppName,
  },
  {
    testId: 'secondary-navigation-1',
    patternName: 'PL: Secondary Navigation 1',
    baseUrl: baseUrlPrefix + 'secondary-navigation-demo1.html',
    url: urlPrefix + 'secondary-navigation-demo1.html',
    appName: groupAppName,
  },
  {
    testId: 'secondary-navigation-2',
    patternName: 'PL: Secondary Navigation 2',
    baseUrl: baseUrlPrefix + 'secondary-navigation-demo2.html',
    url: urlPrefix + 'secondary-navigation-demo2.html',
    appName: groupAppName,
  },
  {
    testId: 'side-navigation-1',
    patternName: 'PL: Secondary Navigation 1',
    baseUrl: baseUrlPrefix + 'side-navigation-demo1.html',
    url: urlPrefix + 'secondary-navigation-demo1.html',
    appName: groupAppName,
  },
  {
    testId: 'side-navigation-2',
    patternName: 'PL: Secondary Navigation 2',
    baseUrl: baseUrlPrefix + 'side-navigation-demo2.html',
    url: urlPrefix + 'secondary-navigation-demo2.html',
    appName: groupAppName,
  },
  {
    testId: 'side-navigation-3',
    patternName: 'PL: Secondary Navigation 3',
    baseUrl: baseUrlPrefix + 'side-navigation-demo3.html',
    url: urlPrefix + 'secondary-navigation-demo3.html',
    appName: groupAppName,
  },
  {
    testId: 'side-navigation-4',
    patternName: 'PL: Secondary Navigation 4',
    baseUrl: baseUrlPrefix + 'side-navigation-demo4.html',
    url: urlPrefix + 'secondary-navigation-demo4.html',
    appName: groupAppName,
  }
];

// concatenate standard and custom test arrays
const patternLibraryTests = standardNamingFormat.concat(customNamingFormat);

// export array
module.exports = patternLibraryTests;