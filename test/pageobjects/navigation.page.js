const Page = require('./page');

class navigationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get condiutLabel () { return $('a.navbar-brand.ng-binding') }
    get signInLink () { return $('a=Sign in') }
    get signUpLink () { return $('*=up') }
    

    goToSignIn(){

        return this.signInLink.click();
    }     

    getConduitText(){

        return this.condiutLabel.getText();
    }

    open () {

        return super.open('');
    }
}

module.exports = new navigationPage();
