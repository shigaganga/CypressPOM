class ProviderNursingHomeAndRehabPage {
    name = "ProviderNursingHomeAndRehabPage";
    healthprofiletable = '.example-element-detail'
    healthProfile_1 = 'table.mat-table tbody tr.mat-row:nth-child(1) > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon'
    healthProfile_2 = 'table.mat-table tbody tr.mat-row:nth-child(2) > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon'
    recommendationName = "#mat-input-4";
    searchPrefNo = "#mat-radio-12 > .mat-radio-label";
    providerButton = "body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-plan-selection > app-plan-selected > div.button-container > div > div.button-wrapper.ng-star-inserted > button:nth-child(2) > span.mat-button-wrapper";
    ProviderPagebtn = ".location-container > .ng-star-inserted > :nth-child(2)";
    NursingHometabSelector = ":nth-child(3) > .category-name";
    SearchProvider = ".display-flex > .mat-focus-indicator";
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
        cy.get(this.searchPrefNo).click();
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
        this.providerButton.click();
    }

    verifyProviderButtonIsVisible() {
        this.providerButton.should('be.visible');
    }
    verifyProviderButtonText(expectedText) {
        this.providerButton.should('have.text', expectedText);
    }

    isSearchButtonPresent() {
        cy.get('.display-flex > .mat-focus-indicator > .mat-button-wrapper').should('be.visible');
    }
    SearchButtonContainsText() {
        cy.get('.display-flex > .mat-focus-indicator > .mat-button-wrapper').contains('Search Provider');
    }
    clickSearchButtonPresent() {
        cy.get('.display-flex > .mat-focus-indicator > .mat-button-wrapper').click();
    }
    verifyInputVisibleByPlaceholder(placeholderText) {
        cy.get(`input[data-placeholder*="${placeholderText}"]`).then($inputs => {
            cy.wrap($inputs).first().should('be.visible');
        });

    }
    EnterRadiusinSearchProvider(value) {
        cy.get('#mat-input-4').clear().type(value);
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
        cy.contains('mat-label', LabelText).should('be.visible');
    }
    checkSearchProviderbyLabel(LabelText) {

        cy.contains('#cdk-accordion-child-0 > .mat-expansion-panel-body', LabelText).should('be.visible');
    }
    checkListofProviders() {
        cy.get('[style="display: flex; flex-wrap: wrap;"] > :nth-child(1)', { timeout: 10000 })
            .should('exist')
            .and('be.visible');
    }
    checkProviderfilters(LabelText) {
        cy.contains('#cdk-accordion-child-1 > .mat-expansion-panel-body', LabelText).should('be.visible');
    }
    checkProviderSearchArrowClose() {
        cy.get('#mat-expansion-panel-header-0 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
    }
    checkProviderfilterArrowClose() {
        cy.get('#mat-expansion-panel-header-1 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
    }
    checkProviderListArrowOpen() {
        cy.get('#mat-expansion-panel-header-2 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(180deg)');
    }
    CheckProviderListPageNavLast() {
        cy.get(':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-last').should('exist')
            .and('be.visible');
    }
    CheckProviderListPageNavNext() {
        cy.get(':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next').should('exist')
            .and('be.visible');
    }
    CheckProviderListPageNavPrevious() {
        cy.get(':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-previous').should('exist')
            .and('be.visible');
    }
    CheckProviderListPageNavFirst() {
        cy.get(':nth-child(2) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-first').should('exist')
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
        cy.get('#mat-expansion-panel-header-1 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
        cy.get('#mat-expansion-panel-header-1').click();
        cy.get('#mat-expansion-panel-header-1 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(180deg)');
    }
    ClickClearButton() {
        cy.get('.ng-submitted > :nth-child(2) > [type="button"] > .mat-button-wrapper').click();
    }
    ClickOveralldropdowntoExpand() {
        cy.get('#rating_overall > .mat-select-trigger').click();
    }
    SelectRating3() {
        cy.get('#mat-option-19').click();
    }
    ClickApplyFilterButton() {
        cy.get(':nth-child(2) > [type="submit"] > .mat-button-wrapper').click();
    }
    ClickOpenSearchProverSection() {
        cy.get('#mat-expansion-panel-header-0 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(0deg)');
        cy.get('#mat-expansion-panel-header-0').click();
        cy.get('#mat-expansion-panel-header-0 > .mat-expansion-indicator').should('have.attr', 'style')
            .and('include', 'rotate(180deg)');
    }
    EnterRadiusinProviderSectionDistance(value) {
        cy.get('#mat-input-9').clear().type(value);
    }
    ClickProviderSearchButtoninProviderSection() {
        cy.get('.display-flex > .mat-focus-indicator > .mat-button-wrapper').click();
    }
    IsProviderListIsLoaded() {
        //check provider list is loaded 
        cy.get('[style="display: flex; flex-wrap: wrap;"] > :nth-child(1)', { timeout: 10000 })
            .should('exist')
            .and('be.visible');
    }

}//end of class

export default ProviderNursingHomeAndRehabPage;