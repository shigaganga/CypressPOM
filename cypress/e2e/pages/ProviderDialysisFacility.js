class ProviderDialysisFacility {
    dialysisEle ='/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[1]/app-provider-types/div/div[8]/span[2]';
    dialysisfacilitynameEle='/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[1]/mat-form-field[1]/div/div[1]/div[3]'; 
    streetEle='/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[1]/div/div[1]/div[3]/input';
    zipcodeEle='/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[2]/div/div[1]/div[3]/input';
    zipsearchEle ='/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[2]/div/div[1]/div[4]/button/span[1]';
    cityDropDownEle ='/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[4]/div/div[1]/div[3]'; 
    cityNameEle = '/html/body/div[2]/div[2]/div/div/div/mat-option[3]'; 
    radiusinEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[1]/mat-form-field[3]/div/div[1]/div[3]/input');
    searchEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
    providerfilterEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-provider-list/mat-card/mat-accordion/mat-expansion-panel[2]/mat-expansion-panel-header');
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
        cy.xpath(this.dialysisfacilitynameEle).type(dialysisfacilityname);
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
        cy.xpath(this.cityDropDownEle, {force:true}).click();
    }
    clickCityName() {
        cy.xpath(this.cityNameEle, {force:true}).click();
    }
    clickRadiusIn() {
        cy.xpath(this.radiusinEle).click();
    }

    clickSearch() {
        cy.get(this.searchEle).click();
    }
    clickProviderFilter() {
        cy.xpath(this.providerfilterEle).click();
    }
    enterDistance(distance) {
        cy.get(this.distanceEle,{ timeout: 10000 },{force:true}).should('exist').and('be.visible').type(distance);
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