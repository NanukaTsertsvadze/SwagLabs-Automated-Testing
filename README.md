# Project: Test Automation

This project automates testing for the Sauce Demo login form using WebDriverIO, Mocha, and Chrome/Edge browsers.

## Prerequisites

- Node.js
- log4js for logging
- WebDriverIO
- Chrome and Edge browsers
- Mocha test framework

## Installation

1. Clone the repository to your local machine:
   
   ```bash
   git clone git@github.com:NanukaTsertsvadze/SwagLabs-Automated-Testing.git
2. Navigate to the project directory.
3. Initialize the project with npm by running the following command:

   ```bash
   npm init -y
4. Set up WebDriverIO using the following command:

   ```bash
   npm init wdio

5. Install Mocha and log4js by running:

     ```bash
      npm install mocha log4js

## Running Tests

Before running the tests, ensure your `package.json` includes the necessary scripts for WebDriverIO. If not already set up, you may need to configure it as follows:

1. Open `package.json` in  project.
2. Ensure the `scripts` section includes the following:
   ```json
   {
     "scripts": {
       "wdio:test": "wdio wdio.conf.js",
       "test:chrome": "wdio wdio.conf.js --capabilities='{\"browserName\":\"chrome\"}'",
       "test:edge": "wdio wdio.conf.js --capabilities='{\"browserName\":\"MicrosoftEdge\"}'"
     }
   }

To run the tests on Chrome and Microsoft Edge together, use the following command:
      

        npm run wdio:test
To run the tests on Microsoft Edge:

        npm run test:edge
        
To run the tests on Google Chrome:

        npm run test:chrome

## Test Scenarios

- **UC-1:** Test Login form with empty credentials
- **UC-2:** Test Login form with credentials by passing Username
- **UC-3:** Test Login form with credentials by passing Username & Password

## Parallel Execution

Tests are executed in parallel using WebDriverIO's configuration in `wdio.conf.js`.

## Additional Notes

Ensure Chrome and Edge browsers are installed and accessible.
