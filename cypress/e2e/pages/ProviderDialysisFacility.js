class ProviderDialysisFacility {
    dialysisfacilitynameEle = ('#mat-input-14');
    streetEle = ('#mat-input-15');
    dialysisEle = (':nth-child(8) > .category-name');
    zipcodeEle = ('#mat-input-16');
    zipsearchEle = ('.mat-button-wrapper > .mat-icon');
    cityEle = ('.mat-form-field.ng-tns-c170-53 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
    citynameEle = ('#mat-option-121 > .mat-option-text');
    radiusinEle = ('#mat-input-18');
    searchEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
    providerfilterEle = ('#mat-expansion-panel-header-2 > .mat-expansion-indicator');
    distanceEle = ('#distance');
    ratingEle = (' #rating_patient > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
    ratingfiveEle = ('#mat-option-136');
    applyfilterEle = (' :nth-child(2) > [type="submit"]');
    clearfilterEle = ('form.ng-valid > :nth-child(2) > [type="button"] > .mat-button-wrapper');
    backbtnEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');

    enterDialysisFacilityName(dialysisfacilityname) {
        cy.get(this.dialysisfacilitynameEle).type(dialysisfacilityname);
    }
    enterStreet(street) {
        cy.get(this.streetEle, { timeout: 3000 }).type(street);
    }

    clickDialysis() {
        cy.get(this.dialysisEle).click();
    }
    enterZipCode(zipcode) {
        cy.get(this.zipcodeEle).type(zipcode);
    }
    clickZipSearch() {
        cy.get(this.zipsearchEle, { force: true, multiple: true }).eq(0).click();
    }
    clickCity() {
        cy.get(this.cityEle).click();
    }
    selectCityName() {
        cy.get(this.citynameEle).click();
    }
    clickRadiusIn() {
        cy.get(this.radiusinEle).click();
    }

    clickSearch() {
        cy.get(this.searchEle).click();
    }
    clickProviderFilter() {
        cy.get(this.providerfilterEle).click();
    }
    enterDistance(distance) {
        cy.get(this.distanceEle).type(distance);
    }

    clickRating() {
        cy.get(this.ratingEle).click();
    }
    selectRatingFive() {
        cy.get(this.ratingfiveEle).click();
    }

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