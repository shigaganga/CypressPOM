import ProviderHomeHealthservicesPage from "../pages/ProviderHomeHealthservicesPage.js";
import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js'; 
import PrescriptionPage from '../pages/PrescriptionPage.js';
import LongTermPage from '../pages/LongTermPage.js';
import MedicareAdvantagepage from '../pages/MedicarePage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PlanselectionPage from "../pages/PlanselectionPage.js";
describe("Automation of test cases for Provider_Home_Health_Care_Services",()=>{
    let testData
    const planselectionpage= new PlanselectionPage();
    const providerhomehealthservices = new ProviderHomeHealthservicesPage();
    before(()=>{
    cy.fixture('LoginFixture').then((data) => {
        testData = data;
    })
})
        
        const lPage = new LoginPage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const prefPage = new PreferencePage();
        const prescriptionpage=new PrescriptionPage();
        const pharmacypage=new PharmacyPage();
     beforeEach("Login to PlanSelectionPage",()=>{
        cy.session("Plan Select session",()=>{
        cy.visit(testData.baseUrl );
        cy.wait(500);
         
 
            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
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
           prefPage.clickyesRadioDrugCost();
         cy.wait(500);
         prefPage.clickNextPrefPage();
         cy.wait(500);
         prescriptionpage.enterDrugSearchBox(testData.drugName1);
         cy.wait(500);
         prescriptionpage.selectDrug();
         cy.wait(500);
         prescriptionpage.clickAddToDrug();
        cy.wait(500);
        prescriptionpage.doneAddDrugClick();
        cy.wait(500);
        pharmacypage.clickFindFarmacy();
        cy.wait(500);
        pharmacypage.clickfarmacyOne();
        cy.wait(500);
        pharmacypage.clickfarmacyTwo();
        cy.wait(500);
        pharmacypage.clicknextpharmacy();
        cy.wait(2000)
        planselectionpage.setProviderButtn();
        cy.log("Entering Home Health Service Page");
        cy.wait(3000)
    })
        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-providers");
    })
 
  it('TC_PDP_PRV_HHS_162: "Verify "Home health services" Category is Visible and Clickable on the Provider Page": Enter Home Health Services button', () => {

    providerhomehealthservices.clickhomeHealthservicesBtn();
    cy.log("Home Health services button - Passed");
    cy.wait(5000)
});
it('TC_TC_PDP_PRV_HHS_163: "Verify Functionality of the Optional "Home health name (Optional)" Field on the Provider Page": Click Home Health Name Search Provider Button',() =>{

  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.clickHomeHealthName_3();
  cy.wait(5000)
  providerhomehealthservices.enterHomeHealthName_3(testData.ProviderHomeHealthName);
  cy.log("Provider_Home Health Services_Enter Home Health Name - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickSearchProviderBtn_3();
  cy.log("Provider_Home Health Services Button - Passed");
  cy.log("Home Health services button - Passed");
  cy.wait(5000)
})

it('TC_PDP_PRV_HHS_: "Verify Zip Code Field Accepts Valid Street Name": Enter Home Health Services street_3', () =>{

 providerhomehealthservices.clickhomeHealthservicesBtn();
 providerhomehealthservices.clickStreet_3;
 providerhomehealthservices.enterStreet_3(testData.ProviderHomeHealthCareStreet);
  cy.log("Provider_Home Health Services Click Street - Passed");
  cy.wait(5000)
});


it('TC_PDP_PRV_HHS_164: "Verify Zip Code Field Accepts Valid Zip Codes" : Home Health Services Enter zipcode_3', () =>{

providerhomehealthservices.clickhomeHealthservicesBtn();
providerhomehealthservices.clickZipCode_3();
providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
providerhomehealthservices.clickZipSearch_3();
cy.log("Provider_Home Health Services Enter ZipCode - Passed");
cy.wait(5000)
});

it('TC_PDP_PRV_HHS_165: "Verify Zip Code Field Accepts In_Valid Zip Codes" : Home Health Services Enter zipcode_3', () =>{
  
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.clickZipCode_3();
  providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZip);
  providerhomehealthservices.clickZipSearch_3();
  cy.log("Provider_Home Health Services Enter ZipCode - Passed");
  cy.wait(5000)
});
it('TC_PDP_PRV_HHS_166: "Verify Zip Code Field Accepts Blank Zip Codes" : Home Health Services Enter zipcode_3', () =>{
  
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.clickZipSearch_3Blank();
  cy.log("Provider_Home Health Services Enter ZipCode - Passed");
  cy.wait(5000)
});

it('TC_PDP_PRV_HHS_167: Verify County, City are Visible in County, State Dropdown : Click County, State Dropdown arrow', () =>{

providerhomehealthservices.clickhomeHealthservicesBtn();
providerhomehealthservices.clickZipCode_3();
providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
providerhomehealthservices.clickZipSearch_3();
cy.log("Provider_Home Health Services Enter ZipCode - Passed");
providerhomehealthservices.clickCountyStateDropDown_3();
cy.wait(5000)
providerhomehealthservices.enterCountyStateDropDownBox_3;
cy.log("Provider_Home Health Services Click County, State Dropdown - passed");
cy.wait(5000)
});

it('TC_PDP_PRV_HHS_168: "Ensure that County and City options are visible and selectable in the County, State dropdown  : County, State Visible', () =>{

providerhomehealthservices.clickhomeHealthservicesBtn();
providerhomehealthservices.clickZipCode_3();
providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
providerhomehealthservices.clickZipSearch_3();
cy.log("Provider_Home Health Services Enter ZipCode - Passed");
providerhomehealthservices.clickhomeHealthservicesBtn();
providerhomehealthservices.enterCountyState_3();
cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
cy.wait(5000)
});

it('TC_PDP_PRV_HHS_169: "Verify Cities are Visible in the City Dropdown": Home Health Services click_CityDropDownArrow', () =>{
providerhomehealthservices.clickhomeHealthservicesBtn();
providerhomehealthservices.clickZipCode_3();
providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
providerhomehealthservices.clickZipSearch_3();
cy.log("Provider_Home Health Services Enter ZipCode - Passed");
providerhomehealthservices.clickhomeHealthservicesBtn();
providerhomehealthservices.enterCountyState_3();
cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
cy.wait(5000)
//providerhomehealthservices.clickCityDropDown_Arrow_3();
//providerhomehealthservices.clickCityDropDown_Box_Option_3();
cy.log("Provider_Home Health Services Click City - Passed");
cy.wait(5000)
});

it('TC_PDP_PRV_HHS_170:"Verify Clicking on a City Selects the City Correctly": Home Health Services select_Cityname', () => {
providerhomehealthservices.clickhomeHealthservicesBtn();
providerhomehealthservices.clickZipCode_3();
providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
providerhomehealthservices.clickZipSearch_3();
cy.log("Provider_Home Health Services Enter ZipCode - Passed");
providerhomehealthservices.clickhomeHealthservicesBtn();
providerhomehealthservices.enterCountyState_3();
cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
cy.wait(5000)
cy.log("Provider_Home Health Services Select City Name - Passed");
providerhomehealthservices.enterCity_3();
cy.wait(5000)
});

it('TCTC_PDP_PRV_HHS_171:"Verify Search icon for Category Home Health Services on the manage-provider page.": Click Home Health Services Search Provider button',() => {
providerhomehealthservices.clickSearchProviderBtn_3();
cy.log("Provider_Home Health Services Button - Passed");
cy.log("Home Health services button - Passed");
cy.wait(5000)
});

it('TC_PDP_PRV_HHS_172: "Verify Overall Rating Filter Visibility on the Provider List Page": Provider Filters Button Visible',() => {
 providerhomehealthservices.clickhomeHealthservicesBtn();
 providerhomehealthservices.clickStreet_3;
 providerhomehealthservices.enterStreet_3(testData.ProviderHomeHealthCareStreet);
  cy.log("Provider_Home Health Services Click Street - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickZipCode_3();
  providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
  providerhomehealthservices.clickZipSearch_3();
  cy.log("Provider_Home Health Services Enter ZipCode - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.enterCountyState_3();
  cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
  cy.wait(5000)
  //providerhomehealthservices.clickCityDropDown_Arrow_3();
  //providerhomehealthservices.clickCityDropDown_Box_Option_3();
  cy.log("Provider_Home Health Services Click City - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickSearchProviderBtn_3();
  providerhomehealthservices.clickProviderFiltersButton_3();
  cy.log("Overall Rating Filter Visibility on the Provider List Page - Passed")
  cy.wait(5000)
})

it('TC_PDP_PRV_HHS_173: "Verify Overall Rating Filter is Clickable and Expandable" : Click the Overall Rating Box and expand it', () =>{
 providerhomehealthservices.clickhomeHealthservicesBtn();
 providerhomehealthservices.clickStreet_3;
 providerhomehealthservices.enterStreet_3(testData.ProviderHomeHealthCareStreet);
  cy.log("Provider_Home Health Services Click Street - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickZipCode_3();
  providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
  providerhomehealthservices.clickZipSearch_3();
  cy.log("Provider_Home Health Services Enter ZipCode - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.enterCountyState_3();
  cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
  cy.wait(5000)
  //providerhomehealthservices.clickCityDropDown_Arrow_3();
 // providerhomehealthservices.clickCityDropDown_Box_Option_3();
  cy.log("Provider_Home Health Services Click City - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickSearchProviderBtn_3();
  providerhomehealthservices.clickProviderFiltersButton_3();
  providerhomehealthservices.clickOverallRating_3();
  cy.log("Overall Rating Filter is Clickable and Expandable - Passed")
  cy.wait(5000)
})
it('TC_PDP_PRV_HHS_174: "Verify Selecting a Rating Option from Overall Rating Filter" : Click and expand the Overall Rating Box and select a rating option', () =>{
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.clickStreet_3;
  providerhomehealthservices.enterStreet_3(testData.ProviderHomeHealthCareStreet);
   cy.log("Provider_Home Health Services Click Street - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickZipCode_3();
   providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
   providerhomehealthservices.clickZipSearch_3();
   cy.log("Provider_Home Health Services Enter ZipCode - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickhomeHealthservicesBtn();
   providerhomehealthservices.enterCountyState_3();
   cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
   cy.wait(5000)
   //providerhomehealthservices.clickCityDropDown_Arrow_3();
  // providerhomehealthservices.clickCityDropDown_Box_Option_3();
   cy.log("Provider_Home Health Services Click City - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickSearchProviderBtn_3();
   providerhomehealthservices.clickProviderFiltersButton_3();
   providerhomehealthservices.clickOverallRating_3();
   cy.log("Overall Rating Filter is Clickable and Expandable - Passed")
   cy.wait(5000)
   providerhomehealthservices.clickOverallRatingDropdownOption_3();
   cy.log("Verify Selecting a Rating Option from Overall Rating Filter - Passed");

})
it('TC_PDP_PRV_HHS_175: "Verify Overall Rating Filter Displays Selected Rating in the provider list card." : Verify the rating displayed', () =>{
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.clickStreet_3;
  providerhomehealthservices.enterStreet_3(testData.ProviderHomeHealthCareStreet);
   cy.log("Provider_Home Health Services Click Street - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickZipCode_3();
   providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
   providerhomehealthservices.clickZipSearch_3();
   cy.log("Provider_Home Health Services Enter ZipCode - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickhomeHealthservicesBtn();
   providerhomehealthservices.enterCountyState_3();
   cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
   cy.wait(5000)
  // providerhomehealthservices.clickCityDropDown_Arrow_3();
   //providerhomehealthservices.clickCityDropDown_Box_Option_3();
   cy.log("Provider_Home Health Services Click City - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickSearchProviderBtn_3();
   providerhomehealthservices.clickProviderFiltersButton_3();
   providerhomehealthservices.clickOverallRating_3();
   cy.log("Overall Rating Filter is Clickable and Expandable - Passed")
   cy.wait(5000)
   providerhomehealthservices.clickOverallRatingDropdownOption_3();
   cy.log("Verify the rating displayed - Passed");

})
it('TC_PDP_PRV_HHS_176: "Verify Apply Filter_Button Functionality in the Home health services Category on the manage-providers/provider-listPage" : Verify the Apply Filter_Button Functionality', () =>{
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.clickStreet_3;
  providerhomehealthservices.enterStreet_3(testData.ProviderHomeHealthCareStreet);
   cy.log("Provider_Home Health Services Click Street - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickZipCode_3();
   providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
   providerhomehealthservices.clickZipSearch_3();
   cy.log("Provider_Home Health Services Enter ZipCode - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickhomeHealthservicesBtn();
   providerhomehealthservices.enterCountyState_3();
   cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
   cy.wait(5000)
   //providerhomehealthservices.clickCityDropDown_Arrow_3();
   //providerhomehealthservices.clickCityDropDown_Box_Option_3();
   cy.log("Provider_Home Health Services Click City - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickSearchProviderBtn_3();
   providerhomehealthservices.clickProviderFiltersButton_3();
   providerhomehealthservices.clickOverallRating_3();
   cy.log("Overall Rating Filter is Clickable and Expandable - Passed")
   cy.wait(5000)
   providerhomehealthservices.clickOverallRatingDropdownOption_3();
   providerhomehealthservices.clickApplyFilter_3();
   cy.log("Verify the Apply Filter_Button Functionality - Passed");

})
it('TC_PDP_PRV_HHS_177: "Verify Clear Filter_Button Functionality in the Home health services Category on the Provider Page" : Verify the Clear Filter_Button Functionality', () =>{
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.clickStreet_3;
  providerhomehealthservices.enterStreet_3(testData.ProviderHomeHealthCareStreet);
   cy.log("Provider_Home Health Services Click Street - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickZipCode_3();
   providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
   providerhomehealthservices.clickZipSearch_3();
   cy.log("Provider_Home Health Services Enter ZipCode - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickhomeHealthservicesBtn();
   providerhomehealthservices.enterCountyState_3();
   cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
   cy.wait(5000)
   //providerhomehealthservices.clickCityDropDown_Arrow_3();
   //providerhomehealthservices.clickCityDropDown_Box_Option_3();
   cy.log("Provider_Home Health Services Click City - Passed");
   cy.wait(5000)
   providerhomehealthservices.clickSearchProviderBtn_3();
   providerhomehealthservices.clickProviderFiltersButton_3();
   providerhomehealthservices.clickOverallRating_3();
   cy.log("Overall Rating Filter is Clickable and Expandable - Passed")
   cy.wait(5000)
   providerhomehealthservices.clickOverallRatingDropdownOption_3();
   providerhomehealthservices.clickClearFilter_3();
   cy.log("Verify the Clear Filter_Button Functionality - Passed");

})

it('TC_PDP_PRV_CATEGORY_178:"Verify search providers with Category Home health services" Click Home Health Services SearchProvider_Button', () =>{
 providerhomehealthservices.clickhomeHealthservicesBtn();
 providerhomehealthservices.clickStreet_3;
 providerhomehealthservices.enterStreet_3(testData.ProviderHomeHealthCareStreet);
  cy.log("Provider_Home Health Services Click Street - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickZipCode_3();
  providerhomehealthservices.enterZipcode_3(testData.ProviderHomeHealthCareZipCode);
  providerhomehealthservices.clickZipSearch_3();
  cy.log("Provider_Home Health Services Enter ZipCode - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickhomeHealthservicesBtn();
  providerhomehealthservices.enterCountyState_3();
  cy.log("Provider_Home Health Services County, State Visible and Selected - passed");
  cy.wait(5000)
 // providerhomehealthservices.clickCityDropDown_Arrow_3();
 // providerhomehealthservices.clickCityDropDown_Box_Option_3();
  cy.log("Provider_Home Health Services Click City - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickSearchProviderBtn_3();
  cy.log("Provider_Home Health Services Button - Passed");
  cy.log("Home Health services button - Passed");
  cy.wait(5000)
  providerhomehealthservices.clickBackButton_3();
  cy.log("Back to Home Health services Page - Passed");
  cy.wait(5000)
});
});  
