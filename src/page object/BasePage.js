class BasePage {

    open() {
        return browser.url(`https://www.saucedemo.com/`);
    }
}

module.exports = BasePage;