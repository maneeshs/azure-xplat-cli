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

var fs = require('fs');
var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var applicationGateways = network.category('application-gateway')
    .description($('Commands to manage application gateways'));
  var sslCertificates = applicationGateways.category('ssl-cert')
    .description($('Commands to manage ssl certificates'));

  sslCertificates.command('create [resource-group] [gateway-name] [name]')
    .description($('Create a ssl certificates'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the ssl certificate'))
    .option('-p, --cert-password [cert-password]', $('password for the pfx file specified in' +
      '\n     data. Only applicable in PUT request'))
    .option('-f, --cert-file [cert-file]', $('sets ssl certificates name'))
    .option('--nowait', $('do not wait for the operation to complete. Returns as soon as the intial request is received by the server'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var index = 0;
      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      if(utils.findFirstCaseIgnore(applicationGateway.sslCertificates, {name: name})) {
        throw new Error(util.format($('ssl certificates with name "%s" already exists in the "%s"'), name, gatewayName));
      }

      var parameters = {};
      if(!parameters.sslCertificates) {
        parameters.sslCertificates = [];
      }
      if(!parameters.sslCertificates[index]) {
        parameters.sslCertificates[index] = {};
      }
      if(options.certPassword) {
        parameters.sslCertificates[index].password = options.certPassword;
      }

      if(options.certFile) {
        try {
          var data = fs.readFileSync(options.certFile);
          parameters.sslCertificates[index].data = data.toString('base64');
        } catch(err) {
          throw new Error('Error in reading the provided file. Make sure that the file path is correct and it has correct content.\n' +
          util.inspect(err, {depth: null}));
        }
      }

      parameters.sslCertificates[index].name = name;
      applicationGateway.sslCertificates.push(parameters.sslCertificates[index]);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating ssl certificates in "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationGateway, generatorUtils.traverse);
    });

  sslCertificates.command('set [resource-group] [gateway-name] [name]')
    .description($('Update a ssl certificates'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the ssl certificate'))
    .option('-p, --cert-password [cert-password]', $('password for the pfx file specified in' +
      '\n     data. Only applicable in PUT request'))
    .option('-f, --cert-file [cert-file]', $('sets ssl certificates name'))
    .option('--nowait', $('do not wait for the operation to complete. Returns as soon as the intial request is received by the server'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var sslCertificate = utils.findFirstCaseIgnore(applicationGateway.sslCertificates, {name: name});
      var index = utils.indexOfCaseIgnore(applicationGateway.sslCertificates, {name: name});
      if(!sslCertificate) {
        throw new Error(util.format($('ssl certificates with name "%s" not found in the "%s"'), name, gatewayName));
      }

      var parameters = applicationGateway;
      if(!parameters.sslCertificates) {
        parameters.sslCertificates = [];
      }
      if(!parameters.sslCertificates[index]) {
        parameters.sslCertificates[index] = {};
      }
      if(options.certPassword) {
        parameters.sslCertificates[index].password = options.certPassword;
      }

      if(options.certFile) {
        try {
          var data = fs.readFileSync(options.certFile);
          parameters.sslCertificates[index].data = data.toString('base64');
        } catch(err) {
          throw new Error('Error in reading the provided file. Make sure that the file path is correct and it has correct content.\n' +
          util.inspect(err, {depth: null}));
        }
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating ssl certificates in "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(applicationGateway, generatorUtils.traverse);
    });

  sslCertificates.command('delete [resource-group] [gateway-name] [name]')
    .description($('Delete a ssl certificates'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the ssl certificate'))
    .option('--nowait', $('do not wait for the operation to complete. Returns as soon as the intial request is received by the server'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(applicationGateway.sslCertificates, {name: name});
      if (index === -1) {
        throw new Error(util.format($('ssl certificates "%s" not found in the gatewayName "%s"'), name, applicationGateway.name));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete ssl certificates with name "%s" from "%s"? [y/n] '), name, gatewayName), _)) {
        return;
      }

      applicationGateway.sslCertificates.splice(index, 1);
      progress = cli.interaction.progress('Deleting ssl certificates');
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationGateway, generatorUtils.traverse);
    });

  sslCertificates.command('show [resource-group] [gateway-name] [name]')
    .description($('Show a ssl certificates'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the ssl certificate'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var sslCertificate = utils.findFirstCaseIgnore(applicationGateway.sslCertificates, {name: name});
      if(!sslCertificate) {
        cli.output.warn(util.format($('ssl certificates with name "%s" not found in the gatewayName "%s"'), name, applicationGateway.name));
      }

      cli.interaction.formatOutput(sslCertificate, generatorUtils.traverse);
    });

  sslCertificates.command('list [resource-group] [gateway-name]')
    .description($('List ssl certificates'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway = null;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if(!applicationGateway) {
        throw new Error(util.format($('application gateways with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var items = applicationGateway.sslCertificates;
      cli.interaction.formatOutput(items, function(items) {
        if (items.length === 0) {
          cli.output.warn($('No ssl certificates found'));
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
