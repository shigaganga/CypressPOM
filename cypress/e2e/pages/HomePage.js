class HomePage{
     email='#mat-input-3';
     healtharrow=".mat-select-arrow.ng-tns-c216-10";
     goodhealth='#mat-option-5 > .mat-option-text';
    name= '#mat-input-4';
    lifeExpectancy="#mat-input-5";
   //datePicker=".mat-datepicker-toggle > .mat-focus-indicator";
   datePicker=".mat-datepicker-toggle-default-icon.ng-star-inserted"
    year=".mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-selected";
   // year="td[aria-label='1957'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
    //month="td[aria-label='1957-02-01T00:00:00-05:00'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
month=".mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-selected";
    zip="#mat-input-8";
    search=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    nexthome=".form-wrapper > .mat-raised-button";

   
   EnterEmail(email){
    cy.get(this.email).type(email);
   }
   EnterName(name){
    cy.get(this.name).type(name);
   }
  clickhealthArrow(){
    cy.get(this.healtharrow).click();
  }
  clickGoodHealth(){
    cy.get(this.goodhealth).click();
  }
  enterLifeExpectancy(age){
    cy.get(this.lifeExpectancy).clear().type(age);
  }
  DatePickerclick(){
    cy.get(this.datePicker).click();
  }
  Yearclick(){
    cy.get(this.year).click();
  }
  Monthclick(){
    cy.get(this.month).click();
  }
 Enterzip(zipNo){
    cy.get(this.zip).type(zipNo);
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