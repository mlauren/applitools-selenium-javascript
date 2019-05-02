const groupAppName = 'Style Guide';
const baseUrlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/styleguide/'; // your baseline url
const urlPrefix = 'http://cskpcloudxn1713.cloud.kp.org/styleguide-sandbox/'; // your custom test url

const testIds = [
  'sg-accessibility',
  'sg-accordion',
  'sg-action-area-l1-apptc',
  'sg-action-area-l1-cc',
  'sg-action-area-l1-global',
  'sg-action-area-l1-mcp',
  'sg-action-area-l2',
  'sg-action-area-tf-epic',
  'sg-action-area-tf',
  'sg-action-area',
  'sg-breadcrumb',
  'sg-button',
  'sg-checkbox',
  'sg-colors',
  'sg-container',
  'sg-dividers',
  'sg-forms-error',
  'sg-forms',
  'sg-grid-demo',
  'sg-grid',
  'sg-icon-links',
  'sg-icon-specifications',
  'sg-icons',
  'sg-image-picture-element',
  'sg-image-single',
  'sg-images',
  'sg-index',
  'sg-link-lists',
  'sg-links',
  'sg-lists',
  'sg-loader',
  'sg-mixins',
  'sg-modal',
  'sg-modern',
  'sg-notifications',
  'sg-pagination',
  'sg-print',
  'sg-radio',
  'sg-ratings',
  'sg-responsive',
  'sg-scrollbox',
  'sg-search',
  'sg-select',
  'sg-show-more-less',
  'sg-spacing',
  'sg-step-indicator',
  'sg-tables-complex',
  'sg-tables',
  'sg-tile',
  'sg-tooltip',
  'sg-typography'
];

const standardNamingFormat = testIds.map(function(id) {
  let testData = {
    testId: id,
    patternName: 'SG: ' + id.replace(/sg-/g, '').replace(/\b\w/g, function(name){ return name.toUpperCase() }).replace(/-/g, ' '),
    baseUrl: baseUrlPrefix + id.replace(/sg-/g, '') + '.html',
    url: urlPrefix + id.replace(/sg-/g, '') + '.html',
    appName: groupAppName,
  }
  return testData;
});

const customNamingFormat = [
  {
    testId: 'sg-custom-example-1',
    patternName: 'SG: Custom Example 1',
    baseUrl: baseUrlPrefix + 'sg-custom-example-1.html',
    url: urlPrefix + 'sg-custom-example-1.html',
    appName: groupAppName,
  }
];

const styleGuideTests = standardNamingFormat.concat(customNamingFormat);

module.exports = styleGuideTests;