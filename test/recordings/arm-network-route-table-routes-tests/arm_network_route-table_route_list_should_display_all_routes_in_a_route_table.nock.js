// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ff916d28-9130-462e-9f6f-fc7a6c91ea35\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e0a10390-52c0-46e6-8e48-79fd1ca56a9c"',
  'x-ms-request-id': '87569266-e7b2-4f28-85f5-0447fa24f340',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '31f5f85f-70d3-41ee-9e0a-2a8805d0917c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100237Z:31f5f85f-70d3-41ee-9e0a-2a8805d0917c',
  date: 'Fri, 29 Apr 2016 10:02:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ff916d28-9130-462e-9f6f-fc7a6c91ea35\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e0a10390-52c0-46e6-8e48-79fd1ca56a9c"',
  'x-ms-request-id': '87569266-e7b2-4f28-85f5-0447fa24f340',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '31f5f85f-70d3-41ee-9e0a-2a8805d0917c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100237Z:31f5f85f-70d3-41ee-9e0a-2a8805d0917c',
  date: 'Fri, 29 Apr 2016 10:02:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-route\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n      \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"12.0.0.0/8\",\r\n        \"nextHopType\": \"VirtualAppliance\",\r\n        \"nextHopIpAddress\": \"10.0.0.7\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '514',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '039ac231-8113-403a-9d94-d87c15415467',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'a6643a2b-79fa-41a1-a4d7-1b31b3fd2eeb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100238Z:a6643a2b-79fa-41a1-a4d7-1b31b3fd2eeb',
  date: 'Fri, 29 Apr 2016 10:02:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-route\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n      \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"12.0.0.0/8\",\r\n        \"nextHopType\": \"VirtualAppliance\",\r\n        \"nextHopIpAddress\": \"10.0.0.7\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '514',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '039ac231-8113-403a-9d94-d87c15415467',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'a6643a2b-79fa-41a1-a4d7-1b31b3fd2eeb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100238Z:a6643a2b-79fa-41a1-a4d7-1b31b3fd2eeb',
  date: 'Fri, 29 Apr 2016 10:02:37 GMT',
  connection: 'close' });
 return result; }]];