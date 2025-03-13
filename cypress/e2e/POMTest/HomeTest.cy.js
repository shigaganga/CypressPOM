import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';

describe('Home Flow Test', () => {
    it('should log in and accesshome page', () => {
         // Visit the login page
         cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        // Use fixture data for login credentials
        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            // Perform login steps
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
        });
            // Now, on the landing page the recommendation button exists
            // Interact with recommendation page after login
         const recPage = new LandingPage();
           recPage.clickRecommedation();
           const homepage=new HomePage();
           homepage.enterEmail("page@gmail.com");
           homepage.clickhealthArrow();
           homepage.clickGoodHealth();
           homepage.enterName("page");
           homepage.enterLifeexpectancy("86");
           homepage.datePickerclick();
           homepage.year1957click();
           homepage.month1957click();
           homepage.enterZip("27529")
           homepage.searchclick();
           homepage.NextHomeClick();
          
    });
});