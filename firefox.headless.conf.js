const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');
const RpService = require("wdio-reportportal-service");

exports.config = {
    runner: 'local',

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless']
            },
        }
    ],

    services: ['geckodriver', [RpService, {}]],

    ...base,
    ...hooks
}
