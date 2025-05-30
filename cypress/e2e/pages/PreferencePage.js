class PreferencePage {
YesRadioDrugcost="(//span[@class='mat-radio-outer-circle'])[1]";
NoRadioDrugcost="(//span[@class='mat-radio-outer-circle'])[2]";
NextPrefPage="//button[contains(@class,'mat-raised-button') and .//span[normalize-space()='Next']]";
greatText="//h2[normalize-space()='Great!']";
Areyousuretext="//h2[normalize-space()='Are you sure?']"
clickyesRadioDrugCost(){
    cy.wait(3000);
    
    cy.xpath(this.YesRadioDrugcost).should('be.visible').click( { force: true});
}
clicknoRadioDrugCost(){
    cy.xpath(this.NoRadioDrugcost).should('be.visible').click( { force: true});
}

  
clickNextPrefPage(){
    cy.xpath(this.NextPrefPage, { timeout: 1000 })  
    .should('be.visible')
    .click();
}
verifyGreatText() {
    cy.xpath(this.greatText)  
        .should('exist')         
        .contains('Great!')      
        .should('be.visible');   
}
verifyAreUSureText() {
    cy.xpath(this.Areyousuretext)  
    .debug() 
        .should('exist')         
        .contains('Are you sure?')      
        .should('be.visible');   
}
setPreference(option) {
    if (!option) {
      throw new Error('Preference option is undefined or null');
    }
  
    const normalized = option.toLowerCase().trim();
  
    if (normalized === 'yes') {
      this.clickyesRadioDrugCost();
      this.verifyGreatText();
    } else if (normalized === 'no') {
      this.clicknoRadioDrugCost();
      this.verifyAreUSureText();
    } else {
      throw new Error(`Invalid preference option: ${option}`);
    }
  
    cy.wait(500);
    this.clickNextPrefPage();
  }
  

verifyPlanSelectionUrl(){
    cy.url().should('include', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection');  
}
verifyPreferencePageUrl(){
    cy.url().should('include', 'http://169.61.105.110/medicareAdvantage_sandbox/preferences');  
}
verifyMedicarePageUrl(){
    cy.url().should('include', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/MEDICARE');  
}
verifyPdpPageUrl(){
    cy.url().should('include', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');  
}
verifyHomePageUrl(){
    cy.url().should('include','http://169.61.105.110/medicareAdvantage_sandbox/home')
}
verifyManagePrescriptionurl(){
    cy.url().should('include', 'http://169.61.105.110/medicareAdvantage_sandbox/manage-prescriptions');  
}
}

export default PreferencePage;