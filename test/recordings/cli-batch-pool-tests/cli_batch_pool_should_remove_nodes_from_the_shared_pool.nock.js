// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  .get('/pools/xplatTestPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3426989531_1-20160520t052823z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-3426989531_1-20160520t052823z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-05-20T05:31:28.3987593Z\",\"lastBootTime\":\"2016-05-20T05:31:26.984701Z\",\"allocationTime\":\"2016-05-20T05:28:23.7264525Z\",\"ipAddress\":\"100.83.80.56\",\"affinityId\":\"TVM:tvm-3426989531_1-20160520t052823z\",\"vmSize\":\"small\",\"totalTasksRun\":3,\"totalTasksSucceeded\":1,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-05-20T05:31:28.2457495Z\",\"endTime\":\"2016-05-20T05:31:28.3987593Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3426989531_2-20160520t052823z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-3426989531_2-20160520t052823z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-05-20T05:31:30.2132762Z\",\"lastBootTime\":\"2016-05-20T05:31:28.8262596Z\",\"allocationTime\":\"2016-05-20T05:28:23.7264525Z\",\"ipAddress\":\"100.83.118.32\",\"affinityId\":\"TVM:tvm-3426989531_2-20160520t052823z\",\"vmSize\":\"small\",\"totalTasksRun\":2,\"totalTasksSucceeded\":2,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-05-20T05:31:30.0182717Z\",\"endTime\":\"2016-05-20T05:31:30.2132762Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3426989531_3-20160520t052823z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-3426989531_3-20160520t052823z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-05-20T05:31:38.7874094Z\",\"lastBootTime\":\"2016-05-20T05:31:37.5673877Z\",\"allocationTime\":\"2016-05-20T05:28:23.7264525Z\",\"ipAddress\":\"100.83.92.46\",\"affinityId\":\"TVM:tvm-3426989531_3-20160520t052823z\",\"vmSize\":\"small\",\"totalTasksRun\":2,\"totalTasksSucceeded\":2,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-05-20T05:31:38.649408Z\",\"endTime\":\"2016-05-20T05:31:38.7874094Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd17c055c-b4e9-42ee-a503-aca2e4c0ac21',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'a74fde9f-e3cf-409a-8921-fb8ef6115b3c',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3426989531_1-20160520t052823z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-3426989531_1-20160520t052823z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-05-20T05:31:28.3987593Z\",\"lastBootTime\":\"2016-05-20T05:31:26.984701Z\",\"allocationTime\":\"2016-05-20T05:28:23.7264525Z\",\"ipAddress\":\"100.83.80.56\",\"affinityId\":\"TVM:tvm-3426989531_1-20160520t052823z\",\"vmSize\":\"small\",\"totalTasksRun\":3,\"totalTasksSucceeded\":1,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-05-20T05:31:28.2457495Z\",\"endTime\":\"2016-05-20T05:31:28.3987593Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3426989531_2-20160520t052823z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-3426989531_2-20160520t052823z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-05-20T05:31:30.2132762Z\",\"lastBootTime\":\"2016-05-20T05:31:28.8262596Z\",\"allocationTime\":\"2016-05-20T05:28:23.7264525Z\",\"ipAddress\":\"100.83.118.32\",\"affinityId\":\"TVM:tvm-3426989531_2-20160520t052823z\",\"vmSize\":\"small\",\"totalTasksRun\":2,\"totalTasksSucceeded\":2,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-05-20T05:31:30.0182717Z\",\"endTime\":\"2016-05-20T05:31:30.2132762Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3426989531_3-20160520t052823z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-3426989531_3-20160520t052823z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-05-20T05:31:38.7874094Z\",\"lastBootTime\":\"2016-05-20T05:31:37.5673877Z\",\"allocationTime\":\"2016-05-20T05:28:23.7264525Z\",\"ipAddress\":\"100.83.92.46\",\"affinityId\":\"TVM:tvm-3426989531_3-20160520t052823z\",\"vmSize\":\"small\",\"totalTasksRun\":2,\"totalTasksSucceeded\":2,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-05-20T05:31:38.649408Z\",\"endTime\":\"2016-05-20T05:31:38.7874094Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd17c055c-b4e9-42ee-a503-aca2e4c0ac21',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'a74fde9f-e3cf-409a-8921-fb8ef6115b3c',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestPool/removenodes?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 20 May 2016 05:36:42 GMT',
  etag: '0x8D38070B98B9B9A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2fd72dbb-3b44-4387-a449-4e4a1a7c62b4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '52a2ba70-4429-4590-b588-a9fa44df4e12',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestPool/removenodes',
  date: 'Fri, 20 May 2016 05:36:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestPool/removenodes?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 20 May 2016 05:36:42 GMT',
  etag: '0x8D38070B98B9B9A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2fd72dbb-3b44-4387-a449-4e4a1a7c62b4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '52a2ba70-4429-4590-b588-a9fa44df4e12',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestPool/removenodes',
  date: 'Fri, 20 May 2016 05:36:43 GMT',
  connection: 'close' });
 return result; }]];