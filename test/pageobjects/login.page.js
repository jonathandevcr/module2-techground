const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('input[type="email"]') }
    get inputPassword () { return $('input[type="Password"]') }
    get btnSubmit () { return $('button[type="Sign in"]') }
    get btnButton () { return $('//html/body/div/div/div/div/div/div/form/fieldset/button') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
      
    }

    ToClick (){

        this.btnButton.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
