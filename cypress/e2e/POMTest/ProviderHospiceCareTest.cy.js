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
it('tc1,click provider', () => {
    const landingpage = new LandingPage();
    landingpage.clickproviderBut();
    cy.wait(2000);
    });
    it('tc2,Verify "Hospice care" Category is Visible and Clickable on the Provider Page', () => {
        const landingpage = new LandingPage();
        landingpage.clickproviderBut();
        cy.wait(2000);
      
             const HospiceCare= new ProviderHospiceCarePage();
             cy.wait(2000);
          
             HospiceCare.clickHospiceCareCategory();
             cy.wait(2000);
         });
         it('tc3,Verify functionality of "Hospice care name (Optional)" field',()=>{
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
              it('tc4,enter zipcode and click on search provider', () => {
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
               it('tc5,Verify search with "Hospice Care" category and ownership dropdown options', () => {
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
               it('tc6,selecting other from ownershipdropdown', () => {
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
               it('tc7,selecting Non-profit from ownershipdropdown', () => {
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
               it('tc8,selecting For-profit from ownershipdropdown and apply filter', () => {
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
               it('tc9,Clear filter', () => {
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
               
               it('tc10,Back button', () => {
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
