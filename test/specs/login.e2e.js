const LoginPage = require('../pageobjects/login.page');
const navigationPage = require('../pageobjects/navigation.page');
const loginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboard.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
       
        navigationPage.open();
        navigationPage.goToSignIn();
        LoginPage.login('jonathan.gomez.arias@ucreativa.com','Test1234');
        browser.pause(3000);       
        loginPage.ToClick();
        expect (browser).toHaveUrl('https://demo.realworld.io/#/');
        expect (dashboardPage.getNoArticlesLabel()).toBeDisplayed();
        expect (dashboardPage.getGlobalFeedTap()).toHaveAttribute('class','nav-link active');
       
    });

    it ('should to to other tap', () => {

        dashboardPage.getGlobalFeedTap().click();
        expect(dashboardPage.getGlobalFeedTap()).toHaveClass('active', {message: 'Not active tap!',})
        // expect(DashboardPage.getGlobalFeedTap()).toHaveAttribute('class', 'nav-link active');
         expect(dashboardPage.getGlobalFeedTap()).toHaveClass('active', { message: 'Not active tap!', })
        //  expect(DashboardPage.getGlobalFeedTap()).toHaveProperty('class', 'nav-link active');
        expect(dashboardPage.getGlobalFeedTap()).toBeClickable();
        // expect(DashboardPage.getGlobalFeedTap()).toBeSelected();
    
    });

});


