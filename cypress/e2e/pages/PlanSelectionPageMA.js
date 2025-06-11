
class PlanSelectionMA {
    MedicareadvantageEle ="//div[@class='selected-container mat-elevation-z2']//div[3]//button[1]"
   // MedicareadvantageEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-plan-selection/app-plan-selected/div[2]/div[3]/button')
    filterplans ="//fa-icon[@class='ng-fa-icon']//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]" 
    insurancecarrierEle="//span[@class='mat-select-placeholder mat-select-min-line ng-tns-c216-53 ng-star-inserted']"
    cignahealthEle = "//span[normalize-space()='Cigna Healthcare (H7849)']"
    starratingEle = "//div[@class='mat-select-arrow-wrapper ng-tns-c216-55']"
    ratingfourEle = "//span[normalize-space()='4.0']"
    drugcoverageEle = "//div[@class='mat-select-arrow ng-tns-c216-57']"
    nocoverageEle = "//span[@class='mat-option-text'][normalize-space()='No Coverage']"
    pdpoptionEle = "//div[@class='mat-select-arrow ng-tns-c216-59']"
    withprescriptionEle = "//span[normalize-space()='With Prescription']"
    resetEle = ('.mat-action-row > .mat-focus-indicator')
    cignatruechoicemedicare = (".mat-checkbox-inner-container")
    //resetbuttonEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-plan-selection/app-plandiv[2]/div[2]/form/mat-accordion/mat-expansion-panel/div/mat-action-row/button')
    //benefitsEle = ('.mat-card-actions > :nth-child(1) > .mat-button-wrapper')
    //planbenefitboxEle = ('.mat-card-actions > :nth-child(1)')
    plandetailsEle = ('.mat-card-actions > :nth-child(2) > .mat-button-wrapper')
    //resetEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-plan-selection/app-plan-list/div[2]/div[2]/form/mat-accordion/mat-expansion-panel/div/mat-action-row/button')
    // shortplanEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-plan-selection/app-plan-list/div[1]/div/div[2]/button[2]/span[1]/mat-icon')
    // shortplanoptionEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-plan-selection/app-plan-list/div[2]/div[2]/form/mat-accordion/mat-expansion-panel/div/div/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]')
    // lowestmonthlypremiumEle = ('/html/body/div[2]/div[2]/div/div/div/mat-option[2]')
    //cignatruechoicemedicareEle = ('.mat-checkbox-inner-container')
    // on/app-plan-list/div[2]/div[benefitsEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-plan-selecti3]/div/app-ma-card/mat-card/mat-card-actions/button[1]')
    // plandetailsEle = ('/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-plan-selection/app-plan-list/div[2]/div[3]/div/app-ma-card/mat-card/mat-card-actions/button[2]')
    druginformationEle =  ('#mat-expansion-panel-header-2 > .mat-expansion-indicator')
    remainingyearcostandoopEle = ('#mat-expansion-panel-header-3 > .mat-expansion-indicator')
    estimatedtotaldrugpluspremiumcostEle = ('#mat-expansion-panel-header-4 > .mat-expansion-indicator')
    estimatedtotalmonthlydrugcostEle = "//span[@class='mat-expansion-indicator ng-tns-c210-71 ng-trigger ng-trigger-indicatorRotate ng-star-inserted']"
    backbuttonEle = "//span[normalize-space()='Back']"
    //option to short plan filter
    shortplanEle = "//mat-icon[normalize-space()='sort']"
    shortplanoptionEle = ('.mat-select-arrow-wrapper')
    lowestmonthlypremiumEle = "//span[@class='mat-option-text'][normalize-space()='Lowest monthly premium']"
    HumanagoldplusEle = "//label[@for='mat-checkbox-14-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']"
    //benefitsshortplanEle = ('#mat-checkbox-39 > .mat-checkbox-layout > .mat-checkbox-inner-container')
  // benefitsboxdisappear = (':nth-child(2) > .mat-card > .mat-card-actions > :nth-child(1)')
    planshortdetails = (':nth-child(2) > .mat-card > .mat-card-actions > :nth-child(2)')
    druginformationone = ('#mat-expansion-panel-header-7 > .mat-expansion-indicator')
    remainingcost = ('#mat-expansion-panel-header-8 > .mat-expansion-indicator')
    estimatedtotaldrug = ('#mat-expansion-panel-header-9 > .mat-expansion-indicator')
   // totalmonthlydrugcost =  "//mat-expansion-panel-header[@id='mat-expansion-panel-header-4']"
    backbuttonplan = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper')
    cancelbutton = ('.right-container > .mat-raised-button')
    //steps to done button
    donebuttonEle = "//span[normalize-space()='Done']"
    cignatruemedicareEle = ('.mat-checkbox-inner-container');
    //Chabbi 
    medicarebutton = "//span[normalize-space()='Medicare']"
    backbuttonMA = "//span[normalize-space()='Back']"
    resetbuttonEle = "//span[normalize-space()='Reset']"
    warningbuttonEle = ('[type="button"]')
    aivantelogobutton = ('img')


    clickMedicareAdvantage() {
        cy.xpath(this.MedicareadvantageEle).click();
    }

    clickFilterPlans() {
        cy.xpath(this.filterplans).click();
    }

    clickInsuranceCarrier() {
        cy.xpath(this.insurancecarrierEle).click();
    }

    clickCignaHealth() {
        cy.xpath(this.cignahealthEle,{force:true, multiple:true}).click();
    }

    clickStarRating() {
        cy.xpath(this.starratingEle).click();
    }

    clickRatingFour() {
        cy.xpath(this.ratingfourEle, { force: true, multiple: true }).click();
    }

    clickDrugCoverage() {
        cy.xpath(this.drugcoverageEle, { force: true, multiple: true }).click();
    }

    clickNoCoverage() {
        cy.xpath(this.nocoverageEle).click({ multiple: true });
    }

    clickPDPOption() {
        cy.xpath(this.pdpoptionEle).click();
    }

    clickWithPrescription() {
        cy.xpath(this.withprescriptionEle).click();
    }
    clickReset() {
        cy.get(this.resetEle,{force:true,multiple:true}).click();
    }
    clickCignaTrueChoiceMedicare() {
        cy.get(this.cignatruechoicemedicare).click();
    }

    // clickReset(){
    //cy.xpath(this.resetEle).click();
    // }
    //clickBenefits(){
    // cy.get(this.benefitsEle).click();
    // }
    //clickPlanBenefitBoxEle(){
    // cy.get('.mat-card-actions > :nth-child(1)').click({ force: true ,multiple:true});  // Click backdrop to remove overlay
    // cy.get(this.planbenefitboxEle).click({force:true});

    // }
    clickPlanDetails() {
        cy.get(this.plandetailsEle).scrollIntoView().click({ force: true, multiple: true });
    }
    //clickReset(){
    // cy.xpath(this.resetEle).click();
    // }

    //clickShortPlan(){
    // cy.xpath(this.shortplanEle).click();
    //}

    // clickShortPlanOption(){
    // cy.xpath(this.shortplanoptionEle).click();
    // }

    // clickLowestMonthlyPremium(){
    // cy.xpath(this.lowestmonthlypremiumEle).click();
    // }

    //clickCignaTrueChoiceMedicare(){
    // cy.get(this.cignatruechoicemedicareEle,{force:true,multiple:true}).click();
    // }

    // clickBenefits(){
    //  cy.xpath(this.benefitsEle).click();
    // }

    //clickPlanDetails(){
    //cy.xpath(this.plandetailsEle).click();
    // }

    clickDrugInformation() {
        cy.get(this.druginformationEle).click();
    }

    clickRemainingYearCostAndOOP() {
        cy.get(this.remainingyearcostandoopEle).click();
    }

    clickEstimatedTotalDrugPlusPremiumCost() {
        cy.get(this.estimatedtotaldrugpluspremiumcostEle).click();
    }

    clickEstimatedTotalMonthlyDrugCost() {
        cy.xpath(this.estimatedtotalmonthlydrugcostEle).click();
    }

    clickBackButton() {
        cy.xpath(this.backbuttonEle).click();
    }

    //short plan option
    clickShortPlan() {
        cy.xpath(this.shortplanEle).click();
    }

    clickShortPlanOption() {
        cy.get(this.shortplanoptionEle).click();
    }

    clickLowestMonthlyPremium() {
        cy.xpath(this.lowestmonthlypremiumEle).click();
    }

    clickHumanaGoldPlus(){
        cy.xpath(this.HumanagoldplusEle).click({force:true});
    }

   //clickBenefitsShortPlan(){
       //cy.get(this.benefitsshortplanEle).click();
    //}
    //clickBenefitsBoxDisappear(){
       // cy.get(this.benefitsboxdisappear).should('be.visible'). click();
   // }
    clickPlanShortDetails(){
        cy.get(this.planshortdetails).click();
    }

    clickDrugInformationOne(){
        cy.get(this.druginformationone).click();
    }
    clickRemainingCost(){
        cy.get(this.remainingcost).click();
    }

    clickEstimatedTotalDrug(){
        cy.get(this.estimatedtotaldrug).click()
    }
   // clickTotalMonthlyDrugCost(){
       // cy.xpath(this.totalmonthlydrugcost).click();
   // }
   
    cliclBackButtonPlan(){
        cy.get(this.backbuttonplan).click();
    }
    clickCancelButton(){
        cy.get(this.cancelbutton).click();
    }

//Done Button function
    clickDoneButton() {
        cy.xpath(this.donebuttonEle).click();
    }

    clickCignaTrueMedicare() {
        cy.get(this.cignatruemedicareEle, {force:true}).should('be.visible').click();
       // cy.contains('Dashboard');
    }
    //Chabbi code
    clickmedicareButton(){
        cy.xpath(this.medicarebutton).click();
    }
    clickbackButtonMA(){
        cy.xpath(this.backbuttonMA).click();
    }

    clickResetButton() {
        cy.xpath(this.resetbuttonEle).click();
    }
    clickWarningButton() {
        cy.get(this.warningbuttonEle).click();
    }
    clickAivanteLogo(){
        cy.get(this.aivantelogobutton).click()
    }
}

export default PlanSelectionMA
