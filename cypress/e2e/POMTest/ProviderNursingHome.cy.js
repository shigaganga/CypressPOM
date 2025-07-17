import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PlanselectionPage from '../pages/PlanselectionPage.js';
import longTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import MedicarePage from '../pages/MedicarePage.js';
import ProviderNursingHomeAndRehabPage from '../pages/ProviderNursingHomeAndRehabPage.js';

describe('ProviderNursingHomeTabTest', () => {

    let testData = null;
    before(() => {
          // cy.fixture('LoginFixture').then((data) => {
            //   testData=data;
            cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
        });
    });

   const lPage = new LoginPage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const prefPage = new PreferencePage();
        const prescriptionpage=new PrescriptionPage();
        const pharmacypage=new PharmacyPage();
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
         const planselectionpage= new PlanselectionPage();
        
    beforeEach(() => {
        cy.session("Provider Nursing Home",()=>{
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
        planselectionpage.setProviderButtn();
      
        
        });
        cy.visit(testData.manageProviders_url);
        //const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        ProviderNursingHomePage.clickNursingHometabSelector();
        cy.wait(1000);
    });

    it('TC_PDP_PRV_NUR_161: validate the functionality of Category', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        //User should be able to see the heading "Find nursing homes including rehab services near me" below the "Hospital near me" heading.
        ProviderNursingHomePage.verifyNursingHometitle();
        //  and User should be able to see 'Search Provider'
        ProviderNursingHomePage.isSearchButtonPresent();
        ProviderNursingHomePage.SearchButtonContainsText();
        ProviderNursingHomePage.verifyInputVisibleByPlaceholder('Nursing');
        ProviderNursingHomePage.verifyInputVisibleByLabel('Radius(miles)');
        ProviderNursingHomePage.checkElementVisibleBymatLabel('Nursing')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('Radius(miles)')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('Street(Optional)')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('Zipcode (Click search for County, State and City)')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('County, State')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('City')

    });

   /* it('TC_PDP_PRV_NUR_151: validate the functionality of Search button ', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        ProviderNursingHomePage.EnterRadiusinSearchProvider(testData.ProvNursingHome_RadiusinSearchProvider);
        ProviderNursingHomePage.clickSearchButtonPresent();
        ProviderNursingHomePage.checkListofProviders();
        ProviderNursingHomePage.checkProviderSearchArrowClose();
        ProviderNursingHomePage.checkProviderfilterArrowClose();
        ProviderNursingHomePage.checkProviderListArrowOpen();
        ProviderNursingHomePage.CheckProviderListPageNavLast();
        ProviderNursingHomePage.CheckProviderListPageNavNext();
        ProviderNursingHomePage.CheckProviderListPageNavPrevious();
        ProviderNursingHomePage.CheckProviderListPageNavFirst();
    });*/  //not in manual test case file

    it('TC_PDP_PRV_NUR_166: validate the functionality of Search Provider Dropdown arrow ', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        ProviderNursingHomePage.EnterRadiusinSearchProvider(testData.ProvNursingHome_RadiusinSearchProvider);
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(200);
        ProviderNursingHomePage.ClickOpenSearchProverSection();
        ProviderNursingHomePage.checkSearchProviderbyLabel('User Address');
        ProviderNursingHomePage.checkSearchProviderbyLabel('Search Provider');
        ProviderNursingHomePage.checkSearchProviderbyLabel('Radius(miles)');
        ProviderNursingHomePage.checkSearchProviderbyLabel('Nursing home or');
        ProviderNursingHomePage.checkSearchProviderbyLabel('Category');
        ProviderNursingHomePage.checkSearchProviderbyLabel('Street(Optional)');
        ProviderNursingHomePage.checkSearchProviderbyLabel('Zipcode (Click search for County, State and City)');
        ProviderNursingHomePage.checkSearchProviderbyLabel('County, State');
        ProviderNursingHomePage.checkSearchProviderbyLabel('City');
    });

    it('TC_PDP_PRV_NUR_167: validate the functionality of Provider Filter down arrow', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        ProviderNursingHomePage.EnterRadiusinSearchProvider(testData.ProvNursingHome_RadiusinSearchProvider);
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(200);
        // click open prover filter
        ProviderNursingHomePage.ClickOpenProverFilterSection();
        ProviderNursingHomePage.checkProviderfilters('Distance');
        ProviderNursingHomePage.checkProviderfilters('Overall Rating');
        ProviderNursingHomePage.checkProviderfilters('Apply filter');
        ProviderNursingHomePage.checkProviderfilters('Clear filter');
    });

    it('TC_PDP_PRV_NUR_168: verify the functionality of Distance text box ', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        ProviderNursingHomePage.EnterRadiusinSearchProvider(testData.ProvNursingHome_RadiusinSearchProvider);
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(200);
        //enter 70 and search 
        // click open search prover
        ProviderNursingHomePage.ClickOpenSearchProverSection();
        ProviderNursingHomePage.EnterRadiusinProviderSectionDistance(testData.ProvNursingHome_RadiusinProviderSectionDistance);
        ProviderNursingHomePage.ClickProviderSearchButtoninProviderSection();
        ProviderNursingHomePage.IsProviderListIsLoaded();
        cy.wait(200);
    });

    it('TC_PDP_PRV_NUR_169: validate that the Overall rating dropdown  ', () => {
        cy.wait(200);
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        ProviderNursingHomePage.EnterRadiusinSearchProvider(testData.ProvNursingHome_RadiusinSearchProvider);
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(200);
        ProviderNursingHomePage.ClickOpenProverFilterSection();
        cy.wait(200);
        ProviderNursingHomePage.ClickOveralldropdowntoExpand();
        cy.wait(200);
        ProviderNursingHomePage.CheckRatingforallFivestarDropdown();
    });

    it('TC_PDP_PRV_NUR_170: validate functionality of Overall rating rating', () => {

        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        ProviderNursingHomePage.EnterRadiusinSearchProvider(testData.ProvNursingHome_RadiusinSearchProvider);
        ProviderNursingHomePage.clickSearchButtonPresent();
        ProviderNursingHomePage.ClickOpenProverFilterSection();
        cy.wait(200);
        ProviderNursingHomePage.ClickOveralldropdowntoExpand();
        ProviderNursingHomePage.SelectRating3();
        cy.wait(200);
        ProviderNursingHomePage.ClickApplyFilterButton();
        ProviderNursingHomePage.IsProviderListIsLoaded();
        ProviderNursingHomePage.CheckThreeStarRatingofFirstResult();
    });

    it('TC_PDP_PRV_NUR_172: validate the functionality of Clear filter button', () => {
        cy.wait(1000);
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        ProviderNursingHomePage.EnterRadiusinSearchProvider(testData.ProvNursingHome_RadiusinSearchProvider);
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(1000);
        ProviderNursingHomePage.ClickOpenProverFilterSection();
        ProviderNursingHomePage.ClickOveralldropdowntoExpand();
        ProviderNursingHomePage.SelectRating3();
        cy.wait(200);
        ProviderNursingHomePage.ClickApplyFilterButton();
        ProviderNursingHomePage.IsProviderListIsLoaded();
        ProviderNursingHomePage.CheckThreeStarRatingofFirstResult();
        // click open prover filter
        ProviderNursingHomePage.ClickOpenProverFilterSection();
        ProviderNursingHomePage.ClickClearButton();
        ProviderNursingHomePage.IsProviderListIsLoaded();

    });



});
