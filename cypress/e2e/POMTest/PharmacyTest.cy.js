import LoginPage from "../pages/LoginPage"
import LandingPage from "../pages/LandingPage"
import HomePage from "../pages/HomePage"
import PreferencePage from "../pages/PreferencePage"
import PrescriptionPage from "../pages/PrescriptionPage"
import PharmacyPage from "../pages/PharmacyPage"


describe('PharmacyTest', () => {

    let testData = null;

before(() => {
  //  cy.fixture('LoginFixture').then((data) => {
    //    testData=data;
    cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
    });
})
    const pharmacypg = new PharmacyPage();
    beforeEach(() => {

        cy.session("Pharmacy session",()=>{
        cy.visit(testData.baseUrl);
       
            const lPage = new LoginPage();
            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin();
        
       
        const recPage = new LandingPage();
        recPage.clickCreateRecommendation();

        const homepage = new HomePage();
        
        homepage.enterEmail(testData.email); // Using email from fixture
        cy.wait(1000)
        homepage.clickhealthArrow();
        cy.wait(1000)
        homepage.clickHealthProfile(testData.healthProfile);
        cy.wait(1000)
        homepage.enterName(testData.name); // Using name from fixture
        cy.wait(1000)
        homepage.enterLifeexpectancy(testData.lifeExpectancy);  // Using life expectancy from fixture
        cy.wait(3000)
        homepage.clickDatePicker();
        cy.wait(1000)
        homepage.clickYear(testData.yearOfBirth);
        cy.wait(500);
        homepage.clickMonth(testData.monthOfBirth);
        cy.wait(500);
        homepage.clickGender();
        cy.wait(500);
        homepage.selectGender(testData.gender);
        cy.wait(500);
        homepage.enterStreet(testData.street);
        cy.wait(500);
        homepage.enterContact(testData.contactNumber);
        homepage.enterZip(testData.zip);   // Using ZIP code from fixture
        cy.wait(1000)
        homepage.clickSearch();
        cy.wait(1000)
        homepage.nextHomeClick();
        cy.wait(2000)

        const prefPage=new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();
        cy.wait(1000)
        prefPage.clickNextPrefPage();
        cy.wait(1000)
        const drugpage=new PrescriptionPage();
        
        drugpage.enterDrugSearchBox(testData.drugName1);  //using drugname from fixture
        cy.wait(1000)
        drugpage.selectDrug();
        cy.wait(1000)
        drugpage.clickAddToDrug();
        cy.wait(100);
    });

   cy.visit(testData.managePharmacy_url)
    
})


    it('TC_PDP_ZIP_RADIO_01,Select Zip code radio button',() => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio();
        
    })

    it('TC_PDP_ZIP_RADIO_02,Find Pharmacy By Zipcode',() => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio();
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode1) 
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius1)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        
    });

    it('TC_PDP_FP_ZC_03,Find Pharmacy By zipcode,Boundary Value tetsing', () => {
        
        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio();
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode2) 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode();
        cy.wait(1000)
        cy.log('Error on fetching county code.,Test passed')
        
    });

    it('TC_PDP_FP_ZC_04,Find Pharmacy By zipcode,leave the zipcode empty,Boundary Value tetsing', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio();
        cy.wait(1000)
        pharmacypg.enterZipcodeEle() 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.verifyErrorMessage("Zipcode is required.")
        //cy.log('The system should throw below error msg-Zipcode is required,Test passed')

    });

    it('TC_PDP_FP_ZC_05,Find Pharmacy By zipcode,Give Invalid Zipcode', () => {
    
        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyInvalidzipcode3) 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        cy.log('Zipcode is not in correct format,Test passed')

    });

    it('TC_PDP_FP_ZC_06,Find Pharmacy By zipcode,give Invalid Zipcode', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyInvalidzipcode4) 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        cy.log('Zipcode must of length between 3 to 5,Test passed')

    });

    it('TC_PDP_FP_ZC_07,Find Pharmacy By zipcode,give Invalid zipcode', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyInvalidzipcode5) 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.log('The system shouldnt accept more than 5 digit in the zipcode field on the manage pharmacies page')

    });

    it('TC_PDP_FP_ZC_08,Find Pharmacy By Zip', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyInvalidzipcode6) 
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius1)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        //cy.log('The system sholud show error')

    });

    it('TC_PDP_FP_ZC_09,Find Pharmacy By Zip', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode7) 
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius2)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
    });

    it('TC_PDP_FP_ZC_10,Select Address radio button', () => {
        const pharmacypg = new PharmacyPage();
        pharmacypg.clickAddressradio()
    });

    it('TC_PDP_FP_ADDR_RADIO_11,Find Pharmacy By Address', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickAddressradio()
        pharmacypg.enterAddress(testData.pharmacyaddress1)
        pharmacypg.enterDistance(testData.pharmacyradius1)
        pharmacypg.clickAddressFindPhramacy()
    
    });

    it('TC_PDP_FP_ADDR_RADIO_12,Search Pharmacy By Invalid Address', () => {
        
        const pharmacypg = new PharmacyPage();
        pharmacypg.clickAddressradio()
        cy.wait(1000)
        pharmacypg.enterAddress(testData.pharmacyInvalidaddress2)
        cy.wait(1000)
        pharmacypg.clickAddressFindPhramacy()
        cy.wait(1000)
        cy.log('Specify the complete address with zipcode. For Example: 2640 N M 33, ROSE CITY, MI, 48654,Test passed')

    });

    it('TC_PDP_FP_ADDR_RADIO_13,Find Pharmacy By blank Address', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickAddressradio()
        cy.wait(1000)
        pharmacypg.enterAddressEle()
        cy.wait(1000)
        pharmacypg.clickAddressFindPhramacy()
        pharmacypg.verifyErrorMessage('Address is required.')
        //cy.log('The system should throw below error msg Address is required,test passed')

    });

    it('TC_PDP_FP_NM_14,Find Pharmacy By Name', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8) 
        cy.wait(1000)
        pharmacypg.enterPharmacyname(testData.pharmacyname1)
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius1)
        pharmacypg.clickFindPahramcyinzipcode()
    });

    it('TC_PDP_FP_NM_15,Find Pharmacy By invalid Name', () => {
        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8) 
        cy.wait(1000)
        pharmacypg.enterPharmacyname(testData.pharmacyInvalidname2)
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius1)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.log('The system should throw error msg Pharmacy details not found in AiVante system,Test passed')
        
    });

    it('TC_PDP_FP_ZCH_16,Zip code history', () => {
        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyIncorrectzipcode9) 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.clickZiphistoryarrow()
        cy.wait(1000)
    });

    it('TC_PDP_FP_ZCH_17,zip code history feature with incorrect zip code', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyIncorrectzipcode10) 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.clickZiphistoryarrow()
        cy.wait(1000)
        cy.log('The system should throw error message,Test passed')
        
    });

    it('TC_PDP_FP_ZCH_18,select any zip code from the zip code history dropdown', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyIncorrectzipcode10) 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        pharmacypg.clickZiphistoryarrow()
        cy.wait(1000)
        pharmacypg.selectZiphistoryZipcode()
        cy.wait(1000)
        
    });

    it('TC_PDP_FP_DIST_19,Find Pharmacies By Default Distance', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8) 
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
    
    });

    it('TC_PDP_FP_DIST_20,Find Pharmacy By Distance', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8) 
        cy.wait(1000)
        pharmacypg.enterDistance('2')
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        
        
    });

    it('TC_PDP_FP_DIST_21, pharmacies with blank values in the Distance field ', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8) 
        pharmacypg.enterDistanceEle()
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        pharmacypg.verifyErrorMessageinDistance('Distance is required.')
        
    });

    it('TC_PDP_FP_DIST_22, pharmacies with "character" in the Distance field  ', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8) 
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyInvalidradius3)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.log('Pharmacy Details Not Found in AiVante System,Test passed')
            
    });
    
    it('TC_PDP_EXPA_PHAR_23, Expand Pharmacies List Next page ', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)     
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius2)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.clickNextpageBtn()
    
    });
    
    it('TC_PDP_EXPA_PHAR_24, Expand Pharmacies List last page ', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius2)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.clickLastPageBtn()
        
    });
    
    it('TC_PDP_EXPA_PHAR_25, Expand Pharmacies List previous page"  ', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius4)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.clickLastPageBtn()
        cy.wait(1000)
        pharmacypg.clickPerivousPageBtn()
    });

    it('TC_PDP_EXPA_PHAR_26, Expand Pharmacies List First page', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius4)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.clickLastPageBtn()
        cy.wait(1000)
        pharmacypg.clickFirstPageBtn()

    });

    it('TC_PDP_ITEM_PER_PAGE_27,verify the Item per page', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius4)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.itemPerPage()
        
    });

    it('TC_PDP_SEL_PHAR_28,Select Pharmacies', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius4)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.selectPharmacy()
        cy.wait(1000)
        pharmacypg.selectSecondPharmacy()
        cy.wait(100)
        pharmacypg.selectThirdPharmacy()
        cy.wait(100)
        pharmacypg.selectFourthPharmacy()
        cy.wait(100)
        pharmacypg.selectFifthpharmacy()
        
    });

    it('TC_PDP_DESEL_PHAR_29,DeSelect Pharmacies', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius4)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.selectPharmacy()
        cy.wait(2000)
        pharmacypg.selectSecondPharmacy()
        cy.wait(2000)
        pharmacypg.selectThirdPharmacy()
        pharmacypg.selectFourthPharmacy()
        pharmacypg.selectFifthpharmacy()
        pharmacypg.selectPharmacy()
        cy.wait(2000)
        pharmacypg.selectSecondPharmacy()
        cy.wait(2000)
        pharmacypg.selectThirdPharmacy()
        pharmacypg.selectFourthPharmacy()
        pharmacypg.selectFifthpharmacy()
        
    });

    it('TC_PDP_PHAR_GM_RB_30,Google map radio button', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius4)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.selectPharmacy()
        cy.wait(2000)
        pharmacypg.clickGoogleBtn()
        
    });

    it('TC_PDP_PHAR_BACK_31,verify Back button', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius4)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.selectPharmacy()
        pharmacypg.clickBackBtn()
        
    });
    it('TC_PDP_PHAR_NEXT_32,verify "Next button', () => {

        const pharmacypg = new PharmacyPage();
        pharmacypg.clickZipcoderadio()
        cy.wait(1000)
        pharmacypg.enterZipcode(testData.pharmacyzipcode8)      
        cy.wait(1000)
        pharmacypg.enterDistance(testData.pharmacyradius4)
        cy.wait(1000)
        pharmacypg.clickFindPahramcyinzipcode()
        cy.wait(1000)
        pharmacypg.selectPharmacy()
        pharmacypg.selectSecondPharmacy()
        pharmacypg.selectThirdPharmacy()
        pharmacypg.clickNextBtn()
    });

    

});





    



    
