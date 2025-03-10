
import LoginPage from "../pages/LoginPage"
describe("POM",()=>{
    it("LoginTest",()=>{
        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
        cy.fixture('LoginFixture').then((data)=>{
            const ln=new LoginPage();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickLoginBtn();
            ln.verifyLogin();
              
                    })
        
       // cy.get('.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click();
    })
})