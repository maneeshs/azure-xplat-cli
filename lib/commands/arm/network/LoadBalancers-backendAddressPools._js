/**
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

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var loadBalancers = network.category('lb')
    .description($('Commands to manage load balancers'));
  var backendAddressPools = loadBalancers.category('address-pool')
    .description($('Commands to manage backend address pools'));

  backendAddressPools.command('create [resource-group] [lb-name] [name]')
    .description($('Create a backend address pools'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the backend address pool'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var index = 0;
      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      if(utils.findFirstCaseIgnore(loadBalancer.backendAddressPools, {name: name})) {
        throw new Error(util.format($('backend address pools with name "%s" already exists in the "%s"'), name, lbName));
      }

      var parameters = {};

      if(!parameters.backendAddressPools) {
        parameters.backendAddressPools = [];
      }
      if(!parameters.backendAddressPools[index]) {
        parameters.backendAddressPools[index] = {};
      }

      parameters.backendAddressPools[index].name = name;
      loadBalancer.backendAddressPools.push(parameters.backendAddressPools[index]);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating backend address pools in "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(loadBalancer.backendAddressPools[generatorUtils.findIndexByKeyValue(loadBalancer.backendAddressPools, 'name', name)], generatorUtils.traverse);
    });

  backendAddressPools.command('delete [resource-group] [lb-name] [name]')
    .description($('Delete a backend address pools'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the backend address pool'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(loadBalancer.backendAddressPools, {name: name});
      if (index === -1) {
        throw new Error(util.format($('backend address pools "%s" not found in the lbName "%s"'), name, loadBalancer.name));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete backend address pools with name "%s" from "%s"? [y/n] '), name, lbName), _)) {
        return;
      }

      loadBalancer.backendAddressPools.splice(index, 1);
      progress = cli.interaction.progress('Deleting backend address pools');
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }
    });

  backendAddressPools.command('show [resource-group] [lb-name] [name]')
    .description($('Show a backend address pools'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the backend address pool'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var backendAddressPool = utils.findFirstCaseIgnore(loadBalancer.backendAddressPools, {name: name});
      if(!backendAddressPool) {
        cli.output.warn(util.format($('backend address pools with name "%s" not found in the lbName "%s"'), name, loadBalancer.name));
      }

      cli.interaction.formatOutput(backendAddressPool, generatorUtils.traverse);
    });

  backendAddressPools.command('list [resource-group] [lb-name]')
    .description($('List backend address pools'))
    .usage('[options] <resource-group> <lb-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer = null;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if(!loadBalancer) {
        throw new Error(util.format($('load balancers with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var items = loadBalancer.backendAddressPools;
      cli.interaction.formatOutput(items, function(items) {
        if (items.length === 0) {
          cli.output.warn($('No backend address pools found'));
        } else {
          cli.output.table(items, function (row, item) {
            row.cell($('Name'), item.name);
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });
};
