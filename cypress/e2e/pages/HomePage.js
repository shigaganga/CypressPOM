class HomePage{
    // email='#mat-input-3';
     healtharrow=".mat-select-arrow.ng-tns-c216-10";
     goodhealth='#mat-option-5 > .mat-option-text';
    //name= '#mat-input-4';
   // lifeExpectancy="#mat-input-5";
   //datePicker=".mat-datepicker-toggle > .mat-focus-indicator";
    datePicker=".mat-datepicker-toggle-default-icon.ng-star-inserted"
     year1957=".mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-selected";
   // year="td[aria-label='1957'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
    //month="td[aria-label='1957-02-01T00:00:00-05:00'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
     month1957=".mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-selected";
   // zip="#mat-input-8";
    search=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
   nexthome=".form-wrapper > .mat-raised-button";
/*
    backBut=".button-wrapper > .mat-focus-indicator > .mat-button-wrapper";
    clickbackBut(){cy.get(this.backBut).wait(2000).click()   }
*/
email="#mat-input-3";
healthProfile=".mat-select-arrow.ng-tns-c216-10";
sickHealth="#mat-option-7 > .mat-option-text";
recommendationName="#mat-input-4";
lifeExpectancy="#mat-input-5";
dateOfBirth="#mat-input-6";
calenderEle =".mat-datepicker-toggle > .mat-focus-indicator"; //':nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
year1959="td[aria-label='1959'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
month1959="td[aria-label='1959-02-01T00:00:00-07:00'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
gender="#mat-select-value-5";
genderM="#mat-option-9 > .mat-option-text";//Gender Male
//genderF="#mat-option-10 > .mat-option-text";//Gender female
tabaccoNo="#mat-radio-6 > .mat-radio-label"
//tabaccoYes="#mat-radio-7 > .mat-radio-label";
taxFilingJoin="#mat-radio-8 > .mat-radio-label";//Tax filing jointly
//taxFilingIndiv="#mat-radio-9 > .mat-radio-label";//Tax filing individual
street="#mat-input-7";
zipCode="#mat-input-8";
searchNew=".mat-form-field-suffix > .mat-focus-indicator";
magiTier="#mat-select-value-11";
magiT16="#mat-option-13 > .mat-option-text";//Magitier 3
emailCom="#mat-input-9";
contact="#mat-input-10";
nextButt=".form-wrapper > .mat-raised-button";
 
enterEmail(email){
    cy.get(this.email).type(email);}
clickHealthProfile(){
    cy.get(this.healthProfile).click(); }
clickSick(){
    cy.get(this.sickHealth).wait(1000).click();
    }
enterName(name){
    cy.get(this.recommendationName).type(name);
}
enterLifeexpectancy(lifeExpectancy){
    cy.get(this.lifeExpectancy).clear().type(lifeExpectancy).wait(1000);
}
clickDateOfBirth(){
cy.get(this.dateOfBirth).wait(2000).click();//Modified
}
clickCalenderEle(){
cy.get(this.calenderEle).wait(2000).click();
}
click1959Year(){
cy.get(this.year1959).click();
}
click1959Month(){
cy.get(this.month1959).wait(2000).click();
}
clickDobB(){
    cy.get(this.dateOfBirth).click();
}
clickGender(){
    cy.get(this.gender).click();
}
clickMale(){
cy.get(this.genderM).click();
}
/*clickFemale(){
cy.gt(this.genderF).click();
}*/
clickTabaccoNo(){
    cy.get(this.tabaccoNo).click();
}
/*clickTabaccoYes(){
    cy.get(this.tabaccoYes).click();
}*/
/*clickTaxIndiv(){
    cy.get(this.taxFilingIndiv).click();
}*/
clickTaxJoin(){
    cy.get(this.taxFilingJoin).click();
}
enterStreet(street){
    cy.get(this.street).type(street);
}
enterZip(zipCode){
    cy.get(this.zipCode).type(zipCode).wait(1000);
}
clickSearchNew(){
    cy.get(this.searchNew).click();
}
clickMagitier(){
    cy.get(this.magiTier).click();
}
clickmagi16(){
    cy.get(this.magiT16).click().wait(1000);
}
enterCommEmail(emailCom){
cy.get(this.emailCom).type(emailCom);
}

enterContact(contact){
cy.get(this.contact).type(contact).wait(1000);
}
  clickhealthArrow(){
    cy.get(this.healtharrow).click();
  }
  clickGoodHealth(){
    cy.get(this.goodhealth).click();
  }
  datePickerclick(){
    cy.get(this.datePicker).click();
  }
  year1957click(){
    cy.get(this.year1957).click();
  }
  month1957click(){
    cy.get(this.month1957).click();
  }
 
searchclick(){
    cy.get(this.search).click();

}
NextHomeClick(){

  cy.get(this.nexthome, { timeout: 1000 })  // Extend the timeout to 10 seconds
  .should('be.visible')
  .and('be.enabled')
  .click();
}
verifyUrl(expectedUrl) {
    // Verify if the current URL matches the expected URL
    cy.url().should('include', expectedUrl);
    
}}
export default HomePage;