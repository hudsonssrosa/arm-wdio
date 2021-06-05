#!/bin/bash
#chmod +x setup_env.py

# Install WebdriverIO CLI - Dev dependencies

if [ $# -eq 0 ] ; then
    echo "All the tests will be executed!"
    npx wdio run ./wdio.conf.js
else
    spec = ${1}
    normalisedSpecStr = echo ${spec/.js/}
    echo "The tests in ${1} will be executed!"
    npx wdio run ./wdio.conf.js --spec ${normalisedSpecStr}.js
fi