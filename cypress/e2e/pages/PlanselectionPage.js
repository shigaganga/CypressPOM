class planselectionPage{
    medicareAdv=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
        tick=".mat-checkbox-inner-container";
        medicare=".button-container > :nth-child(1) > .mat-button-wrapper";
        longterm=".button-container > :nth-child(2) > .mat-button-wrapper";
       AivanteImg="img";
       prescriptionbtn="div[class='button-wrapper ng-star-inserted'] button:nth-child(1) span:nth-child(1)";
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
    cy.get(this.longterm).click();
}
AivanteImagClick(){
    cy.get(this.AivanteImg).click();
}
prescriptionClick(){
    cy.rightclick(this.prescriptionbtn).click();
}
}
export default planselectionPage;