const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');
const RpService = require("wdio-reportportal-service");

exports.config = {
    runner: 'local',

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--window-size=1280,720', '--headless', '--disable-gpu']
            },
        }
    ],

    services: ['devtools', [RpService, {}]],

    ...base,
    ...hooks
}
