import LoginPage from '../pages/LoginPage';
import RecommendationLandingPage from '../pages/RecomendationLandingPage.cy';
import HomePage from '../pages/HomePage';

describe('Home Flow Test', () => {
    it('should log in and accesshome page', () => {
         // Visit the login page
         cy.visit('http://analytics.dzeecloud.com/medicareAdvantage_sandbox/login');

        // Use fixture data for login credentials
        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            // Perform login steps
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.ClickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
        });
            // Now, on the landing page the recommendation button exists
            // Interact with recommendation page after login
         const recPage = new RecommendationLandingPage();
           recPage.clickRecommedation();
           const HPage=new HomePage();
           HPage.EnterEmail("page@gmail.com");
           HPage.clickhealthArrow();
           HPage.clickGoodHealth();
           HPage.EnterName("page");
           HPage.enterLifeExpectancy("86");
           HPage.DatePickerclick();
           HPage.Yearclick();
           HPage.Monthclick();
           HPage.Enterzip("27529")
           HPage.searchclick();
           HPage.NextHomeClick();
         HPage.verifyUrl("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/preferences");
    });
});