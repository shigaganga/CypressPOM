class PharmacyPage{
   // y='.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper';
   findFarmacy =':nth-child(4) > .mat-focus-indicator > .mat-button-wrapper';
    farmacy1='#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container';
    farmacy2='#mat-checkbox-15 > .mat-checkbox-layout > .mat-checkbox-inner-container';
    farmacy3Edit='#mat-checkbox-43 > .mat-checkbox-layout > .mat-checkbox-inner-container';
    nextFarmacy='.button-wrapper > .mat-button-wrapper';
clickFindFarmacy(){
   cy.get(this.findFarmacy).click();

}
clickfarmacyOne(){
    cy.get(this.farmacy1).click();
}
clickfarmacyTwo(){
    cy.get(this.farmacy2).click();
}
clickfarmacy3Edit(){
    cy.get(this.farmacy3Edit).click();
}
clicknextpharmacy(){
    cy.get(this.nextFarmacy).click();
}
}
export default PharmacyPage;