
class LandingPage {
    providerBut = ".button-container > :nth-child(2) > .mat-button-wrapper";
    createRecommendation = ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted";
    edit = ".inner-table > .mat-table > tbody > .highlight > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon"
    //Tsign = "//span[@id='userInitial']";
    Tsign = "//span[@id='userInitial']"
    logOut = "//button[normalize-space(text())='Logout']";//Xpath locator
    //logOut=".mat-menu-content > :nth-child(2)"//cypress locator
    recommendationRadioBut = "#mat-radio-2 > .mat-radio-label";//Recommendation Radio Button
    filterByEmail = "#mat-input-2";    //Filter by recommendation email or name
    expandPlan = ".cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    collapsesPlan = ".example-expanded-row > .cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    itemPerPageNext = ".mat-paginator-navigation-next";
    itemPreviousPage = ".mat-paginator-navigation-previous";
    itemLastPage = ".mat-paginator-navigation-last";
    itemFirstPage = ".mat-paginator-navigation-first";
    editRecommandtion = ":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .ng-tns-c278-3 > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1)";
    backBut = ".button-wrapper > .mat-focus-indicator";
    editHealthProfile = "#mat-select-value-5";
    editBestHealth = "#mat-option-8 > .mat-option-text";
    editGoodHealth = "#mat-option-9 > .mat-option-text";
    editModerateHealth = "#mat-option-10 > .mat-option-text";
    editPoorHealth = "#mat-option-11 > .mat-option-text";
    editSickHealth = "#mat-option-12 > .mat-option-text";
    editRecommendationName = "#mat-input-4";
    editLifeExpectancy = "#mat-input-5";
    editCalenderEle = ".mat-datepicker-toggle > .mat-focus-indicator";
    editYear = ":nth-child(6) > [data-mat-col='1']";//1958
    editMonth = ":nth-child(3) > [data-mat-col='0']";//May
    editGender = "#mat-select-value-25";// "#mat-select-value-5";
    editGenderMale = "#mat-option-49 > .mat-option-text";
    editGenderFemale = "#mat-option-50 > .mat-option-text";
    editTabaccoNo = "#mat-radio-6 > .mat-radio-label";
    editTabaccoYes = "#mat-radio-7 > .mat-radio-label";
    editTaxFilingJoin = "#mat-radio-8 > .mat-radio-label";//Tax filing jointly
    editTaxFilingIndiv = "#mat-radio-9 > .mat-radio-label";//Tax filing individual
    editStreet = "#mat-input-7";
    editZipcode = "#mat-input-8";
    zipcodeSearchBut = ".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    editMagiTier = "#mat-select-value-11";
    editMagiTier1 = "#mat-option-11 > .mat-option-text";//Magitier 1
    editMagiTier2 = "#mat-option-12 > .mat-option-text";//Magitier 2
    editMagiTier3 = "#mat-option-13 > .mat-option-text";//Magitier 3
    editMagiTier4 = "#mat-option-14 > .mat-option-text";//Magitier 4
    editMagiTier5 = "#mat-option-15 > .mat-option-text";//Magitier 5
    editCommunicationEmail = "#mat-input-9";
    editContact = "#mat-input-10";
    editNextBut = ".form-wrapper > .mat-raised-button > .mat-button-wrapper";
    searchPrefNo = "#mat-radio-27 > .mat-radio-label";
    searchPrefYes = "#mat-radio-11 > .mat-radio-label";
    searchPrefNo = "#mat-radio-12 > .mat-radio-label";
    searchPrefNextbut = ".preference-wrapper > .button-wrapper > .mat-focus-indicator";
    editDrug = "[style='bottom: -10px; position: relative;'] > :nth-child(1) > u";
    editQuanty = "input[placeholder='Quantity']";
    editFrequency = ".marginTop2Percent > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item";
    enterFrequency60 = "nz-option-item[title='60 Days'] div[class='ant-select-item-option-content']"
    enterFrequency90 = "[title='90 Days'] > .ant-select-item-option-content"
    updateDrug = ".floatLeft > .ng-star-inserted";
    cancelUpdateDrug = ".floatRight > .ng-star-inserted";
    doneAddingdrugs = ".ng-star-inserted > .mat-focus-indicator";
    editAddPharmacy = "#mat-checkbox-2 > .mat-checkbox-layout >";
    pharmacyNextButt = ".selected-pharmacy > .button-wrapper";
    editMABut = ":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";//MA buttn
    editPlan = "#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container";
    doneBut = ".button-container > .mat-focus-indicator";
    selectMAPlan = ".mat-checkbox-inner-container";
    //VIEW PLAN:
    viewRecom = ":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .ng-tns-c278-3 > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(2)";
    viewBackbut = ".button-container > :nth-child(1)";
    viewLowCost = ".view-button-container > :nth-child(1)";
    backLowCost = ".location-container > .button-wrapper > .mat-focus-indicator";
    viewProvider = ".view-button-container > :nth-child(2)";
    backViewRecommendation = ".button-wrapper > .mat-focus-indicator";
    viewMedicare = ".view-button-container > :nth-child(3)";
    viewLongTerm = ".view-button-container > :nth-child(4)";
    backBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'] span[class='mat-button-wrapper']";
    //DELETE RECOMMENDATION PLAN:
    deleteUserIDIcon = ":nth-child(1) > .cdk-column-actions > :nth-child(2)";
    deletePlanIcon = ":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .ng-tns-c278-3 > .mat-table > tbody > :nth-child(2) > .cdk-column-actions > :nth-child(3)";
    deleteBut = ".mat-warn > .mat-button-wrapper";
    cancelDeleteBut = ".mat-dialog-actions > .mat-primary > .mat-button-wrapper";
    //PRESCRIPTION RADIO BUTTON:
    presRadioBut = "#mat-radio-3 > .mat-radio-label";//Prescription Radio Button
    editPresEmail = "#mat-input-3";
    editPrescription = ".inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1)";
    editDrug = "[style='bottom: -10px; position: relative;'] > :nth-child(1) > u";
    viewDrug = ":nth-child(1) > .cdk-column-actions > :nth-child(2)";
    deleteDrugIcon = ":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > .mat-row > .cdk-column-actions > :nth-child(3)";//:nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > .mat-row > .cdk-column-actions > :nth-child(3)
    deleteDrugBut = ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-warn";
    cancelDeleteDrug = "//span[normalize-space()='Cancel']";

    clickproviderBut() {
        cy.get(this.providerBut).click();
    }
    clickCreateRecommendation() {
        cy.get(this.createRecommendation).should('exist').should('be.visible').click();
    }
    editRecommendationClick() {
        cy.get(this.edit).should('exist').should('be.visible').click();
        cy.wait(2000);
    }
clickTsign() {
        cy.xpath(this.Tsign, { timeout: 6000 })
            .should('be.visible')
            .click();
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
        cy.get(this.expandPlan).first().click();
    }
    clickCollapsesPlan() {
        cy.get(this.collapsesPlan).click();
    }
    clickItemPerPageNext() {
        cy.get(this.itemPerPageNext).click();
    }
    clickItemPreviousPage() {
        cy.get(this.itemPreviousPage).click();
    }
    clickItemLastPage() {
        cy.get(this.itemLastPage).click();
    }
    clickItemFirstPage() {
        cy.get(this.itemFirstPage).click({ force: true });
    }
    clickEditRecommandtion() {
        cy.get(this.editRecommandtion).click({ force: true });
    }
    clikBackBut() {
        cy.get(this.backBut).wait(2000).click();
    }
    clickEditHealthProfile() {
        cy.get(this.editHealthProfile).click();
    }
    clickeditBestHealth() {
        cy.get(this.editBestHealth).click();
    }
    clickeditGoodHealth2() {
        cy.get(this.editGoodHealth).click();
    }
    clickeditModerateHealth() {
        cy.get(this.editModerateHealth).click();
    }
    clickeditPoorHealth() {
        cy.get(this.editPoorHealth).click();
    }
    clickeditSickHealth() {
        cy.get(this.editSickHealth).click();
    }
    enterEditRecommendationName(editRecommendationName) {
        cy.get(this.editRecommendationName).clear().type(editRecommendationName);
    }
    enterEditLifeExpectancy(editLifeExpectancy) {
        cy.get(this.editLifeExpectancy).clear().type(editLifeExpectancy);
    }
    clickeditCalenderEle() {
        cy.get(this.editCalenderEle).click();
    }
    clickeditYear() {
        cy.get(this.editYear).click();
    }
    clickeditMonth() {
        cy.get(this.editMonth).click();
    }
    clickEditGender() {
        cy.get(this.editGender).click();
    }
    clickEditGenderMale() {
        cy.get(this.editGenderMale).click();
    }
    clickEditGenderFemale() {
        cy.get(this.editGenderFemale).click();
    }
    clickEditTabaccoNo() {
        cy.get(this.editTabaccoNo).click();
    }
    clickEditTabaccoYes() {
        cy.get(this.editTabaccoYes).click();
    }
    clickEditTaxFilingIndiv() {
        cy.get(this.editTaxFilingIndiv).click();
    }
    clickEditTaxFilingJoin() {
        cy.get(this.editTaxFilingJoin).click();
    }
    enterStreet(editStreet) {
        cy.get(this.editStreet).clear().type(editStreet);
    }
    enterEditZipcode(editZipcode) {
        cy.get(this.editZipcode).clear().type(editZipcode);
    }
    clickZipcodeSearchBut() {
        cy.get(this.zipcodeSearchBut).click();
    }
    clickEditMagiTier() {
        cy.get(this.editMagiTier).click();
    }
    clickEditMagiTier1() {
        cy.get(this.editMagiTier1).click();
    }
    clickEditMagiTier2() {
        cy.get(this.editMagiTier2).click();
    }
    clickEditMagiTier3() {
        cy.get(this.editMagiTier3).click();
    }
    clickEditMagiTier4() {
        cy.get(this.editMagiTier4).click();
    }
    clickEditMagiTier5() {
        cy.get(this.editMagiTier5).click();
    }
    clickEditCommunicationEmail(editCommunicationEmail) {
        cy.get(this.editCommunicationEmail).clear().type(editCommunicationEmail);
    }
    enterEditContact(editContact) {
        cy.get(this.editContact).clear().type(editContact);
    }
    clickEditNextBut() {
        cy.get(this.editNextBut).click();
    }
    clickSearchPrefYes() {
        cy.get(this.searchPrefYes).click();
    }
    clickSearchPrefNo() {
        cy.get(this.searchPrefNo).click();
    }
    clickSearchPrefNextbut() {
        cy.get(this.searchPrefNextbut).click();
    }
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
    clickPharmacyEdit() {
        cy.get(this.editAddPharmacy).first().click();
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
    clickviewRecom() {
        cy.get(this.viewRecom).click({ force: true });
    }
    clickviewBackbut() {
        cy.get(this.viewBackbut).click();
    }
    clickviewLowCost() {
        cy.get(this.viewLowCost).wait(2000).click();
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
    clickdeleteUserIDIcon() {
        cy.get(this.deleteUserIDIcon).click();
    }
    clickDeletePlanIcon() {
        cy.get(this.deletePlanIcon).click({ force: true });
    }
    clickDeleteBut() {
        cy.get(this.deleteBut).click();
    }
    clickCancelDeleteBut() {
        cy.get(this.cancelDeleteBut).click();
    }
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
