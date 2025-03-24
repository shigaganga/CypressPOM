/*class LongTermPage{
    longtermArrow=".mat-expansion-indicator";
    submitLongTerm=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
    backLongTermToPlanSelection=".button-wrapper > :nth-child(1) > .mat-button-wrapper";
    pdf=".ng-star-inserted > .mat-button-wrapper";
    longTermArrowClick(){
        cy.get(this.longtermArrow).click();
    }
    submitLongTermClick(){
        cy.get(this.submitLongTerm).click();
    }
    pdfclick(){
        cy.get(this.pdf).click();
    }
    backLongTermToPlanSelectionClick(){
        cy.get(this.backLongTermToPlanSelection).click();
    }

}
export default LongTermPage;  */



class LongTermPage {

    longtermBtnEle = ".button-container > :nth-child(2) > .mat-button-wrapper";
    expansionArrowEle = ".mat-expansion-indicator";
    
    qualityofcareArrowEle = "#mat-select-24 > .mat-select-trigger > .mat-select-arrow-wrapper";
    comfortEle = "##mat-option-94 > .mat-option-text";
    luxuryEle = "#mat-option-95 > .mat-option-text";
    premiumLuxuryEle = "#mat-option-96 > .mat-option-text";
    
    adultdaycareArrowEle = "#mat-select-26 > .mat-select-trigger > .mat-select-arrow-wrapper";
    adultcare0yearsEle = "#mat-option-97 > .mat-option-text";
    adultcare1yearsEle = "#mat-option-98 > .mat-option-text";
    adultcare2yearsEle = "#mat-option-99 > .mat-option-text";
    adultcare3yearsEle = "#mat-option-100 > .mat-option-text";
    adultcare4yearsEle = "#mat-option-101 > .mat-option-text";
    adultcare5yearsEle = "#mat-option-102 > .mat-option-text";
    
    
    inhomecareArrowEle = "#mat-select-28 > .mat-select-trigger > .mat-select-arrow-wrapper";
    inhomecare0yearsEle = "#mat-option-107 > .mat-option-text";
    inhomecare1yearsEle = "#mat-option-108 > .mat-option-text";
    inhomecare2yearsEle = "#mat-option-109 > .mat-option-text";
    inhomecare3yearsEle = "#mat-option-110 > .mat-option-text";
    inhomecare4yearsEle = "#mat-option-111 > .mat-option-text";
    inhomecare5yearsEle = "#mat-option-112 > .mat-option-text";
    
    
    nursinghomecareArrowEle = "#mat-select-30 > .mat-select-trigger > .mat-select-arrow-wrapper";
    nursinghomecare0yearsEle = "#mat-option-117 > .mat-option-text";
    nursinghomecare1yearsEle = "#mat-option-118 > .mat-option-text";
    nursinghomecare2yearsEle = "#mat-option-119 > .mat-option-text";
    nursinghomecare3yearsEle = "#mat-option-120 > .mat-option-text";
    nursinghomecare4yearsEle = "#mat-option-121 > .mat-option-text";
    nursinghomecare5yearsEle = "#mat-option-122 > .mat-option-text";
    
    
    submitBtnEle = ":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
    
    generatepdfLongtermBtnEle = ".ng-star-inserted > .mat-button-wrapper";
    backbtnEle = ".button-wrapper > :nth-child(1) > .mat-button-wrapper";
    aivanteLogoEle = "img";
    
    clickLongtermBtn(){
        cy.get(this.longtermBtnEle).click()};
    
    clickExpansionArrow(){      
        cy.get(this.expansionArrowEle).click()}
    
    clickQualityofcareArrow(){
        cy.get(this.qualityofcareArrowEle).click()}
    
    clickComfort(){
        cy.get(this.comfortEle).click()}
    
    clickLuxury(){
        cy.get(this.luxuryEle).click()}
    
    clickPremiumLuxury(){
        cy.get(this.premiumLuxuryEle).click()}
    
    clickAdultdaycareArrow(){
        cy.get(this.adultdaycareArrowEle).click()}
    
    clickAdultcare0years(){
        cy.get(this.adultcare0yearsEle).click()}    
    
    clickAdultcare1years(){
        cy.get(this.adultcare1yearsEle).click()}    
    
    clickAdultcare2years(){
        cy.get(this.adultcare2yearsEle).click()}
    
    clickAdultcare3years(){
        cy.get(this.adultcare3yearsEle).click()}    
    
    clickAdultcare4years(){
        cy.get(this.adultcare4yearsEle).click()}
    
    clickAdultcare5years(){
        cy.get(this.adultcare5yearsEle).click()}
    
    
    clickInhomecareArrow(){
        cy.get(this.inhomecareArrowEle).click()}
    
    clickInhomecare0years(){
        cy.get(this.inhomecare0yearsEle).click()}
    
    clickInhomecare1years(){
        cy.get(this.inhomecare1yearsEle).click()}
    
    clickInhomecare2years(){
        cy.get(this.inhomecare2yearsEle).click()}
    
    clickInhomecare3years(){
        cy.get(this.inhomecare3yearsEle).click()}
    
    clickInhomecare4years(){
        cy.get(this.inhomecare4yearsEle).click()}
    
    clickInhomecare5years(){    
        cy.get(this.inhomecare5yearsEle).click()}
    
    
    clickNursinghomecareArrow(){  
        cy.get(this.nursinghomecareArrowEle).click()}   
    
    clickNursinghomecare0years(){
        cy.get(this.nursinghomecare0yearsEle).click()}
    
    clickNursinghomecare1years(){
        cy.get(this.nursinghomecare1yearsEle).click()}
    
    clickNursinghomecare2years(){
        cy.get(this.nursinghomecare2yearsEle).click()}
    
    clickNursinghomecare3years(){
        cy.get(this.nursinghomecare3yearsEle).click()}
    
    clickNursinghomecare4years(){
        cy.get(this.nursinghomecare4yearsEle).click()}
    
    clickNursinghomecare5years(){
        cy.get(this.nursinghomecare5yearsEle).click()}
    
    
    clickSubmitBtn(){
        cy.get(this.submitBtnEle).click()}
    
    clickGeneratepdfLongtermBtn(){
        cy.get(this.generatepdfLongtermBtnEle)
        .should('exist')
        .should('be.visible')
        .contains('generate PDF').click()}
    
    clickBackButton(){
        cy.get(this.backbtnEle).click()}
    
    clickAivanteLogo(){
        cy.get(this.aivanteLogoEle).click()}    
    
    }
    
    export default LongTermPage;    