class HomePage {
    healtharrow = ".mat-select-arrow.ng-tns-c216-10";
    datePicker = ".mat-datepicker-toggle-default-icon.ng-star-inserted";
    dateOfBirth = "#mat-input-6";
    year1957 = ".mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-selected";
    month1957 = ".mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-selected";
    zip = "#mat-input-8";
    search = ".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    nexthome = ".form-wrapper > .mat-raised-button";
    magiT16 = "#mat-option-13 > .mat-option-text";//Magitier 3
    emailCom = "#mat-input-9";
    year1959 = "td[aria-label='1959'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";
    month1959 = "td[aria-label='1959-02-01T00:00:00-07:00'] div[class='mat-calendar-body-cell-content mat-focus-indicator']";



//Chhabi Code
    AiVanteLogo = "img[src='assets/images/Aivante-logo.png']";
    email = "//*[@id='mat-input-0']" 
    healthProfile = "//*[@id='mat-select-value-1']" 
    bestHealth = "//*[@id='mat-option-0']/span" 
    goodHealth = "//*[@id='mat-option-1']/span" 
    moderateHealth = "//*[@id='mat-option-2']/span" 
    poorHealth = "//*[@id='mat-option-3']/span" 
    sickHealth = "//*[@id='mat-option-4']/span" 
    healthProfileMSG = ":nth-child(2) > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    recommendationName = "//*[@id='mat-input-1']" 
    lifeExpectancy = "#mat-input-5";
    calenderEle = ".mat-datepicker-toggle > .mat-focus-indicator";
   year = ":nth-child(6) > [data-mat-col='2']";
    month = "//div[normalize-space()='APR']";
    gender = "//*[@id='mat-select-value-3']" 
    genderM = "//*[@id='mat-option-5']" 
    genderF = "//span[@class='mat-option-text'][normalize-space()='Female']";
    taboccoNo = "#mat-radio-6 > .mat-radio-label";
    taboccoYes = "#mat-radio-7 > .mat-radio-label";
    taxFilingJoin = "#mat-radio-8 > .mat-radio-label";
    taxFilingIndiv = "#mat-radio-9 > .mat-radio-label";
    tobacoUserLink = 'mat-label > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon';
    street = "#mat-input-7";
    zipCode = "/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-recom/div[2]/div/form/div/div[9]/mat-form-field/div/div[1]/div[3]/input"; //"#mat-input-8";
    searchIcon = "/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-recom/div[2]/div/form/div/div[9]/mat-form-field/div/div[1]/div[4]/button/span[1]/mat-icon"; //".mat-form-field-suffix > .mat-focus-indicator";
   countyState = "/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-recom/div[2]/div/form/div/div[11]/div[1]/mat-form-field/div/div[1]/div[3]/mat-select/div/div[1]/span"; //"#mat-select-value-7";
    city = "/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-recom/div[2]/div/form/div/div[11]/div[2]/mat-form-field/div/div[1]/div[3]/mat-select/div/div[1]/span";
    city1 = "//*[@id='mat-option-14']/span" 
    city2 = "//*[@id='mat-option-15']/span" 
    lifeExpectancyMSG = ":nth-child(4) > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    magiTier = "//*[@id='mat-select-value-9']"
    magiTier1 = "//span[@class='mat-option-text'][normalize-space()='< $ 212K']" 
    magiTier2 = "//span[normalize-space()='$ 212K to $ 266K']"
    magiTier3 = "//span[normalize-space()='$ 266K to $ 334K']" 
    magiTier4 = "//span[normalize-space()='$ 334K to $ 400K']" 
    magiTier5 = "//span[normalize-space()='$ 400K to $ 750K']" 
    magiTier6 = "//span[normalize-space()='> $750K']";
    communicationEmail = "/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-recom/div[2]/div/form/div/div[13]/mat-form-field/div/div[1]/div[3]/input"; //"//*[@id='mat-input-17']" //"#mat-input-9";
    contact = "#mat-input-8" 
    nextButt = ".form-wrapper > .mat-raised-button";

    clickAiVanteLogo() {
        cy.get(this.AiVanteLogo).should('be.visible').click();
    }
    enterEmail(email) {
        cy.xpath(this.email).should('be.visible').type(email);
    }
    clickHealthProfile() {
        cy.xpath(this.healthProfile).should('be.visible').click();
    }
    clickBestHealth() {
        cy.xpath(this.bestHealth).should('be.visible').click();
    }
    clickGoodHealth() {
        cy.xpath(this.goodHealth).should('be.visible').click();
    }
    clickModerateHealth() {
        cy.xpath(this.moderateHealth).should('be.visible').click();
    }
    clickPoorHealth() {
        cy.xpath(this.poorHealth).should('be.visible').click();
    }
    clickSickHealth() {
        cy.xpath(this.sickHealth).should('be.visible').wait(1000).click();
    }
    clickHealthProfileMSG() {
        cy.get(this.healthProfileMSG).should('be.visible').click();
    }
    clickYear() {
        cy.get(this.year).should('be.visible').wait(2000).click();
    }
    clickMonth() {
        cy.xpath(this.month).should('be.visible').wait(2000).click();
    }
    enterName(name) {
        cy.xpath(this.recommendationName).should('be.visible').type(name);
    }
    clickCountyState() {
        cy.xpath(this.countyState).should('be.visible').click();
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
        cy.xpath(this.gender).should('be.visible').click();
    }
    clickMale() {
        cy.xpath(this.genderM).should('be.visible').click();
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
        cy.xpath(this.zipCode).should('be.visible').type(zipCode).wait(1000);
    }
    clickSearchIcon() {
        cy.xpath(this.searchIcon).should('be.visible').click();
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
    clickCity() {
        cy.xpath(this.city).should('be.visible').click({ force: true });
    }
    clickCity1() {
        cy.xpath(this.city1).should('be.visible').click();
    }
    clickCity2() {
        cy.xpath(this.city2).should('be.visible').click();
    }
    clickMagiTier() {
        cy.xpath(this.magiTier).should('be.visible').click();
    }
    clickMagiTier1() {
        cy.xpath(this.magiTier1).should('be.visible').click().wait(1000);
    }
    clickMagiTier2() {
        cy.xpath(this.magiTier2).should('be.visible').click().wait(1000);
    }
    clickMagiTier3() {
        cy.xpath(this.magiTier3).should('be.visible').click().wait(1000);
    }
    clickMagiTier4() {
        cy.xpath(this.magiTier4).should('be.visible').click().wait(1000);
    }
    clickMagiTier5() {
        cy.xpath(this.magiTier5).should('be.visible').click().wait(1000);
    }
    clickmagiTier6() {
        cy.xpath(this.magiTier6).click();
    }
    entercommunicationEmail(communicationEmail) {
        cy.xpath(this.communicationEmail).should('be.visible').type(communicationEmail);
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