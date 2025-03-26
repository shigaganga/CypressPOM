class ProviderDoctorsCliniciansPage{
    doctorsEle = ('.selected > .category-name');
    doctornameEle = ('#mat-input-11');
    businessnameEle = ('#mat-input-11');
    streetEle = ('#mat-input-12');
    specialityEle = ('#mat-input-14');
    specialitydropdownEle = ('#mat-input-14');//('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
    addictionmedicineEle = ('#mat-input-20');
    zipcodeEle = ('#mat-input-13');
    zipsearchEle = ('.mat-form-field.ng-tns-c170-36 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon');
    countydropdownEle = ('#mat-select-value-19 > .mat-select-value-text > .mat-select-min-line'); //#mat-option-129
    citydropdownEle = ('#mat-select-value-21 > .mat-select-value-text > .mat-select-min-line'); //('#mat-select-value-21 > .mat-select-value-text > .mat-select-min-line');
    radiusEle = ('#mat-input-15');
    searchproviderEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
    categoryName = ('#mat-input-19');
    specialityName = ('#mat-input-20');
    providerfilterEle = ('#mat-expansion-panel-header-1 > .mat-content > .mat-expansion-panel-header-title');  //  #mat-expansion-panel-header-4 > .mat-content > .mat-expansion-panel-header-title//
    //distanceEle = ('#distance');
    genderEle = ('');
    allEle = ('');
    telehealthEle = ('');
    bothEle = ('');
    applyfilterEle = ('');
    clearfilterEle = ('');
    backbtnEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');

clickDoctorsCliniciansBtn() {
        cy.get(this.doctorsEle).click();
    }
    enterName(name){
        cy.get(this.recommendationName).type(name);}
enterDoctorName(doctorname){
    cy.get(this.doctornameEle).clear().type(doctorname);
}
clickBusinessName(businessname){
    cy.get(this.businessnameEle).click();
}
//enterStreet(street) {
  //  cy.get(this.street).clear().type(street);}


clickSpeciality(){
    cy.get(this.specialityEle).click();
}
clickSpecialtydropdown(){
     cy.get(this.specialitydropdownEle).should('be.visible').click().type('{enter}');
   }
//clickAddictionmedicine(){
    //cy.get(this.addictionmedicineEle).click().type('Addiction medicine').type('{enter}');
    //.type('Addiction medicine')
    //.type('{Addiction medicine}');
    //cy.get('#mat-input-20 ').should('be.visible').click();
    //cy.contains('Addiction medicine').click();
  //  cy.get('#mat-input-20').contains('Addictionmedicine').click();
//}

enterRadius(radius){
    cy.get(this.radiusEle).clear().type(radius);
}
enterStreet(street){
    cy.get(this.streetEle, { timeout: 3000 }).type(street);
}

enterZipCode(zipcode){
    cy.get(this.zipcodeEle).type(zipcode);
}
clickZipSearch(){
   cy.get(this.zipsearchEle, { force: true, multiple: true }).eq(0).click();
}
//clickCountydropdown(){
  //  cy.get(this.countydropdownEle).click({ force: true });
//}
//clickCitydropdown(){
  //  cy.get(this.citydropdownEle).click({ force: true });
//}
clickSearchProvider() {
    cy.get(this.searchproviderEle).click();
}
clickCategory(categoryName){
   //this.category().click();
   cy.get(this.categoryName).wait(2000).click();
   //cy.get(this.categoryName).clear().click(categoryName);
   }
   clickSpecialityname(){
    //cy.get(this.specialityName).click();
    //cy.get('#mat-input-20 ').click();
    cy.get(this.specialityName).should('be.visible').click({force:true}).type('{enter}');
 }
    //enterAddictionmedicine(){
      //  cy.get(this.addictionmedicineEle).click().type('Addiction medicine').type('{enter}');
    //}
    clickSearchProvider(){
        cy.get(this.searchproviderEle).click();
    }
    clickProviderFilter(){
        cy.get(this.providerfilterEle).click();
    }
    //enterDistance(distance) {
      //  cy.get(this.distanceEle).type(distance);
    //}
    //clickGender(){
    //cy.get(this.genderEle).click();
//}
//clickAll(){
    //cy.get(this.allEle).click();
//}
//clickTelehealth(){
//cy.get(this.telehealthEle).click();
//}
//clickBoth(){
//cy.get(this.bothEle).click();
//}
    //clickApplyFilter() {
      //  cy.get(this.applyfilterEle).click({ force: true });
    //}
    //clickClearFilter() {
      //  cy.get(this.clearfilterEle).click({ force: true });
    //}
   clickBackBtn() {
        cy.get(this.backbtnEle).click({ force: true });
    }

}

export default ProviderDoctorsCliniciansPage;