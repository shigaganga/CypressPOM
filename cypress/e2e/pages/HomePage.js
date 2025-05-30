class HomePage {
    AiVanteLogo = "img[src='assets/images/Aivante-logo.png']";
    healtharrow = "(//span[contains(@class, 'mat-select-value-text')])[1]";
    datePicker = "//button[@aria-label='Open calendar']//span[@class='mat-button-wrapper']//*[name()='svg']";
    zipCode = "//mat-label[normalize-space(.)='Zipcode (Click search for County, State and City)']/ancestor::mat-form-field//input";
    search = "(//mat-icon[normalize-space()='search'])[1]";
    nexthome = ".form-wrapper > .mat-raised-button";
    email = "//mat-label[normalize-space(.)='Recommendation Email']/ancestor::mat-form-field//input";
    name = "//mat-label[normalize-space(.)='Recommendation Name']/ancestor::mat-form-field//input";
    nameBlankErrortext = "//*[text()='Profile Name is required.']";
    healthProfile = "//span[@class='mat-option-text']";
    lifeExpectancy = "//input[@id='mat-input-5']";
    calenderEle = ".mat-datepicker-toggle > .mat-focus-indicator";
    year = "div.mat-calendar-body-cell-content.mat-focus-indicator";
    month = "//div[contains(@class, 'mat-calendar-body-cell-content mat-focus-indicator')]";
    gender = "mat-select[formcontrolname='gender']";
    genderM = "(//span[@class='mat-option-text'][normalize-space()='Male'])";
    genderF = "//span[@class='mat-option-text'][normalize-space()='Female']";
    taboccoNo = "label[for='mat-radio-7-input'] span[class='mat-radio-inner-circle']";
    taboccoYes = "label[for='mat-radio-8-input'] span[class='mat-radio-inner-circle']";
    taxFilingJoin = "#mat-radio-8 > .mat-radio-label";
    taxFilingIndiv = "#mat-radio-9 > .mat-radio-label";
    tobacoUserLink = 'mat-label > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon';
    street = "#mat-input-7";
    nextButt = ".form-wrapper > .mat-raised-button";
    countyState = "//mat-label[normalize-space(.)='County, State']";
    city = "(//div[@id='mat-select-value-9'])[1]";
    city1 = "#mat-option-18 > .mat-option-text";
    city2 = "#mat-option-19 > .mat-option-text";
    magiTier = "#mat-select-value-11";
    maggiTierOption = "//span[@class='mat-option-text']";
    magiTier1 = "#mat-option-11 > .mat-option-text";
    magiTier2 = "#mat-option-12 > .mat-option-text";
    magiTier3 = "#mat-option-13 > .mat-option-text";
    magiTier4 = "#mat-option-14 > .mat-option-text";
    magiTier5 = "#mat-option-15 > .mat-option-text";
    communicationEmail = "//mat-label[normalize-space(.)='Communication Email']/ancestor::mat-form-field//input";
    contact = "//mat-label[normalize-space(.)='Contact number']/ancestor::mat-form-field//input";
    conciergeNo = "label[for='mat-radio-11-input'] span[class='mat-radio-outer-circle']";
    conciergeYes = "label[for='mat-radio-12-input'] span[class='mat-radio-outer-circle']";

    clickAiVanteLogo() {
        cy.get(this.AiVanteLogo).should('be.visible').click({ force: true });
    }

    enterEmail(email) {
        cy.xpath(this.email).should('be.visible').type(email, { force: true });
    }

    enterName(name) {
        cy.xpath(this.name).should('be.visible').clear().type(name, { force: true });
    }

    verifyNameBlankErrorText() {
        cy.xpath(this.nameBlankErrortext).should('be.visible').and('contain', 'Profile Name is required.');
    }

    clickDatePicker() {
        cy.xpath(this.datePicker).should('be.visible').click({ force: true });
    }

    clickHealthProfile(profile) {
    cy.xpath(this.healthProfile)
        .contains(profile)
        .scrollIntoView()
        .should('be.visible')
        .click();
}

    

    clickYear(year) {
        cy.get(this.year).contains(year).should('be.visible').click({ force: true });
    }

    clickMonth(month) {
        cy.xpath(this.month).contains(month).should('be.visible').click({ force: true });
    }

    clickCountyState() {
        cy.xpath(this.countyState).should('be.visible').click({ force: true });
    }

    enterLifeexpectancy(expectancy) {
        cy.xpath(this.lifeExpectancy).should('be.visible').clear({ force: true }).type(expectancy, { force: true });
    }

    clickCalenderEle() {
        cy.get(this.calenderEle).should('be.visible').click({ force: true });
    }

    clickGender() {
        cy.get(this.gender).should('be.visible').click({ force: true });
    }

    clickMale() {
        cy.xpath(this.genderM).should('be.visible').click({ force: true });
    }

    clickFemale() {
        cy.xpath(this.genderF).should('be.visible').click({ force: true });
    }

    selectGender(gender) {
        if (gender.toLowerCase() === 'male') {
            this.clickMale();
        } else if (gender.toLowerCase() === 'female') {
            this.clickFemale();
        }
    }

    clickTabaccoNo() {
        cy.get(this.taboccoNo).should('be.visible').click({ force: true });
    }

    clickTabaccoYes() {
        cy.get(this.taboccoYes).should('be.visible').click({ force: true });
    }

    selectTobaccoOption(option) {
        if (option.toLowerCase() === 'yes') {
            this.clickTabaccoYes();
        } else if (option.toLowerCase() === 'no') {
            this.clickTabaccoNo();
        }
    }

    clickTaxIndiv() {
        cy.get(this.taxFilingIndiv).should('be.visible').click({ force: true });
    }

    clickTaxJoin() {
        cy.get(this.taxFilingJoin).should('be.visible').click({ force: true });
    }

    selectTaxFilingStatus(status) {
        if (!status) throw new Error('Tax filing status is undefined or null');
        const normalizedStatus = status.toLowerCase().trim();
        if (normalizedStatus === 'individual') {
            this.clickTaxIndiv();
        } else if (normalizedStatus === 'jointly') {
            this.clickTaxJoin();
        } else {
            throw new Error(`Invalid tax filing status: ${status}`);
        }
    }

    enterStreet(street) {
        cy.get(this.street).should('be.visible').type(street, { force: true });
    }

    enterZip(zipCode) {
        cy.xpath(this.zipCode).should('be.visible').type(zipCode, { force: true });
    }

    clickMagitier() {
        cy.get(this.magiTier).should('be.visible').click({ force: true });
    }

    clickTobaccoUserlink() {
        cy.get(this.tobacoUserLink).should('be.visible').click({ force: true });
    }

    enterContact(contact) {
        cy.xpath(this.contact).should('be.visible').type(contact, { force: true });
    }

    clickhealthArrow() {
        cy.xpath(this.healtharrow).should('be.visible').click({ force: true });
    }

    clickSearch() {
        cy.xpath(this.search).should('be.visible').click({ force: true });
    }

    nextHomeClick() {
        cy.get(this.nexthome).should('be.visible').and('be.enabled').click({ force: true });
    }

    clickCity() {
        cy.xpath(this.city).should('be.visible').click({ force: true });
    }

    clickCity1() {
        cy.get(this.city1).should('be.visible').click({ force: true });
    }

    clickCity2() {
        cy.get(this.city2).should('be.visible').click({ force: true });
    }

    clickMagiTier() {
        cy.get(this.magiTier).should('be.visible').click({ force: true });
    }

    clickMaggiTireOptions(magitier) {
        cy.xpath(this.maggiTierOption).contains(magitier).should('be.visible').click({ force: true });
    }

    clickMagiTier1() {
        cy.get(this.magiTier1).should('be.visible').click({ force: true });
    }

    clickMagiTier2() {
        cy.get(this.magiTier2).should('be.visible').click({ force: true });
    }

    clickMagiTier3() {
        cy.get(this.magiTier3).should('be.visible').click({ force: true });
    }

    clickMagiTier4() {
        cy.get(this.magiTier4).should('be.visible').click({ force: true });
    }

    clickMagiTier5() {
        cy.get(this.magiTier5).should('be.visible').click({ force: true });
    }

    entercommunicationEmail(communicationEmail) {
        cy.xpath(this.communicationEmail).should('be.visible').type(communicationEmail, { force: true });
    }

    clickConciergeYes() {
        cy.get(this.conciergeYes).should('be.visible').click({ force: true });
    }

    clickConceirgeNo() {
        cy.get(this.conciergeNo).should('be.visible').click({ force: true });
    }

    selectConciergeOption(option) {
        if (option.toLowerCase() === 'yes') {
            this.clickConciergeYes();
        } else if (option.toLowerCase() === 'no') {
            this.clickConceirgeNo();
        }
    }
 enterContact(contact) {
        cy.xpath(this.contact).should('be.visible').type(contact).wait(1000);

    }
    verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }
}

export default HomePage;
