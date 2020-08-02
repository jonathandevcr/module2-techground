const LoginPage = require('../pageobjects/login.page');
const navigationPage = require('../pageobjects/navigation.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
       
        navigationPage.open();
        navigationPage.goToSignIn();
        BhxBrowser.pause(5000);
        loginPage.login('Hola','123');

    });
});


