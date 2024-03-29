/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'Price Comparison View',
  cloudIdentifier: 'gcp-us',
  env: {
    development: {
      initialProjectKey: 'us-store'
    },
    production: {
      customViewId: '${env:APPLICATION_ID}',
      url: '${env:APPLICATION_URL}'
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: [],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_variant_details.prices'],
};

export default config;
