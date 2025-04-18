import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import PreferencePage from "../pages/PreferencePage";
import PlanselectionPage from "../pages/PlanselectionPage";
import ProviderDoctorsCliniciansPage from "../pages/ProviderDoctorsCliniciansPage";



describe('PDP testing', () => {
    it('test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

        const loginpage = new LoginPage();
        loginpage.setUserName("testuser@gmail.com");
        loginpage.setPassword("user123");
        loginpage.clickLoginBtn();
        const landingpage = new LandingPage();
        landingpage.clickCreateRecommendation();
        const homepage = new HomePage();
        homepage.clickAiVanteLogo;
        homepage.enterEmail("sam@gmail.com");
        homepage.clickHealthProfile();
        cy.wait(100);
        homepage.clickSick();
        homepage.enterName("sam");
        homepage.enterLifeexpectancy('90');
        homepage.clickDateOfBirth();
        homepage.clickCalenderEle();
        //homepage.click1959Year();
        //homepage.click1959Month();
        homepage.clickYear();
        cy.wait(1000);
        homepage.clickMonth();
        cy.wait(1000);
        homepage.clickGender();
        homepage.clickMale();
        homepage.clickTabaccoNo();
        homepage.clickTaxIndiv();
        homepage.clickTaxJoin();
        homepage.enterStreet('gavin');
        cy.wait(1000);
        homepage.enterZip("80113");
        homepage.clickSearch();
        homepage.nextHomeClick();
        cy.wait(1000);
        const prefPage = new PreferencePage();
        cy.wait(100);
        prefPage.clicknoRadioDrugCost();
        cy.wait(100);
        prefPage.clickNextPrefPage();
        cy.wait(100);
        const planselectionPage = new PlanselectionPage();
        cy.wait(100);
       planselectionPage.clickProviderBtn();
        cy.wait(500);
        const providerdoctorscliniciansPage = new ProviderDoctorsCliniciansPage();
        cy.wait(1000);
        providerdoctorscliniciansPage.clickDoctorsCliniciansBtn();
        cy.wait(100);
        providerdoctorscliniciansPage.enterDoctorName("Markhanna");
        cy.wait(100);
        providerdoctorscliniciansPage.enterDoctorNameOption("pp");
        cy.wait(100);
       providerdoctorscliniciansPage.enterBusinessName("mark");
       cy.wait(100);
       providerdoctorscliniciansPage.enterSpeciality();
      // providerdoctorscliniciansPage.("Allergy/immunology");
        //providerDoctorsCliniciansPage.enterAddictionmedicine();
        providerdoctorscliniciansPage.enterRadius('50');
        providerdoctorscliniciansPage.enterStreet('Dr');
        providerdoctorscliniciansPage.enterZipCode2("80113");         //('01260');
        providerdoctorscliniciansPage.clickZipSearch();
        cy.wait(2000);
        //providerDoctorsCliniciansPage.clickCountydropdown('DOGLAS, CO');
        //cy.wait(2000);
        //providerDoctorsCliniciansPage.clickCitydropdown('CASTLEPINES');
        //cy.wait(2000);
        //providerDoctorsCliniciansPage.enterRadius('50');
        providerdoctorscliniciansPage.clickSearchProvider();
        providerdoctorscliniciansPage.selectCategory();
        cy.wait(1000);
        providerdoctorscliniciansPage.enterSpeciality();
        cy.wait(2000);
        providerdoctorscliniciansPage.clickSearchProvider();
        providerdoctorscliniciansPage.clickProviderFilter();
        providerdoctorscliniciansPage.enterDistance(50);
        cy.wait(1000);
        providerdoctorscliniciansPage.clickGender();
        providerdoctorscliniciansPage.clickAll();
        providerdoctorscliniciansPage.clickTelehealth();
        providerdoctorscliniciansPage.clickBoth();
        cy.wait(1000);
        providerdoctorscliniciansPage.clickApplyFilter();
        cy.wait(1000);
        providerdoctorscliniciansPage.clickClearFilter();
        cy.wait(1000);
        providerdoctorscliniciansPage.clickBackBtn();
        cy.wait(2000);
       providerdoctorscliniciansPage.clickHospitalBtn();
})
})


