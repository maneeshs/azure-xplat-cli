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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a190bf95-3a06-4e40-995f-fb6c1d92ebc4\",\r\n    \"peerings\": [\r\n      {\r\n        \"name\": \"AzurePrivatePeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n        \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"peeringType\": \"AzurePrivatePeering\",\r\n          \"azureASN\": 12076,\r\n          \"peerASN\": 100,\r\n          \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n          \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n          \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n          \"state\": \"Enabled\",\r\n          \"vlanId\": 199\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AzurePublicPeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n        \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"peeringType\": \"AzurePublicPeering\",\r\n          \"azureASN\": 12076,\r\n          \"peerASN\": 110,\r\n          \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n          \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n          \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n          \"state\": \"Enabled\",\r\n          \"vlanId\": 209\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"MicrosoftPeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n        \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"peeringType\": \"MicrosoftPeering\",\r\n          \"azureASN\": 12076,\r\n          \"peerASN\": 120,\r\n          \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n          \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n          \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n          \"state\": \"Enabled\",\r\n          \"vlanId\": 220,\r\n          \"microsoftPeeringConfig\": {\r\n            \"advertisedPublicPrefixes\": [\r\n              \"123.1.0.0/24\"\r\n            ],\r\n            \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n            \"customerASN\": 23,\r\n            \"routingRegistryName\": \"ARIN\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"3632f430-018e-467b-bb07-8d7f15ac1708\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Premium_MeteredData\",\r\n    \"tier\": \"Premium\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e44839f8-69cf-47fd-9640-8bb409bbe8f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '3fb5be36-f8fd-4b5c-9240-5606d5719db7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084332Z:3fb5be36-f8fd-4b5c-9240-5606d5719db7',
  date: 'Tue, 03 May 2016 08:43:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a190bf95-3a06-4e40-995f-fb6c1d92ebc4\",\r\n    \"peerings\": [\r\n      {\r\n        \"name\": \"AzurePrivatePeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n        \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"peeringType\": \"AzurePrivatePeering\",\r\n          \"azureASN\": 12076,\r\n          \"peerASN\": 100,\r\n          \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n          \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n          \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n          \"state\": \"Enabled\",\r\n          \"vlanId\": 199\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AzurePublicPeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n        \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"peeringType\": \"AzurePublicPeering\",\r\n          \"azureASN\": 12076,\r\n          \"peerASN\": 110,\r\n          \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n          \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n          \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n          \"state\": \"Enabled\",\r\n          \"vlanId\": 209\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"MicrosoftPeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n        \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"peeringType\": \"MicrosoftPeering\",\r\n          \"azureASN\": 12076,\r\n          \"peerASN\": 120,\r\n          \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n          \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n          \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n          \"state\": \"Enabled\",\r\n          \"vlanId\": 220,\r\n          \"microsoftPeeringConfig\": {\r\n            \"advertisedPublicPrefixes\": [\r\n              \"123.1.0.0/24\"\r\n            ],\r\n            \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n            \"customerASN\": 23,\r\n            \"routingRegistryName\": \"ARIN\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"3632f430-018e-467b-bb07-8d7f15ac1708\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Premium_MeteredData\",\r\n    \"tier\": \"Premium\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e44839f8-69cf-47fd-9640-8bb409bbe8f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '3fb5be36-f8fd-4b5c-9240-5606d5719db7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084332Z:3fb5be36-f8fd-4b5c-9240-5606d5719db7',
  date: 'Tue, 03 May 2016 08:43:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 220,\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 23,\r\n      \"routingRegistryName\": \"ARIN\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '936',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd49baf74-8113-45d3-978a-5c547c219c2c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'aeb7e171-3e7b-4b38-9dc2-aded7bf457dd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084343Z:aeb7e171-3e7b-4b38-9dc2-aded7bf457dd',
  date: 'Tue, 03 May 2016 08:43:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"5eb00e58-1353-4bf5-b4e4-fc90da1251f5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 220,\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 23,\r\n      \"routingRegistryName\": \"ARIN\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '936',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd49baf74-8113-45d3-978a-5c547c219c2c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'aeb7e171-3e7b-4b38-9dc2-aded7bf457dd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084343Z:aeb7e171-3e7b-4b38-9dc2-aded7bf457dd',
  date: 'Tue, 03 May 2016 08:43:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"4da430f8-863c-415a-be64-28425cfa0709\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 219,\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 32,\r\n      \"routingRegistryName\": \"LACNIC\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '937',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0d5088c6-4a5e-48a4-937e-d5d4aeb303af',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/0d5088c6-4a5e-48a4-937e-d5d4aeb303af?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '10f25e68-70f3-4c2f-9c66-4a00b8f4e0fa',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084346Z:10f25e68-70f3-4c2f-9c66-4a00b8f4e0fa',
  date: 'Tue, 03 May 2016 08:43:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"4da430f8-863c-415a-be64-28425cfa0709\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 219,\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 32,\r\n      \"routingRegistryName\": \"LACNIC\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '937',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0d5088c6-4a5e-48a4-937e-d5d4aeb303af',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/0d5088c6-4a5e-48a4-937e-d5d4aeb303af?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '10f25e68-70f3-4c2f-9c66-4a00b8f4e0fa',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084346Z:10f25e68-70f3-4c2f-9c66-4a00b8f4e0fa',
  date: 'Tue, 03 May 2016 08:43:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/0d5088c6-4a5e-48a4-937e-d5d4aeb303af?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b1ba48c3-d976-4d29-95d7-0e5ebcb96884',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '75844e7f-b7f7-4dea-8eb5-2a4d1581cda2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084417Z:75844e7f-b7f7-4dea-8eb5-2a4d1581cda2',
  date: 'Tue, 03 May 2016 08:44:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/0d5088c6-4a5e-48a4-937e-d5d4aeb303af?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b1ba48c3-d976-4d29-95d7-0e5ebcb96884',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '75844e7f-b7f7-4dea-8eb5-2a4d1581cda2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084417Z:75844e7f-b7f7-4dea-8eb5-2a4d1581cda2',
  date: 'Tue, 03 May 2016 08:44:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/0d5088c6-4a5e-48a4-937e-d5d4aeb303af?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '68b025ec-82c0-44f0-bd87-e5df489d1e87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '1b90b98e-b93c-42be-8db2-a6631b2e0686',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084448Z:1b90b98e-b93c-42be-8db2-a6631b2e0686',
  date: 'Tue, 03 May 2016 08:44:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/0d5088c6-4a5e-48a4-937e-d5d4aeb303af?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '68b025ec-82c0-44f0-bd87-e5df489d1e87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '1b90b98e-b93c-42be-8db2-a6631b2e0686',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084448Z:1b90b98e-b93c-42be-8db2-a6631b2e0686',
  date: 'Tue, 03 May 2016 08:44:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"39f2c91b-bbc2-4d29-a663-1d8e157031b4\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 219,\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 32,\r\n      \"routingRegistryName\": \"LACNIC\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '938',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '32c95970-6c95-49bb-bfae-c27c260186cc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'cfde8303-0bc3-43c4-8466-a269ba8363d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084500Z:cfde8303-0bc3-43c4-8466-a269ba8363d1',
  date: 'Tue, 03 May 2016 08:44:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"39f2c91b-bbc2-4d29-a663-1d8e157031b4\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 219,\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 32,\r\n      \"routingRegistryName\": \"LACNIC\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '938',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '32c95970-6c95-49bb-bfae-c27c260186cc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'cfde8303-0bc3-43c4-8466-a269ba8363d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160503T084500Z:cfde8303-0bc3-43c4-8466-a269ba8363d1',
  date: 'Tue, 03 May 2016 08:44:59 GMT',
  connection: 'close' });
 return result; }]];