class ProviderInpatientRehabilitationPage
{
    providerbtn='.mat-focus-indicator mat-raised-button mat-button-base mat-primary';

clickProviderButton()
{
    cy.get('.ng-star-inserted > :nth-child(2) > .mat-button-wrapper')
  .should('exist')
  .should('be.visible').contains('Provider')
  .click({ force: true });

}
clickIpRehab()
{
    cy.get('.category-name').should('exist').should('be.visible').contains('Inpatient rehabilitation facilities').click( { force: true });
}

searchIpRehabRadius()
{
    cy.get('#mat-input-15', { timeout: 10000 }).should('be.visible').clear().type('100');
   
    
}

clickSearchProvider()
{
    cy.get('.mat-button-wrapper').should('exist').should('be.visible').contains('Search').click({force : true });
}
optionalIpName()
{
    cy.get('#mat-input-11', { timeout: 10000 }).should('be.visible').clear().type('UNIVERSITY OF COLORADO HOSP');

}
emptyRehabName()
{
    cy.get('#mat-input-11', { timeout: 10000 }).should('be.visible').clear().type(' ');
}
clickProviderFilter()
{
    cy.get('.mat-expansion-panel-header-title').contains('Provider filters').should('be.visible').click();
    cy.wait(2000); 
    cy.get('#ownership', { timeout: 10000 }).should('exist').should('be.visible').click();

}

selectDropDown()
{
    cy.get('.mat-option-text').contains('Government').should('be.visible').click();
}

clickApplyFilter()
{
    cy.get('.mat-button-wrapper').contains('Apply filter').should('be.visible').click();
}
 
clickClearFilter()
{
    cy.get('.mat-button-wrapper').contains('Clear filter').should('be.visible').click();
}

 
}


export default ProviderInpatientRehabilitationPage;