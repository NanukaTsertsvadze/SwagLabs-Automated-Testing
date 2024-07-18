const { expect, browser, $ } = require('@wdio/globals');
const LoginPage = require('../../page object/loginPage');
const DashboarPage = require('../../page object/DashboarPage');
const logger = require('../../utils/logger');
const testData = require('../../constants/testData');
const realDataEnv = require('../../helper/helper');


const loginPage = new LoginPage();
const dashboarPage= new DashboarPage();

describe('Check login functionality of Sauce Demo Login Page -', () => {

    beforeEach(async ()=>{
        loginPage.open();
        logger.info('Opened login page');
    });


    afterEach(() => {
        logger.info('Test case completed');
    });


    it('Check that user cannot login with empty credentials after clearing fields', async () => {
        const { username, password, errorMessage } = testData.emptyUsernamePassword;
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
    it('Check that user cannot login with empty password field', async () => {
        const { username, password, errorMessage } = testData.emptyPassword;
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
    it('Check that user can login with Accepted Credentials', async () => {
        const { username, password } = realDataEnv;
        await loginPage.login(username, password);

        try {
            await expect(browser).toHaveTitle(testData.validCredentials.title);

            // additional checks to confirm that the login was successful.
            await expect(await dashboarPage.primary_header).toBeDisplayed();
            logger.info('UC-3: Logged in successfully with accepted credentials');
        } catch (error) {
            logger.error('UC-3: Did not log in succesdully or Title Mismatch');
        }
    });
})

