const LoginPage = require('../pageobjects/login.page');
const navigationPage = require('../pageobjects/navigation.page');
const loginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
       
        navigationPage.open();
        navigationPage.goToSignIn();
        LoginPage.login('Hola','123');
        loginPage.ToClick();

    });
});


