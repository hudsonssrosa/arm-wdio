#!/bin/bash
#chmod +x setup_env.py

# Install WebdriverIO CLI - Dev dependencies
npm init -y
npm install -g npm
npm install @wdio/cli
npm i --save-dev @wdio/cli
    # If permission is denied. Try:
    # npm i --save-dev @wdio/cli@<Version Number>


# WDIO Configuration
    # @wdio/local-runner
    # @wdio/mocha-framework
    # @wdio/spec-reporter
    # @wdio-chromedriver-service
    # @wdio/sync – chromedriver
npx wdio config -y
./node_modules/.bin/wdio config -y

# Install Allure Dependencies
npm install @wdio/allure-reporter --save-dev --force
npm install -g allure-commandline --save-dev

# Run the Example
npx wdio run wdio.conf.js