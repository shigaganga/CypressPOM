
class LandingPage{
    
    recommendation = ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted";
    edit = ".inner-table > .mat-table > tbody > .highlight > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon"
   
    clickCreateRecommendation() {
        cy.get(this.recommendation).should('exist').should('be.visible').click();

    }
    editRecommendationClick() {
        cy.get(this.edit).should('exist').should('be.visible').click();
    }
    
}
export default LandingPage;
