class HomePage {
    AiVanteLogo="img[src='assets/images/Aivante-logo.png']";
    
        backBut = ".button-wrapper > .mat-focus-indicator > .mat-button-wrapper";
        clickbackBut() { cy.get(this.backBut).wait(2000).click() }
    
        recommendationEmail = "#mat-input-3";
        healthProfile = ".mat-select-arrow.ng-tns-c216-10";
        bestHealth = "#mat-option-4 > .mat-option-text";
        goodHealth = "#mat-option-5 > .mat-option-text";
        moderateHealth = "#mat-option-6 > .mat-option-text";
        poorHealth = "#mat-option-7 > .mat-option-text"
        sickHealth = "#mat-option-8 > .mat-option-text";
        recommendationName = "#mat-input-4";
        lifeExpectancy = "#mat-input-5";
        dateOfBirth = "#mat-input-6";
        calenderEle = ".mat-datepicker-toggle > .mat-focus-indicator"; //':nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
        year = "td[aria-label='1959'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
        month = "td[aria-label='1959-02-01T00:00:00-07:00'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
        gender = "#mat-select-value-5";
        genderM = "#mat-option-9 > .mat-option-text";//Gender Male
        genderF = "#mat-option-10 > .mat-option-text";//Gender female
        tabaccoNo = "#mat-radio-6 > .mat-radio-label"
        tabaccoYes = "#mat-radio-7 > .mat-radio-label";
        taxFilingJoin = "#mat-radio-8 > .mat-radio-label";//Tax filing jointly
        taxFilingIndiv = "#mat-radio-9 > .mat-radio-label";//Tax filing individual
        street = "#mat-input-7";
        zipCode = "#mat-input-8";
        search = ".mat-form-field-suffix > .mat-focus-indicator";
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
    
        enterRecommendationEmail(recommendationEmail) {
            cy.get(this.recommendationEmail).type(recommendationEmail);
        }
        clickHealthProfile() {
            cy.get(this.healthProfile).click();
        }
        clickBestHealth() {
            cy.get(this.bestHealth).click();
        }
        clickGoodHealth() {
            cy.get(this.goodHealth).click();
        }
        clickModerateHealth() {
            cy.get(this.moderateHealth).click();
        }
        clickPoorHealth() {
            cy.get(this.poorHealth).click();
        }
        clickSickHealth() {
            cy.get(this.sickHealth).click();
        }
        enterName(name) {
            cy.get(this.recommendationName).type(name);
        }
        enterLifeexpectancy(lifeExpectancy) {
            cy.get(this.lifeExpectancy).clear().type(lifeExpectancy).wait(1000);
        }
        clickDateOfBirth() {
            cy.get(this.dateOfBirth).wait(2000).click();
        }
        clickCalenderEle() {
            cy.get(this.calenderEle).wait(2000).click();
        }
        clickYear() {
            cy.get(this.year).click();
        }
        clickMonth() {
            cy.get(this.month).wait(2000).click();
        }
        clickGender() {
            cy.get(this.gender).click();
        }
        clickMale() {
            cy.get(this.genderM).click();
        }
        clickFemale() {
            cy.gt(this.genderF).click();
        }
        clickTabaccoNo() {
            cy.get(this.tabaccoNo).click();
        }
        clickTabaccoYes() {
            cy.get(this.tabaccoYes).click();
        }
        clickTaxJoin() {
            cy.get(this.taxFilingJoin).click();
        }
        clickTaxIndiv() {
            cy.get(this.taxFilingIndiv).click();
        }
        enterStreet(street) {
            cy.get(this.street).type(street);
        }
        enterZip(zipCode) {
            cy.get(this.zipCode).type(zipCode).wait(1000);
        }
        clickSearch() {
            cy.get(this.search).click();
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
            cy.get(this.nextButt).click();
        }
    
        verifyLandingPageurl(){
            cy.url().should('include', 'http://169.61.105.110/medicareAdvantage_sandbox/landing-page');  
        }
    
    }
    export default HomePage;