#!/bin/bash
#chmod +x setup_env.py

# At the first time, ensure that you have installed everything by running command:  
#    sh "./install_wdio_from_ground_up.sh"

# Starting NPM
npm i

# Install WebdriverIO CLI - Dev dependencies
npm install @wdio/allure-reporter --save-dev --force
npm install -g allure-commandline --save-dev