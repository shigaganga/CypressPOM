class MedicareAdvantagepage{
    medicareArrow=".mat-expansion-indicator";
    submitMedicare=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
    backToPlanSelection=".button-wrapper > :nth-child(1) > .mat-button-wrapper";
    medicarArrowClick(){
        cy.get(this.medicareArrow).click();
    }
    submitMedicareClick(){
        cy.get(this.submitMedicare).should("be.visible").click({force:true});
    }
    backToplanSelectionClick(){
        cy.get(this.backToPlanSelection).click();
    }
}
export default MedicareAdvantagepage;