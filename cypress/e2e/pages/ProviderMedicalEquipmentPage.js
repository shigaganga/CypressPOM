class ProviderMedicalEquipment {
    medicalELe = (':nth-child(9) > .category-name');
    equipmentnameEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[1]/mat-form-field[1]/div/div[1]/div[3]/input')
    streetEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[1]/div/div[1]/div[3]/input')
    zipcodeEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[2]/div/div[1]/div[3]/input');
    zipsearchEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[2]/div/div[1]/div[4]/button/span[1]/mat-icon');
    //countystateEle = ('.mat-select-min-line.ng-tns-c216-117.ng-star-inserted')
    cityEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[4]/div/div[1]/div[3]/mat-select');
    citynameEle = ('/html/body/div[2]/div[2]/div/div/div/mat-option[3]');
    radiusinEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[1]/mat-form-field[3]/div/div[1]/div[3]/input');
    searchproviderEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
    providerfilterEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-provider-list/mat-card/mat-accordion/mat-expansion-panel[2]/mat-expansion-panel-header');
    providerfilterdistanceEle = ('#distance');
    applyfilterEle = (':nth-child(2) > [type="submit"] > .mat-button-wrapper');
    providerfiltercollapse = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-provider-list/mat-card/mat-accordion/mat-expansion-panel[2]/mat-expansion-panel-header')
    clearfilterEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-provider-list/mat-card/mat-accordion/mat-expansion-panel[2]/div/div/app-provider-filter-form/form/div[2]/button[1]');
    backbtnEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');
   // backbuttontopEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');

    clickMedcial() {
        cy.get(this.medicalELe).click();
    }
    typeEquipmentname(equipmentName) {
        cy.xpath(this.equipmentnameEle).clear();
        cy.xpath(this.equipmentnameEle).type(equipmentName);
    }
    typeStreet(street) {
        cy.xpath(this.streetEle).clear();
        cy.xpath(this.streetEle).type(street);
    }
    enterZipCode(zipcode) {
        cy.xpath(this.zipcodeEle).clear();
        cy.xpath(this.zipcodeEle).type(zipcode);
    }
    clickZipSearch() {
        cy.xpath(this.zipsearchEle).click();
    }
   // clickCountyState() {
       // cy.get(this.countystateEle).click();
   // }
    clickCity() {
        cy.xpath(this.cityEle).click();
    }
    clickCityName() {
        cy.xpath(this.citynameEle).click();
    }
    enterRadiusin(radiusIn) {
        cy.xpath(this.radiusinEle).clear();
        cy.xpath(this.radiusinEle).type(radiusIn);
    }

    clickSearchProvider() {
        cy.get(this.searchproviderEle).click();
    }
    clickProviderFilter() {
        cy.xpath(this.providerfilterEle).click();
    }
    typeProviderFilterDistance(distance){
       // cy.get('input[name="filter-distance"]')  // Replace with the actual selector
  //.clear()
  //.type("10");
        cy.get(this.providerfilterdistanceEle).clear().type(distance);
    }
    clickApplyFilter() {
        cy.get(this.applyfilterEle).click();
    }
    clickProviderFilterCollapse(){
        cy.xpath(this.providerfiltercollapse,{multiple:true}).click();
    }
    clickClearFilter() {
        cy.xpath(this.clearfilterEle,{force:true,multiple:true}).should('exist').and('be.visible').click();
    }
    clickBackBtn() {
        cy.get(this.backbtnEle).click();
    }
    //clickBackButtonToP() {
      //  cy.get(this.backbuttontopEle).click();
   // }

}
export default ProviderMedicalEquipment