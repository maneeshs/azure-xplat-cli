// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/providers/Microsoft.Batch/locations/westus/quotas?api-version=2015-12-01')
  .reply(200, "{\"accountQuota\":10}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '0ba2c8b4-9082-40a1-963f-fbabc761eab0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': 'af94a683-f230-4f38-bae5-8686bea34ee9',
  'x-ms-correlation-request-id': 'af94a683-f230-4f38-bae5-8686bea34ee9',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214944Z:af94a683-f230-4f38-bae5-8686bea34ee9',
  date: 'Tue, 04 Oct 2016 21:49:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/providers/Microsoft.Batch/locations/westus/quotas?api-version=2015-12-01')
  .reply(200, "{\"accountQuota\":10}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '0ba2c8b4-9082-40a1-963f-fbabc761eab0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': 'af94a683-f230-4f38-bae5-8686bea34ee9',
  'x-ms-correlation-request-id': 'af94a683-f230-4f38-bae5-8686bea34ee9',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214944Z:af94a683-f230-4f38-bae5-8686bea34ee9',
  date: 'Tue, 04 Oct 2016 21:49:43 GMT',
  connection: 'close' });
 return result; }]];