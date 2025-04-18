class HomePage{
    AiVanteLogo="img[src='assets/images/Aivante-logo.png']";
    healtharrow=".mat-select-arrow.ng-tns-c216-10";
    datePicker=".mat-datepicker-toggle-default-icon.ng-star-inserted";
    year1957=".mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-selected";
    month1957=".mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-selected";
    zip="#mat-input-8";
    search=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    nexthome=".form-wrapper > .mat-raised-button";
    email="#mat-input-3";
  healthProfile=".mat-select-arrow.ng-tns-c216-10";
    bestHealth = "#mat-option-4 > .mat-option-text";
    goodHealth = "#mat-option-5 > .mat-option-text";
    moderateHealth = "#mat-option-6 > .mat-option-text";
    poorHealth = "#mat-option-7 > .mat-option-text";
    sickHealth = "#mat-option-8 > .mat-option-text";
    recommendationName="#mat-input-4";
    lifeExpectancy="#mat-input-5";
    dateOfBirth="#mat-input-6";
    calenderEle =".mat-datepicker-toggle > .mat-focus-indicator";
    year1959="td[aria-label='1959'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
    month1959="td[aria-label='1959-02-01T00:00:00-07:00'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
    year = ":nth-child(6) > [data-mat-col='2']";
    month="//div[normalize-space()='APR']";
    gender="#mat-select-value-5";
    genderM="#mat-option-9 > .mat-option-text";//Gender Male
    genderF="//span[@class='mat-option-text'][normalize-space()='Female']";
    taboccoNo="#mat-radio-6 > .mat-radio-label";
    taboccoYes="#mat-radio-7 > .mat-radio-label";
    taxFilingJoin="#mat-radio-8 > .mat-radio-label";//Tax filing jointly
    taxFilingIndiv="#mat-radio-9 > .mat-radio-label";//Tax filing individual
    tobacoUserLink='mat-label > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon';
    street="#mat-input-7";
    zipCode="#mat-input-8";
    searchNew=".mat-form-field-suffix > .mat-focus-indicator";
    search=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    magiT16="#mat-option-13 > .mat-option-text";//Magitier 3
    emailCom="#mat-input-9";
    contact="#mat-input-10";
    nextButt=".form-wrapper > .mat-raised-button";
    healthProfileMSG=":nth-child(2) > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    countyState="#mat-select-value-7";
    city='#mat-select-value-9';
    city1="#mat-option-18 > .mat-option-text";
    city2 ="#mat-option-19 > .mat-option-text";
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
        cy.get(this.AiVanteLogo).should('be.visible').click();
    }
    enterEmail(email){
        cy.get(this.email).should('be.visible').type(email);
    }
    clickHealthProfile(){
        cy.get(this.healthProfile).should('be.visible').click();
    }
    clickSick(){
        cy.get(this.sickHealth).should('be.visible').wait(1000).click();
    }
    clickModerateHealth() {
        cy.get(this.moderateHealth).should('be.visible').click();
    }
    clickYear() {
        cy.get(this.year).should('be.visible').wait(2000).click();
    }
    clickMonth() {
        cy.xpath(this.month).should('be.visible').wait(2000).click();
    }
    enterName(name) {
        cy.get(this.recommendationName).should('be.visible').type(name);
    }
    clickCountyState() {
        cy.get(this.countyState).should('be.visible').click();
    }
    enterLifeexpectancy(lifeExpectancy) {
        cy.get(this.lifeExpectancy).should('be.visible').clear().type(lifeExpectancy).wait(1000);
    }
    clicklifeExpectancyMSG() {
        cy.get(this.lifeExpectancyMSG).should('be.visible').click();
    }
    clickDateOfBirth() {
        cy.get(this.dateOfBirth).should('be.visible').wait(2000).click();
    }
    clickCalenderEle() {
        cy.get(this.calenderEle).should('be.visible').wait(2000).click();
    }
    click1959Year() {
        cy.get(this.year1959).should('be.visible').click();
    }
    click1959Month() {
        cy.get(this.month1959).should('be.visible').wait(2000).click();
    }
    clickDobB() {
        cy.get(this.dateOfBirth).should('be.visible').click();
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
    clickmagi16() {
        cy.get(this.magiT16).should('be.visible').click().wait(1000);
    }
    enterCommEmail(emailCom) {
        cy.get(this.emailCom).should('be.visible').type(emailCom);
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
    clickGoodHealth() {
        cy.get(this.goodHealth).should('be.visible').click();
    }
    clickPoorHealth() {
        cy.get(this.poorHealth).should('be.visible').click();
    }
    clickSickHealth() {
        cy.get(this.sickHealth).should('be.visible').click();
    }
    clickBestHealth() {
        cy.get(this.bestHealth).should('be.visible').click();
    }
    datePickerclick() {
        cy.get(this.datePicker).should('be.visible').click();
    }
    year1957click() {
        cy.get(this.year1957).should('be.visible').click();
    }
    month1957click() {
        cy.get(this.month1957).should('be.visible').click();
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
    clickHealthProfileMSG() {
        cy.get(this.healthProfileMSG).should('be.visible').click();
    }
    clickCity() {
        cy.get(this.city).should('be.visible').click({ force: true });
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
    clickNext() {
        cy.get(this.nextButt).should('be.visible').click({ force: true });
    }
    verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }
}

export default HomePage;
