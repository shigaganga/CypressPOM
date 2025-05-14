import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import ProviderNursingHomeAndRehabPage from '../pages/ProviderNursingHomeAndRehabPage.js';

describe('ProviderNursingHomeTabTest', () => {

    let testData = null;
    before(() => {
           cy.fixture('LoginFixture').then((data) => {
               testData=data;
        });
    });

    beforeEach(() => {
        cy.session("Provider session", () => {
            cy.visit(testData.baseUrl);

            const lPage = new LoginPage();
            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();   
            
            const homepage = new HomePage();
            const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
            ProviderNursingHomePage.SpecialHomePageEnterEmail(testData.ProvNursingHome_PageEnterEmail);
            ProviderNursingHomePage.clickhealthArrow();
            ProviderNursingHomePage.clickGoodHealth();
            ProviderNursingHomePage.enterName(testData.ProvNursingHome_PageEnterName);
            homepage.enterLifeexpectancy(testData.ProvNursingHome_Lifeexpectancy);
            homepage.clickSearch();
            cy.wait(200)
            homepage.nextHomeClick();
            cy.wait(1000)
            ProviderNursingHomePage.clickSearchPrefNo();
            // cy.wait(1000);
            const ldpage = new LandingPage();
            ldpage.clickSearchPrefNextbut();
            cy.wait(200);
            ProviderNursingHomePage.clickProviderPagebtn();
            cy.wait(1000);
        });
        cy.visit(testData.manageProviders_url);
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        ProviderNursingHomePage.clickNursingHometabSelector();
        cy.wait(1000);
    });

    it('TC_PDP_PRV_NUR_150: validate the functionality of Category', () => {
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

    it('TC_PDP_PRV_NUR_151: validate the functionality of Search button ', () => {
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
    });

    it('TC_PDP_PRV_NUR_152: validate the functionality of Search Provider Dropdown arrow ', () => {
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

    it('TC_PDP_PRV_NUR_153: validate the functionality of Provider Filter down arrow', () => {
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

    it('TC_PDP_PRV_NUR_154: verify the functionality of Distance text box ', () => {
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

    it('TC_PDP_PRV_NUR_155: validate that the Overall rating dropdown  ', () => {
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

    it('TC_PDP_PRV_NUR_156: validate functionality of Overall rating rating', () => {

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

    it('TC_PDP_PRV_NUR_157: validate the functionality of Clear filter button', () => {
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
