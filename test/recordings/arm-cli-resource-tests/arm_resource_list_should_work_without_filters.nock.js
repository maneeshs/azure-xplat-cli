// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'd05f4e58-b80d-4ebd-a6d7-c9cac216cd39',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource2766' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'd0fabbcc-5130-4613-8ddd-654f5bcc1b84',
  'x-ms-correlation-request-id': 'd0fabbcc-5130-4613-8ddd-654f5bcc1b84',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T232640Z:d0fabbcc-5130-4613-8ddd-654f5bcc1b84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:39 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource2766' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'd0fabbcc-5130-4613-8ddd-654f5bcc1b84',
  'x-ms-correlation-request-id': 'd0fabbcc-5130-4613-8ddd-654f5bcc1b84',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T232640Z:d0fabbcc-5130-4613-8ddd-654f5bcc1b84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:39 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource2766\",\"name\":\"xTestResource2766\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '0abcbd5d-1746-4cc5-9a52-dc9c0bffcd97',
  'x-ms-correlation-request-id': '0abcbd5d-1746-4cc5-9a52-dc9c0bffcd97',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T232641Z:0abcbd5d-1746-4cc5-9a52-dc9c0bffcd97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource2766\",\"name\":\"xTestResource2766\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '0abcbd5d-1746-4cc5-9a52-dc9c0bffcd97',
  'x-ms-correlation-request-id': '0abcbd5d-1746-4cc5-9a52-dc9c0bffcd97',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T232641Z:0abcbd5d-1746-4cc5-9a52-dc9c0bffcd97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource2766\",\"name\":\"xTestResource2766\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '7fee2e95-826a-4395-b133-cde5061d91df',
  'x-ms-correlation-request-id': '7fee2e95-826a-4395-b133-cde5061d91df',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T232641Z:7fee2e95-826a-4395-b133-cde5061d91df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:41 GMT',
  connection: 'close',
  'content-length': '205' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource2766\",\"name\":\"xTestResource2766\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '7fee2e95-826a-4395-b133-cde5061d91df',
  'x-ms-correlation-request-id': '7fee2e95-826a-4395-b133-cde5061d91df',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T232641Z:7fee2e95-826a-4395-b133-cde5061d91df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:41 GMT',
  connection: 'close',
  'content-length': '205' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766/providers/Microsoft.Web/sites/xTestGrpRes3789?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource2766/providers/Microsoft.Web/sites/xTestGrpRes3789\",\"name\":\"xTestGrpRes3789\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3789\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3789.azurewebsites.net\"],\"webSpace\":\"xTestResource2766-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-039.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource2766-SouthCentralUSwebspace/sites/xTestGrpRes3789\",\"repositorySiteName\":\"xTestGrpRes3789\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3789.azurewebsites.net\",\"xtestgrpres3789.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3789.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3789.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:26:46.17\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3789\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.210.153.161,104.210.152.152,104.210.159.82,104.210.154.205\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-039\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource2766\",\"defaultHostName\":\"xtestgrpres3789.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2341',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '96637b1c-762f-4484-97ad-ccc5c2b110ff',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '19c6672b-3bfd-4098-adf6-50a97263b5ea',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T232652Z:19c6672b-3bfd-4098-adf6-50a97263b5ea',
  date: 'Tue, 30 Aug 2016 23:26:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766/providers/Microsoft.Web/sites/xTestGrpRes3789?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource2766/providers/Microsoft.Web/sites/xTestGrpRes3789\",\"name\":\"xTestGrpRes3789\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3789\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3789.azurewebsites.net\"],\"webSpace\":\"xTestResource2766-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-039.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource2766-SouthCentralUSwebspace/sites/xTestGrpRes3789\",\"repositorySiteName\":\"xTestGrpRes3789\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3789.azurewebsites.net\",\"xtestgrpres3789.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3789.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3789.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:26:46.17\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3789\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.210.153.161,104.210.152.152,104.210.159.82,104.210.154.205\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-039\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource2766\",\"defaultHostName\":\"xtestgrpres3789.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2341',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '96637b1c-762f-4484-97ad-ccc5c2b110ff',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '19c6672b-3bfd-4098-adf6-50a97263b5ea',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T232652Z:19c6672b-3bfd-4098-adf6-50a97263b5ea',
  date: 'Tue, 30 Aug 2016 23:26:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource2766/resources?api-version=2016-02-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-request-id': '28bc8365-a8fa-4a15-8c62-1da0beb2bdb4',
  'x-ms-correlation-request-id': '28bc8365-a8fa-4a15-8c62-1da0beb2bdb4',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232653Z:28bc8365-a8fa-4a15-8c62-1da0beb2bdb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:53 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource2766/resources?api-version=2016-02-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-request-id': '28bc8365-a8fa-4a15-8c62-1da0beb2bdb4',
  'x-ms-correlation-request-id': '28bc8365-a8fa-4a15-8c62-1da0beb2bdb4',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232653Z:28bc8365-a8fa-4a15-8c62-1da0beb2bdb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:53 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '74ae2588-3fd7-4e9b-b9ed-73ee4fa9a310',
  'x-ms-correlation-request-id': '74ae2588-3fd7-4e9b-b9ed-73ee4fa9a310',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232654Z:74ae2588-3fd7-4e9b-b9ed-73ee4fa9a310',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource2766?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '74ae2588-3fd7-4e9b-b9ed-73ee4fa9a310',
  'x-ms-correlation-request-id': '74ae2588-3fd7-4e9b-b9ed-73ee4fa9a310',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232654Z:74ae2588-3fd7-4e9b-b9ed-73ee4fa9a310',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:26:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': 'b3e04013-836a-4133-a4d4-10b070260771',
  'x-ms-correlation-request-id': 'b3e04013-836a-4133-a4d4-10b070260771',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232724Z:b3e04013-836a-4133-a4d4-10b070260771',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:27:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': 'b3e04013-836a-4133-a4d4-10b070260771',
  'x-ms-correlation-request-id': 'b3e04013-836a-4133-a4d4-10b070260771',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232724Z:b3e04013-836a-4133-a4d4-10b070260771',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:27:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'f4f6c7e7-f04b-4baa-b3c6-dedf9ae7868e',
  'x-ms-correlation-request-id': 'f4f6c7e7-f04b-4baa-b3c6-dedf9ae7868e',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232754Z:f4f6c7e7-f04b-4baa-b3c6-dedf9ae7868e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:27:54 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'f4f6c7e7-f04b-4baa-b3c6-dedf9ae7868e',
  'x-ms-correlation-request-id': 'f4f6c7e7-f04b-4baa-b3c6-dedf9ae7868e',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232754Z:f4f6c7e7-f04b-4baa-b3c6-dedf9ae7868e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:27:54 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '27984d12-43e2-48f0-b23f-47d6cef4c3dc',
  'x-ms-correlation-request-id': '27984d12-43e2-48f0-b23f-47d6cef4c3dc',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232825Z:27984d12-43e2-48f0-b23f-47d6cef4c3dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:28:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '27984d12-43e2-48f0-b23f-47d6cef4c3dc',
  'x-ms-correlation-request-id': '27984d12-43e2-48f0-b23f-47d6cef4c3dc',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232825Z:27984d12-43e2-48f0-b23f-47d6cef4c3dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:28:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-request-id': '84114362-bc39-432b-80a9-35b5de2a6c8d',
  'x-ms-correlation-request-id': '84114362-bc39-432b-80a9-35b5de2a6c8d',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232855Z:84114362-bc39-432b-80a9-35b5de2a6c8d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:28:54 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjc2Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-request-id': '84114362-bc39-432b-80a9-35b5de2a6c8d',
  'x-ms-correlation-request-id': '84114362-bc39-432b-80a9-35b5de2a6c8d',
  'x-ms-routing-request-id': 'WESTUS2:20160830T232855Z:84114362-bc39-432b-80a9-35b5de2a6c8d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:28:54 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource2766','xTestGrpRes3789'];};