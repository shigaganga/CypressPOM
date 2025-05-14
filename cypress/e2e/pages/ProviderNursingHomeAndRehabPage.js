class ProviderNursingHomeAndRehabPage {
    name = "ProviderNursingHomeAndRehabPage";
    healthprofiletable = '.example-element-detail'
    healthProfile_1 = 'table.mat-table tbody tr.mat-row:nth-child(1) > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon'
    healthProfile_2 = 'table.mat-table tbody tr.mat-row:nth-child(2) > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon'
    recommendationName = "#mat-input-4";
    searchPrefNoRadioGroup = ".mat-radio-group mat-radio-button";
    providerButton = "body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-plan-selection > app-plan-selected > div.button-container > div > div.button-wrapper.ng-star-inserted > button:nth-child(2) > span.mat-button-wrapper";
    ProviderPagebtn = ".location-container > .ng-star-inserted > :nth-child(2)";
    NursingHometabSelector = ":nth-child(3) > .category-name";
    SearchProviderVisible = ".display-flex > .mat-focus-indicator > .mat-button-wrapper";
    RadiusinSearchProvider = "#mat-input-4";
    matLabelSelector = "mat-label";
    PanelBody0 ='#cdk-accordion-child-0 > .mat-expansion-panel-body';
    panelBody1 = "#cdk-accordion-child-1 > .mat-expansion-panel-body";
    firstProviderList = '[style="display: flex; flex-wrap: wrap;"] > :nth-child(1)';
    panelArrowIndicator = '#mat-expansion-panel-header-0 > .mat-expansion-indicator';
    filterArrowIndicator = '#mat-expansion-panel-header-1 > .mat-expansion-indicator';
    filterPanelHeader = '#mat-expansion-panel-header-1';
    ClearButton = '.ng-submitted > :nth-child(2) > [type="button"] > .mat-button-wrapper';
    overallRatingDropdownTrigger = '#rating_overall > .mat-select-trigger';
    ratingOption3 = '#mat-option-19';
    applyFilterButton = ':nth-child(2) > [type="submit"] > .mat-button-wrapper';
    providerListArrowIndicator = '#mat-expansion-panel-header-2 > .mat-expansion-indicator';
    paginatorLastButton = ':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-last';
    paginatorNextButton= ':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next';
    paginatorPreviousButton = ':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-previous';
    paginatorFirstButton = ':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-first';
    providerSectionRadiusInput = '#mat-input-9';
    searchPanelHeader = '#mat-expansion-panel-header-0';

    SpecialHomePageEnterEmail(email) {
        cy.wait(1500);
        cy.get('table.outer-table')
            .should('be.visible')
            .find('tbody tr.mat-row')
            .should('have.length.greaterThan', 0)
            .wait(2000)
            .then(() => {
                // Then assert the filtered table
                cy.get('input[data-placeholder="Filter by Email or Recommendation Name"]')
                    .should('be.visible')
                    .should('be.enabled')
                    .clear()
                    .type(email, { delay: 50 })
                    .trigger('input')
                    .wait(1000);
            });
        cy.get('table.outer-table')
            .should('be.visible')
            .find('tbody tr.mat-row')
            .should('have.length.greaterThan', 0)
            .wait(2000);
    }

    clickhealthArrow() {
        cy.get('table.outer-table tbody tr.mat-row:first-child')
            .find('td.mat-column-expand button[aria-label="expand row"]')
            .click()
            .wait(1000);
    };

    clickGoodHealth() {
        cy.get(this.healthprofiletable).find(this.healthProfile_2).click().wait(500);
    }

    enterName(name) {
        cy.get(this.recommendationName).clear().type(name).wait(300);
    }
    clickSearchPrefNo() {
        cy.get(this.searchPrefNoRadioGroup)
        .contains('No')
        .click();
    }
    clickProviderPagebtn() {
        cy.get(this.ProviderPagebtn).click();
    }
    clickNursingHometabSelector() {
        cy.get(this.NursingHometabSelector).click();
    }
    verifyNursingHometitle() {
        cy.get('.heading')
            .should('be.visible')
            .and('have.text', "Find nursing homes including rehab services near me");
    }
    clickProviderButton() {
        cy.get(this.providerButton).click();
    }
    verifyProviderButtonIsVisible() {
        cy.get(this.providerButton).should('be.visible');
    }
    verifyProviderButtonText(expectedText) {
        cy.get(this.providerButton).should('have.text', expectedText);
    }

    isSearchButtonPresent() {
        cy.get(this.SearchProviderVisible).should('be.visible');
    }
    SearchButtonContainsText() {
        cy.get(this.SearchProviderVisible).contains('Search Provider');
    }
    clickSearchButtonPresent() {
        cy.get(this.SearchProviderVisible).click();
    }
    verifyInputVisibleByPlaceholder(placeholderText) {
        cy.get(`input[data-placeholder*="${placeholderText}"]`).then($inputs => {
            cy.wrap($inputs).first().should('be.visible');
        });

    }
    EnterRadiusinSearchProvider(value) {
        cy.get(this.RadiusinSearchProvider).clear().type(value);
    };
    verifyInputVisibleByLabel(partialLabelText) {
        cy.get('mat-form-field').filter((index, el) => {
            const label = el.querySelector('mat-label');
            return label && label.textContent.includes(partialLabelText);
        }).first().within(() => {
            cy.get('input').should('exist').and('be.visible');
        });
    }
    checkElementVisibleBymatLabel(LabelText) {
        cy.contains(this.matLabelSelector, LabelText).should('be.visible');
    }
    checkSearchProviderbyLabel(LabelText) {

        cy.get(this.PanelBody0).contains(LabelText).should('be.visible');
    }
    checkListofProviders() {
        cy.get(this.firstProviderList, { timeout: 10000 })
            .should('exist')
            .and('be.visible');
    }
    checkProviderfilters(LabelText) {
        cy.get(this.panelBody1).contains(LabelText).should('be.visible');
    }
    checkProviderSearchArrowClose() {
        cy.get(this.panelArrowIndicator).should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
    }
    checkProviderfilterArrowClose() {
        cy.get(this.filterArrowIndicator).should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
    }
    checkProviderListArrowOpen() {
        cy.get(this.providerListArrowIndicator).should('have.attr', 'style')
            .and('include', 'rotate(180deg)');
    }
    CheckProviderListPageNavLast() {
        cy.get(this.paginatorLastButton).should('exist')
            .and('be.visible');
    }
    CheckProviderListPageNavNext() {
        cy.get(this.paginatorNextButton).should('exist')
            .and('be.visible');
    }
    CheckProviderListPageNavPrevious() {
        cy.get(this.paginatorPreviousButton).should('exist')
            .and('be.visible');
    }
    CheckProviderListPageNavFirst() {
        cy.get(this.paginatorFirstButton).should('exist')
            .and('be.visible');
    }
    CheckRatingforallFivestarDropdown() {
        const expectedRatings = ['5', '4', '3', '2', '1'];
        cy.get('div[role="listbox"] mat-option')
            .should('have.length', expectedRatings.length)
            .each(($el, index) => {
                cy.wrap($el)
                    .find('.mat-option-text')
                    .should('contain.text', expectedRatings[index]);
            });
    };

    CheckThreeStarRatingofFirstResult() {
        // First card’s rating only
        cy.get(':nth-child(1) > app-rehab-card.ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(3)')
            .find('app-star-rating') // Get the specific star rating inside only this child
            .find('svg.fa-star, svg.fa-star-half-alt') // Get full & half stars only inside this one
            .then(($stars) => {
                const fullStars = $stars.filter('.fa-star').length;
                const halfStars = $stars.filter('.fa-star-half-alt').length;
                const totalStars = fullStars + (halfStars ? 0.5 : 0);
                expect(totalStars).to.be.at.least(3);
            });
    }

    ClickOpenProverFilterSection() {
        // click open prover filter
        cy.get(this.filterArrowIndicator).should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
        cy.get(this.filterPanelHeader).click();
        cy.get(this.filterArrowIndicator).should('have.attr', 'style')
            .and('include', 'rotate(180deg)');
    }
    ClickClearButton() {
        cy.get(this.ClearButton).click();
    }
    ClickOveralldropdowntoExpand() {
        cy.get(this.overallRatingDropdownTrigger).click();
    }
    SelectRating3() {
        cy.get(this.ratingOption3).click();
    }
    ClickApplyFilterButton() {
        cy.get(this.applyFilterButton).click();
    }
    ClickOpenSearchProverSection() {
        cy.get(this.panelArrowIndicator).should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
        cy.get(this.searchPanelHeader).click();
        cy.get(this.panelArrowIndicator).should('have.attr', 'style')
            .and('include', 'rotate(180deg)');
    }
    EnterRadiusinProviderSectionDistance(value) {
        cy.get(this.providerSectionRadiusInput).clear().type(value);
    }
    ClickProviderSearchButtoninProviderSection() {
        cy.get(this.SearchProviderVisible).click();
    }
    IsProviderListIsLoaded() {
        //check provider list is loaded 
        cy.get(this.firstProviderList, { timeout: 10000 })
            .should('exist')
            .and('be.visible');
    }

}//end of class

export default ProviderNursingHomeAndRehabPage;