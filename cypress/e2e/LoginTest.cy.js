
import LoginPage from "../pages/LoginPage"
describe("POM",()=>{
    it("LoginTest",()=>{
        cy.visit("http://analytics.dzeecloud.com/medicareAdvantage_sandbox/login");
        cy.fixture('LoginFixture').then((data)=>{
            const ln=new LoginPage();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.ClickLoginBtn();
            ln.verifyLogin();
              
                    })
        
       // cy.get('.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click();
    })
})