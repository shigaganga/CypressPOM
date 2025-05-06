class HomePage{
    AiVanteLogo="img[src='assets/images/Aivante-logo.png']";
    healtharrow=".mat-select-arrow.ng-tns-c216-10";
    datePicker="//button[@aria-label='Open calendar']//span[@class='mat-button-wrapper']//*[name()='svg']";
    zip="#mat-input-8";
    search=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    nexthome=".form-wrapper > .mat-raised-button";
    email="#mat-input-3";
    name="#mat-input-4";
     healthProfile="//span[@class='mat-option-text']";
    recommendationName="#mat-input-4";
    lifeExpectancy="//input[@id='mat-input-5']";
    dateOfBirth="#mat-input-6";
    calenderEle =".mat-datepicker-toggle > .mat-focus-indicator";
    year = "div.mat-calendar-body-cell-content.mat-focus-indicator";
    month=" //div[contains(@class, 'mat-calendar-body-cell-content mat-focus-indicator')]";
    gender="#mat-select-value-5";
    genderM="#mat-option-9 > .mat-option-text";//Gender Male
    genderF="//span[@class='mat-option-text'][normalize-space()='Female']";
    taboccoNo="label[for='mat-radio-7-input'] span[class='mat-radio-inner-circle']";
    taboccoYes="label[for='mat-radio-8-input'] span[class='mat-radio-inner-circle']";
    taxFilingJoin="#mat-radio-8 > .mat-radio-label";//Tax filing jointly
    taxFilingIndiv="#mat-radio-9 > .mat-radio-label";//Tax filing individual
    tobacoUserLink='mat-label > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon';
    street="#mat-input-7";
    zipCode="#mat-input-8";
    searchNew=".mat-form-field-suffix > .mat-focus-indicator";
    search=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    emailCom="#mat-input-9";
    nextButt=".form-wrapper > .mat-raised-button";
    countyState="(//div[@class='mat-select-arrow ng-tns-c216-19'])[1]";
    
    city="(//div[@id='mat-select-value-9'])[1]";
    city1="#mat-option-18 > .mat-option-text";
    city2 ="#mat-option-19 > .mat-option-text";
    magiTier = "#mat-select-value-11";
    maggiTierOption="//span[@class='mat-option-text']"
    magiTier1 = "#mat-option-11 > .mat-option-text";
    magiTier2 = "#mat-option-12 > .mat-option-text";
    magiTier3 = "#mat-option-13 > .mat-option-text";
    magiTier4 = "#mat-option-14 > .mat-option-text";
    magiTier5 = "#mat-option-15 > .mat-option-text";
    communicationEmail = "#mat-input-9";
    contact = "#mat-input-11";
    conciergeNo="label[for='mat-radio-11-input'] span[class='mat-radio-outer-circle']";
    conciergeYes="label[for='mat-radio-12-input'] span[class='mat-radio-outer-circle']"
   


    clickAiVanteLogo(){
        cy.get(this.AiVanteLogo).should('be.visible').click();
    }
    enterEmail(email){
        cy.get(this.email).should('be.visible').type(email);
    }
    enterName(name){
        cy.get(this.name).should('be.visible').type(name);
    }
    clickDatePicker(){
        cy.xpath(this.datePicker).should('be.visible').click();
    }
    enterDateofBirth(monthYear){
        cy.xpath(this.dateOfBirth).should('be.visible').type(monthYear);
    }
    clickHealthProfile(profile){
        cy.xpath(this.healthProfile)
        .contains(profile)
        .should('be.visible')
        .click();
    }
    clickModerateHealth() {
        cy.get(this.moderateHealth).should('be.visible').click();
    }
   

clickYear(year) {
  cy.get(this.year)
    .contains(year)
    .click();
}

    clickMonth(month) {
        cy.xpath(this.month).contains(month).click();
    }
    enterName(name) {
        cy.get(this.recommendationName).should('be.visible').type(name);
    }
    clickCountyState() {
        cy.get(this.countyState).should('be.visible').click();
    }
    enterLifeexpectancy(expectancy) {
        cy.xpath(this.lifeExpectancy).should('be.visible').clear().type(expectancy).wait(1000);
    }
   
    clickDateOfBirth() {
        cy.get(this.dateOfBirth).should('be.visible').wait(2000).click();
    }
    clickCalenderEle() {
        cy.get(this.calenderEle).should('be.visible').wait(2000).click();
    }
   
   
    clickGender() {
        cy.get(this.gender).should('be.visible').click();
    }
    clickMale() {
        cy.get(this.genderM).should('be.visible').click();
    }
    clickFemale() {
        cy.xpath(this.genderF).should('be.visible').click();
    }
    clickTabaccoNo() {
        cy.get(this.taboccoNo).should('be.visible').click();
    }
    clickTabaccoYes() {
       cy.get(this.taboccoYes).should('be.visible').click();
    }
    clickTaxIndiv() {
        cy.get(this.taxFilingIndiv).should('be.visible').click();
    }
    clickTaxJoin() {
        cy.get(this.taxFilingJoin).should('be.visible').click();
    }
    enterStreet(street) {
        cy.get(this.street).should('be.visible').type(street);
    }
    enterZip(zipCode) {
        cy.get(this.zipCode).should('be.visible').type(zipCode).wait(1000);
    }
    clickSearchNew() {
        cy.get(this.searchNew).should('be.visible').click();
    }
    clickMagitier() {
        cy.get(this.magiTier).should('be.visible').click();
    }
    clickTobaccoUserlink() {
        cy.get(this.tobacoUserLink).should('be.visible').click();
    }
    enterContact(contact) {
        cy.get(this.contact).should('be.visible').type(contact).wait(1000);
    }
    clickhealthArrow() {
        cy.get(this.healtharrow).should('be.visible').click();
    }
    datePickerclick() {
        cy.get(this.datePicker).should('be.visible').click();
    }
  
    clickSearch() {
        cy.get(this.search).should('be.visible').click();
    }
    nextHomeClick() {
        cy.get(this.nexthome, { timeout: 1000 }) 
            .should('be.visible')
            .and('be.enabled')
            .click({ force: true });
    }
 
    clickCity() {
        cy.xpath(this.city).should('be.visible').click({ force: true });
    }
    clickCity1() {
        cy.get(this.city1).should('be.visible').click();
    }
    clickCity2() {
        cy.get(this.city2).should('be.visible').click();
    }
    clickMagiTier() {
        cy.get(this.magiTier).should('be.visible').click();
    }

    clickMaggiTireOptions(magitier){
        cy.xpath(this.maggiTierOption)
        .contains(magitier)
        .should('be.visible')
        .click();
    }
    clickMagiTier1() {
        cy.get(this.magiTier1).should('be.visible').click().wait(1000);
    }
    clickMagiTier2() {
        cy.get(this.magiTier2).should('be.visible').click().wait(1000);
    }
    clickMagiTier3() {
        cy.get(this.magiTier3).should('be.visible').click().wait(1000);
    }
    clickMagiTier4() {
        cy.get(this.magiTier4).should('be.visible').click().wait(1000);
    }
    clickMagiTier5() {
        cy.get(this.magiTier5).should('be.visible').click().wait(1000);
    }
    entercommunicationEmail(communicationEmail) {
        cy.get(this.communicationEmail).should('be.visible').type(communicationEmail);
    }
    enterContact(contact) {
        cy.get(this.contact).should('be.visible').type(contact).wait(1000);

    }
    clickConciergeYes() {
        cy.get(this.conciergeYes).should('be.visible').click({ force: true });
    }
    clickConceirgeNo() {
        cy.get(this.conciergeNo).should('be.visible').click({ force: true });}

    clickNext() {
        cy.xpath(this.nextButt).should('be.visible').click({ force: true });
    }
    verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }
}

export default HomePage;
