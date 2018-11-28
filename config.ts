import { Config } from 'protractor';
import * as JasmineConsoleReporter from 'jasmine-console-reporter';

export let config: Config = {
    baseUrl: 'http://todomvc.com/examples/angularjs/#/',
    capabilities: {
        'browserName': 'firefox',
    },
    framework: 'jasmine2',
    specs: ['specs/**/example-spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: () => {
        jasmine.getEnv().addReporter(new JasmineConsoleReporter({
            colors: 1,
            cleanStack: 1,
            verbosity: 4,
            listStyle: 'indent',
            activity: false
        }));
    }
};