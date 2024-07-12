# Project: Test Automation

This project automates testing for the Sauce Demo login form using WebDriverIO, Mocha, and Chrome/Edge browsers.

## Prerequisites

- Node.js
- log4js for logging
- WebDriverIO
- Chrome and Edge browsers
- Mocha test framework

## Test Scenarios

- **UC-1:** Test Login form with empty credentials
- **UC-2:** Test Login form with credentials by passing Username
- **UC-3:** Test Login form with credentials by passing Username & Password

## Parallel Execution

Tests are executed in parallel using WebDriverIO's configuration in `wdio.conf.js`.

## Additional Notes

- Ensure Chrome and Edge browsers are installed and accessible.
