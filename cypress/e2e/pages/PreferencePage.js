class PreferencePage {
//YesRadioDrugcost='#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle';
YesRadioDrugcost='#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle';
NoRadioDrugcost='#mat-radio-12> .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle';
NextPrefPage="/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-preference/div[2]/div[2]/button/span[1]";
greatText="//h2[normalize-space()='Great!']";
Areyousuretext="//h2[normalize-space()='Are you sure?']"
//Areyousuretext="/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-preference/div[2]/div[1]/div/h2"
clickyesRadioDrugCost(){
    cy.get(this.YesRadioDrugcost).should('be.visible').click( { force: true});
}
clicknoRadioDrugCost(){
    cy.get(this.NoRadioDrugcost).should('be.visible').click( { force: true});
}
clickNextPrefPage(){
    cy.xpath(this.NextPrefPage, { timeout: 1000 })  // Extend the timeout to 10 seconds
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
verifyManagePrescriptionurl(){
    cy.url().should('include', 'http://169.61.105.110/medicareAdvantage_sandbox/manage-prescriptions');  
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

}

export default PreferencePage;