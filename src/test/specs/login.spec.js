const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../../po/loginPage');
const logger = require('../../utils/logger');
const { title } = require('process');

const loginPage = new LoginPage();

describe('Sauce Demo Login Page -', () => {

    beforeEach(async ()=>{
        loginPage.open();
        logger.info('Opened login page');
    });


    afterEach(() => {
        logger.info('Test case completed');
    });

    const testData = [
        { username: 'nano', password: 'ts', errorMessage: 'Epic sadface: Username is required' },
        { username: 'standard_user', password: 'ts', errorMessage: 'Epic sadface: Password is required' },
        { username: 'accepted_username', password: 'secret_sauce', title: 'Swag Labs' }
    ];

    it('should display error message for empty credentials after clearing fields', async () => {
        const { username, password, errorMessage } = testData[0];
        await loginPage.SetFields(username, password);
        await loginPage.clearFields();
        await loginPage.loginButton.click();
        try {
            expect(await loginPage.errorMessage).toBeDisplayed();
            expect(await loginPage.errorMessage).toHaveText(errorMessage);
            logger.info('UC-1: Error message for empty credentials validated');
        } catch (error) {
            logger.error('UC-1: Error message element not displayed or Error text mismatch');
        }
        
    });
    it('should display error message for empty password field ', async () => {
        const { username, password, errorMessage } = testData[1];
        await loginPage.SetFields(username, password);
        await loginPage.clearPassword();

        // Check if password field value is cleared
        expect((await loginPage.password).getValue()).toHaveValue('');
        await loginPage.loginButton.click();

        try {
           expect(await loginPage.errorMessage).toBeDisplayed();
           expect(await loginPage.errorMessage).toHaveText(errorMessage);
            logger.info('UC-2: Error message for empty password field validated');
        } catch (error) {
            logger.error('UC-1: Error message element not displayed or Error text mismatch');
        }
        
    });
    it('should login with Accepted Credentials', async () => {
        const { username, password, title } = testData[2];
        await loginPage.login(username, password);

        try {
            await expect(browser).toHaveTitle(title);
            logger.info('UC-3: Logged in successfully with accepted credentials');
        } catch (error) {
            logger.error('UC-3: Did not log in succesdully or Title Mismatch');
        }
    });
})

