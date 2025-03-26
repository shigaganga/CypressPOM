import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from "../pages/PreferencePage";
import ProviderPage from "../pages/ProviderPage";
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
        homepage.enterZip("27529");
        //homepage.clickSearchNew();
        homepage.clickSearch();
       // homepage.clickMagitier();
        //homepage.clickmagi16();
        //homepage.clickMagiTier();
        //homepage.clickMagiTier1();
        //homepage.clickMagiTier2();
        //homepage.clickMagiTier3();
        //homepage.clickMagiTier4();
        //homepage.clickMagiTier5();
        //homepage.enterCommEmail();
        //homepage.enterContact();
        
        //homepage.clicknexthome();
        homepage.nextHomeClick();
        cy.wait(1000);
        //homepage.verifyUrl("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/preferences");
         //cy.wait(100);
       // homepage.clickNext();
        //cy.wait(10000);
        const prefPage = new PreferencePage();
        cy.wait(100);
        prefPage.clicknoRadioDrugCost();
        cy.wait(100);
        prefPage.clickNextPrefPage();
        cy.wait(100);
        const providerPage = new ProviderPage();
        cy.wait(100);
        providerPage.clickProviderBtn();
        cy.wait(500);
        const providerDoctorsCliniciansPage = new ProviderDoctorsCliniciansPage();
        cy.wait(1000);
        providerDoctorsCliniciansPage.clickDoctorsCliniciansBtn();
        cy.wait(100);
        providerDoctorsCliniciansPage.enterDoctorName("Markhanna");
        cy.wait(100);
        providerDoctorsCliniciansPage.clickBusinessName();
        //cy.wait(100);
        
        providerDoctorsCliniciansPage.clickSpeciality();
        providerDoctorsCliniciansPage.clickSpecialtydropdown('Pulmonology');
        //providerDoctorsCliniciansPage.enterAddictionmedicine();
        providerDoctorsCliniciansPage.enterRadius('50');
        providerDoctorsCliniciansPage.enterStreet('Dr');
        providerDoctorsCliniciansPage.enterZipCode('01260');
        providerDoctorsCliniciansPage.clickZipSearch();
        //providerDoctorsCliniciansPage.clickCountydropdown('DOGLAS, CO');
        //cy.wait(2000);
        //providerDoctorsCliniciansPage.clickCitydropdown('CASTLEPINES');
        //cy.wait(2000);
        //providerDoctorsCliniciansPage.enterRadius('50');
        providerDoctorsCliniciansPage.clickSearchProvider();
        providerDoctorsCliniciansPage.clickCategory();
        cy.wait(1000);
        providerDoctorsCliniciansPage.clickSpecialityname('Addictionmedicine');
        cy.wait(2000);
        providerDoctorsCliniciansPage.clickSearchProvider();
        providerDoctorsCliniciansPage.clickProviderFilter();
       // providerDoctorsCliniciansPage.enterDistance('15');
        //cy.wait(1000);
        //providerDoctorsCliniciansPage.clickGender();
        //providerDoctorsCliniciansPage.clickAll();
        //providerDoctorsCliniciansPage.clickTelehealth();
        //providerDoctorsCliniciansPage.clickBoth();
        //cy.wait(1000);
        //providerDoctorsCliniciansPage.clickApplyFilter();
        //cy.wait(1000);
        //providerDoctorsCliniciansPage.clickClearFilter();
        //cy.wait(1000);
        providerDoctorsCliniciansPage.clickBackBtn();
        cy.wait(2000);

})
})


