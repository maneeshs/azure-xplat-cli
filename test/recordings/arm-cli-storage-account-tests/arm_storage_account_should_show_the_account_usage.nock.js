// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'East US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_STORAGE_TEST_KIND'] = 'storage';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/usages?api-version=2016-01-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 20,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"StorageAccounts\",\r\n        \"localizedValue\": \"Storage Accounts\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '218',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bde42cb5-4ecb-480c-8ad4-adb23ed0ff31',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'bde42cb5-4ecb-480c-8ad4-adb23ed0ff31',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T063102Z:bde42cb5-4ecb-480c-8ad4-adb23ed0ff31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 06:31:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/usages?api-version=2016-01-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 20,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"StorageAccounts\",\r\n        \"localizedValue\": \"Storage Accounts\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '218',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bde42cb5-4ecb-480c-8ad4-adb23ed0ff31',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'bde42cb5-4ecb-480c-8ad4-adb23ed0ff31',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T063102Z:bde42cb5-4ecb-480c-8ad4-adb23ed0ff31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 06:31:02 GMT',
  connection: 'close' });
 return result; }]];