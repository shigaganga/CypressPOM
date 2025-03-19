class planselectionPage{
    medicareAdv=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
        tick=".mat-checkbox-inner-container";
        medicare=".button-container > :nth-child(1) > .mat-button-wrapper";
      longterm=".button-container > :nth-child(2) > .mat-button-wrapper";
       AivanteImg="img";
       prescriptionbtn="div[class='button-wrapper ng-star-inserted'] button:nth-child(1) span:nth-child(1)";
       WellcareSimple="#mat-checkbox-28 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       done=".button-container > .mat-focus-indicator > .mat-button-wrapper";
       humanaGold="#mat-checkbox-53 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    humanaGoldFirstplan="#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container"
       humanGoldPlus="#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container"
       pdp='.selected-container > :nth-child(1) > .mat-focus-indicator';
       wellcareValueScriptPdp="#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       donePdp='.button-container > .mat-focus-indicator > .mat-button-wrapper';
       aetenaMedicarePremier="#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       wellcaregiveback="#mat-checkbox-29 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       planWellCaresimpleClick(){
           cy.get(this.WellcareSimple).click();
       }
       HumanaGoldPlanClick(){
           cy.get(this.humanaGold).click();
       }
       DoneplanSelectionClick(){
           cy.get(this.done).click();
       }
       HumanaGoldPlusPlanClick(){
           cy.get(this.humanGoldPlus).click();
       }
       pdpClick(){
           cy.get(this.pdp).click();
       }
       wellcareValuScriptClick(){
           cy.get(this.wellcareValueScriptPdp).click();
       }
       donePdpClick(){
           cy.get(this.donePdp).click();
       }
       aetenaMedicarePremierClick(){
           cy.get(this.aetenaMedicarePremier).click({ force: true });
       }
       wellcaregivebackclick(){
           cy.get(this.wellcaregiveback).scrollIntoView().click({ force: true });
       }
       
       medicareAdvantageClick(){
        cy.get(this.medicareAdv).click();
       }
       tickClick(){
        cy.get(this.tick).click();
       }
       medicareclick(){
        cy.get(this.medicare).click();
       }
longtermClick(){
    cy.get(this.longterm).should('be.visible').click( { force: true});
   // cy.xpath(this.longterm).click();
}
AivanteImagClick(){
    cy.get(this.AivanteImg).click();
}
prescriptionClick(){
    cy.rightclick(this.prescriptionbtn).click();
}
}
export default planselectionPage;