class ProviderMedicalEquipment {
    medicalELe = (':nth-child(9) > .category-name');
    equipmentnameEle = (':nth-child(1) > .mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex');
    streetEle = (':nth-child(3) > .mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex');
    zipcodeEle = "//input[@id='mat-input-2']"
    zipsearchEle = "//mat-icon[normalize-space()='search']"
    //countystateEle = ('.mat-select-min-line.ng-tns-c216-117.ng-star-inserted')
    cityEle = "//div[@class='mat-select-arrow ng-tns-c216-7']"
    citynameEle = "//span[normalize-space()='GREENWOOD VILLAGE']"
    radiusinEle = "//input[@id='mat-input-4']"
    searchproviderEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
    providerfilterEle = "//span[@class='mat-expansion-indicator ng-tns-c210-14 ng-trigger ng-trigger-indicatorRotate ng-star-inserted']"
    providerfilterdistanceEle = ('#distance');
    applyfilterEle = (':nth-child(2) > [type="submit"] > .mat-button-wrapper');
    providerfiltercollapse = "//span[@class='mat-expansion-indicator ng-tns-c210-14 ng-trigger ng-trigger-indicatorRotate ng-star-inserted']"
    clearfilterEle = "//span[normalize-space()='Clear filter']"
    backbtnEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');
   // backbuttontopEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');

    clickMedcial() {
        cy.get(this.medicalELe).click();
    }
    typeEquipmentname(equipmentName) {
       // cy.get(this.equipmentnameEle).clear();
        cy.get(this.equipmentnameEle).type(equipmentName);
    }
    typeStreet(street) {
       // cy.xpath(this.streetEle).clear();
        cy.get(this.streetEle).type(street);
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
        cy.xpath(this.cityEle,{force:true,multiple:true}).click();
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