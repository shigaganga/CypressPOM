class ProviderDialysisFacility {
    dialysisEle = "//span[normalize-space()='Dialysis facilities']"
    dialysisfacilitynameEle = "#mat-input-0"
    streetEle = "//input[@id='mat-input-1']"
    zipcodeEle = "//input[@id='mat-input-2']"
    zipsearchEle ="//mat-icon[normalize-space()='search']"
    cityDropDownEle = "//div[@class='mat-select-arrow-wrapper ng-tns-c216-7']"
    cityNameEle = "//span[@class='mat-option-text'][normalize-space()='CHERRY HILLS']"
    radiusinEle = "//input[@id='mat-input-4']"
    searchEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
    providerfilterEle = "//span[@class='mat-expansion-indicator ng-tns-c210-14 ng-trigger ng-trigger-indicatorRotate ng-star-inserted']"
    distanceEle = ('#distance');
    // ratingEle = (' #rating_patient > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
    // ratingfiveEle = ('#mat-option-136');
    applyfilterEle = (' :nth-child(2) > [type="submit"]');
    clearfilterEle = ('form.ng-valid > :nth-child(2) > [type="button"] > .mat-button-wrapper');
    backbtnEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');

    clickDialysis() {
        cy.xpath(this.dialysisEle).click();
    }

    enterDialysisFacilityName(dialysisfacilityname) {
        cy.get(this.dialysisfacilitynameEle ,{ force: true, multiple: true }).type(dialysisfacilityname);
    }

    enterStreet(street) {
        cy.xpath(this.streetEle, { timeout: 3000 }).type(street);
    }

    enterZipCode(zipcode) {
        cy.xpath(this.zipcodeEle).clear();
        cy.xpath(this.zipcodeEle).type(zipcode);
    }
    clickZipSearch() {
        cy.xpath(this.zipsearchEle, { force: true, multiple: true }).eq(0).click();
    }
    clickCity() {
        cy.xpath(this.cityDropDownEle, { force: true }).click();
    }
    clickCityName() {
        cy.xpath(this.cityNameEle, { force: true }).click();
    }
    clickRadiusIn() {
        cy.xpath(this.radiusinEle).click();
    }

    clickSearch() {
        cy.get(this.searchEle).click();
    }
    clickProviderFilter() {
        cy.xpath(this.providerfilterEle, { timeout: 10000 }, { force: true, multiple: true }).should('exist').and('be.visible').click();
    }
    enterDistance(distance) {
        cy.get(this.distanceEle, { timeout: 10000 }, { force: true }).should('exist').and('be.visible').type(distance);
        console.log('#distance:', this.distanceEle);
    }

    // clickRating() {
    //  cy.get(this.ratingEle).click();
    // }
    // selectRatingFive() {
    // cy.get(this.ratingfiveEle).click();
    //}

    clickApplyFilter() {
        cy.get(this.applyfilterEle).click({ force: true });
    }
    clickClearFilter() {
        cy.get(this.clearfilterEle).click({ force: true });
    }

    clickBackBtn() {
        cy.get(this.backbtnEle).click({ force: true });
    }

}
export default ProviderDialysisFacility