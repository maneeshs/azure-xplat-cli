// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'f30ef677-64a9-4768-934f-5fbbc0e1ad27',
    name: 'Subscription-1',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 23:13:16 GMT',
  etag: '0x8D40E7625CF0907',
  location: 'https://test1.westus.batch.azure.com/pools/testpool1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '39b7ea4c-8109-4092-a9b4-408ad9f88961',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'client-request-id': '42ed02a3-bd19-42dd-8745-40ab00496a4b',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/testpool1',
  date: 'Wed, 16 Nov 2016 23:13:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 23:13:16 GMT',
  etag: '0x8D40E7625CF0907',
  location: 'https://test1.westus.batch.azure.com/pools/testpool1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '39b7ea4c-8109-4092-a9b4-408ad9f88961',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'client-request-id': '42ed02a3-bd19-42dd-8745-40ab00496a4b',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/testpool1',
  date: 'Wed, 16 Nov 2016 23:13:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/testpool1?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"testpool1\",\"url\":\"https://test1.westus.batch.azure.com/pools/testpool1\",\"eTag\":\"0x8D40E7625CF0907\",\"lastModified\":\"2016-11-16T23:13:16.9337607Z\",\"creationTime\":\"2016-11-16T23:13:16.9337607Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-11-16T23:13:16.9337607Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-11-16T23:13:17.5896907Z\",\"vmSize\":\"standard_d1\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"virtualMachineConfiguration\":{\r\n    \"imageReference\":{\r\n      \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"15.10\",\"version\":\"latest\"\r\n    },\"nodeAgentSKUId\":\"batch.node.debian 8\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Wed, 16 Nov 2016 23:13:16 GMT',
  etag: '0x8D40E7625CF0907',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '33cdef9e-6b2d-465f-b01d-39beb1c70b5f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'client-request-id': 'e952113a-c480-4ee1-b839-f76ae5435959',
  dataserviceversion: '3.0',
  date: 'Wed, 16 Nov 2016 23:13:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/testpool1?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"testpool1\",\"url\":\"https://test1.westus.batch.azure.com/pools/testpool1\",\"eTag\":\"0x8D40E7625CF0907\",\"lastModified\":\"2016-11-16T23:13:16.9337607Z\",\"creationTime\":\"2016-11-16T23:13:16.9337607Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-11-16T23:13:16.9337607Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-11-16T23:13:17.5896907Z\",\"vmSize\":\"standard_d1\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"virtualMachineConfiguration\":{\r\n    \"imageReference\":{\r\n      \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"15.10\",\"version\":\"latest\"\r\n    },\"nodeAgentSKUId\":\"batch.node.debian 8\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Wed, 16 Nov 2016 23:13:16 GMT',
  etag: '0x8D40E7625CF0907',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '33cdef9e-6b2d-465f-b01d-39beb1c70b5f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'client-request-id': 'e952113a-c480-4ee1-b839-f76ae5435959',
  dataserviceversion: '3.0',
  date: 'Wed, 16 Nov 2016 23:13:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .delete('/pools/testpool1?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9bc3c761-e67c-49b1-a190-fede930e10f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'client-request-id': '13857080-7043-4861-877b-605f700dfe0a',
  dataserviceversion: '3.0',
  date: 'Wed, 16 Nov 2016 23:13:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .delete('/pools/testpool1?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9bc3c761-e67c-49b1-a190-fede930e10f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'client-request-id': '13857080-7043-4861-877b-605f700dfe0a',
  dataserviceversion: '3.0',
  date: 'Wed, 16 Nov 2016 23:13:19 GMT',
  connection: 'close' });
 return result; }]];