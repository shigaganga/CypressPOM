class HomePage{
    AiVanteLogo="img[src='assets/images/Aivante-logo.png']";
     healtharrow=".mat-select-arrow.ng-tns-c216-10";
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
bestHealth = "#mat-option-4 > .mat-option-text";
goodHealth = "#mat-option-5 > .mat-option-text";
moderateHealth = "#mat-option-6 > .mat-option-text";
poorHealth = "#mat-option-7 > .mat-option-text"
sickHealth = "#mat-option-8 > .mat-option-text";
recommendationName="#mat-input-4";
lifeExpectancy="#mat-input-5";
dateOfBirth="#mat-input-6";
calenderEle =".mat-datepicker-toggle > .mat-focus-indicator"; //':nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
year1959="td[aria-label='1959'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
month1959="td[aria-label='1959-02-01T00:00:00-07:00'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
year = ":nth-child(6) > [data-mat-col='2']";
month="//div[normalize-space()='APR']";
gender="#mat-select-value-5";
genderM="#mat-option-9 > .mat-option-text";//Gender Male
genderF="//span[@class='mat-option-text'][normalize-space()='Female']";
tabaccoNo="#mat-radio-6 > .mat-radio-label"
tabaccoYes="#mat-radio-7 > .mat-radio-label";
taxFilingJoin="#mat-radio-8 > .mat-radio-label";//Tax filing jointly
taxFilingIndiv="#mat-radio-9 > .mat-radio-label";//Tax filing individual
tobacoUserLink='mat-label > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon';
street="#mat-input-7";
zipCode="#mat-input-8";
searchNew=".mat-form-field-suffix > .mat-focus-indicator";
search=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
magiTier="#mat-select-value-11";
magiT16="#mat-option-13 > .mat-option-text";//Magitier 3
emailCom="#mat-input-9";
contact="#mat-input-10";
nextButt=".form-wrapper > .mat-raised-button";
healthProfileMSG=":nth-child(2) > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
countyState="#mat-select-value-7";
city='#mat-select-value-9';
city1="#mat-option-18 > .mat-option-text"
city2 ="#mat-option-19 > .mat-option-text";
//city2="//span[normalize-space()='CASTLE ROCK']";
//city2="#mat-option-19 > .mat-option-text";  //Castle Rock
lifeExpectancyMSG=":nth-child(4) > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
magiTier = "#mat-select-value-11";
magiTier1 = "#mat-option-11 > .mat-option-text";
magiTier2 = "#mat-option-12 > .mat-option-text";
magiTier3 = "#mat-option-13 > .mat-option-text";
magiTier4 = "#mat-option-14 > .mat-option-text";
magiTier5 = "#mat-option-15 > .mat-option-text";
communicationEmail = "#mat-input-9";
contact = "#mat-input-10";
nextButt = ".form-wrapper > .mat-raised-button";

clickAiVanteLogo(){
    cy.get(this.AiVanteLogo).click();
}
enterEmail(email){
    cy.get(this.email).type(email);}
clickHealthProfile(){
    cy.get(this.healthProfile).click(); }
clickSick(){
    cy.get(this.sickHealth).wait(1000).click();
    }
    clickModerateHealth() {
        cy.get(this.moderateHealth).click();
    }
    clickYear() {
        cy.get(this.year).wait(2000).click();
    }
    clickMonth() {
        cy.xpath(this.month).wait(2000).click();
    }
enterName(name){
    cy.get(this.recommendationName).type(name);
}
clickCountyState(){
    cy.get(this.countyState).click();
}
enterLifeexpectancy(lifeExpectancy){
    cy.get(this.lifeExpectancy).clear().type(lifeExpectancy).wait(1000);
}
clicklifeExpectancyMSG(){
    cy.get(this.lifeExpectancyMSG).click();
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
clickFemale(){
cy.xpath(this.genderF).click();
}
clickTabaccoNo(){
    cy.get(this.tabaccoNo).click();
}
clickTabaccoYes(){
    cy.get(this.tabaccoYes).click();
}
clickTaxIndiv(){
    cy.get(this.taxFilingIndiv).click();
}
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
clickTobaccoUserlink() {
    cy.get(this.tobacoUserLink).click(); 
}
enterContact(contact){
cy.get(this.contact).type(contact).wait(1000);
}
  clickhealthArrow(){
    cy.get(this.healtharrow).click();
  }
  clickGoodHealth(){
    cy.get(this.goodHealth).click();
  }
  clickPoorHealth() {
    cy.get(this.poorHealth).click();
}
clickSickHealth() {
    cy.get(this.sickHealth).click();
}
clickBestHealth() {
    cy.get(this.bestHealth).click();
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
 
clickSearch(){
    cy.get(this.search).click();

}
nextHomeClick(){

  cy.get(this.nexthome, { timeout: 1000 })  // Extend the timeout to 10 seconds
  .should('be.visible')
  .and('be.enabled')
  .click({force:true});
}

clickHealthProfileMSG(){
    cy.get(this.healthProfileMSG).click();
}
clickCity(){
    cy.get(this.city).click({ force: true });
   }
clickCity1(){
    cy.get(this.city1).click();
}
clickCity2(){
cy.get(this.city2).click();
}
clickMagiTier() {
cy.get(this.magiTier).click();
}
clickMagiTier1() {
cy.get(this.magiTier3).click().wait(1000);
}
clickMagiTier2() {
cy.get(this.magiTier3).click().wait(1000);
}
clickMagiTier3() {
cy.get(this.magiTier3).click().wait(1000);
}
clickMagiTier4() {
cy.get(this.magiTier3).click().wait(1000);
}
clickMagiTier5() {
cy.get(this.magiTier3).click().wait(1000);
}
entercommunicationEmail(communicationEmail) {
cy.get(this.communicationEmail).type(communicationEmail);
}
enterContact(contact) {
cy.get(this.contact).type(contact).wait(1000);
}
clickNext() {
    //cy.get(this.nextButt).click();
    cy.get(this.nextButt).click({ force: true });
}

verifyUrl(expectedUrl) {
    // Verify if the current URL matches the expected URL
    cy.url().should('include', expectedUrl);
    
}}
export default HomePage;