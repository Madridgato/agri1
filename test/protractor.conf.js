exports.config = {
    // The address of a running selenium server. If this is specified,
    // seleniumServerJar and seleniumPort will be ignored.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'https://portal.agriwebb.com/',

    specs: [
        './stories/*.js'
    ],

    framework: 'jasmine',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    allScriptsTimeout: 30000,

    
};
