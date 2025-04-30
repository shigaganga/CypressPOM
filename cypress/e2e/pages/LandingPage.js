class LandingPage {
    providerBut = ".button-container > :nth-child(2) > .mat-button-wrapper";
    createRecommendation = ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted";
    edit = ".inner-table > .mat-table > tbody > .highlight > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon";
    Tsign = "//span[@id='userInitial']";
    logOut = "//button[normalize-space(text())='Logout']";
    recommendationRadioBut = "#mat-radio-2 > .mat-radio-label";  // Recommendation Radio Button
    filterByEmail = "#mat-input-2"; // Filter by recommendation email or name
    expandPlan = ".cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    itemPreviousPage = ".mat-paginator-navigation-previous";
    itemLastPage = ".mat-paginator-navigation-last";
    itemFirstPage = ".mat-paginator-navigation-first";
    editRecommandtion = ":nth-child(2) > .cdk-column-actions > :nth-child(1)";
    backBut = ".button-wrapper > .mat-focus-indicator";
    editHealthProfile = "#mat-select-value-3";
    editHealthProfile1 = "#mat-option-4 > .mat-option-text";
    editHealthProfile2 = "#mat-option-5 > .mat-option-text";
    editHealthProfile3 = "#mat-option-6 > .mat-option-text";
    editHealthProfile4 = "#mat-option-7 > .mat-option-text";
    editHealthProfile5 = "#mat-option-8 > .mat-option-text";
    editBestHealth = "#mat-option-8 > .mat-option-text";
    editGoodHealth = "#mat-option-9 > .mat-option-text";
    editModerateHealth = "#mat-option-10 > .mat-option-text";
    editPoorHealth = "#mat-option-11 > .mat-option-text";
    editSickHealth = "#mat-option-12 > .mat-option-text";
    editRecommendationName = "#mat-input-4";
    editLifeExpectancy = "#mat-input-5";
    editGender = "#mat-select-value-5";
    editGenderMale = "#mat-option-10 > .mat-option-text";
    editGenderFemale = "#mat-option-11 > .mat-option-text";
    editCalenderEle = ".mat-datepicker-toggle > .mat-focus-indicator";
    editYear = ":nth-child(6) > [data-mat-col='1']"; // 1958
    editMonth = ":nth-child(3) > [data-mat-col='0']"; // May
    editTabaccoNo = "#mat-radio-6 > .mat-radio-label";
    editTabaccoYes = "#mat-radio-7 > .mat-radio-label";
    editTaxFilingJoin = "#mat-radio-8 > .mat-radio-label"; // Tax filing jointly
    editMABut = ":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper"; // MA button
    editPlan = "#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container";
    doneBut = ".button-container > .mat-focus-indicator";
    selectMAPlan = ".mat-checkbox-inner-container"; 

    // VIEW PLAN:
    viewRecom = ".inner-table > .mat-table > tbody > .mat-row > .cdk-column-actions > :nth-child(2)";
    viewBackbut = ".button-container > :nth-child(1)";
    viewLowCost = ".view-button-container > :nth-child(1)";
    backLowCost = ".location-container > .button-wrapper > .mat-focus-indicator";
    viewProvider = ".view-button-container > :nth-child(2)";
    backViewRecommendation = ".button-wrapper > .mat-focus-indicator";
    viewMedicare = ".view-button-container > :nth-child(3)";
    viewLongTerm = ".view-button-container > :nth-child(4)";
    backBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'] span[class='mat-button-wrapper']"; 

    // DELETE PLAN:
    deletePlanIcon = ":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > .mat-row > .cdk-column-actions > :nth-child(3)";
    deleteBut = ".mat-warn > .mat-button-wrapper";
    cancelDeleteBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-warn'] span[class='mat-button-wrapper']";

    // PRESCRIPTION RADIO BUTTON:
    presRadioBut = "#mat-radio-3 > .mat-radio-label"; // Prescription Radio Button
    editPresEmail = "#mat-input-3";
    editPrescription = ".inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1)";
    editDrug = "[style='bottom: -10px; position: relative;'] > :nth-child(1) > u";
    viewDrug = ":nth-child(1) > .cdk-column-actions > :nth-child(2)";
    deleteDrugIcon = ":nth-child(1) > .cdk-column-actions > :nth-child(3)";
    deleteDrugBut = ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-warn";
    cancelDeleteDrug = "//span[normalize-space()='Cancel']";
  
    // Methods for actions
    clickCreateRecommendation() {
        cy.get(this.createRecommendation).first().should('exist').should('be.visible').click();
    }

    clickTsign() {
        cy.xpath(this.Tsign, { timeout: 6000 }).should('be.visible').click();
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

    clickEditHealthProfile() {
        cy.get(this.editHealthProfile).click();
    }

    clickEditHealthProfile1() {
        cy.get(this.editHealthProfile1).click();
    }

    clickEditBestHealth() {
        cy.get(this.editBestHealth).click();
    }

    clickEditHealthProfile2() {
        cy.get(this.editHealthProfile2).click();
    }

    clickEditGoodHealth() {
        cy.get(this.editGoodHealth).click();
    }

    clickEditHealthProfile3() {
        cy.get(this.editHealthProfile3).click();
    }

    clickEditModerateHealth() {
        cy.get(this.editModerateHealth).click();
    }

    clickEditHealthProfile4() {
        cy.get(this.editHealthProfile4).click();
    }

    clickEditPoorHealth() {
        cy.get(this.editPoorHealth).click();
    }

    clickEditHealthProfile5() {
        cy.get(this.editHealthProfile5).click();
    }

    clickEditSickHealth() {
        cy.get(this.editSickHealth).click();
    }

    enterEditRecommendationName(editRecommendationName) {
        cy.get(this.editRecommendationName).clear().type(editRecommendationName);
    }

    enterEditLifeExpectancy(editLifeExpectancy) {
        cy.get(this.editLifeExpectancy).clear().type(editLifeExpectancy);
    }

    clickEditCalenderEle() {
        cy.get(this.editCalenderEle).click();
    }

    clickEditYear() {
        cy.get(this.editYear).click();
    }

    clickEditMonth() {
        cy.get(this.editMonth).click();
    }

    clickEditGender() {
        cy.get(this.editGender).click();
    }

    clickViewBackBut() {
        cy.get(this.backBut).wait(3000).click();
    }

    clickDeletePlanIcon() {
        cy.get(this.deletePlanIcon).wait(3000).click();
      //  cy.get(this.deletePlanIcon).click({ force: true });
    }

    clickDeleteBut() {
        cy.get(this.deleteBut).wait(2000).click();
     //   cy.get(this.deleteBut).click();
    }

    clickCancelDeleteBut() {
        cy.get(this.cancelDeleteBut).wait(2000).click();
    //    cy.get(this.cancelDeleteBut).click();
    }

    clickPrescriptionRadioBut() {
        cy.get(this.presRadioBut).click();
    }

    enterEditPresEmail(editPresEmail) {
        cy.get(this.editPresEmail).type(editPresEmail).click();
    }

    clickEditPrescription() {
        cy.get(this.editPrescription).click({ force: true });
    }

    clickEditDrug() {
        cy.get(this.editDrug).click();
    }

    clickViewDrug() {
        cy.get(this.viewDrug).click();
    }

    clickDeleteDrug() {
        cy.get(this.deleteDrugIcon).click();
    }

    clickDeleteDrugBut() {
        cy.get(this.deleteDrugBut).click();
    }

    clickCancelDeleteDrug() {
        cy.xpath(this.cancelDeleteDrug).click();
    }
}

export default LandingPage;
