Extract the zip file received from github or email.

Ensure that node.js, protractor and selenium are already installed. If they are not yet installed
Install  node.js on your machine - v6.11 or later should work

Then install protractor using npm
npm -g install protractor
webdriver-manager update

start selenium first:
webdriver-manager start

To run the test:
in the directory where the source files are in run :
npm test

If that doesn't work , run protractor directly
cd test
protractor test/protractor.conf.js