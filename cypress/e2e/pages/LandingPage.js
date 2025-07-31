class LandingPage {
    providerBut = ".button-container > :nth-child(2) > .mat-button-wrapper";
    createRecommendation = "//button[contains(@class, 'mat-raised-button') and .//mat-icon[normalize-space()='add']]";
    edit = "(//mat-icon[@role='img'][normalize-space()='border_color'])[1]"
    Tsign = "//span[@id='userInitial']"
    logOut = "//button[normalize-space(text())='Logout']";
    recommendationRadioBut = "(//span[@class='mat-radio-outer-circle'])[1]";
    myEmail ="(//td[normalize-space()='ShigaPOM@gmail.com'])[1]" 
    filterByEmail="//input[@data-placeholder='Filter by Email or Recommendation Name']"
    expandRecommPlan="//td[normalize-space()='ShigaPOM@gmail.com']";
    collapsesPlan = "(//mat-icon[normalize-space()='keyboard_arrow_up']) ";
    nextPage="button[aria-label='Next page'] span[class='mat-button-wrapper'] svg"
    lastPage="button[aria-label='Last page'] span[class='mat-button-wrapper'] svg"
    prevousPage="button[aria-label='Previous page'] span[class='mat-button-wrapper'] svg"
    firstPage="button[aria-label='First page'] span[class='mat-button-wrapper'] svg"
    itemPerPageBySelectorNumber = "//span[contains(@class, 'mat-select-min-line') and text()='5']";
    itemPerPageByDropdown = "//div[contains(@class, 'mat-select-arrow-wrapper') and preceding::span[text()='5']]";
    backBut = ".button-wrapper > .mat-focus-indicator";
    searchPrefNo = "#mat-radio-27 > .mat-radio-label";
    searchPrefYes = "#mat-radio-11 > .mat-radio-label";
    searchPrefNo = "#mat-radio-12 > .mat-radio-label";
    searchPrefNextbut = ".preference-wrapper > .button-wrapper > .mat-focus-indicator";
    enterFrequency60 = "nz-option-item[title='60 Days'] div[class='ant-select-item-option-content']"
    enterFrequency90 = "[title='90 Days'] > .ant-select-item-option-content"
    updateDrug = ".floatLeft > .ng-star-inserted";
    cancelUpdateDrug = ".floatRight > .ng-star-inserted";
    doneAddingdrugs = ".ng-star-inserted > .mat-focus-indicator";
    pharmacyNextButt = ".selected-pharmacy > .button-wrapper";
    doneBut = ".button-container > .mat-focus-indicator";
    selectMAPlan = ".mat-checkbox-inner-container";
    //VIEW PLAN:
    viewRecom = "(//mat-icon[@role='img'][normalize-space()='remove_red_eye'])";
    viewBackbut = ".button-container > :nth-child(1)";
    viewLowCost = ".view-button-container > :nth-child(1)";
    radiusPharmacyFilter="#mat-input-3']";
    sumbit=".form-field-container-col2 > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper";
    addRemovePrescription="//span[normalize-space()='Add/Remove Prescription']";
    backLowCost = ".location-container > .button-wrapper > .mat-focus-indicator";
    viewProvider = ".view-button-container > :nth-child(2)";
    backViewRecommendation = ".button-wrapper > .mat-focus-indicator";
    viewMedicare = ".view-button-container > :nth-child(3)";
    viewLongTerm = ".view-button-container > :nth-child(4)";
    backBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'] span[class='mat-button-wrapper']";
    //DELETE RECOMMENDATION PLAN:
    deletePlanIcon = "(//mat-icon[@role='img'][normalize-space()='delete'])[1]";
    deleteBut = "(//span[normalize-space()='Delete'])[1]";
    cancelDeleteBut = "(//span[normalize-space()='Cancel'])[1]";
    //PRESCRIPTION RADIO BUTTON:
    presRadioBut = "#mat-radio-3 > .mat-radio-label";//Prescription Radio Button
    viewDrug = ":nth-child(1) > .cdk-column-actions > :nth-child(2)";
    deleteDrugIcon = ":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > .mat-row > .cdk-column-actions > :nth-child(3)";//:nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > .mat-row > .cdk-column-actions > :nth-child(3)
    deleteDrugBut = ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-warn";
    cancelDeleteDrug = "//span[normalize-space()='Cancel']";

    clickproviderBut() {
        cy.get(this.providerBut).click();
    }
   clickCreateRecommendation() {
    cy.log('Trying to click createRecommendation');
    cy.xpath(this.createRecommendation, { timeout: 10000 })
      .click({ force: true });

    cy.get('.loader', { timeout: 10000 }).should('not.exist');
}

   editRecommendationClick() {
  cy.xpath(this.edit)
    .should('exist') 
    .scrollIntoView()
    .click({ force: true });

  cy.get('.loader', { timeout: 10000 }).should('not.exist');
}
viewRedEyeRecommendationClick(){
   let redEyeIcon = null;
let greyEyeIcon = null;

cy.xpath(this.viewRecom)
  .each(($el) => {
    cy.wrap($el)
      .invoke('css', 'color')
      .then((color) => {
        if (color === 'rgb(255, 0, 0)' && !redEyeIcon) {
          redEyeIcon = $el;
        } else if (color === 'rgb(84, 101, 104)' && !greyEyeIcon) {
          greyEyeIcon = $el;
        }
      });
  })
  .then(() => {
    // Do whatever you want with the two elements here:so red eye clicked
    if (redEyeIcon) {
      cy.wrap(redEyeIcon).should('be.visible').click({}); // or any other action
      cy.log("red eye clicked");
    }

    else if (greyEyeIcon) {
      cy.wrap(greyEyeIcon).should('be.visible'); // or any action
    }
  });

}
viewGreyEyeRecomendationClick(){
   let redEyeIcon = null;
let greyEyeIcon = null;

cy.xpath(this.viewRecom)
  .each(($el) => {
    cy.wrap($el)
      .invoke('css', 'color')
      .then((color) => {
        if (color === 'rgb(255, 0, 0)' && !redEyeIcon) {
          redEyeIcon = $el;
        } else if (color === 'rgb(84, 101, 104)' && !greyEyeIcon) {
          greyEyeIcon = $el;
        }
      });
  })
  .then(() => {
    // Click only the grey eye icon
    if (greyEyeIcon) {
      cy.wrap(greyEyeIcon).scrollIntoView()//.should('be.visible',{timeout:5000})
      .click({force:true});
      cy.log("grey eye clicked");
    }
  });

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
        cy.xpath(this.recommendationRadioBut).click({ force: true });
    }
     verifyRecommendationRadioBut() {
  cy.wait(2000);
  cy.log('Looking for radio button');
  cy.xpath(this.recommendationRadioBut)
    .should('exist')
    .should('be.visible')
}
    verifyEmail(){
      cy.xpath(this.myEmail).should('be.visible')  ;
    }
     clickEmail(){
      cy.xpath(this.myEmail).click()  ;
      cy.log("displayed already created emails")
    }
   clickExpandRecomm() {
  cy.xpath(this.expandRecommPlan, { timeout: 10000 }) // wait up to 10s
    .first()
    .scrollIntoView()
    .click({ force: true });
}

    clickCollapsesPlan() {
        cy.xpath(this.expandRecommPlan).first().click({ force: true });
    }
      clickNextPagesymbol() {
    cy.get(this.nextPage).click({ force: true });
    cy.get('.loader', { timeout: 10000 }).should('not.exist'); // example
    cy.log("next page arrow is clicked");
}
    clickLastPagesymbol() {
        cy.get(this.lastPage).click({ force: true });
          cy.get('.loader', { timeout: 10000 }).should('not.exist'); // example
         cy.log("last page arrow is clicked");
    }
      clickPreviousPagesymbol() {
        cy.get(this.prevousPage).click({ force: true });
          cy.get('.loader', { timeout: 10000 }).should('not.exist'); // example
           cy.log("previous page arrow is clicked");
    }
      clickFirstPagesymbol() {
        cy.get(this.firstPage).click({ force: true });
          cy.get('.loader', { timeout: 10000 }).should('not.exist'); // example
        cy.log("first page arrow is clicked");
    }
clickitemPerPageBySelectorNumber(){
  cy.xpath(this.itemPerPageBySelectorNumber) .click({force:true});
  cy.get('.loader', { timeout: 10000 }).should('not.exist'); 
}
clickitemPerPageByDropdown(){
  cy.xpath(this.itemPerPageByDropdown) .click({force:true});
  cy.get('.loader', { timeout: 10000 }).should('not.exist'); 
}
   
    
    clickaddRemovePrescription(){
        cy.xpath(this.addRemovePrescription).click();
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
   
    clickDeletePlanIcon() {
        cy.xpath(this.deletePlanIcon).click({ force: true, multiple: true });
    }
    clickDeleteWindowBut() {
        cy.xpath(this.deleteBut).click();
    }
    clickCancelWindowBut() {
        cy.xpath(this.cancelDeleteBut).click();
    }
    clickPrescriptionRadioBut() {
        cy.get(this.presRadioBut).click();
    }
    enterEditPresEmail(editPresEmail) {
        cy.xpath(this.editPresEmail).type(editPresEmail).click();
    }
    clickeditPresDrug() {
        cy.get(this.editPrescription).click({ force: true });
    }
    clickexpandPres(){
        cy.xpath(this.expandPres).click()
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
   enterFilterEmail(filterEmail){
    cy.xpath(this.filterByEmail)
    .clear()               // Optional: clear existing input
    .type(filterEmail);    // Type the email
   }


}
export default LandingPage;