module.exports = {
    reportPortalClientConfig: {
        token: 'd7416733-3614-4773-abfc-1f90cea3ba51',
        endpoint: 'http://localhost:8080/api/v1',
        launch: 'Smoke test',
        project: 'lcqa8',
        mode: 'DEFAULT',
        debug: false,
        description: "Launch description text",
        attributes: [{key:"tag", value: "foo"}],
        headers: {"foo": "bar"} // optional headers for internal http client
    },
    reportSeleniumCommands: false, // add selenium commands to log
    seleniumCommandsLogLevel: 'debug', // log level for selenium commands
    autoAttachScreenshots: true, // automatically add screenshots
    screenshotsLogLevel: 'info', // log level for screenshots
    parseTagsFromTestTitle: false, // parse strings like `@foo` from titles and add to Report Portal
    cucumberNestedSteps: false, // report cucumber steps as Report Portal steps
    autoAttachCucumberFeatureToScenario: false, // requires cucumberNestedSteps to be true for use
};
