import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PlanselectionPage from '../pages/PlanselectionPage.js';
import longTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import MedicarePage from '../pages/MedicarePage.js';
import ViewRecommendationPage from "../pages/ViewRecommendationPage.js";

describe("LandingPage test", () => {
  let testData = null;
  const loginPage = new LoginPage();
  let landingpage;
  let homepage;

  before(() => {
    
    //cy.fixture("LoginFixture").then((data) => {
      //testData = data;
     cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
    });
  });

  beforeEach(() => {
    if (!testData || !testData.username || !testData.password || !testData.baseUrl) {
      throw new Error("Test data or required fields not loaded!");
    }

    cy.session("Home session", () => {
      cy.visit(testData.baseUrl);
      cy.wait(1000);

      loginPage.setUserName(testData.username);
      cy.wait(500);

      loginPage.setPassword(testData.password);
      cy.wait(500);

      loginPage.clickLoginBtn();
      cy.wait(2000);
    });

    cy.visit(testData.landingPage_url);
    cy.wait(1000);

    //Instantiate Page Objects OUTSIDE the session
    landingpage = new LandingPage();
    homepage = new HomePage();
  });
 function createFullRecommendationFlow(data) {
     cy.wait(500);
        landingpage.clickCreateRecommendation();
      cy.wait(1000);
      homepage.enterEmail(testData.email);
      cy.wait(500);
      homepage.enterName(testData.name);
      cy.wait(500);
      homepage.clickDatePicker();
      cy.wait(500);
      homepage.clickYear(testData.yearOfBirth);
      cy.wait(500);
      homepage.clickMonth(testData.monthOfBirth);
      cy.wait(500);
      homepage.clickGender();
      cy.wait(500);
      homepage.selectGender(testData.gender);
      cy.wait(500);
      homepage.enterZip(testData.zip);
      cy.wait(500);
      homepage.clickSearch();
      cy.wait(1500);
      homepage.entercommunicationEmail(testData.communicationEmail);
      cy.wait(1500);
      homepage.enterContact(testData.contactNumber);
      cy.wait(500);
      homepage.clickhealthArrow();
      cy.wait(500);
      homepage.clickHealthProfile(testData.healthProfile);
      cy.wait(500);
      homepage.enterLifeexpectancy(testData.lifeExpectancy);
      cy.wait(500);
      homepage.selectTobaccoOption(testData.tobacco);
      cy.wait(500);
      homepage.selectTaxFilingStatus(testData.taxFilingStatus);
      cy.wait(500);
      homepage.clickMagiTier(testData.magiTier);
      cy.wait(500);
      //homepage.clickMaggiTireOptions(testData.magiTier);
     // cy.wait(500);
      homepage.selectConciergeOption(testData.conceirge);
      cy.wait(500);
      homepage.nextHomeClick();
      cy.wait(500);

      const prefPage = new PreferencePage();
      prefPage.clickyesRadioDrugCost();
      cy.wait(1500);
      prefPage.clickNextPrefPage();
      cy.wait(1500);

      const drugpage = new PrescriptionPage();
      drugpage.enterDrugSearchBox(testData.drugName1);
      cy.wait(500);
      drugpage.selectDrug();
      cy.wait(500);
      drugpage.clickAddToDrug();
      cy.wait(500);
      drugpage.doneAddDrugClick();
      cy.wait(500);

      const Pharmacypage = new PharmacyPage();
      Pharmacypage.clickFindFarmacy();
      cy.wait(500);
      Pharmacypage.clickfarmacyOne();
      cy.wait(500);
      Pharmacypage.clickfarmacyTwo();
      cy.wait(500);
      Pharmacypage.clicknextpharmacy();
      cy.wait(500);

      const planselctPg = new PlanselectionPage();
      const medicarepg = new MedicarePage();
      const longtermPg = new longTermPage();

      planselctPg.medicareAdvantageClick();
      cy.wait(500);
      planselctPg.planWellCaresimpleClick();
      cy.wait(500);
      planselctPg.donePlanSelectionClick();
      cy.wait(500);
      planselctPg.tickClick();
      cy.wait(500);
      planselctPg.medicareclick();
      cy.wait(500);
      medicarepg.medicarArrowClick();
      cy.wait(500);
      medicarepg.submitMedicareClick();
      cy.wait(500);
      medicarepg.backToplanSelectionClick();
      cy.wait(1000);

      planselctPg.longtermClick();
      cy.wait(500);

      longtermPg.submitLongTermClick();
      cy.wait(500);
      // longtermPg.pdfclick();
       cy.wait(500);
      longtermPg.backLongTermToPlanSelectionClick();
      cy.wait(500);
      planselctPg.aivanteImagClick();
  }
  it("TC_PDP_REC_01:recommendation button navigation", () => {
    landingpage.clickCreateRecommendation();
    cy.wait(1000);
  });

  it("TC_PDP_REC_02:Verify Tsign", () => {
    landingpage.clickTsign();
  });
   it('TC_PDP_REC_03:Verify recommendationRadioButten active', () => {
        cy.wait(1000);
        landingpage. verifyRecommendationRadioBut();
    });

    it('TC_PDP_REC_04:Recommendation text field,logout', () => {
        landingpage.clickTsign();
        landingpage.clickLogOut();
        // Assert user is on login page again
        cy.url().should('include', '/login');
    });
    it('TC_PDP_CRT_REC_04:Verify create Recommendation', () => {
        createFullRecommendationFlow(testData);
      landingpage.verifyEmail();
});
 it('TC_PDP_REC_05:Verify  Recommendation radio button', () => {
        landingpage.verifyRecommendationRadioBut();
        cy.wait(2000);
    });
it(' TC_PDP_REC_LIST_06:Verify  Recommendation list', () => {
        landingpage.clickEmail();
        cy.wait(2000);
    });
      it('TC_PDP_SRH_REC_EMAIL_07:Verify the filter by email', () => {
     landingpage.clickEmail();
    });

     it('TC_PDP_SRH_REC_NAME_08:Verify the filter by name', () => {
        landingpage. enterFilterEmail(testData.name);//Filter by recommendation email 
        cy.wait(2000);
    });

  it('TC_PDP_CRT_REC_09:create recommendation', () => {
     createFullRecommendationFlow(testData); 
    });
it('TC_PDP_DEL_REC_10:delete recommendation', () => {
     createFullRecommendationFlow(testData);
       landingpage.clickDeletePlanIcon();
       landingpage.clickDeleteWindowBut();
    });
   
    it('TC_PDP_SRH_REC_EMAIL_11:Verify the filter by email', () => {
        landingpage. enterFilterEmail(testData.email);//Filter by recommendation email 
        cy.wait(2000);
    });
    

    it('TC_11_PDP_EXP_REC_PLAN_11:Verify the Expand Plan', () => {

     createFullRecommendationFlow(testData);
        landingpage.clickRecommendationRadioBut();
        cy.wait(500);
        landingpage.enterFilterEmail(testData.email);
        landingpage.clickExpandRecomm();
        cy.wait(500);
    });
      it('TC_11_PDP_EXP_REC_PLAN_11:Verify the collapse Plan', () => {

     createFullRecommendationFlow(testData);
     cy.wait(1500);
        landingpage.clickRecommendationRadioBut();
        cy.wait(500);
        landingpage.enterFilterEmail(testData.email);
        landingpage.clickExpandRecomm();
        cy.wait(500);
        landingpage.clickCollapsesPlan();
        cy.wait(500);
    });
 it('TC_PDP_EXA_REC_LST_13:expand next page', () => {
landingpage. clickNextPagesymbol();

 });
it('TC_PDP_EXA_REC_LST_14:expand last page', () => {
landingpage.clickLastPagesymbol();

 });
 it('TC_PDP_EXA_REC_LST_15:expand previous page', () => {

landingpage. clickPreviousPagesymbol();
 });
  it('TC_PDP_EXA_REC_LST_16:expand first page', () => {

landingpage. clickFirstPagesymbol();
 });
 it('TC_PDP_ITEM_PER_PAGE_17:item per page by selector number', () => {

landingpage. clickitemPerPageBySelectorNumber();
 
 });

it('TC_PDP_ITEM_PER_PAGE_18:item per page by dropdown', () => {

landingpage. clickitemPerPageByDropdown();
 });
 it('TC_PDP_EDT_ICON_19:Edit icon functionaltest', () => {
  landingpage.clickExpandRecomm();
cy.wait(500);
landingpage. editRecommendationClick();
 cy.wait(500);
 });
 it('TC_PDP_EDT_ICON_20:Edit existing recommendation', () => {


landingpage.clickExpandRecomm();
cy.wait(5000);
landingpage. editRecommendationClick();
 cy.wait(1500);
      homepage.enterName(testData.editName);
      cy.wait(500);
      homepage.enterContact(testData.editNumber);
      homepage.nextHomeClick();
      cy.wait(500);

      const prefPage = new PreferencePage();
      prefPage.clicknoRadioDrugCost();
      cy.wait(500);
      prefPage.clickNextPrefPage();
      cy.wait(500);
      const planselctPg = new PlanselectionPage();
      const medicarepg = new MedicarePage();
      const longtermPg = new longTermPage();
        planselctPg.medicareAdvantageClick();
      cy.wait(500);
      planselctPg.humanaGoldPlusPlanClick();
       planselctPg.donePlanSelectionClick();
      cy.wait(500);
      planselctPg.tickClick();
      cy.wait(500);
      planselctPg.longtermClick();
      cy.wait(500);

      longtermPg.submitLongTermClick();
      cy.wait(500);
      // longtermPg.pdfclick();
       cy.wait(500);
      longtermPg.backLongTermToPlanSelectionClick();
      cy.wait(500);
      planselctPg.aivanteImagClick();
 
 });
it('TC_PDD_VIEW_REC_21:View icon functionaltest', () => {

   cy.wait(500);
  landingpage.clickExpandRecomm();
cy.wait(500);
landingpage.viewGreyEyeRecomendationClick();
 cy.wait(500);
 });
 it('TC_PDD_VIEW_REC_22:View icon gray functionaltest', () => {
  cy.wait(500);
  landingpage.clickExpandRecomm();
cy.wait(5000);
//landingpage.viewRedEyeRecommendationClick();
landingpage.viewGreyEyeRecomendationClick()
 cy.wait(500);
 });
 it('TC_PDP_BACK_24:backbutton functionaltest', () => {
  landingpage.clickExpandRecomm();
   cy.wait(500);
  landingpage.viewGreyEyeRecomendationClick();
 cy.wait(500);
 const viewRecPage=new ViewRecommendationPage();
 viewRecPage.clickBackEle();
 cy.wait(5000);
 });
 it('TC_PDP_VIEW_LC_PHAR_25:View Lowcost Pharmacy,navigation', () => {
  landingpage.clickExpandRecomm();
   cy.wait(500);
  landingpage.viewGreyEyeRecomendationClick();
 cy.wait(500);
 const viewRecPage=new ViewRecommendationPage();
 viewRecPage.clickLowCostPharmacy();
 cy.wait(5000);
 });
  it('TC_PDP_VIEW_LC_PHAR_27:View Lowcost Pharmacy,functional', () => {
  landingpage.clickExpandRecomm();
   cy.wait(500);
  landingpage.viewGreyEyeRecomendationClick();
 cy.wait(500);
 const viewRecPage=new ViewRecommendationPage();
 viewRecPage.clickLowCostPharmacy();
 cy.wait(5000);
 const pharmacypage=new PharmacyPage();
 pharmacypage.clickpharmacyfilter();
 pharmacypage. enterLowcostRadius(testData.lowcostPharmacyRadius);
 });
  it('TC_PDP_SB_28:submit buttonView Lowcost Pharmacy', () => {
  landingpage.clickExpandRecomm();
   cy.wait(500);
  landingpage.viewGreyEyeRecomendationClick();
 cy.wait(500);
 const viewRecPage=new ViewRecommendationPage();
 viewRecPage.clickLowCostPharmacy();
 cy.wait(5000);
 const pharmacypage=new PharmacyPage();
 pharmacypage.clickpharmacyfilter();
 pharmacypage. enterLowcostRadius(testData.lowcostPharmacyRadius);

 pharmacypage.clickLowcostSubmit()
  });
  it('TC_PDP_VIEW_LC_PHAR_29:add/remove prescription navigation testing', () => {
    cy.wait(5000);
  landingpage.clickExpandRecomm();
   cy.wait(500);
  landingpage.viewGreyEyeRecomendationClick();
 cy.wait(500);
 const viewRecPage=new ViewRecommendationPage();
 viewRecPage.clickLowCostPharmacy();
 cy.wait(500);
  const pharmacypage=new PharmacyPage();
 pharmacypage.clickpharmacyfilter();
 pharmacypage. enterLowcostRadius(testData.lowcostPharmacyRadius);
 pharmacypage.clickLowcostSubmit();
 pharmacypage.clickAddOrRemovePrescription();
  });
    it('TC_PDP_VIEW_LC_PHAR_30:add/remove prescription functional testing', () => {
    cy.wait(500);
  landingpage.clickExpandRecomm();
   cy.wait(500);
  landingpage.viewGreyEyeRecomendationClick();
 cy.wait(500);
 const viewRecPage=new ViewRecommendationPage();
 viewRecPage.clickLowCostPharmacy();
 cy.wait(500);
  const pharmacypage=new PharmacyPage();
 pharmacypage.clickpharmacyfilter();
 pharmacypage. enterLowcostRadius(testData.lowcostPharmacyRadius);
 pharmacypage.clickLowcostSubmit();
 pharmacypage.clickAddOrRemovePrescription();
 cy.wait(500);
 const drugpage = new PrescriptionPage();
 //  drugpage.clickAddAnotherDrug();
    
  });

  it('TC_PDP_PVOVIDER_05:click provider', () => {
    const landingpage = new LandingPage();
    landingpage.clickproviderBut();
    cy.wait(2000);
    });
});
