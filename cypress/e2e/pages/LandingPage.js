class LandingPage {
    createRecommendation = ".button-container > .mat-focus-indicator > .mat-button-wrapper";//cssselectorHub code
        Tsign = "//span[@id='userInitial']";
        logOut = "//button[normalize-space(text())='Logout']";
        recommendationRadioBut = "#mat-radio-2 > .mat-radio-label";//Recommendation Radio Button
        filterByEmail = "#mat-input-2";    //Filter by recommendation email or name
        expandPlan = ".cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
        collapsesPlan = ".example-expanded-row > .cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
        itemPerPageNext = ".mat-paginator-navigation-next";
        itemPreviousPage = ".mat-paginator-navigation-previous";
        itemLastPage = ".mat-paginator-navigation-last";
        itemFirstPage = ".mat-paginator-navigation-first";
        editRecommandtion=":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1)";
    editHealthProfile="#mat-select-value-3";
    bestHealth="#mat-option-4 > .mat-option-text";
    goodHealth="#mat-option-5 > .mat-option-text";
    moderateHealth="#mat-option-6 > .mat-option-text";
    poorHealth="#mat-option-7 > .mat-option-text";
    sickHealth="#mat-option-8 > .mat-option-text";
    editName="#mat-input-4";
    editLifeExpectancy="#mat-input-5";
    editCalenderEle =".mat-datepicker-toggle > .mat-focus-indicator";
    editYear=":nth-child(6) > [data-mat-col='1']";//1958
    editMonth=":nth-child(3) > [data-mat-col='0']";//May
    editGender="#mat-select-value-5";
    editGenderM="#mat-option-9 > .mat-option-text";//Gender Male
    editGenderF="//span[@class='mat-option-text'][normalize-space()='Female']";
    edittabaccoNo="#mat-radio-6 > .mat-radio-label"
    edittabaccoYes="#mat-radio-7 > .mat-radio-label";
    edittaxFilingJoin="#mat-radio-8 > .mat-radio-label";//Tax filing jointly
    edittaxFilingIndiv="#mat-radio-9 > .mat-radio-label";//Tax filing individual
    editstreet="#mat-input-7";
    editzipCode="#mat-input-8";
    editsearch=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    editcountyState="#mat-select-value-7";
    editcity='#mat-select-value-9';
    editcity1="#mat-option-18 > .mat-option-text"
    editcity2 ="#mat-option-19 > .mat-option-text";
    editContact = "#mat-input-10";
    backBut = ".button-wrapper > .mat-focus-indicator";
    editnextButt = ".form-wrapper > .mat-raised-button";
     
     
    clickCreateRecommendation() {
            cy.get(this.createRecommendation).should('exist').should('be.visible').click();;
        }
        clickTsign() {
            cy.xpath(this.Tsign).click();
        }
        clickLogOut() {
            cy.xpath(this.logOut).should('be.visible').click();
        }
        clickRecommendationRadioBut() {
            cy.get(this.recommendationRadioBut).click();
        }
        enterByEmail(filterByEmail) {
            cy.get(this.filterByEmail).type(filterByEmail);
        }
        clickExpandPlan() {
            cy.get(this.expandPlan).click();
        }
        clickCollapsesPlan() {
            cy.get(this.collapsesPlan).click();
        }
        clickItemPerPageNext() {
            cy.get(this.itemPerPageNext).click();
        }
        clickItemPreviousPage() {
            cy.get(this.itemPreviousPage).click({ force: true });
        }
        clickItemLastPage() {
            cy.get(this.itemLastPage).click();
        }
        clickItemFirstPage() {
            cy.get(this.itemFirstPage).click({ force: true });
        }
        clickEditRecommandtion() {
            cy.get(this.editRecommandtion).click();
        }
    clickEditHealthProfile(){
        cy.get(this.editHealthProfile).click();
    }
    clickbestHealth(){
        cy.get(this.bestHealth).click();
    }
    clickgoodHealth(){
        cy.get(this.goodHealth).click();
    }
    clickmoderateHealth(){
        cy.get(this.moderateHealth).click();
    }
    clickpoorHealth(){
        cy.get(this.poorHealth).click();
    }
    clicksickHealth(){
        cy.get(this.sickHealth).click();
    }
    enterEditName(editName){
        cy.get(this.editName).clear().type(editName);
    }
    entereditLifeExpectancy(editLifeExpectancy){
        cy.get(this.editLifeExpectancy).clear().type(editLifeExpectancy);
    }
    clickeditCalenderEle(){
        cy.get(this.editCalenderEle).click();
    }
    clickeditYear(){
        cy.get(this.editYear).click();
    }
    clickeditMonth(){
        cy.get(this.editMonth).click();
    }
    clickeditGender(){
        cy.get(this.editGender).click();
    }
    clickeditGenderM(){
    cy.get(this.editGenderM).click();
    }
    clickeditGenderF(){
    cy.xpath(this.editGenderF).click();
    }
    clickedittabaccoNo(){
        cy.get(this.edittabaccoNo).click();
    }
    clickedittabaccoYes(){
        cy.get(this.edittabaccoYes).click();
    }
    clickEditTaxIndiv(){
        cy.get(this.edittaxFilingIndiv).click();
    }
    clickEditTaxJoin(){
        cy.get(this.edittaxFilingJoin).click();
    }
    entEreditStreet(editstreet){
        cy.get(this.editstreet).clear().type(editstreet);
    }
    enterEditZip(editzipCode){
        cy.get(this.editzipCode).type(editzipCode);
    }
    clickeditsearch(){
        cy.get(this.editsearch).click();
    }
    clickeditcity1(){
        cy.get(this.editcity1).click();
    }
    clickeditcity2(){
    cy.get(this.editcity2).click();
    }
    enterEditContact(editContact) {
        cy.get(this.editContact).clear().type(editContact);
    }
    clikBackBut() {
        cy.get(this.backBut).click();
    }
    clickeditnextButt() {
        cy.get(this.editnextButt).click({ force: true });
    }
       
        editDrug = "[style='bottom: -10px; position: relative;'] > :nth-child(1) > u";
        editQuanty = "input[placeholder='Quantity']";
        editFrequency = ".marginTop2Percent > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item";
        enterFrequency60 = "nz-option-item[title='60 Days'] div[class='ant-select-item-option-content']"
        enterFrequency90 = "[title='90 Days'] > .ant-select-item-option-content"
        updateDrug = ".floatLeft > .ng-star-inserted";
        cancelUpdateDrug = ".floatRight > .ng-star-inserted";
        doneAddingdrugs = ".ng-star-inserted > .mat-focus-indicator";
        editPharmacy="#mat-checkbox-4 > .mat-checkbox-layout > .mat-checkbox-inner-container";
        editMABut = ":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";//MA buttn
        editPlan = "#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container";
        doneBut = ".button-container > .mat-focus-indicator";
        selectMAPlan = ".mat-checkbox-inner-container";
     
    clickEditDrug() {
            cy.get(this.editDrug).click();
        }
        enterQuanty(editQuanty) {
            cy.get(this.editQuanty).clear().type(editQuanty);
        }
        clickFrequencyBut() {
            cy.get(this.editFrequency).click();
        }
        clickFrequency60() {
            cy.get(this.enterFrequency60).click()
        }
        clickFrequency90() {
            cy.get(this.enterFrequency90).click();
        }
        clickUpdateDrug() {
            cy.get(this.updateDrug).click();
        }
        clickdoneAdding() {
            cy.get(this.doneAddingdrugs).click();
        }
        clickEditPharmacy() {
            cy.get(this.editPharmacy).first().click();
        }
        clickPharmacyNextButt() {
            cy.get(this.pharmacyNextButt).click();
        }
        clickeditMABut() {
            cy.get(this.editMABut).click();
        }
        clickEditPlan() {
            cy.get(this.editPlan).click();
        }
        clickMADoneBut() {
            cy.get(this.doneBut).click();
        }
        clickSelectMAPlan() {
            cy.get(this.selectMAPlan).click();
        }
        //VIEW PLAN:
        viewRecom = ":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > :nth-child(2) > .cdk-column-actions > :nth-child(2)";
        viewBackbut = ".button-container > :nth-child(1)";
        viewLowCost = ".view-button-container > :nth-child(1)";
        backLowCost = ".location-container > .button-wrapper > .mat-focus-indicator";
        viewProvider = ".view-button-container > :nth-child(2)";
        backViewRecommendation = ".button-wrapper > .mat-focus-indicator";
        viewMedicare = ".view-button-container > :nth-child(3)";
        viewLongTerm = ".view-button-container > :nth-child(4)";
        backBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'] span[class='mat-button-wrapper']";//".button-container > :nth-child(1) > .mat-button-wrapper";
     
        clickviewRecom() {
            cy.get(this.viewRecom).click();//{ force: true }
        }
        clickviewBackbut() {
            cy.get(this.viewBackbut).click();
        }
        clickviewLowCost() {
            cy.get(this.viewLowCost).click();
        }
        clickbackLowCost() {
            cy.get(this.backLowCost).click();
        }
        clickviewProvider() {
            cy.get(this.viewProvider).wait(2000).click()
        }
        clickbackViewRecommendation() {
            cy.get(this.backViewRecommendation).click();
        }
        clickviewMedicare() {
            cy.get(this.viewMedicare).wait(2000).click();
        }
        clickviewLongTerm() {
            cy.get(this.viewLongTerm).wait(2000).click();
        }
        clickViewBackBut() {
            cy.get(this.backBut).wait(3000).click();
        }
        //DELETE PLAN:
        deletePlanIcon=":nth-child(1) > .cdk-column-actions > :nth-child(3)";
        //deletePlanIcon = ":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > .mat-row > .cdk-column-actions > :nth-child(3)";
        deleteBut = ".mat-warn > .mat-button-wrapper";
        cancelDeleteBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-warn'] span[class='mat-button-wrapper']";
     
        clickDeletePlanIcon() {
            cy.get(this.deletePlanIcon).click();
        }
        clickDeleteBut() {
            cy.get(this.deleteBut).wait(2000).click();
        }
        clickCancelDeleteBut() {
            cy.get(this.cancelDeleteBut).wait(2000).click();
        }
        //PRESCRIPTION RADIO BUTTON:
        presRadioBut = "#mat-radio-3 > .mat-radio-label";//Prescription Radio Button
        editPresEmail = "#mat-input-3";
        editPrescription = ".inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1)";
        editDrug = "[style='bottom: -10px; position: relative;'] > :nth-child(1) > u";
        viewDrug = ":nth-child(1) > .cdk-column-actions > :nth-child(2)";
        deleteDrugIcon = ":nth-child(1) > .cdk-column-actions > :nth-child(3)";
        deleteDrugBut = ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-warn";
        cancelDeleteDrug = "//span[normalize-space()='Cancel']";
     
        clickPrescriptionRadioBut() {
            cy.get(this.presRadioBut).click();
        }
        enterEditPresEmail(editPresEmail) {
            cy.get(this.editPresEmail).type(editPresEmail).click();
        }
        clickeditPresDrug() {
            cy.get(this.editPrescription).click({ force: true });
        }
        clickeditDrug() {
            cy.get(this.editDrug).click();
        }
        clickviewDrug() {
            cy.get(this.viewDrug).click();
        }
        clickdeleteDrug() {
            cy.get(this.deleteDrugIcon).click();
        }
        clickdeleteDrugBut() {
            cy.get(this.deleteDrugBut).click();
        }
        clickcancelDeleteDrug() {
            cy.xpath(this.cancelDeleteDrug).click();
        }
     
     
    }
    export default LandingPage;