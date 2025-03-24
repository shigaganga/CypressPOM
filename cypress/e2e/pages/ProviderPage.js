class ProviderPage{
    providerbtnEle = ('.button-wrapper.ng-star-inserted > :nth-child(2) > .mat-button-wrapper');
     
    clickProviderBtn(){
        cy.get(this.providerbtnEle).click();

    }
}
export default ProviderPage