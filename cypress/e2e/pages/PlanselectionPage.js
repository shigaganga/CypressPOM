class PlanselectionPage{
    medicareAdv=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
        tick=".mat-checkbox-inner-container";
        medicare=".button-container > :nth-child(1) > .mat-button-wrapper";
      longterm=".button-container > :nth-child(2) > .mat-button-wrapper";
       AivanteImg="img";
       prescriptionbtn="div[class='button-wrapper ng-star-inserted'] button:nth-child(1) span:nth-child(1)";
       WellcareSimple="#mat-checkbox-28 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       done=".button-container > .mat-focus-indicator > .mat-button-wrapper";
       humanaGold="#mat-checkbox-53 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    humanaGoldFirstplan="#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container"
       humanGoldPlus="#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container"
       pdp='.selected-container > :nth-child(1) > .mat-focus-indicator';
       wellcareValueScriptPdp="#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       donePdp='.button-container > .mat-focus-indicator > .mat-button-wrapper';
       aetenaMedicarePremier="#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       wellcaregiveback="#mat-checkbox-29 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       planWellCaresimpleClick(){
           cy.get(this.WellcareSimple).click();
       }
       humanaGoldPlanClick(){
           cy.get(this.humanaGold).click();
       }
       doneplanSelectionClick(){
           cy.get(this.done).click();
       }
       humanaGoldPlusPlanClick(){
           cy.get(this.humanGoldPlus).click();
       }
       pdpClick(){
           cy.get(this.pdp).click();
       }
       wellcareValuScriptClick(){
           cy.get(this.wellcareValueScriptPdp).click();
       }
       donePdpClick(){
           cy.get(this.donePdp).click();
       }
       aetenaMedicarePremierClick(){
           cy.get(this.aetenaMedicarePremier).click({ force: true });
       }
       wellcaregivebackclick(){
           cy.get(this.wellcaregiveback).scrollIntoView().click({ force: true });
       }
       
       medicareAdvantageClick(){
        cy.get(this.medicareAdv).click();
       }
       tickClick(){
        cy.get(this.tick).click();
       }
       medicareclick(){
        cy.get(this.medicare).click();
       }
longtermClick(){
    cy.get(this.longterm).should('be.visible').click( { force: true});
   // cy.xpath(this.longterm).click();
}
aivanteImagClick(){
    cy.get(this.AivanteImg).click();
}
prescriptionClick(){
    cy.rightclick(this.prescriptionbtn).click();
}

//Rani's code for suppliment
MedigapArrow='div.mat-select-arrow-wrapper';
    setMedigapArrow()
    {
    cy.wait(2000)    
    cy.get(this.MedigapArrow).should('be.visible').click();
    }

  SupplementButtn='[style="text-align: center;"] > .mat-focus-indicator';
  setSupplementButtn()
  {
    cy.wait(5000)
    cy.get(this.SupplementButtn).click();
  } 

  ProviderButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(2)';
  setProviderButtn()
  {
    cy.get(this.ProviderButtn).click();
  }
  ProfileButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(1)';
  setProfileButtn()
  {
    cy.get(this.ProfileButtn).click();
  }
  PrescriptionButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(3)';
  setPrescriptionButtn()
  {
    cy.get(this.PrescriptionButtn).click();
  }
  PharmacyButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(4)';
  setPharmacyButtn()
  {
    cy.get(this.PharmacyButtn).click();
  }
  planSelectionCheckBox='.mat-checkbox-layout > .mat-checkbox-inner-container'
  
  setplanSelectionCheckBox(index)
  {
    cy.get(this.planSelectionCheckBox, { timeout: 10000 })
    .should('be.visible')
    .eq(index) .click({ force: true });
  
  
  }
  
  max3PlanVerifyMsg()
  {
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains("Maximum 3 plans allowed.Remove previous plan to add new plan"); 
  })
  }
  
  verifyMsg()
  {
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains("Maximum 1 MA with/without 1 PDP or 1 PDP with 1 supplement plan are allowed");     //asretion ,user can selectonly 1 plan out of selected 3  maximum plans.
        
    })
  }
  
  
  SelectPlanN='.mat-option-text';
  setSelectPlanN()
  {
    cy.get(this.SelectPlanN).contains("N").wait(2000).click({force:true});
  }
  
  FilterButton='.ng-fa-icon'
  setFilterButton()
  {
      cy.get(this.FilterButton,{timeout:8000}).should('be.visible').click({force:true}) 
  }
  
  filterByInsuranceCarrier(InsuranceCarrier)
  {
      cy.get('.mat-select-placeholder').click()
      cy.get('div>.mat-select-panel-wrap')
      .find('div[role="listbox"]')
      .contains(InsuranceCarrier)
      .scrollIntoView({ timeout: 10000 })
      .should('be.visible')
      .click({ force: true })
          
  }
  
  ResetButton='.mat-action-row > .mat-focus-indicator';
  setResetButton()
  {
      cy.get(this.ResetButton).click()
  }
  
  PlanDetailsButton='.mat-button-wrapper';
  setPlanDetailsButton()
  {
      cy.get(this.PlanDetailsButton).contains('Plan Details').click();
  }
  
  Hospitalization='.mat-expansion-panel-body:nth-child(1)'
  verifyHospitalization()
  {
      cy.get(this.Hospitalization).contains("Hospitalization");  //Hospitalization validation under partA
     cy.wait(2000)
  }
  
  PartAExpandsCollapsIndicator='#mat-expansion-panel-header-1 > .mat-expansion-indicator';
  setPartAExpandsCollapsIndicator()
  {
      cy.get(this.PartAExpandsCollapsIndicator).click();
  }
  
  setHospitalizationClick()
  {
      cy.get('.mat-content .mat-expansion-panel-header-title').contains('Hospitalization').click({force:true});
  }
  
  
  setPartBExpands()
  {
      cy.get('.mat-content .mat-expansion-panel-header-title').contains('Part B').click(); //PartB expands
  cy.wait(2000)
  }
  setPartBCollapse()
  {
      cy.get('#mat-expansion-panel-header-2 >span.mat-expansion-indicator').should('be.visible').invoke('click');
      cy.wait(2000);
  }
  
  setPartABExpands()
  {
      cy.get(".mat-content .mat-expansion-panel-header-title").contains('Parts A & B').click(); //Part A &B expands
  cy.wait(2000)
  }
  setPartABCollapse()
  {
      cy.get('#mat-expansion-panel-header-2 >span.mat-expansion-indicator').should('be.visible').invoke('click'); //Part A & B collapse
  cy.wait(2000)
  }
  
  setOtherBenefitsExpands()
  {
      cy.get(".mat-content .mat-expansion-panel-header-title").contains('Other Benefits').click(); //Other Benefits expands
  cy.wait(2000)
  }
  
  setOtherBenefitsCollapse()
  {
      cy.get("#mat-expansion-panel-header-3 > span.mat-expansion-indicator").should('be.visible').click({force:true}); //Other Benefits collapse
  cy.wait(2000)
  }
  
  BackButton='.button-wrapper > .mat-focus-indicator';
  setBackButton()
  {
      cy.get(this.BackButton).click();
  }
  
  CancelButton='.right-container > .mat-focus-indicator > .mat-button-wrapper';
  setCancelButton()
  {
      cy.get(this.CancelButton).contains("Cancel").click()
  }
  //Suppliment code ends

}
export default PlanselectionPage;