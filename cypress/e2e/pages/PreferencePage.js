class PreferencePage {
YesRadioDrugcost="(//span[@class='mat-radio-outer-circle'])[1]";
NoRadioDrugcost="(//span[@class='mat-radio-outer-circle'])[2]";
NextPrefPage="/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-preference/div[2]/div[2]/button/span[1]";
greatText="//h2[normalize-space()='Great!']";
Areyousuretext="//h2[normalize-space()='Are you sure?']"
clickyesRadioDrugCost(){
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