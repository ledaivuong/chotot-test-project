exports.config = {
    port: 9515, // default
    path: '/',
    services: ['chromedriver'],
    chromeDriverArgs: ['--port=9515'], // default
    reporters: ['spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: './allure-report/'
        }
    },
    runner: 'local',
    specs: [
        './test_script/Login_1_2.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    logLevel: 'error',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://www.chotot.com',
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register']
    }

};
