// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"4fe46dc9-5b87-4d00-83dc-c51cca5459ff\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c5204fd6-800a-4ac7-8e86-3e18d35a26ac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"4fe46dc9-5b87-4d00-83dc-c51cca5459ff\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.31.255.250\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"internalDnsNameLabel\": \"internlDns\",\r\n      \"internalFqdn\": \"internlDns.mlosdmsivoyefloofpkjdteqdd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": true,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4fe46dc9-5b87-4d00-83dc-c51cca5459ff"',
  'x-ms-request-id': '131dfdab-8d6d-43f8-95a3-736907316194',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-correlation-request-id': '87e1ae4a-6fc3-4e81-a3a4-40227a48d6b6',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T120131Z:87e1ae4a-6fc3-4e81-a3a4-40227a48d6b6',
  date: 'Wed, 22 Jul 2015 12:01:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"4fe46dc9-5b87-4d00-83dc-c51cca5459ff\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c5204fd6-800a-4ac7-8e86-3e18d35a26ac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"4fe46dc9-5b87-4d00-83dc-c51cca5459ff\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.31.255.250\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"internalDnsNameLabel\": \"internlDns\",\r\n      \"internalFqdn\": \"internlDns.mlosdmsivoyefloofpkjdteqdd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": true,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4fe46dc9-5b87-4d00-83dc-c51cca5459ff"',
  'x-ms-request-id': '131dfdab-8d6d-43f8-95a3-736907316194',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-correlation-request-id': '87e1ae4a-6fc3-4e81-a3a4-40227a48d6b6',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T120131Z:87e1ae4a-6fc3-4e81-a3a4-40227a48d6b6',
  date: 'Wed, 22 Jul 2015 12:01:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"fd0ea424-5bc8-4076-a895-effd3359b89f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c5204fd6-800a-4ac7-8e86-3e18d35a26ac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"fd0ea424-5bc8-4076-a895-effd3359b89f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.31.254.254\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.mlosdmsivoyefloofpkjdteqdd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2188',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7a001e9a-7765-449c-9da6-7f4d85e52999',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/7a001e9a-7765-449c-9da6-7f4d85e52999?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '314528e5-c84a-407f-ad98-8f9a38eac190',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T120136Z:314528e5-c84a-407f-ad98-8f9a38eac190',
  date: 'Wed, 22 Jul 2015 12:01:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"fd0ea424-5bc8-4076-a895-effd3359b89f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c5204fd6-800a-4ac7-8e86-3e18d35a26ac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"fd0ea424-5bc8-4076-a895-effd3359b89f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.31.254.254\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.mlosdmsivoyefloofpkjdteqdd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2188',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7a001e9a-7765-449c-9da6-7f4d85e52999',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/7a001e9a-7765-449c-9da6-7f4d85e52999?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '314528e5-c84a-407f-ad98-8f9a38eac190',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T120136Z:314528e5-c84a-407f-ad98-8f9a38eac190',
  date: 'Wed, 22 Jul 2015 12:01:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/7a001e9a-7765-449c-9da6-7f4d85e52999?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9b265baa-5a8b-480e-b653-57301c11ebc0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '4c07f64a-0271-4769-84b1-197ad702badb',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T120139Z:4c07f64a-0271-4769-84b1-197ad702badb',
  date: 'Wed, 22 Jul 2015 12:01:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/7a001e9a-7765-449c-9da6-7f4d85e52999?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9b265baa-5a8b-480e-b653-57301c11ebc0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '4c07f64a-0271-4769-84b1-197ad702badb',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T120139Z:4c07f64a-0271-4769-84b1-197ad702badb',
  date: 'Wed, 22 Jul 2015 12:01:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"fd0ea424-5bc8-4076-a895-effd3359b89f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c5204fd6-800a-4ac7-8e86-3e18d35a26ac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"fd0ea424-5bc8-4076-a895-effd3359b89f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.31.254.254\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.mlosdmsivoyefloofpkjdteqdd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2188',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fd0ea424-5bc8-4076-a895-effd3359b89f"',
  'x-ms-request-id': '0d062baf-229a-4b4d-94ba-3c436857c915',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '9a5842c9-0d1c-43ae-8fda-0f74ba4edb8f',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T120141Z:9a5842c9-0d1c-43ae-8fda-0f74ba4edb8f',
  date: 'Wed, 22 Jul 2015 12:01:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"fd0ea424-5bc8-4076-a895-effd3359b89f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c5204fd6-800a-4ac7-8e86-3e18d35a26ac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"fd0ea424-5bc8-4076-a895-effd3359b89f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.31.254.254\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.mlosdmsivoyefloofpkjdteqdd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2188',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fd0ea424-5bc8-4076-a895-effd3359b89f"',
  'x-ms-request-id': '0d062baf-229a-4b4d-94ba-3c436857c915',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '9a5842c9-0d1c-43ae-8fda-0f74ba4edb8f',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T120141Z:9a5842c9-0d1c-43ae-8fda-0f74ba4edb8f',
  date: 'Wed, 22 Jul 2015 12:01:41 GMT',
  connection: 'close' });
 return result; }]];