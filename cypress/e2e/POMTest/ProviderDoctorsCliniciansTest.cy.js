import ProviderDoctorsCliniciansPage from "../pages/ProviderDoctorsCliniciansPage.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import LandingPage from "../pages/LandingPage.js";
import PlanselectionPage from "../pages/PlanselectionPage.js";

describe('ProviderDoctorsClinicianspage Testing', () => {

    beforeEach(() => {
       cy.session("Provider DoctorsClinicians page session",()=>{
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const ln = new LoginPage();
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.clickLoginBtn();
        ln.verifyLogin();
         });
        //test user//
        //const loginpage = new LoginPage();
          //  loginpage.setUserName(data.username);
           // loginpage.setPassword(data.password);
           // loginpage.clickLoginBtn();
        //});

       // const ln = new LoginPage();
        //ln.setUserName(data.username);
        //ln.setPassword(data.password);
        //ln.clickLoginBtn();
        //ln.verifyLogin();
    
        const recPage = new LandingPage();
        recPage.clickCreateRecommendation();
        const homepage = new HomePage();
        cy.wait(100);
        homepage.enterEmail("SwathiPOM@gmail.com");
        cy.wait(100);
        homepage.clickhealthArrow();
        cy.wait(100);
        homepage.clickGoodHealth();
        cy.wait(100);
        homepage.enterName("Shigapage");
        cy.wait(100);
        homepage.enterLifeexpectancy("86");
        cy.wait(100);
        homepage.datePickerclick();
        cy.wait(100);
        homepage.year1957click();
        cy.wait(100);
        homepage.month1957click();
        cy.wait(100);
        homepage.enterZip("80113")
        cy.wait(100);
        homepage.clickSearch();
        cy.wait(100);
        homepage.nextHomeClick();
        cy.wait(100);
        // homepage.verifyUrl("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/preferences");

        const prefPage = new PreferencePage();
        cy.wait(100);
        prefPage.clicknoRadioDrugCost();
        cy.wait(100);
        prefPage.clickNextPrefPage();
        
      const planselectionPage = new PlanselectionPage();
        planselectionPage.setProviderButtn();
      const providerdoctorscliniciansPage = new ProviderDoctorsCliniciansPage();
        providerdoctorscliniciansPage.clickDoctorsCliniciansBtn();
    });
   cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-providers");
   });
//it.only('TC-1 , Should click on provider link' ,()=> {
  //  const planselectionPage = new PlanselectionPage();
   // planselectionPage.setProviderButtn();
 //});   

it('TC-2 This is to verify the functionality of "Aivante logo" on the manage provider page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickAiVanteLogo();
    cy.log("Aivantelogo - Passed");
    cy.wait(2000)
});
it('TC-3 This is to verify "Back button" Functionality on the manage provider page within PDP application', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickbackBut();
    cy.log("Back button - Passed");
    cy.wait(2000)
});
it('TC-4 This is to verify the functionality of the "T-Sign" icon located on the top right corner of the manage provider page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickTsign();
    cy.log("Back button - Passed");
    cy.wait(2000)
});
it('TC-5 Search with Doctor Name', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName("Markhanna");
    cy.log("Doctor Name - Passed");
    cy.wait(1000)
 });
it('TC-6 Enter DoctorNameOption Verify that the Category Name', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorNameOption("pho");
    cy.log("DoctorNameOption - Passed");
    cy.wait(2000)
});
it('TC-7 Enter BusinessName ', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterBusinessName("Mark");
    cy.log("DoctorNameOption - Passed");
    cy.wait(2000)
});
it('TC-7-1 Search with Street', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName("Markhanna");
    providerdoctorsclinicians.enterStreet('143 gavin street');
    cy.log("Street(Optionl) - Passed");
    cy.wait(2000)
    });
it('TC-8 Verify Zip Code Field Accepts Valid Zip Codes ', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName("Mann");
    providerdoctorsclinicians.enterZipCode2("80113");
    cy.log("Zipcode - Passed");
    cy.wait(2000)
});
it('TC-9 Verify Zip Code Field with Invalid Zip Code ', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName("mark")
    providerdoctorsclinicians.enterInvalidZipCode2("ABC");
    cy.log("InvalidZipcode - Passed");
    cy.wait(2000)
});
it('TC-10 Verify Zip Code Field with Blank Zip Code ', () => {    
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterBlankZipCode2("");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickZipcoderequirederror();
    cy.log("BlankZipcode - Passed");
    cy.wait(2000)
});
it('TC-11 Verify County, City are Visible in County, State Drop down ', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2("80108");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.enterRadius('3');
   providerdoctorsclinicians.clickCountyState();
   cy.log("clickCountyState - Passed");
   cy.wait(2000)
});
it('TC-12 Verify Clicking on County Selects the County Correctly', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.enterRadius('3');
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategory();
    cy.log("clickCountyState - Passed");
    cy.wait(2000)
});
it('TC-13 Verify Cities are Visible in the City Dropdown ', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.enterRadius('3');
    providerdoctorsclinicians.clickCitydropdown();
    cy.log("clickCity - Passed");
    cy.wait(2000)
});
it('TC-14 Verify Clicking on a City Selects the City Correctly', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
     providerdoctorsclinicians.enterZipCode2("80108");
     providerdoctorsclinicians.clickZipSearch();
     providerdoctorsclinicians.enterRadius('3');
     providerdoctorsclinicians.clickCity();
     cy.log("clickCity - Passed");
     cy.wait(2000)
});
it('TC-15 Verify Search icon for Category Doctors & clinicians on the manage-provider', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
   providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickSearchProvider();
    cy.log("clicksearchprovider - Passed");
    cy.wait(2000)
});
it('TC-16 Verify the clear button on the manage-providers/provider-list page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.clickProviderFilter();
    providerdoctorsclinicians.enterDistance('5');
    providerdoctorsclinicians.clickClearFilter();
    cy.log("clickClearbutton - Passed");
    cy.wait(2000)
});
it('TC-17 Verify the Apply filter button on the manage-providers/provider-list page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.clickProviderFilter();
    providerdoctorsclinicians.enterDistance("10");
    providerdoctorsclinicians.clickGender();
    providerdoctorsclinicians.clickMale();
    providerdoctorsclinicians.clickApplyFilter();
    cy.log("clickClearbutton - Passed");
    cy.wait(2000)
});
it('TC-17-1 Verify the Gender button on the manage-providers/provider-list page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.clickProviderFilter();
    providerdoctorsclinicians.enterDistance("10");
    providerdoctorsclinicians.clickGender();
    providerdoctorsclinicians.clickAll();
    cy.log("clickGenderbutton - Passed");
    cy.wait(2000)
});
it('TC-17-2 Verify the Telehealth button with applyfilter on the manage-providers/provider-list page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.clickProviderFilter();
    providerdoctorsclinicians.enterDistance("10");
    providerdoctorsclinicians.clickGender();
    providerdoctorsclinicians.clickAll();
    providerdoctorsclinicians.clickTelehealth();
    providerdoctorsclinicians.clickBoth();
    providerdoctorsclinicians.clickApplyFilter();
    cy.log("clickTelehealthbutton - Passed");
    cy.wait(2000)
});
it('TC-18 Verify the Category Dropdown is Visible and Enabled', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("01259");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    cy.log("selectCategorydropdown - Passed");
    cy.wait(2000)
});
it('TC-19 Verify Available Categories in the Dropdown', () => {   
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("01260");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    cy.log("clickCategorydropdown - Passed");
    cy.wait(2000)
});
it('TC-20 Verify Selection of a Category', () => {    
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("01260");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.clickSearchProvider();
   // providerdoctorsclinicians.selectCategory();
    cy.get('.mat-input-element').should('be.visible');
    cy.log("clickCategory - Passed");
    cy.wait(2000)
})
it('TC-21 Verify Filtering Based on Selected Category', () => {    
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("27429");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    providerdoctorsclinicians.selectCategory();
    cy.log("clickCategory - Passed");
    cy.wait(2000)
});
it('TC-22 Verify Default Category', () => {    
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectDefaultCategory();
    cy.log("clickDefaultCategory - Passed");
    cy.wait(2000)
});
it('TC-23 Verify Dropdown Persistence After Page Refresh', () => {  
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectDefaultCategory();
    providerdoctorsclinicians.selectCategory();
    cy.log("clickDropdown persistence - Passed");
    cy.wait(2000)
}); 
it('TC-24 Verify the Specialty Dropdown is Visible and Enabled', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName("Markhanna");
    providerdoctorsclinicians.enterZipCode2("01259");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.selectSpecialtydropdown();
    cy.log("clickSpecialtydropdown - Passed");
    cy.wait(2000)
});
it('TC-25 Verify Selection of a Specialty', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterDoctorName("jack");
   providerdoctorsclinicians.enterZipCode2("01261");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.selectSpecialtydropdown();
   providerdoctorsclinicians.enterSpecialityEle();
   cy.log("clickSpecialtydropdown - Passed");
    cy.wait(2000)
});
it('TC-26 Verify No Results Message for "Doctor & Clinicians" and "Addiction Medicine"if No Providers are Available', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2("9010");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn('15');
   providerdoctorsclinicians.enterSpecialityEle("Addiction medicine");
   providerdoctorsclinicians.clickSearchProvider();
   providerdoctorsclinicians.selectCategorydropdown();
   providerdoctorsclinicians.selectCategory();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC-27 Verify "Doctor & Clinician" Category with Specialty as "Addiction Medicine"', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.enterSpecialityEle();
    providerdoctorsclinicians.clickAddictionmedicine();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    providerdoctorsclinicians.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(2000)
 });
 it('TC-28 Verify "Doctor & Clinician" Category with Specialty as "Adult congenital heart disease (ACHD)"', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.enterSpecialityEle();
    providerdoctorsclinicians.clickAdultcongenitalheartdisease();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    providerdoctorsclinicians.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(2000)
 });
 it('TC-29 Verify "Doctor & Clinician" Category with Specialty as "Advanced heart failure and transplant cardiology"', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.enterSpecialityEle();
    providerdoctorsclinicians.clickAdvancedheartfailureandtransplantcardiology();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    providerdoctorsclinicians.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(2000)
 });
 it('TC-30 Verify "Doctor & Clinician" Category with Specialty as "Allergy/immunology"', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.enterSpecialityEle();
    providerdoctorsclinicians.clickAllergyimmunology();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    providerdoctorsclinicians.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(2000)
 });


it('TC-52 Verify "Doctor & Clinician" Category with Specialty as "General practice"', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2("80108");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn('15');
   providerdoctorsclinicians.enterSpecialityEle();
   providerdoctorsclinicians.clickGeneralpractice();
   providerdoctorsclinicians.clickSearchProvider();
   providerdoctorsclinicians.selectCategorydropdown();
   providerdoctorsclinicians.selectCategory();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC-120 Verify "Doctor & Clinician" Category with Specialty as Qualified Speech language "Vascular surgery"', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2("80108");
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn('15');
    providerdoctorsclinicians.enterSpecialityEle();
    providerdoctorsclinicians.clickVascularsurgery();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    providerdoctorsclinicians.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(2000)
});
it('TC-121 Verify that the "Radius" field refreshes correctly for each Category', () => { //RADIUS REFRESH
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.clickSearchProvider();
   providerdoctorsclinicians.selectCategorydropdown();
   providerdoctorsclinicians.clickHospicecare();
   cy.get('.ng-star-inserted').contains("Radius is not applicable to this category. Because search is on basis of Zipcode");
   cy.get(':nth-child(1) > .mat-form-field-should-float > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   providerdoctorsclinicians.selectCategorydropdown();
   cy.get('.mat-option-text').contains('Hospitals').click();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC-122 Verify Default Radius Value is 15 Miles for "Doctors & Clinicians" Category on the Provider Page', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2("01262");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn('15');
   providerdoctorsclinicians.clickSearchProvider();
   providerdoctorsclinicians.selectCategorydropdown();
   providerdoctorsclinicians.selectCategory();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC-123 Verify Presence of Radius Input Field', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2("01263");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn("15");
   cy.log("verify the results - Passed");
   cy.wait(2000)
})
it('TC-124 Verify the valid Radius Value', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2("01264");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.enterRadius("3");
   providerdoctorsclinicians.clickSearchProvider();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC-125 Verify the radius field validation when submitted with an empty value', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
  providerdoctorsclinicians.enterZipCode2("01264");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickEmptyRadius("")
   cy.get('body').click({ force: true });
   cy.wait(1000);
   cy.get('#mat-error-2').contains("Radius is required.");
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC-126 Verify Radius Field with Invalid Character Input', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
  providerdoctorsclinicians.enterZipCode2("01264");
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.enteremptyradius("abc");
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC-127 "This is to verify ""Back button" Functionality on the manage-providers/provider-list page within PDP application"', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
  providerdoctorsclinicians.clickSearchProvider();
  providerdoctorsclinicians.clickBackBtn(); 
   cy.log("verify the results - Passed");
   cy.wait(2000)
});



});