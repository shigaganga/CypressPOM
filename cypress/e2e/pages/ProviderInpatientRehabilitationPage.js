class ProviderInpatientRehabilitationPage
{
    providerbtn='.mat-focus-indicator mat-raised-button mat-button-base mat-primary';
    ipRehabButton='.category-name';
    ipRehabRadius='#mat-input-4';
    searchProvider='.mat-button-wrapper';
    optionalipName='#mat-input-0';
    emptyName='#mat-input-0';
    providerFilter='.mat-expansion-panel-header-title';
    ownership='#ownership';
    dropDown='.mat-option-text';
    applyFilter='.mat-button-wrapper';
    clearFilter='.mat-button-wrapper';
   
    clickProviderButton()
    {
        cy.get('.ng-star-inserted > :nth-child(2) > .mat-button-wrapper')
         
      .should('exist')
      .should('be.visible').contains('Provider')
      .click({ force: true });
    
    }
clickIpRehab()
{
    cy.get(this.ipRehabButton).should('exist').should('be.visible').contains('Inpatient rehabilitation facilities').click( { force: true });
    cy.wait(200);
}

searchIpRehabRadius()
{
    cy.get(this.ipRehabRadius, { timeout: 10000 }).should('be.visible').clear().type('100');
       
}

clickSearchProvider()
{
    cy.get(this.searchProvider).should('exist').should('be.visible').contains('Search').click({force : true });
}
optionalIpName()
{
    cy.get(this.optionalipName, { timeout: 10000 }).should('be.visible').clear().type('UNIVERSITY OF COLORADO HOSP');

}
emptyRehabName()
{
    cy.get(this.emptyName, { timeout: 10000 }).should('be.visible').clear().type(' ');
}
clickProviderFilter()
{
    cy.get(this.providerFilter).contains('Provider filters').should('be.visible').click();
    cy.wait(2000); 
    cy.get(this.ownership, { timeout: 10000 }).should('exist').should('be.visible').click();

}

selectDropDown()
{
    cy.get(this.dropDown).contains('Government').should('be.visible').click();
}

clickApplyFilter()
{
    cy.get(this.applyFilter).contains('Apply filter').should('be.visible').click();
}
 
clickClearFilter()
{
    cy.get(this.clearFilter).contains('Clear filter').should('be.visible').click();
}
 
}


export default ProviderInpatientRehabilitationPage;