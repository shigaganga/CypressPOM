class LongTermPage {

    longtermBtnEle = ".button-container > :nth-child(2) > .mat-button-wrapper";

    longtermArrow=".mat-expansion-indicator";
    submitLongTerm=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
    backLongTermToPlanSelection=".button-wrapper > :nth-child(1) > .mat-button-wrapper";
    pdf=".ng-star-inserted > .mat-button-wrapper";
    longTermArrowClick(){
        cy.get(this.longtermArrow).click();
    }
    submitLongTermClick(){
        cy.get(this.submitLongTerm).click({force:true});    
    }
    pdfclick(){
        cy.get(this.pdf).click({force:true});
    }
    backLongTermToPlanSelectionClick(){
        cy.get(this.backLongTermToPlanSelection).click();
    }

    pagetitleEle = ('.fontSize20px');
    rightdrawerbtnEle = ('.rightDrawer > .mat-focus-indicator > .mat-button-wrapper');
    expansionEle = ('.mat-expansion-indicator');
    disableddlEle=('.mat-select');
    panelheadertitleEle = ('.mat-expansion-panel-header-title');
    longtermcareexpensesele = ":nth-child(2) > .heading > span";

    ageele=(".personal-info > :nth-child(1) > span");
    healthprofileele=(".personal-info > :nth-child(2) > span");
    lifeexpectancyele= (".personal-info > :nth-child(3) > span");
    retirementageele=(":nth-child(4) > span");
    retirementyearele=(":nth-child(5) > span");

    futurevalueEle= "//td[normalize-space()='Future Value']";
    presentvalueEle= "//td[normalize-space()='Present Value']";
 
    
    //comfortEle= "(//span[@class='mat-option-text'][normalize-space()='Comfort'])[1])";
    //luxuryEle= "(//span[normalize-space()='Luxury'])[1]";
    //premiumLuxuryEle= "(//span[normalize-space()='Premium Luxury'])[1]";

    qualityofcareArrowEle = ("(//div[contains(@class, 'mat-select-arrow-wrapper')])[1]");
    comfortEle = "//span[@class='mat-option-text'][normalize-space()='Comfort']" ; 
    luxuryEle = "//span[normalize-space()='Luxury']";
    premiumLuxuryEle = "//span[normalize-space()='Premium Luxury']";

    adultdaycareArrowEle = ("(//div[contains(@class,'mat-select-arrow-wrapper')])[2]");
    adultcare0yearsEle = ("(//span[@class='mat-option-text'][normalize-space()='0'])[2]");
    adultcare1yearsEle = ("(//span[@class='mat-option-text'][normalize-space()='1'])[2]");
    adultcare2yearsEle = ("(//span[normalize-space()='2'])");
    adultcare3yearsEle = ("(//span[normalize-space()='3'])");
    adultcare4yearsEle = ("(//span[normalize-space()='4'])");
    adultcare5yearsEle = ("(//span[normalize-space()='5'])[2]");

   
    inhomecareArrowEle = ("(//div[contains(@class, 'mat-select-arrow-wrapper')])[3]");
    inhomecare0yearsEle = ("(//span[@class='mat-option-text'][normalize-space()='0'])[3]");
    inhomecare1yearsEle = ("(//span[@class='mat-option-text'][normalize-space()='1'])[3]");
    inhomecare2yearsEle = ("(//span[normalize-space()='2'])");
    inhomecare3yearsEle = ("(//span[normalize-space()='3'])");
    inhomecare4yearsEle = ("(//span[normalize-space()='4'])[3]");
    inhomecare5yearsEle = ("(//span[normalize-space()='5'])[3]");
    
    
    nursinghomecareArrowEle = ("(//div[contains(@class, 'mat-select-arrow-wrapper')])[4]");
    nursinghomecare0yearsEle = ("//span[normalize-space()='0'])[4]");
    nursinghomecare1yearsEle = ("//span[@class='mat-option-text'][normalize-space()='1'][4]");
    nursinghomecare2yearsEle = ("//span[normalize-space()='2']");
    nursinghomecare3yearsEle = ("//span[normalize-space()='3']");
    nursinghomecare4yearsEle = ("//span[normalize-space()='4'][4]");
    nursinghomecare5yearsEle = ("//span[normalize-space()='5'][4]");
    
    
    submitBtnEle = ":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
    
    generatepdfLongtermBtnEle = ".ng-star-inserted > .mat-button-wrapper";
    backbtnEle = ".button-wrapper > :nth-child(1) > .mat-button-wrapper";
    aivanteLogoEle = "img";
    
    clickLongtermBtn(){
        cy.get(this.longtermBtnEle).click()};
    
    clickExpansionArrow(){      
        cy.get(this.longtermArrow).click()}
    
   clickQualityofcareArrow(){
        cy.xpath(this.qualityofcareArrowEle).click({ force: true });
        } 
    
    clickComfort(){
        cy.xpath(this.comfortEle).click( { force: true});
        }
    
    clickLuxury(){
        cy.xpath(this.luxuryEle).click( { force : true});
        }
    
    clickPremiumLuxury(){
        cy.xpath(this.premiumLuxuryEle).click( { force: true});
        }

    
    clickAdultdaycareArrow(){
        cy.xpath(this.adultdaycareArrowEle).click({force:true})}
    
    clickAdultcare0years(){
        cy.xpath(this.adultcare0yearsEle).click({force:true})}    
    
    clickAdultcare1years(){
        cy.xpath(this.adultcare1yearsEle).click({force:true})}    
    
    clickAdultcare2years(){
        cy.xpath(this.adultcare2yearsEle).click({force:true})}
    
    clickAdultcare3years(){
        cy.xpath(this.adultcare3yearsEle).click({force:true})}    
    
    clickAdultcare4years(){
        cy.xpath(this.adultcare4yearsEle).click({force:true, multiple: true})}
    
    clickAdultcare5years(){
        cy.xpath(this.adultcare5yearsEle).click({force:true})}
    
    
    clickInhomecareArrow(){
        cy.xpath(this.inhomecareArrowEle).click()}
    
    clickInhomecare0years(){
        cy.xpath(this.inhomecare0yearsEle).click()}
    
    clickInhomecare1years(){
        cy.xpath(this.inhomecare1yearsEle).click()}
    
    clickInhomecare2years(){
        cy.xpath(this.inhomecare2yearsEle).click({force: true, multiple: true})}
    
    clickInhomecare3years(){
        cy.xpath(this.inhomecare3yearsEle).click()}
    
    clickInhomecare4years(){
        cy.xpath(this.inhomecare4yearsEle).click({force:true})}
    
    clickInhomecare5years(){    
        cy.xpath(this.inhomecare5yearsEle).click()}
    
    
    clickNursinghomecareArrow(){  
        cy.xpath(this.nursinghomecareArrowEle).click()}   
    
    clickNursinghomecare0years(){
        cy.xpath(this.nursinghomecare0yearsEle).click()}
    
    clickNursinghomecare1years(){
        cy.xpath(this.nursinghomecare1yearsEle).click()}
    
    clickNursinghomecare2years(){
        cy.xpath(this.nursinghomecare2yearsEle).click({force: true, multiple: true})}
    
    clickNursinghomecare3years(){
        cy.xpath(this.nursinghomecare3yearsEle).click()}
    
    clickNursinghomecare4years(){
        cy.xpath(this.nursinghomecare4yearsEle).click()}
    
    clickNursinghomecare5years(){
        cy.xpath(this.nursinghomecare5yearsEle).click()}
    
    
    clickSubmitBtn(){
        cy.get(this.submitBtnEle).click()}
    
    clickGeneratepdfLongtermBtn(){
        cy.get(this.generatepdfLongtermBtnEle)
        .should('exist')
        .should('be.visible')
        .contains('generate PDF').click()}
    
    clickBackButton(){
        cy.get(this.backbtnEle).click()}


    validatepagelements() {
            cy.get(this.pagetitleEle).should('exist').should ('be.visible');
            cy.get(this.rightdrawerbtnEle).should('contain.text', 'T');
            cy.get(this.expansionEle).should('be.visible');
            //cy.get(this.disableddlEle).should('be.visible');
            cy.get(this.panelheadertitleEle).should('contain.text', 'Long Term Care Details');
            cy.get(this.longtermcareexpensesele).should('be.visible');

          }

    verifyUserInfoDetails() {
        cy.get(this.ageele).should('exist').should('be.visible');
        cy.get(this.healthprofileele).should('exist').should('be.visible');
        cy.get(this.lifeexpectancyele).should('exist').should('be.visible');
        cy.get(this.retirementageele).should('exist').should('be.visible');
        cy.get(this.retirementyearele).should('exist').should('be.visible');
    }
    
    verifyPresentFutureValueDetails() {
        cy.xpath(this.presentvalueEle).should('exist').should('be.visible');
        cy.xpath(this.futurevalueEle).should('exist').should('be.visible');
        
    }
    clickAivanteLogo(){
        cy.get(this.aivanteLogoEle).click()}    



        adultDayCareYear ="//td[normalize-space()='2042']"
    inHomeCareYear ="//td[normalize-space()='2043']"
    nursingCareYear ="//td[normalize-space()='2044']"


    verifyAdultDayCareYear() {
        cy.xpath(this.adultDayCareYear).should('contain.text',2042);
    }

    verifyInHomeCareYear() {
        cy.xpath(this.inHomeCareYear).should('contain.text',2043);
    }

    verifyNursingCareYear() {
        cy.xpath(this.nursingCareYear).should('contain.text',2044);
    }

    adultdaycareinchart="(//*[name()='rect'][@class='highcharts-point'])[1]"
    inhomecareinchart="(//*[name()='rect'][@class='highcharts-point'])[2]"
    nursingcareinchart="(//*[name()='rect'][@class='highcharts-point'])[3]"

    verifyaAdultdayInchart(){
        cy.xpath(this.adultdaycareinchart).click()
    }
    verifyInHomecareInchart(){
        cy.xpath(this.inhomecareinchart).click()
    }
    verifyNurisngcareInchart(){
        cy.xpath(this.nursingcareinchart).click()
    }
    













    }

    


export default LongTermPage;