const BasePage = require("./BasePage");

class DashboarPage extends BasePage {

    get primary_header() { return $('[data-test="primary-header"]'); }
 
}

module.exports = DashboarPage;