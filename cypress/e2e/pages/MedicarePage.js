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

    generatepdfEle="//span[normalize-space()='Generate PDF']"  //xpath
    aivanteimgEle="img[src='assets/images/Aivante-logo.png']";

    pagetitleEle=('.fontSize20px');
    rightdrawerbtnEle=('.rightDrawer > .mat-focus-indicator > .mat-button-wrapper > span');
    expansionEle=('.mat-expansion-indicator');
    disableddlEle=('.mat-select');

    purchasepartAtoggEle=('#mat-slide-toggle-1');
    purchasepartAtogglabelEle=('#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-content'); 

    clickMAbtnEle=(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper');
    wellcaresimpleopenppoEle=('#mat-checkbox-26 > .mat-checkbox-layout > .mat-checkbox-inner-container');
    wellcaresimpleopenppoEle =("label[for='mat-checkbox-26-input'] span[class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']");
    planselectdoneEle=("button[class='mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted'] span[class='mat-button-wrapper']");
    selectplanchkboxEle=('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin');

   //edit recommendation and check the plan details from Medicare screen.
   filterbyemailorrecnameEle="//input[contains(@id,'mat-input')]";
    //click on edit recommendation icon
   clickeditrecommendationEle= "//tr[@class='mat-row cdk-row highlight ng-star-inserted']//mat-icon[@role='img'][normalize-space()='border_color']";
   //click next button of profile details screen
   clicknextEle="//span[normalize-space()='Next']";
   // click next button of preferences details screen
   clicknoprefEle="//label[@for='mat-radio-48-input']//span[@class='mat-radio-outer-circle']";
   clickyesprefEle="//label[@for='mat-radio-20-input']//span[@class='mat-radio-inner-circle']";
  clicknextprefEle="//span[normalize-space()='Next']";
  clickadddrugdoneEle="//span[normalize-space()='Done Adding Drugs']";
  clickpharcheckbxEle="//label[@for='mat-checkbox-2-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']";
  clickpharnextbtnEle="//span[normalize-space()='Next']"; 
  //click MAbtn
   clickmabuttonEle="//span[normalize-space()='Medicare Advantage']";
   wellcaresimpleEle= "//*[@id='mat-checkbox-15']/label/span[1]";
  
   clickdonemaEle="//span[normalize-space()='Done']";
   selectchkbxmaEle="//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']";
   selectchkbxmaEle="('#mat-checkbox-15 > .mat-checkbox-layout > .mat-checkbox-inner-container')";
   
   //clickmedicaremaEle="//span[normalize-space()='Medicare']";
   clickmedicarebuttonele="//*[@id='unified-runner']";
   clickExpheaderEle='//*[contains(@id, "mat-expansion-panel-header")]/span[1]'
   purchasepartA='//mat-slide-toggle[@id="mat-slide-toggle-3"]//div[contains(@class, "mat-slide-toggle-bar")]';
   select30lifetimereservedaysEle="//*[@id='mat-select-value-35']";
   lrdarrowclickEle="(//*[contains(@id, 'mat-select')])[1]";
    dropDownEle = "//mat-option/span[normalize-space(text())='30']";
    lrdsubmitbtnEle="//*[@id='cdk-accordion-child-0']//button/span[contains(text(), 'Submit')]"

    // View a plan and check for the Medicare details
    clickrecviewarrowEle="//mat-icon[normalize-space()='keyboard_arrow_down']";
    //clickrecviewarrowEle="//tbody/tr[1]/td[1]/button[1]/span[1]/mat-icon[1]";  //also correct
    
    clickviewrecommendationEle= "//tr[@class='mat-row cdk-row highlight ng-star-inserted']//mat-icon[@role='img'][normalize-space()='remove_red_eye']";
    clickmedicarebtnEle="//span[normalize-space()='Medicare']";
    
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
        cy.wait(3000);
       cy.xpath(this.generatepdfEle, { timeout: 10000 }).should('not.be.disabled').click();
    }

    aivanteimgclick(){
        cy.get(this.aivanteimgEle).click();
    }

    //edit recommendation plan details
    editrecommendation(){
        cy.xpath(this.filterbyemailorrecnameEle).click().type('Vanaja@gmail.com');
        cy.wait(3000);

        cy.xpath(this.clickeditrecommendationEle).click();
        cy.wait(3000);

        cy.xpath(this.clicknextEle).click();
        cy.wait(3000);
       
        cy.xpath(this.clicknextprefEle).click();
        cy.wait(300);

        cy.xpath(this.clickadddrugdoneEle).click();
        cy.xpath(this.clickpharcheckbxEle).click();
        cy.xpath(this.clickpharnextbtnEle).click();
        cy.wait(3000)
        cy.xpath(this.clickmabuttonEle).click();
        cy.wait(5000)
        cy.xpath(this.wellcaresimpleEle).click();
        cy.get(this.planselectdoneEle).click();
        cy.get(this.selectplanchkboxEle).click();
        cy.get(this.clickmedicareEle).click({ multiple: true });
        cy.xpath(this.clickExpheaderEle).click();
        cy.xpath(this.purchasepartA).click();

        }
         //from Medicare screen select 30 lifetime reserve days from dropdown values
           select30lifetimeresdays() {
            cy.xpath(this.clickExpheaderEle).click();
            cy.wait(5000);
            cy.xpath(this.lrdarrowclickEle).click();
            cy.wait(4000)
            cy.xpath(this.dropDownEle)
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
            cy.xpath(this.lrdsubmitbtnEle).click();
          }
        
          //view medicare plan details
          viewrecommendation(){
            cy.xpath(this.filterbyemailorrecnameEle, { timeout: 50000 }).click().type('Vanaja');
            cy.wait(3000)
            cy.xpath(this.clickviewrecommendationEle, { timeout: 50000 }).click({ multiple: true });
            cy.xpath(this.clickmedicarebtnEle, { timeout: 50000 }).should('be.visible').click();
             cy.get(this.TotalPremiumEle).should('contain.text','Total Premium');
             cy.get(this.TotalsurchargeEle).should('contain.text','Total Surcharge');
            cy.get(this.TotalOOPEle).should('contain.text','Total OOP');

          }
          
// validations
validatepgelements() {
  //cy.get(this.pagetitleEle).should('contain.text', 'Your Medicare Options');
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