const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');
const RpService = require("wdio-reportportal-service");

exports.config = {
    hostname: '93.115.21.133',
    port: 4444,
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            'selenoid:options': {
                enableVNC: true,
                enableVideo: true,
            },
        }
    ],

    services: [[RpService, {}]],

    ...base,
    ...hooks
}
