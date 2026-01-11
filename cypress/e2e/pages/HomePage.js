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

    bestHealth = "//span[@class='mat-option-text'][normalize-space()='Best Health']"
    goodHealth = "//span[normalize-space()='Good Health']"
    moderateHealth = "//span[normalize-space()='Moderate Health']"
    poorHealth = "//span[normalize-space()='Poor Health']"
    sickHealth = "//span[normalize-space()='Sick']"
    healthProfileMSG = "//app-help-icon[@helpname='health_profile']//mat-icon[@role='img'][normalize-space()='error_outline']"
    healthProfileDropDown = "//div[@class='mat-form-field-infix ng-tns-c170-2']";

    lifeExpectancy = "//input[@id='mat-input-5']";
    lifeExpectancyMSG = "//app-help-icon[@helpname='life_expectancy']//mat-icon[@role='img'][normalize-space()='error_outline']"
    calenderEle = ".mat-datepicker-toggle > .mat-focus-indicator";
    year = "div.mat-calendar-body-cell-content.mat-focus-indicator";
    month = "//div[contains(@class, 'mat-calendar-body-cell-content mat-focus-indicator')]";
    gender = "#mat-select-value-3" //"mat-select[formcontrolname='gender']";
    //genderM = "//span[normalize-space()='Male']" //"(//span[@class='mat-option-text'][normalize-space()='Male'])";
    genderM= "//span[@class='mat-option-text' and normalize-space(text())='Male']"
    //genderF = "//span[@class='mat-option-text'][normalize-space()='Female']"; //"//span[@class='mat-option-text'][normalize-space()='Female']";
    genderF ="//span[contains(text(), 'Female') and contains(@class, 'mat-select-min-line')]"
    //taboccoNo = "#mat-radio-4 > .mat-radio-label" //"label[for='mat-radio-7-input'] span[class='mat-radio-inner-circle']";
     taboccoNo = "//mat-radio-group[@role='radiogroup' and @formcontrolname='tobacco']//input[@type='radio' and @value='0']"

    taboccoYes = "#mat-radio-5 > .mat-radio-label" //"label[for='mat-radio-8-input'] span[class='mat-radio-inner-circle']";
    tobacoUserLink = 'mat-label > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon';
    //taxFilingJoin = "#mat-radio-6 > .mat-radio-label" //"#mat-radio-8 > .mat-radio-label";
    taxFilingJoin="//label[@class='mat-radio-label']//input[@type='radio'and @value='MARRIED_FILING_JOINTLY']"
    //taxFilingIndiv = "#mat-radio-7 > .mat-radio-label" //"#mat-radio-9 > .mat-radio-label";
    taxFilingIndiv = "//label[@class='mat-radio-label']//input[@type='radio'and @value='FILING_INDIVIDUALLY']"
    street = "#mat-input-7";
    nextButt = ".form-wrapper > .mat-raised-button";
    countyState = "//mat-label[normalize-space(.)='County, State']";
    city = "(//div[@id='mat-select-value-9'])[1]";
    city1 = "#mat-option-18 > .mat-option-text";
    city2 = "#mat-option-19 > .mat-option-text";
    //magiTier = "#mat-select-value-9";//#mat-select-value-9
    magiTier ="//mat-select[@role='combobox' and @formcontrolname='magiTier']"
    //maggiTierOption = "//span[@class='mat-option-text']";
    maggiTierOption = "//div[@class='mat-select-panel']//div[@role='listbox' and @tabindex='-1']//span[@class='mat-option-text']"
    magiTier1 = "#mat-option-7 > .mat-option-text"
    magiTier2 = "#mat-option-8 > .mat-option-text";
    magiTier3 = "#mat-option-9 > .mat-option-text";
    magiTier4 ="#mat-option-10 > .mat-option-text";
    magiTier5 = "//span[normalize-space()='$ 400K to $ 750K']";
    magiTier6 = "#mat-option-12 > .mat-option-text";
    communicationEmail = "//mat-label[normalize-space(.)='Communication Email']/ancestor::mat-form-field//input";
    contact = "//mat-label[normalize-space(.)='Contact number']/ancestor::mat-form-field//input";
    conciergeNo = "#mat-radio-8 > .mat-radio-label" //"label[for='mat-radio-11-input'] span[class='mat-radio-outer-circle']";
    //conciergeYes = "#mat-radio-9 > .mat-radio-label" //"label[for='mat-radio-48-input'] span[class='mat-radio-outer-circle']";
    conciergeYes = "//label[for='mat-radio-48-input'] span[class='mat-radio-outer-circle']";
    conciergeAmmount = "#mat-input-7"
conciergeYes

    clickAiVanteLogo() {
        cy.get(this.AiVanteLogo).should('be.visible').click({ force: true });
    }
    clickhealthArrow() {
        cy.xpath(this.healtharrow).should('be.visible').click({ force: true });
    }
    clickDatePicker() {
        cy.xpath(this.datePicker).should('be.visible').click({ force: true });
    }
    enterZip(zipCode) {
        cy.xpath(this.zipCode).should('be.visible').type(zipCode, { force: true });
    }
    clickSearch() {
        cy.xpath(this.search).should('be.visible').click({ force: true });
    }
    nextHomeClick() {
        cy.get(this.nexthome).should('be.visible').and('be.enabled').click({ force: true });
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
    clickHealthProfile(profile) {
        cy.xpath(this.healthProfile)
            .contains(profile)
            .scrollIntoView()
            .should('be.visible')
            .click();
    }
clickBestHealth() {
        cy.xpath(this.bestHealth).click()
    }
    clickGoodHealth() {
        cy.xpath(this.goodHealth).click()
    }
    clickModerateHealth() {
        cy.xpath(this.moderateHealth).click()
    }
    clickPoorHealth() {
        cy.xpath(this.poorHealth).click()
    }
    clickSickHealth() {
        cy.xpath(this.sickHealth).click()
    }
    clickHealthProfileMSG() {
        cy.xpath(this.healthProfileMSG).click()
    }
   // clickHealthProfile() {
        //Click the dropdown to open it.
      //  cy.xpath(this.healthProfileDropDown).click();
   // }
    enterLifeexpectancy(expectancy) {
        cy.xpath(this.lifeExpectancy).should('be.visible').clear({ force: true }).type(expectancy, { force: true });
    }
    clicklifeExpectancyMSG() {
        cy.xpath(this.lifeExpectancyMSG).click();
    }
    clickCalenderEle() {
        cy.get(this.calenderEle).should('be.visible').click({ force: true });
    }
    clickYear(year) {
        cy.get(this.year).contains(year).should('be.visible').click({ force: true });
    }
    clickMonth(month) {
        cy.xpath(this.month).contains(month).should('be.visible').click({ force: true });
    }
    clickGender() {
        cy.get(this.gender).should('be.visible').click({ force: true });
    }
    clickMale() {
        cy.xpath(this.genderM,{timeout:5000}).should('be.visible').click({ force: true });
    }
    clickFemale() {
        cy.xpath(this.genderF,{timeout:5000}).should('be.visible').click({ force: true });
    }
    selectGender(gender) {
        if (gender.toLowerCase() === 'male') {
            this.clickMale();
        } else if (gender.toLowerCase() === 'female') {
            this.clickFemale();
        }
    }
    clickTabaccoNo() {
       // cy.get(this.taboccoNo).should('be.visible').click({ force: true });
       cy.xpath(this.taboccoNo,{timeout:5000}).should('be.visible').click({force:true});

    }
    clickTabaccoYes() {
        cy.get(this.taboccoYes).should('be.visible').click({ force: true });
    }
    clickTobaccoUserlink() {
        cy.get(this.tobacoUserLink).should('be.visible').click({ force: true });
    }
    selectTobaccoOption(option) {
        if (option.toLowerCase() === 'yes') {
            this.clickTabaccoYes();
        } else if (option.toLowerCase() === 'no') {
            this.clickTabaccoNo();
        }
    }
    clickTaxIndiv() {
        cy.xpath(this.taxFilingIndiv).should('be.visible').click({ force: true });
    }
    clickTaxJoin() {
        cy.xpath(this.taxFilingJoin).should('be.visible').click({ force: true });
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
clickCountyState() {
        cy.xpath(this.countyState).should('be.visible').click({ force: true });
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
    magiTierTxtField() {
        cy.xpath(this.magiTier).should('be.visible').click({ force: true })
    }

    clickMagiTier(magitier) {
        //cy.get(this.magiTier).should('be.visible').click({ force: true });
        cy.xpath(this.magiTier).should('be.visible').click({ force: true })
        cy.xpath("//div[@role='listbox']")
        .find('span[class ="mat-option-text"]')
        .contains(magitier)
        .click({force:true})
        
    }
    clickMaggiTireOptions(magitier) {
        cy.xpath(this.maggiTierOption,{timeout:5000}).contains(magitier).should('be.visible').click({ force: true });
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
        cy.xpath(this.magiTier5).scrollIntoView().should('be.visible').click({ force: true });
    }
    clickMagiTier6() {
        cy.get(this.magiTier6).scrollIntoView().should('be.visible').click().wait(1000);
    }
    entercommunicationEmail(communicationEmail) {
        cy.xpath(this.communicationEmail).should('be.visible').type(communicationEmail, { force: true });
    }
    enterContact(contact) {
        cy.xpath(this.contact).should('be.visible').type(contact, { force: true });
    }
    clickConciergeYes() {
        // cy.xpath(this.conciergeYes).should('be.visible').click({ force: true });
        cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
    }
    clickConceirgeNo() {
        cy.get(this.conciergeNo).should('be.visible').click({ force: true });
    }
    enterConceriergeAmount(conciergeAmmount) {
        cy.get(this.conciergeAmmount)
            .should('be.visible')
            .clear()
            .type(conciergeAmmount).click();
    }
    selectConciergeOption(option) {
        if (option.toLowerCase() === 'yes') {
            this.clickConciergeYes();
        } else if (option.toLowerCase() === 'no') {
            this.clickConceirgeNo();
        }
    }
    clicknextButt() {
        cy.get(this.nextButt, { timeout: 2000 })
            .should('be.visible')
            .and('be.enabled')
            .click({ force: true });
    }
    verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }
}

export default HomePage;