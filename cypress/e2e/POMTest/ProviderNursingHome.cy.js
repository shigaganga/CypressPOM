import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
// import LongTermPage from '../pages/LongTermPage.js';
// import MedicareAdvantagepage from '../pages/MedicarePage.js';
// import PharmacyPage from '../pages/PharmacyPage.js';
import ProviderNursingHomeAndRehabPage from '../pages/ProviderNursingHomeAndRehabPage.js';
// import ProviderPage from './ProviderPage';
import PrescriptionPage from '../pages/PrescriptionPage.js';

describe('ProviderNursingHomeTabTest', () => {
    beforeEach(() => {
        cy.session("Provider session", () => {
            cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

            cy.fixture('LoginFixture').then((data) => {
                const lPage = new LoginPage();
                lPage.setUserName(data.username);
                lPage.setPassword(data.password);
                lPage.clickLoginBtn();
                //  lPage.verifyLogin(); 
            });

            const homepage = new HomePage();

            const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
            ProviderNursingHomePage.SpecialHomePageEnterEmail('abc@gmail.com');
            ProviderNursingHomePage.clickhealthArrow();
            ProviderNursingHomePage.clickGoodHealth();
            ProviderNursingHomePage.enterName("niv");

            homepage.enterLifeexpectancy("86");


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
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/manage-providers');
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        ProviderNursingHomePage.clickNursingHometabSelector();
        cy.wait(1000);
    });


    //// END OF BEFORE EACH ////
    it('test1: Validate the functionality of Category', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        //User should be able to see the heading "Find nursing homes including rehab services near me" below the "Hospital near me" heading.
        ProviderNursingHomePage.verifyNursingHometitle();
        //  and User should be able to see 'Search Provider'

        ProviderNursingHomePage.isSearchButtonPresent();
        ProviderNursingHomePage.SearchButtonContainsText();

        ProviderNursingHomePage.verifyInputVisibleByPlaceholder('Nursing');
        ProviderNursingHomePage.verifyInputVisibleByLabel('Radius(miles)');

        // cy.contains('mat-label', 'Nursing').should('be.visible');
        ProviderNursingHomePage.checkElementVisibleBymatLabel('Nursing')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('Radius(miles)')

        // User should be able to see the following text boxes
        //  a)Hospital Name(Optional) ,
        // b)Radius and the 'Search' button.
        //  User should be able to see the User's stored address details with 
        // a)"Street (Optional) " text box , 
        // b) "Zipcode (click search for County,State and City)" text box with 'Search icon' ,
        // c)'County,State ' drop down box ,d)'City' drop down box.

        ProviderNursingHomePage.checkElementVisibleBymatLabel('Street(Optional)')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('Zipcode (Click search for County, State and City)')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('County, State')
        ProviderNursingHomePage.checkElementVisibleBymatLabel('City')

    });

    it('test2: validate the functionality of Search button ', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        cy.get('#mat-input-4').clear().type('100');
        ProviderNursingHomePage.clickSearchButtonPresent();


        // User should be navigated to the 'Providers list page and able to 
        // see the Nursing homes including rehab services within 100 miles 
        // from the provided State,City and County .
        // User should be able to see the collapsed Search Provider section with down arrow,
        // collapsed Providers filter section with down arrow, 
        // In Provider List user should be able to see the page information(Items per page) and
        //  page navigation controls.

        cy.get('[style="display: flex; flex-wrap: wrap;"] > :nth-child(1)', { timeout: 10000 })
            .should('exist')
            .and('be.visible');
        // check Providers list is up arrow 
        cy.get('#mat-expansion-panel-header-0 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
        cy.get('#mat-expansion-panel-header-1 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
        cy.get('#mat-expansion-panel-header-2 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(180deg)');

        // check navigation
        cy.get(':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-last').should('exist')
            .and('be.visible');
        cy.get(':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next').should('exist')
            .and('be.visible');
        cy.get(':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-previous').should('exist')
            .and('be.visible');
        cy.get(':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-first').should('exist')
            .and('be.visible');


    });

    it('test3: validate the functionality of Search Provider Dropdown arrow ', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        cy.get('#mat-input-4').clear().type('100');
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(200);

        // click open search prover
        ProviderNursingHomePage.ClickOpenSearchProverSection();
        // find if address and other text box are visable
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
    it('test4: validate the functionality of Provider Filter down arrow', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        cy.get('#mat-input-4').clear().type('100');
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(200);

        // click open prover filter
        ProviderNursingHomePage.ClickOpenProverFilterSection();

        ProviderNursingHomePage.checkProviderfilters('Distance');
        ProviderNursingHomePage.checkProviderfilters('Overall Rating');
        ProviderNursingHomePage.checkProviderfilters('Apply filter');
        ProviderNursingHomePage.checkProviderfilters('Clear filter');
    });

    it('test5: verify the functionality of Distance text box ', () => {
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        cy.get('#mat-input-4').clear().type('100');
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(200);
        //enter 70 and search 

        // click open search prover
        ProviderNursingHomePage.ClickOpenSearchProverSection();

        cy.get('#mat-input-9').clear().type('70');
        cy.get('.display-flex > .mat-focus-indicator > .mat-button-wrapper').click();

        //check provider list is loaded 
        ProviderNursingHomePage.IsProviderListIsLoaded();

        cy.wait(200);
    });


    it('test6: validate that the Overall rating dropdown  ', () => {
        cy.wait(200);
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        cy.get('#mat-input-4').clear().type('100');
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(200);


        // click open prover filter
        ProviderNursingHomePage.ClickOpenProverFilterSection();

        cy.wait(200);
        cy.get('#rating_overall > .mat-select-trigger').click();
        ProviderNursingHomePage.CheckRatingforallFivestarDropdown();

    });

    it('test7: validate functionality of Overall rating rating', () => {
        cy.wait(1000);
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        cy.get('#mat-input-4').clear().type('100');
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(1000);


        // click open prover filter
        ProviderNursingHomePage.ClickOpenProverFilterSection();

        cy.wait(1000);
        cy.get('#rating_overall > .mat-select-trigger').click();
        cy.get('#mat-option-19').click();//rating 3
        cy.wait(200);
        cy.get(':nth-child(2) > [type="submit"] > .mat-button-wrapper').click();
        //check provider list is loaded 
        ProviderNursingHomePage.IsProviderListIsLoaded();
        ProviderNursingHomePage.CheckThreeStarRatingofFirstResult();
    });

    it('test8: validate the functionality of Clear filter button', () => {
        cy.wait(1000);
        const ProviderNursingHomePage = new ProviderNursingHomeAndRehabPage();
        cy.wait(500);
        cy.get('#mat-input-4').clear().type('100');
        ProviderNursingHomePage.clickSearchButtonPresent();
        cy.wait(1000);


        // click open prover filter
        ProviderNursingHomePage.ClickOpenProverFilterSection();

        cy.wait(1000);
        cy.get('#rating_overall > .mat-select-trigger').click();
        cy.get('#mat-option-19').click();//rating 3
        cy.wait(200);
        cy.get(':nth-child(2) > [type="submit"] > .mat-button-wrapper').click();

        //check provider list is loaded 
        ProviderNursingHomePage.IsProviderListIsLoaded();
        ProviderNursingHomePage.CheckThreeStarRatingofFirstResult();
        // click open prover filter
        ProviderNursingHomePage.ClickOpenProverFilterSection();
        // clear button
        cy.get('.ng-submitted > :nth-child(2) > [type="button"] > .mat-button-wrapper').click();
        //check provider list is loaded 
        ProviderNursingHomePage.IsProviderListIsLoaded();

    });



});
