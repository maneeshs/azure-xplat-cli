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

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var availablePrivateAccessServices = network.category('private-access')
    .description($('Commands to manage available private access services'));

  availablePrivateAccessServices.command('list [location]')
    .description($('List available private access services'))
    .usage('[options] <location>')
    .option('-l, --location <location>', $('location to list available private access services'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(location, options, _) {
      options.location = cli.interaction.promptIfNotGiven($('location : '), location, _);
      location = options.location;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var availablePrivateAccessService = null;
      var progress;
      try {
        if(typeof networkManagementClient.availablePrivateAccessServices.listAll != 'function') {
          progress = cli.interaction.progress($('Getting the available private access services'));
          availablePrivateAccessService = networkManagementClient.availablePrivateAccessServices.list(location,  _);
        } else {
          if(options.resourceGroup) {
            progress = cli.interaction.progress($('Getting the available private access services'));
            availablePrivateAccessService = networkManagementClient.availablePrivateAccessServices.list(location,  _);
          } else {
            progress = cli.interaction.progress($('Getting the available private access services'));
            availablePrivateAccessService = networkManagementClient.availablePrivateAccessServices.listAll(_);
          }
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(availablePrivateAccessService, function(availablePrivateAccessService) {
        if (availablePrivateAccessService.length === 0) {
          cli.output.warn($('No available private access services found'));
        } else {
          cli.output.table(availablePrivateAccessService, function (row, item) {
            row.cell($('Name'), item.name);
            row.cell($('Type'), item.type);
            row.cell($('Id'), item.id);
          });
        }
      });
    });
};