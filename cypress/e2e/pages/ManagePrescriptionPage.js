class ManagePrescriptionPage{
DrugSearchBox='/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-prescriptions/div[1]/div[2]/div/app-drug-selction/form/div[1]/div[1]/nz-form-item/nz-form-control/div/div/nz-select/nz-select-top-control/nz-select-search/input';
ClickDrugDropDown="//nz-option-item[@title='Gabapentin ']";
AddToDrug="/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-prescriptions/div[1]/div[2]/div/app-drug-selction/form/div[2]/div[3]/button/span";
DoneAddDrug="//span[normalize-space()='Done Adding Drugs']";
goBackToPreferennce="(//span[@class='ng-star-inserted'])[1]";
//goBackToPreferennce="/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-prescriptions/div[1]/div[1]/span/span";
EnterDrugSearchBox(DrugName){

    
    cy.xpath(this.DrugSearchBox).type(DrugName);
    }
 SelectDrug(){
        cy.xpath(this.ClickDrugDropDown).click();
    }
clickAddToDrug(){
    cy.xpath(this.AddToDrug)
    .click();
  
}
DoneAddDrugClick(){
    cy.xpath(this.DoneAddDrug).click();
}
ClickGobackPreference(){
    cy.wait(1000); 
    cy.xpath(this.goBackToPreferennce)
        .should('exist')
        .should('be.visible')
        .click();
}
}
export default ManagePrescriptionPage;