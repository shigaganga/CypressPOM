class ProviderdoctorscliniciansPage{
    AiVanteLogo="img[src='assets/images/Aivante-logo.png']";

    backBut = ".button-wrapper > .mat-focus-indicator > .mat-button-wrapper";

    Tsign = "//span[@id='userInitial']";

    doctorsEle = ('.selected > .category-name');
    doctornameEle = ('#mat-input-0');
    businessnameEle = ('#mat-input-0');
    streetEle = ('#mat-input-1');
    specialityEle = ('#mat-input-3');
    specialitydropdownEle = (':nth-child(1) > .mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'); //('#mat-input-3');//('.mat-form-field.ng-tns-c170-34 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');//('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');//(':nth-child(1) > .mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');   //('#mat-input-26');//('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
    addictionmedicineEle = ('#mat-input-14');
    zipsearchEle = ('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper');
    zipcodeEle2= ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[2]/div/div[1]/div[3]/input');
    countydropdownEle =  ('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
    citydropdownEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-provider/app-search-providers/div[2]/mat-card/div[2]/app-provider-search-form/form/div/div[2]/mat-form-field[4]/div/div[1]/div[3]'); 
    countyState = ("#mat-select-value-1");
    cityEle = ('#mat-select-value-3');
    radiusEle = (':nth-child(1) > .mat-form-field-should-float > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');//('.mat-form-field-infix.ng-tns-c170-72');//('#mat-input-15');
    searchproviderEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
    categoryName = ('#mat-input-8');
    specialityName = ('#mat-input-26');
    radiusinEle = ('#mat-input-4');
    distanceEle = ('#distance');
    genderEle = ('[style="display: flex; justify-content: flex-start; flex-wrap: wrap;"] > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');//('#mat-select-value-23');//('#mat-select-value-35');
    allEle = ('mat-option');//('#mat-select-value-9');
    maleEle = ('mat-option');//('#mat-option-210 > .mat-option-text');
    femaleEle = ('mat-option');//('#mat-option-211 > .mat-option-text');
    telehealthEle = ('.mat-radio > mat-label'); 
    bothEle = ('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle');
    applyfilterEle = (':nth-child(2) > [type="submit"] > .mat-button-wrapper');
    clearfilterEle = ('form.ng-valid > :nth-child(2) > [type="button"] > .mat-button-wrapper'); //('form.ng-untouched > :nth-child(2) > [type="button"] > .mat-button-wrapper'); 
    backbtnEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');
    specialityNameEle = ('#mat-input-20');
    emptyradiusEle = ('.mat-form-field-invalid > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
    blankzipcodeEle2 = ('#mat-input-2');
   RADIUSELE = ('#mat-input-12');
   zipcodeerrorEle = ('#mat-error-0');
   hospicecareEle = ('#mat-input-8');
   ProviderButtn = 'div[class="button-wrapper ng-star-inserted"] button:nth-child(2)';
   providerbtn='.mat-focus-indicator mat-raised-button mat-button-base mat-primary';
 
setProviderButtn()
{
  cy.get(this.ProviderButtn).click();
}
clickProviderButton()
{
  cy.get('.ng-star-inserted > :nth-child(2) > .mat-button-wrapper')
  .should('exist')
  .should('be.visible').contains('Provider')
  .click({ force: true });
}

clickbackBut(){ 
    cy.get(this.backBut).click(); 
}
clickAiVanteLogo(){
    cy.get(this.AiVanteLogo).click();
}
clickTsign(){
    cy.xpath(this.Tsign).click();
}
clickDoctorsCliniciansBtn() {
        cy.get(this.doctorsEle).click();
    }
    enterDoctorName(doctorname){
    cy.get(this.doctornameEle).clear().type(doctorname);
}
enterDoctorNameOption(doctornameoption){
    cy.get(this.doctornameEle).clear().type(doctornameoption);
}
enterBusinessName(businessname){
    cy.get(this.businessnameEle).clear().type(businessname);
}


//enterSpeciality(){   //Random selection of Speciality
    //cy.get(this.specialityEle).should('exist').click({ force: true });
    //cy.get('#mat-autocomplete-0').find('[id^="mat-option-"]').then(($options) => {    // Ensure we target the autocomplete container
      //  const randomIndex = Math.floor(Math.random() * $options.length); // Random index
        //const randomOption = $options[randomIndex]; // Pick a random option
        
        // Log the selected option for debugging
        //cy.log('Randomly selected option: ' + randomOption.textContent.trim());
        
        // Click the random option
        //cy.wrap(randomOption).click();
      //  });
    
        //cy.get('.display-flex > .mat-focus-indicator').click() 
        //}

enterSpecialityEle(){
    cy.get(this.specialityEle).should('exist').click({ force: true });
}

  clickAddictionmedicine(){
    cy.get(this.specialityEle).click().type('Addiction medicine').type('{enter}');
}
clickAdultcongenitalheartdisease(){
    cy.get(this.specialityEle).click().type('Adult congenital heart disease (ACHD)').type('{enter}');
}
clickAdvancedheartfailureandtransplantcardiology(){
    cy.get(this.specialityEle).click().type('Advanced heart failure and transplant cardiology').type('{enter}');
}
clickAllergyimmunology(){
    cy.get(this.specialityEle).click().type('Allergy/immunology').type('{enter}');
}
clickGeneralpractice(){
    cy.get(this.specialityEle).click().type('General practice').type('{enter}');
}
clickVascularsurgery(){
    cy.get(this.specialityEle).click().type('Vascular surgery').type('{enter}');
}
enterRadius(radius){
  cy.get('#mat-input-4').clear().type('3').click({ force: true });
  }
clickEmptyRadius(){
    cy.get(this.radiusinEle).clear();  //.click({ force: true });
}
enteremptyradius(){
    cy.get(this.radiusinEle).clear().type('abc').click({ force: true });
} 
clickRadiusIn() {
    cy.get(this.radiusEle).click();
}
enterRadiusEle(){
    cy.get(this.RADIUSELE).type('25').click({ force: true });
}
enterStreet(street){
    cy.get(this.streetEle, { timeout: 3000 }).type(street);
}
enterZipCode2(zipcode2){
  cy.xpath(this.zipcodeEle2).clear().wait(1000);
  cy.xpath(this.zipcodeEle2).type(zipcode2);
}
enterInvalidZipCode2(zipcode2){
    cy.xpath(this.zipcodeEle2).clear();
    cy.xpath(this.zipcodeEle2).type(zipcode2);
}
enterBlankZipCode2(blankzipcodeEle2){
    cy.get(this.blankzipcodeEle2).clear().click();
    }
clickZipcoderequirederror(zipcodeerrorEle){
    cy.get(this.zipcodeerrorEle).should('have.text','ZIP code is required.');
}
clickZipSearch(){
    cy.get(this.zipsearchEle).click({ force: true, multiple: true }).eq(0).click();
}
clickCountyState(){
    cy.get(this.countyState).click({ force: true });
}
clickCity(){
    cy.get(this.cityEle).click({ force: true });
   }
clickCountydropdown(){
    cy.get(this.countydropdownEle).should('exist').click({ force: true });
   }
clickCitydropdown(){
    cy.xpath(this.citydropdownEle, {force:true}).click();
}
clickSearchProvider() {
    cy.get(this.searchproviderEle).click(({ force: true }));
}
selectCategorydropdown(){
    cy.get('.mat-form-field-infix.ng-tns-c170-24').should('be.visible').click(); 
}
selectHospitaldropdown(){
    cy.get(this.categoryName).clear().type('Hospitals').click({ force: true });
}
clickHospital(){
     cy.get('.mat-option-text').contains('Hospitals').click();
}
clickHospicecare(){
    cy.get('#mat-option-4 > .mat-option-text').click();
}
selectSpecialtydropdown(){
    cy.get(this.specialitydropdownEle).should('be.visible').click();
}
selectCategory(categoryName){
   cy.get(this.categoryName).clear().click({ force: true });
   }
selectDefaultCategory(categoryName){
    cy.get(this.categoryName).should('be.visible').click({force:true}).type('{enter}');
   }
    clickSearchProvider(){
        cy.get(this.searchproviderEle).click();
    }
    clickProviderFilter()
    {
     cy.get('.mat-expansion-panel-header-title.ng-tns-c210-14').contains('Provider filters').should('be.visible').click({ force: true });
     cy.wait(2000)
  }
   enterDistance(distance){
        cy.get(this.distanceEle).type(distance);
    }
    clickGender(){
    cy.get(this.genderEle).click();
}
clickAll(){
    cy.get(this.allEle).contains(' All ').click({ force: true });
}
clickMale(){
    cy.get(this.maleEle).contains(' Male ').click({ force: true });
}
clickFemale(){
    cy.get(this.femaleEle).click({ force: true });
}
clickTelehealth(){
cy.get(this.telehealthEle).click({ force: true });
}
clickBoth(){
cy.get(this.bothEle).click({ force: true });
}
    clickApplyFilter(){
        cy.get(this.applyfilterEle).click({ force: true });
    }
    clickClearFilter(){
        cy.get(this.clearfilterEle).click({ force: true });
    }
   clickBackBtn() {
        cy.get(this.backbtnEle).click({ force: true });
    }

}
export default ProviderdoctorscliniciansPage;