const BasePage = require('./BasePage');

class LoginPage extends BasePage{

    get username() { return $('[data-test="username"]'); }
    get password() { return $('[data-test="password"]'); }
    get loginButton() { return $('[data-test="login-button"]'); }
    get errorMessage() { return $('[data-test="error"]'); }

    async login(usernameInput, passwdInput){
        await this.username.setValue(usernameInput);
        await this.password.setValue(passwdInput);
        await this.loginButton.click();
    }

    async SetFields(usernameInput, passwdInput){
        await this.username.setValue(usernameInput);
        await this.password.setValue(passwdInput);
    }

    async clearUsernameField() {
        await this.username.waitForDisplayed();
        await this.username.waitForEnabled();
        await this.username.clearValue();
    }

    async clearPasswordField() {
        const currentValue = await this.password.getValue();
        if (currentValue.length > 0) {
            await this.password.setValue('')
        }; 
    }
    
}

module.exports = LoginPage;