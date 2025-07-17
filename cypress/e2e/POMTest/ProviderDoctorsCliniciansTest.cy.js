
import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PlanselectionPage from '../pages/PlanselectionPage.js';
import longTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import MedicarePage from '../pages/MedicarePage.js';
import ProviderdoctorscliniciansPage from '../pages/ProviderdoctorscliniciansPage.js';
 


describe('ProviderDoctorsClinicianspage Testing', () => {
    let testData = null;
   const planselectionpage= new PlanselectionPage();
    before(()=>{
  // cy.fixture('LoginFixture').then((data) => {
    //   testData = data;
     cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
    })
})
const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
const lPage = new LoginPage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const prefPage = new PreferencePage();
        const prescriptionpage=new PrescriptionPage();
        const pharmacypage=new PharmacyPage();
        
    beforeEach(() => {
        cy.session("Doctors and clinicians seesion",()=>{
       cy.visit(testData.baseUrl );
        cy.wait(500);
         
 
            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
            cy.wait(2000)
            lPage.verifyLogin(); // Ensure login was successful
            recPage.clickCreateRecommendation();
           cy.wait(500);
           homepage.enterEmail(testData.email);
           cy.wait(500);
           homepage.clickhealthArrow();
           cy.wait(500);
           homepage.clickHealthProfile(testData.healthProfile);
           cy.wait(500);
           homepage.enterName(testData.name);
           cy.wait(500);
           homepage.enterLifeexpectancy(testData.lifeExpectancy);
           cy.wait(500);
           homepage.clickDatePicker();
           cy.wait(500);
           homepage.clickYear(testData.yearOfBirth);
           cy.wait(500);
           homepage.clickMonth(testData.monthOfBirth);
           cy.wait(500);
           homepage.enterZip(testData.zip)
           cy.wait(500);
           homepage.clickSearch();
           cy.wait(500);
           homepage.nextHomeClick();
           cy.wait(500);
           prefPage.clicknoRadioDrugCost();
           cy.wait(500);
           prefPage.clickNextPrefPage();
           cy.wait(2000)
        
      const planselectionPage = new PlanselectionPage();
        planselectionPage.setProviderButtn();
        cy.wait(2000)

        //const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
        providerdoctorscliniciansPage.clickDoctorsCliniciansBtn();
    });

   cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-providers");
   
}); 
   

it('TC_PDP_AiVante_Logo_02 : This is to verify the functionality of "Aivante logo" on the manage provider page', () => {
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.clickAiVanteLogo();
     cy.log("Aivantelogo - Passed");
     cy.wait(2000)
});
it('TC_PDP_PRO_BACK_03 : This is to verify "Back button" Functionality on the manage provider page within PDP application', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.clickbackBut();
    cy.log("Back button - Passed");
    cy.wait(2000)
});
it('TC_PDP_T-SIGN_04 : This is to verify the functionality of the "T-Sign" icon located on the top right corner of the manage provider page', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.clickTsign();
    cy.log("Back button - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_DOC_05 : Search with Doctor Name', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterDoctorName(testData.doctorName);
    cy.log("Doctor Name - Passed");
    cy.wait(1000)
 });
it('TC_PDP_PRV_DOC_06 : Enter DoctorNameOption Verify that the Category Name', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterDoctorNameOption(testData.doctorNameOption);
    cy.log("DoctorNameOption - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_DOC_07 : Search with Business Name', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterBusinessName(testData.businessName);
    cy.log("DoctorNameOption - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_DOC_07-01 : Search with Street', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterDoctorName(testData.doctorName);
    providerdoctorscliniciansPage.enterStreet(testData.docter_street);
    cy.log("Street(Optionl) - Passed");
    cy.wait(2000)
    });
it('TC_PDP_PRV_DOC_08 : Verify Zip Code Field Accepts Valid Zip Codes ', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterDoctorName(testData.doctorName);
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    cy.log("Zipcode - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_DOC_09 : Verify Zip Code Field with Invalid Zip Code ', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterDoctorName(testData.doctorName)
     providerdoctorscliniciansPage.enterInvalidZipCode2("ABC");
    cy.log("InvalidZipcode - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_DOC_10 : Verify Zip Code Field with Blank Zip Code ', () => {    
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterBlankZipCode2("");
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickZipcoderequirederror();
    cy.log("BlankZipcode - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_DOC_11 : Verify County, City are Visible in County, State Drop down ', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
   providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.enterRadius(testData.doctorradius);
    providerdoctorscliniciansPage.clickCountyState();
   cy.log("clickCountyState - Passed");
   cy.wait(2000)
});
it('TC_PDP_PRV_DOC_12 : Verify Clicking on County Selects the County Correctly', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.enterRadius(testData.doctorradius);
    providerdoctorscliniciansPage.clickSearchProvider();
     providerdoctorscliniciansPage.selectCategory();
    cy.log("clickCountyState - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_DOC_13 : Verify Cities are Visible in the City Dropdown ', () => {
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.enterRadius(testData.doctorradius);
     providerdoctorscliniciansPage.clickCitydropdown();
    cy.log("clickCity - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_DOC_14 : Verify Clicking on a City Selects the City Correctly', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
      providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
      providerdoctorscliniciansPage.clickZipSearch();
      providerdoctorscliniciansPage.enterRadius(testData.doctorradius);
      providerdoctorscliniciansPage.clickCity();
     cy.log("clickCity - Passed");
     cy.wait(2000)
});
it('TC_PDP_PRV_DOC_15 : Verify Search icon for Category Doctors & clinicians on the manage-provider', () => {
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickSearchProvider();
    cy.log("clicksearchprovider - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_CLEAR_16 : Verify the clear button on the manage-providers/provider-list page', () => {
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickRadiusIn('15');
     providerdoctorscliniciansPage.clickSearchProvider();
     providerdoctorscliniciansPage.clickProviderFilter();
     providerdoctorscliniciansPage.enterDistance('5');
     providerdoctorscliniciansPage.clickClearFilter();
     cy.log("clickClearbutton - Passed");
     cy.wait(2000)
});
it('TC_PDP_PRV_FILTER_17 : Verify the Apply filter button on the manage-providers/provider-list page', () => {
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickRadiusIn('15');
     providerdoctorscliniciansPage.clickSearchProvider();
     providerdoctorscliniciansPage.clickProviderFilter();
     providerdoctorscliniciansPage.enterDistance("10");
     providerdoctorscliniciansPage.clickGender();
     providerdoctorscliniciansPage.clickMale();
     providerdoctorscliniciansPage.clickApplyFilter();
    cy.log("clickClearbutton - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_FILTER_17-1 : Verify the Gender button on the manage-providers/provider-list page', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickRadiusIn('15');
     providerdoctorscliniciansPage.clickSearchProvider();
     providerdoctorscliniciansPage.clickProviderFilter();
     providerdoctorscliniciansPage.enterDistance("10");
     providerdoctorscliniciansPage.clickGender();
     providerdoctorscliniciansPage.clickAll();
     cy.log("clickGenderbutton - Passed");
     cy.wait(2000)
});
it('TC_PDP_PRV_FILTER_17-2 : Verify the Telehealth button with applyfilter on the manage-providers/provider-list page', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickRadiusIn('15');
     providerdoctorscliniciansPage.clickSearchProvider();
     providerdoctorscliniciansPage.clickProviderFilter();
     providerdoctorscliniciansPage.enterDistance("10");
     providerdoctorscliniciansPage.clickGender();
     providerdoctorscliniciansPage.clickAll();
     providerdoctorscliniciansPage.clickTelehealth();
     providerdoctorscliniciansPage.clickBoth();
     providerdoctorscliniciansPage.clickApplyFilter();
     cy.log("clickTelehealthbutton - Passed");
     cy.wait(2000)
});
it('TC_PDP_PRV_DOC_18 : Verify the Category Dropdown is Visible and Enabled', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickRadiusIn('15');
     providerdoctorscliniciansPage.clickCountydropdown();
     cy.log("selectCategorydropdown - Passed");
     cy.wait(2000)
});
it('TC_PDP_PRV_DOC_19 : Verify Available Categories in the Dropdown', () => {   
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickRadiusIn('15');
     providerdoctorscliniciansPage.clickSearchProvider();
     providerdoctorscliniciansPage.selectCategorydropdown();
     cy.log("clickCategorydropdown - Passed");
     cy.wait(2000)
});
it('TC_PDP_PRV_DOC_20 : Verify Selection of a Category', () => {    
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickRadiusIn('15');
     providerdoctorscliniciansPage.clickSearchProvider();
     cy.get('.mat-input-element').should('be.visible');
     cy.log("clickCategory - Passed");
     cy.wait(2000)
});
it('TC_PDP_PRV_DOC_21 : Verify Filtering Based on Selected Category', () => {    
   const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
   providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
   providerdoctorscliniciansPage.clickZipSearch();
   providerdoctorscliniciansPage.clickRadiusIn('15');
   providerdoctorscliniciansPage.clickSearchProvider();
   providerdoctorscliniciansPage.selectCategorydropdown();
   providerdoctorscliniciansPage.selectCategory();
   cy.log("clickCategory - Passed");
   cy.wait(200)
});
it('TC_PDP_PRV_DOC_22 : Verify Default Category', () => {    
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectDefaultCategory();
    cy.log("clickDefaultCategory - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_23 : Verify Dropdown Persistence After Page Refresh', () => {  
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectDefaultCategory();
    providerdoctorscliniciansPage.selectCategory();
    cy.log("clickDropdown persistence - Passed");
    cy.wait(200)
}); 
it('TC_PDP_PRV_DOC_SPEC_24 : Verify the Specialty Dropdown is Visible and Enabled', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterDoctorName(testData.doctorName);
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.selectSpecialtydropdown();
    cy.log("clickSpecialtydropdown - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_SPEC_25 : Verify Selection of a Specialty', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterDoctorName(testData.doctorName);
    providerdoctorscliniciansPage.enterZipCode2("01261");
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.selectSpecialtydropdown();
    providerdoctorscliniciansPage.enterSpecialityEle();
   cy.log("clickSpecialtydropdown - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_SPEC_26 : Verify No Results Message for "Doctor & Clinicians" and "Addiction Medicine"if No Providers are Available', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
   providerdoctorscliniciansPage.enterZipCode2("9010");
   providerdoctorscliniciansPage.clickZipSearch();
   providerdoctorscliniciansPage.clickRadiusIn('15');
   providerdoctorscliniciansPage.enterSpecialityEle("Addiction medicine");
   providerdoctorscliniciansPage.clickSearchProvider();
   providerdoctorscliniciansPage.selectCategorydropdown();
   providerdoctorscliniciansPage.selectCategory();
   cy.log("verify the results - Passed");
   cy.wait(200)
});
it('TC_PDP_PRV_DOC_SPEC_27 : Verify "Doctor & Clinician" Category with Specialty as "Addiction Medicine"', () => {
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.clickRadiusIn('15');
    providerdoctorscliniciansPage.enterSpecialityEle();
    providerdoctorscliniciansPage.clickAddictionmedicine();
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectCategorydropdown();
    providerdoctorscliniciansPage.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(200)
 });
 it('TC_PDP_PRV_DOC_SPEC_28 : Verify "Doctor & Clinician" Category with Specialty as "Adult congenital heart disease (ACHD)"', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.clickRadiusIn('15');
    providerdoctorscliniciansPage.enterSpecialityEle();
    providerdoctorscliniciansPage.clickAdultcongenitalheartdisease();
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectCategorydropdown();
    providerdoctorscliniciansPage.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(200)
 });
 it('TC_PDP_PRV_DOC_SPEC_29 : Verify "Doctor & Clinician" Category with Specialty as "Advanced heart failure and transplant cardiology"', () => {
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.clickRadiusIn('15');
    providerdoctorscliniciansPage.enterSpecialityEle();
    providerdoctorscliniciansPage.clickAdvancedheartfailureandtransplantcardiology();
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectCategorydropdown();
    providerdoctorscliniciansPage.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(200)
 });
 it('TC_PDP_PRV_DOC_SPEC_30 : Verify "Doctor & Clinician" Category with Specialty as "Allergy/immunology"', () => {
     const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.clickRadiusIn('15');
    providerdoctorscliniciansPage.enterSpecialityEle();
    providerdoctorscliniciansPage.clickAllergyimmunology();
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectCategorydropdown();
    providerdoctorscliniciansPage.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(200)
 });
it('TC_PDP_DOC_SPEC_52 : Verify "Doctor & Clinician" Category with Specialty as "General practice"', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.clickRadiusIn('15');
    providerdoctorscliniciansPage.enterSpecialityEle();
    providerdoctorscliniciansPage.clickGeneralpractice();
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectCategorydropdown();
    providerdoctorscliniciansPage.selectCategory();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC_PDP_DOC_SPEC_120 : Verify "Doctor & Clinician" Category with Specialty as Qualified Speech language "Vascular surgery"', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
     providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
     providerdoctorscliniciansPage.clickZipSearch();
     providerdoctorscliniciansPage.clickRadiusIn('15');
     providerdoctorscliniciansPage.enterSpecialityEle();
     providerdoctorscliniciansPage.clickVascularsurgery();
     providerdoctorscliniciansPage.clickSearchProvider();
     providerdoctorscliniciansPage.selectCategorydropdown();
     providerdoctorscliniciansPage.selectCategory();
    cy.log("verify the results - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_RADIUS_121 : Verify that the "Radius" field refreshes correctly for each Category', () => { //RADIUS REFRESH
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectCategorydropdown();
    providerdoctorscliniciansPage.clickHospicecare();
   cy.get('.ng-star-inserted').contains("Radius is not applicable to this category. Because search is on basis of Zipcode");
   cy.get(':nth-child(1) > .mat-form-field-should-float > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    providerdoctorscliniciansPage.selectCategorydropdown();
    providerdoctorscliniciansPage.clickHospital();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC_PDP_PRV_RADIUS_122 : Verify Default Radius Value is 15 Miles for "Doctors & Clinicians" Category on the Provider Page', () => {
   const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.clickRadiusIn('15');
    providerdoctorscliniciansPage.clickSearchProvider();
    providerdoctorscliniciansPage.selectCategorydropdown();
    providerdoctorscliniciansPage.selectCategory();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC_PDP_PRV_RADIUS_123 : Verify Presence of Radius Input Field', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.clickRadiusIn("15");
   cy.log("verify the results - Passed");
   cy.wait(2000)
})
it('TC_PDP_PRV_RADIUS_124 : Verify the valid Radius Value', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.enterRadius("3");
    providerdoctorscliniciansPage.clickSearchProvider();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC_PDP_PRV_RADIUS_125 : Verify the radius field validation when submitted with an empty value', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.clickEmptyRadius("")
   cy.get('body').click({ force: true });
   cy.wait(1000);
   cy.get('#mat-error-2').contains("Radius is required.");
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC_PDP_PRV_RADIUS_126 : Verify Radius Field with Invalid Character Input', () => {
    const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
    providerdoctorscliniciansPage.enterZipCode2(testData.zipCode2);
    providerdoctorscliniciansPage.clickZipSearch();
    providerdoctorscliniciansPage.enteremptyradius("abc");
   cy.log("verify the results - Passed");
   cy.wait(200)
});
it('TC_PDP_PRV_RADIUS_127 : "This is to verify ""Back button" Functionality on the manage-providers/provider-list page within PDP application"', () => {
   const providerdoctorscliniciansPage = new ProviderdoctorscliniciansPage();
   providerdoctorscliniciansPage.clickSearchProvider();
   providerdoctorscliniciansPage.clickBackBtn(); 
   cy.log("verify the results - Passed");
   cy.wait(200)
});

});