class PreferencePage {
//YesRadioDrugcost='#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle';
YesRadioDrugcost='#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle';
NextPrefPage="/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-preference/div[2]/div[2]/button/span[1]";
clickyesRadioDrugCost(){
    cy.get(this.YesRadioDrugcost).should('be.visible').click( { force: true});
}
clickNextPrefPage(){
    cy.xpath(this.NextPrefPage, { timeout: 1000 })  // Extend the timeout to 10 seconds
    .should('be.visible')
    .click();
}
}
export default PreferencePage;