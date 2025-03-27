class MedicarePage{
    medicareArrow=".mat-expansion-indicator";
    submitMedicare=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
    backToPlanSelection=".button-wrapper > :nth-child(1) > .mat-button-wrapper";
    aivanteimg="img[src='assets/images/Aivante-logo.png']";
    medicarArrowClick(){
        cy.get(this.medicareArrow).click();
    }
    submitMedicareClick(){
        cy.get(this.submitMedicare).should("be.visible").click({force:true});
    }
    backToplanSelectionClick(){
        cy.get(this.backToPlanSelection).click();
    }
    aivanteImgClick(){
        cy.get(this.aivanteimg).click();
    }


    clickmedicareEle=".button-container > :nth-child(1) > .mat-button-wrapper";
    
    clickbackEle=".button-wrapper > :nth-child(1)";

    generatepdfEle=(".button-wrapper > .ng-star-inserted")
    generatepdfEle=("cy.get('.ng-star-inserted > .mat-button-wrapper')")
    generatepdfEle="mat-focus-indicator mat-raised-button mat-button-base mat-primary ng-star-inserted";

    aivanteimgEle="img[src='assets/images/Aivante-logo.png']";

    pagetitleEle=('.fontSize20px');
    rightdrawerbtnEle=('.rightDrawer > .mat-focus-indicator > .mat-button-wrapper');
    expansionEle=('.mat-expansion-indicator');
    disableddlEle=('.mat-select');

    purchasepartAtoggEle=('#mat-slide-toggle-1');
    purchasepartAtogglabelEle=('#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-content'); 

    clickMAbtnEle=(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper');
    wellcaresimpleopenppoEle=('#mat-checkbox-26 > .mat-checkbox-layout > .mat-checkbox-inner-container');
    wellcaresimpleopenppoEle =("label[for='mat-checkbox-26-input'] span[class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']");
    planselectdoneEle=("button[class='mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted'] span[class='mat-button-wrapper']");
    selectplanchkboxEle=('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin');

    //assertions related to premium and OOP
     TotalPremiumEle=(':nth-child(1) > .legend-text');
     TotalsurchargeEle=(':nth-child(2) > .legend-text');
     TotalOOPEle=(':nth-child(3) > .legend-text');


     //assertions related to PV and AB+MA and IRMA
     PVasofyearEle=('.total-container > .ng-star-inserted > :nth-child(1)');
     ABandMAtotalexpEle=('.total-container > :nth-child(2) > :nth-child(1)');
     IRMAEle=('.total-container > :nth-child(3) > :nth-child(1)');

     //assertions
     AgeEle=('.details-container > :nth-child(1) > span');
     HealthProfileEle=('.details-container > :nth-child(2) > span');
     plantypeEle=('.details-container > :nth-child(3) > span');
     RetirementageEle=('.details-container > :nth-child(4) > span');
     RetirementyearEle=(':nth-child(5) > span');
     IncomeduringmedicareEle=('.details-container > :nth-child(6) > span');
     LifeexpectancyEle=(':nth-child(7) > span');
     MedicareeligibleyearEle=(':nth-child(8) > span');
     TaxfilingstatusEle=(':nth-child(9) > span');


        clickMAbtn(){
        cy.get(this.clickMAbtnEle,{timeout:10000}).click();
        cy.wait(3000);
    }

    wellcaresimpleopenppo(){
        cy.get(this.wellcaresimpleopenppoEle,{timeout:10000}).click({force: true});
    }
    
    planselectdone(){
        cy.get(this.planselectdoneEle,{timeout:10000}).click();
    }

    selectplanchkbox(){
        cy.get(this.selectplanchkboxEle,{timeout:10000}).click();
    }

    clickmedicare(){
        cy.get(this.clickmedicareEle,{timeout:10000}).click();
        cy.wait(3000);
    }
    
    clickbackbtn(){
            cy.get(this.clickbackEle,{timeout:30000}).should('exist').should('be.visible').click({ multiple: true }); 
    }

    generatepdf(){
       cy.get(this.generatepdfEle, { timeout: 10000 }).should('not.be.disabled').click();
    }

    aivanteimgclick(){
        cy.get(this.aivanteimgEle).click();
    }

    
// validations
validatepgelements() {
  cy.get(this.pagetitleEle).should('contain.text', 'Your Medicare Options');
  cy.get(this.rightdrawerbtnEle).should('contain.text', 'T');
  //this.backButton.should('be.visible').and('have.text', 'Back');
  cy.get(this.expansionEle).should('be.visible');
  cy.get(this.disableddlEle).should('have.class', 'mat-select-disabled');
}

togglepurchasepartA() {
  cy.get(this.purchasepartAtoggEle).click({ force: true });
  cy.get(this.purchasepartAtogglabelEle).should('contain.text', 'Purchase Part A');
}

verifyUrl(expectedUrl) {
    // Verify if the current URL matches the expected URL
    cy.url().should('include', expectedUrl);
    
}

//assertions related to premium and OOP
verifytotalpremiumsurchargeoop(){
    cy.get(this.TotalPremiumEle).should('contain.text','Total Premium');
    cy.get(this.TotalsurchargeEle).should('contain.text','Total Surcharge');
    cy.get(this.TotalOOPEle).should('contain.text','Total OOP');
 }

//assertions related to PV and AB+MA and IRMA
verifyPVABMAIRMA(){
    cy.get(this.PVasofyearEle).should('be.visible');
    cy.get(this.ABandMAtotalexpEle).should('be.visible');
    cy.get(this.IRMAEle).should('be.visible');

 }

// Assertions
verifyuserinfodetalis(){
    cy.get(this.AgeEle).should('be.visible');
    cy.get(this.HealthProfileEle).should('contain.text','Good Health');
    cy.get(this.plantypeEle).should('be.visible');
    cy.get(this.RetirementageEle).should('be.visible');
    cy.get(this.RetirementyearEle).should('be.visible');
    cy.get(this.IncomeduringmedicareEle).should('be.visible');
    cy.get(this.LifeexpectancyEle).should('be.visible');
    cy.get(this.MedicareeligibleyearEle).should('be.visible');
    cy.get(this.TaxfilingstatusEle).should('contain.text','Jointly');
    }
   

     }

export default MedicarePage;