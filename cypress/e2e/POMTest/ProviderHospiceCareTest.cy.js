import LoginPage from "../pages/LoginPage.js";
import LandingPage from"../pages/LandingPage.js";
import HomePage from "../pages/HomePage";
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from "../pages/PrescriptionPage.js";
import PharmacyPage from "../pages/PharmacyPage.js";
import PlanselectionPage from "../pages/PlanselectionPage.js";
import ProviderHospiceCarePage from '../pages/ProviderHospiceCarePage.js';


describe('Provider Hospic care', () => {
    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        });

    });
it('TC_PDP_PRV_HC_167,click provider', () => {  //TC_PDP_PRV_HC_167
    const landingpage = new LandingPage();
    landingpage.clickproviderBut();
    cy.wait(2000);
    });
    it('TC_PDP_PRV_HC_193,Verify "Hospice care" Category is Visible and Clickable on the Provider Page', () => {
        const landingpage = new LandingPage();
        landingpage.clickproviderBut();
        cy.wait(2000);
      
             const HospiceCare= new ProviderHospiceCarePage();
             cy.wait(2000);
          
             HospiceCare.clickHospiceCareCategory();
             cy.wait(2000);
         });
         it('TC_PDP_PRV_HC_194,Verify functionality of "Hospice care name (Optional)" field',()=>{
            const landingpage = new LandingPage();
            landingpage.clickproviderBut();
            cy.wait(2000);
              const HospiceCare= new ProviderHospiceCarePage();
               cy.wait(2000);
              HospiceCare.clickHospiceCareCategory();
              cy.wait(2000);
               HospiceCare.enterHospiceCareName(' Lifespring home care');
               cy.wait(2000);
               HospiceCare.enterZipcode(80134);
               cy.wait(2000);
               HospiceCare.clickzipcode();
               HospiceCare.clickSearchProvider();
              });
              it('TC_PDP_PRV_HC_196,enter zipcode and click on search provider', () => {
                const landingpage = new LandingPage();
                landingpage.clickproviderBut();
                cy.wait(2000);
                const HospiceCare= new ProviderHospiceCarePage();
                cy.wait(2000);
                HospiceCare.clickHospiceCareCategory();
                cy.wait(3000);
                HospiceCare.enterZipcode(80108);
               cy.wait(2000);
               HospiceCare.clickzipcode();
               HospiceCare.clickSearchProvider();
                
               });
               it('TC_PDP_PRV_HC_204,Verify search with "Hospice Care" category and ownership dropdown options', () => {
                const landingpage = new LandingPage();
                landingpage.clickproviderBut();
                cy.wait(2000);
                const HospiceCare= new ProviderHospiceCarePage();
                cy.wait(2000);
                HospiceCare.clickHospiceCareCategory();
                cy.wait(3000);
                HospiceCare.enterZipcode(80108);
               cy.wait(2000);
               HospiceCare.clickzipcode();
               HospiceCare.clickSearchProvider();
               HospiceCare.clickproviderFilter();
               HospiceCare.selectOwnership();
               });
               it('TC_PDP_PRV_HC_206,selecting other from ownershipdropdown', () => {
                const landingpage = new LandingPage();
                landingpage.clickproviderBut();
                cy.wait(2000);
                const HospiceCare= new ProviderHospiceCarePage();
                cy.wait(2000);
                HospiceCare.clickHospiceCareCategory();
                cy.wait(3000);
                HospiceCare.enterZipcode(80108);
               cy.wait(2000);
               HospiceCare.clickzipcode();
               HospiceCare.clickSearchProvider();
               HospiceCare.clickproviderFilter();
               HospiceCare.selectOwnership();
               HospiceCare.selectother();
               });
               it('TC_PDP_PRV_HC_207,selecting Non-profit from ownershipdropdown', () => {
                const landingpage = new LandingPage();
                landingpage.clickproviderBut();
                cy.wait(2000);
                const HospiceCare= new ProviderHospiceCarePage();
                cy.wait(2000);
                HospiceCare.clickHospiceCareCategory();
                cy.wait(3000);
                HospiceCare.enterZipcode(80108);
               cy.wait(2000);
               HospiceCare.clickzipcode();
               HospiceCare.clickSearchProvider();
               HospiceCare.clickproviderFilter();
               HospiceCare.selectOwnership();
               HospiceCare.selecnonprofit();
               });
               it('TC_PDP_PRV_HC_208,selecting For-profit from ownershipdropdown and apply filter', () => {
                const landingpage = new LandingPage();
                landingpage.clickproviderBut();
                cy.wait(2000);
                const HospiceCare= new ProviderHospiceCarePage();
                cy.wait(2000);
                HospiceCare.clickHospiceCareCategory();
                cy.wait(3000);
                HospiceCare.enterZipcode(80108);
               cy.wait(2000);
               HospiceCare.clickzipcode();
               cy.wait(2000);
               HospiceCare.clickSearchProvider();
               cy.wait(2000);
               HospiceCare.clickproviderFilter();
               cy.wait(2000);
               HospiceCare.selectOwnership();
               cy.wait(2000);
               HospiceCare.selectforprofit();
               cy.wait(2000);
               HospiceCare.clickApplyFilter();
               });
               it('TC_PDP_PRV_HC_210,Clear filter', () => {
                const landingpage = new LandingPage();
                landingpage.clickproviderBut();
                cy.wait(2000);
                const HospiceCare= new ProviderHospiceCarePage();
                cy.wait(2000);
                HospiceCare.clickHospiceCareCategory();
                cy.wait(3000);
                HospiceCare.enterZipcode(80108);
               cy.wait(2000);
               HospiceCare.clickzipcode();
               cy.wait(2000);
               HospiceCare.clickSearchProvider();
               cy.wait(2000);
               HospiceCare.clickproviderFilter();
               cy.wait(2000);
               HospiceCare.selectOwnership();
               cy.wait(2000);
               HospiceCare.selectforprofit();
               cy.wait(2000);
               HospiceCare.clickClearFilter();
               });
               
               it('TC_PDP_PRV_HC_211,Back button', () => {
                const landingpage = new LandingPage();
                landingpage.clickproviderBut();
                cy.wait(2000);
                const HospiceCare= new ProviderHospiceCarePage();
                cy.wait(2000);
                HospiceCare.clickHospiceCareCategory();
                cy.wait(3000);
                HospiceCare.enterZipcode(80108);
               cy.wait(2000);
               HospiceCare.clickzipcode();
               cy.wait(2000);
               HospiceCare.clickSearchProvider();
               cy.wait(2000);
               HospiceCare.clickBackButton();
               
               });
  });
