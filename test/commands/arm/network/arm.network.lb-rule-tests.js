﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-lb-rule-tests',
  groupName = 'xplat-test-rule',
  location;
var index = 0;

var loadBalancerName;
var loadBalancerId;
var publicIPAddressName;
var publicIPAddressId;
var frontendIPConfigurationName;
var frontendIPConfigurationId;
var backendAddressPoolName;
var backendAddressPoolId;
var probeName;
var probeId;

var loadBalancingRules = {
  protocol: 'Udp',
  protocolNew: 'Tcp',
  loadDistribution: 'Default',
  loadDistributionNew: 'SourceIP',
  frontendPort: '1024',
  frontendPortNew: '2048',
  backendPort: '4096',
  backendPortNew: '3072',
  idleTimeoutInMinutes: '5',
  idleTimeoutInMinutesNew: '29',
  enableFloatingIP: 'true',
  enableFloatingIPNew: 'false',

  name: 'loadBalancingRuleName'
}
loadBalancingRules.loadBalancerName = 'loadBalancerName';
loadBalancingRules.publicIPAddressName = 'publicIPAddressName';
loadBalancingRules.frontendIPConfigurationName = 'frontendIPConfigurationName';
loadBalancingRules.backendAddressPoolName = 'backendAddressPoolName';
loadBalancingRules.probeName = 'probeName';



var publicIPAddress = {
  location: 'westus',
};
var backendAddressPool = {

};
var loadBalancer = {
  location: 'westus',
};
var frontendIPConfiguration = {

};
var probe = {

};

var loadBalancingRulesDefault = {

  protocol: 'TCP',
  loadDistribution: 'Default',
  frontendPort: '80',
  backendPort: '80',
  idleTimeoutInMinutes: '4',
  enableFloatingIP: 'false',
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  probeName: 'probeName',
  name: 'loadBalancingRulesDefaultName',
  group: groupName
};

var protocolOutOfRange = {
  protocol: 'TcpUdp',
  loadBalancerName: 'loadBalancerName',
  name: 'ProtocolOutOfRangeName',
  group: groupName
};
var frontendPortUnderAllowedValue = {
  frontendPort: '0',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortUnderAllowedValueName',
  group: groupName
};
var frontendPortOverAllowedValue = {
  frontendPort: '65535',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortOverAllowedValueName',
  group: groupName
};
var backendPortOutOfRange = {
  backendPort: '65536',
  loadBalancerName: 'loadBalancerName',
  name: 'BackendPortOutOfRangeName',
  group: groupName
};
var loadDistributionOutOfRange = {
  loadDistribution: 'SomeRandomValue',
  loadBalancerName: 'loadBalancerName',
  name: 'LoadDistributionOutOfRangeName',
  group: groupName
};
var idleTimeoutInMinutesOverAllowedValue = {
  idleTimeoutInMinutes: '31',
  loadBalancerName: 'loadBalancerName',
  name: 'IdleTimeoutInMinutesOverAllowedValueName',
  group: groupName
};
var idleTimeoutInMinutesUnderAllowedValue = {
  idleTimeoutInMinutes: '3',
  loadBalancerName: 'loadBalancerName',
  name: 'IdleTimeoutInMinutesUnderAllowedValueName',
  group: groupName
};


var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = loadBalancingRules.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        loadBalancingRules.location = location;
        loadBalancingRules.group = groupName;
        loadBalancingRules.name = suite.isMocked ? loadBalancingRules.name : suite.generateId(loadBalancingRules.name, null);
        if(!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
          var cmd = 'network lb create -g {1} -n loadBalancerName --location {location} --json'.formatArgs(loadBalancer, groupName);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            protocolOutOfRange.loadBalancerId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.loadBalancerId, null);
            frontendPortUnderAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(frontendPortUnderAllowedValue.loadBalancerId, null);
            frontendPortOverAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(frontendPortOverAllowedValue.loadBalancerId, null);
            backendPortOutOfRange.loadBalancerId = suite.isMocked ? output.id : suite.generateId(backendPortOutOfRange.loadBalancerId, null);
            loadDistributionOutOfRange.loadBalancerId = suite.isMocked ? output.id : suite.generateId(loadDistributionOutOfRange.loadBalancerId, null);
            idleTimeoutInMinutesOverAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesOverAllowedValue.loadBalancerId, null);
            idleTimeoutInMinutesUnderAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.loadBalancerId, null);
            var cmd = 'network public-ip create -g {1} -n publicIPAddressName --location {location} --json'.formatArgs(publicIPAddress, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              protocolOutOfRange.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.publicIPAddressId, null);
              frontendPortUnderAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(frontendPortUnderAllowedValue.publicIPAddressId, null);
              frontendPortOverAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(frontendPortOverAllowedValue.publicIPAddressId, null);
              backendPortOutOfRange.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(backendPortOutOfRange.publicIPAddressId, null);
              loadDistributionOutOfRange.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(loadDistributionOutOfRange.publicIPAddressId, null);
              idleTimeoutInMinutesOverAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesOverAllowedValue.publicIPAddressId, null);
              idleTimeoutInMinutesUnderAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.publicIPAddressId, null);
              var cmd = 'network lb frontend-ip create -g {1} -n frontendIPConfigurationName  --lb-name loadBalancerName --public-ip-name publicIPAddressName --json'.formatArgs(frontendIPConfiguration, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                protocolOutOfRange.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.frontendIPConfigurationId, null);
                frontendPortUnderAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(frontendPortUnderAllowedValue.frontendIPConfigurationId, null);
                frontendPortOverAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(frontendPortOverAllowedValue.frontendIPConfigurationId, null);
                backendPortOutOfRange.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(backendPortOutOfRange.frontendIPConfigurationId, null);
                loadDistributionOutOfRange.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(loadDistributionOutOfRange.frontendIPConfigurationId, null);
                idleTimeoutInMinutesOverAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesOverAllowedValue.frontendIPConfigurationId, null);
                idleTimeoutInMinutesUnderAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.frontendIPConfigurationId, null);
                var cmd = 'network lb address-pool create -g {1} -n backendAddressPoolName  --lb-name loadBalancerName --json'.formatArgs(backendAddressPool, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  protocolOutOfRange.backendAddressPoolId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.backendAddressPoolId, null);
                  frontendPortUnderAllowedValue.backendAddressPoolId = suite.isMocked ? output.id : suite.generateId(frontendPortUnderAllowedValue.backendAddressPoolId, null);
                  frontendPortOverAllowedValue.backendAddressPoolId = suite.isMocked ? output.id : suite.generateId(frontendPortOverAllowedValue.backendAddressPoolId, null);
                  backendPortOutOfRange.backendAddressPoolId = suite.isMocked ? output.id : suite.generateId(backendPortOutOfRange.backendAddressPoolId, null);
                  loadDistributionOutOfRange.backendAddressPoolId = suite.isMocked ? output.id : suite.generateId(loadDistributionOutOfRange.backendAddressPoolId, null);
                  idleTimeoutInMinutesOverAllowedValue.backendAddressPoolId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesOverAllowedValue.backendAddressPoolId, null);
                  idleTimeoutInMinutesUnderAllowedValue.backendAddressPoolId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.backendAddressPoolId, null);
                  var cmd = 'network lb probe create -g {1} -n probeName  --lb-name loadBalancerName --json'.formatArgs(probe, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    result.exitStatus.should.equal(0);
                    var output = JSON.parse(result.text);
                    protocolOutOfRange.probeId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.probeId, null);
                    frontendPortUnderAllowedValue.probeId = suite.isMocked ? output.id : suite.generateId(frontendPortUnderAllowedValue.probeId, null);
                    frontendPortOverAllowedValue.probeId = suite.isMocked ? output.id : suite.generateId(frontendPortOverAllowedValue.probeId, null);
                    backendPortOutOfRange.probeId = suite.isMocked ? output.id : suite.generateId(backendPortOutOfRange.probeId, null);
                    loadDistributionOutOfRange.probeId = suite.isMocked ? output.id : suite.generateId(loadDistributionOutOfRange.probeId, null);
                    idleTimeoutInMinutesOverAllowedValue.probeId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesOverAllowedValue.probeId, null);
                    idleTimeoutInMinutesUnderAllowedValue.probeId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.probeId, null);
                      done();
                    });
                  });
                });
              });
            });
        });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          protocolOutOfRange.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', protocolOutOfRange.loadBalancerName) : suite.generateId(protocolOutOfRange.loadBalancerId, null)
          frontendPortUnderAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', frontendPortUnderAllowedValue.loadBalancerName) : suite.generateId(frontendPortUnderAllowedValue.loadBalancerId, null)
          frontendPortOverAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', frontendPortOverAllowedValue.loadBalancerName) : suite.generateId(frontendPortOverAllowedValue.loadBalancerId, null)
          backendPortOutOfRange.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', backendPortOutOfRange.loadBalancerName) : suite.generateId(backendPortOutOfRange.loadBalancerId, null)
          loadDistributionOutOfRange.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', loadDistributionOutOfRange.loadBalancerName) : suite.generateId(loadDistributionOutOfRange.loadBalancerId, null)
          idleTimeoutInMinutesOverAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', idleTimeoutInMinutesOverAllowedValue.loadBalancerName) : suite.generateId(idleTimeoutInMinutesOverAllowedValue.loadBalancerId, null)
          idleTimeoutInMinutesUnderAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', idleTimeoutInMinutesUnderAllowedValue.loadBalancerName) : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.loadBalancerId, null)
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('load balancing rules', function () {
      this.timeout(hour);
      it('create should create load balancing rules', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --protocol {protocol} --load-distribution {loadDistribution} --frontend-port {frontendPort} --backend-port {backendPort} --idle-timeout {idleTimeoutInMinutes} --enable-floating-ip {enableFloatingIP} --lb-name {loadBalancerName}  --frontend-ip-name {frontendIPConfigurationName} --backend-address-pool-name {backendAddressPoolName} --probe-name {probeName} --json'.formatArgs(loadBalancingRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
          output.name.should.equal(loadBalancingRules.name);
          output.protocol.toLowerCase().should.equal(loadBalancingRules.protocol.toLowerCase());
          output.loadDistribution.toLowerCase().should.equal(loadBalancingRules.loadDistribution.toLowerCase());
          output.frontendPort.should.equal(parseInt(loadBalancingRules.frontendPort, 10));
          output.backendPort.should.equal(parseInt(loadBalancingRules.backendPort, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(loadBalancingRules.idleTimeoutInMinutes, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(loadBalancingRules.enableFloatingIP));
          done();
        });
      });
      it('show should display load balancing rules details', function (done) {
        var cmd = 'network lb rule show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.name.should.equal(loadBalancingRules.name);
          output.protocol.toLowerCase().should.equal(loadBalancingRules.protocol.toLowerCase());
          output.loadDistribution.toLowerCase().should.equal(loadBalancingRules.loadDistribution.toLowerCase());
          output.frontendPort.should.equal(parseInt(loadBalancingRules.frontendPort, 10));
          output.backendPort.should.equal(parseInt(loadBalancingRules.backendPort, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(loadBalancingRules.idleTimeoutInMinutes, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(loadBalancingRules.enableFloatingIP));
          done();
        });
      });
      it('set should update load balancing rules', function (done) {
        var cmd = 'network lb rule set -g {group} -n {name} --protocol {protocolNew} --load-distribution {loadDistributionNew} --frontend-port {frontendPortNew} --backend-port {backendPortNew} --idle-timeout {idleTimeoutInMinutesNew} --enable-floating-ip {enableFloatingIPNew} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
          output.name.should.equal(loadBalancingRules.name);
          output.protocol.toLowerCase().should.equal(loadBalancingRules.protocolNew.toLowerCase());
          output.loadDistribution.toLowerCase().should.equal(loadBalancingRules.loadDistributionNew.toLowerCase());
          output.frontendPort.should.equal(parseInt(loadBalancingRules.frontendPortNew, 10));
          output.backendPort.should.equal(parseInt(loadBalancingRules.backendPortNew, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(loadBalancingRules.idleTimeoutInMinutesNew, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(loadBalancingRules.enableFloatingIPNew));
          done();
        });
      });
      it('list should display all load balancing rules in resource group', function (done) {
        var cmd = 'network lb rule list -g {group} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === loadBalancingRules.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete load balancing rules', function (done) {
        var cmd = 'network lb rule delete -g {group} -n {name} --quiet --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network lb rule show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });
      it('create with defaults should create load balancing rules with default values', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name}  --lb-name {loadBalancerName}  --json'.formatArgs(loadBalancingRulesDefault);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text); 
          output.name.should.equal(loadBalancingRulesDefault.name);
          output.protocol.toLowerCase().should.equal(loadBalancingRulesDefault.protocol.toLowerCase());;
          output.loadDistribution.toLowerCase().should.equal(loadBalancingRulesDefault.loadDistribution.toLowerCase());;
          output.frontendPort.should.equal(parseInt(loadBalancingRulesDefault.frontendPort, 10));;
          output.backendPort.should.equal(parseInt(loadBalancingRulesDefault.backendPort, 10));;
          output.idleTimeoutInMinutes.should.equal(parseInt(loadBalancingRulesDefault.idleTimeoutInMinutes, 10));;
          output.enableFloatingIP.should.equal(utils.parseBool(loadBalancingRulesDefault.enableFloatingIP));
          var cmd = 'network lb rule delete -g {group} -n {name} --quiet --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRulesDefault);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });

      it('create should fail for protocol out of range', function (done) {
        var cmd = ('network lb rule create -g {group} -n {name} --protocol {protocol} --lb-name {loadBalancerName}  --json').formatArgs(protocolOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port under allowed value', function (done) {
        var cmd = ('network lb rule create -g {group} -n {name} --frontend-port {frontendPort} --lb-name {loadBalancerName}  --json').formatArgs(frontendPortUnderAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port over allowed value', function (done) {
        var cmd = ('network lb rule create -g {group} -n {name} --frontend-port {frontendPort} --lb-name {loadBalancerName}  --json').formatArgs(frontendPortOverAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for backend port out of range', function (done) {
        var cmd = ('network lb rule create -g {group} -n {name} --backend-port {backendPort} --lb-name {loadBalancerName}  --json').formatArgs(backendPortOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for load distribution out of range', function (done) {
        var cmd = ('network lb rule create -g {group} -n {name} --load-distribution {loadDistribution} --lb-name {loadBalancerName}  --json').formatArgs(loadDistributionOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout in minutes over allowed value', function (done) {
        var cmd = ('network lb rule create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --lb-name {loadBalancerName}  --json').formatArgs(idleTimeoutInMinutesOverAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout in minutes under allowed value', function (done) {
        var cmd = ('network lb rule create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --lb-name {loadBalancerName}  --json').formatArgs(idleTimeoutInMinutesUnderAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});
