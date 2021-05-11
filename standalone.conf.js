const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');
const RpService = require("wdio-reportportal-service");

exports.config = {
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox'
        }
    ],

    services: [[RpService, {}]],

    ...base,
    ...hooks
}
