class planListPage{
    WellcareSimple="#mat-checkbox-28 > .mat-checkbox-layout > .mat-checkbox-inner-container";
        done=".button-container > .mat-focus-indicator > .mat-button-wrapper";
        humanaGold="#mat-checkbox-53 > .mat-checkbox-layout > .mat-checkbox-inner-container"
        planWellCaresimpleClick(){
            cy.get(this.WellcareSimple).click();
        }
        HumanaGoldPlanClick(){
            cy.get(this.humanaGold).click();
        }
        DoneplanSelectionClick(){
            cy.get(this.done).click();
        }
}
export default planListPage;