const BasePage = require('./BasePage');

class LoginPage extends BasePage{

    // get username(){ return $('//input[@id="user-name"]'); }
    // get password(){ return $('//input[@id="password"]'); }
    // get loginButton(){ return $('//input[@id="login-button"]'); }
    // get errorMessage(){ return $('//h3[@data-test="error"]'); }

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

    async clearFields() {
        await this.username.waitForDisplayed();
        await this.username.waitForEnabled();
        await this.username.clearValue();
    
        await this.password.waitForDisplayed();
        await this.password.waitForEnabled();
        await this.password.clearValue();
    }

    async clearPassword() {
        const currentValue = await this.password.getValue();
        if (currentValue.length > 0) {
            await this.password.setValue('')
        }; 
    }
    
}

module.exports = LoginPage;