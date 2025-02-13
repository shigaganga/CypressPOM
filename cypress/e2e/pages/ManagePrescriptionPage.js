class ManagePrescriptionPage{
DrugSearchBox='/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-prescriptions/div[1]/div[2]/div/app-drug-selction/form/div[1]/div[1]/nz-form-item/nz-form-control/div/div/nz-select/nz-select-top-control/nz-select-search/input';
ClickDrugDropDown="//nz-option-item[@title='Gabapentin ']";
AddToDrug="/html/body/app-root/div/div[2]/mat-sidenav-container/mat-sidenav-content/app-prescriptions/div[1]/div[2]/div/app-drug-selction/form/div[2]/div[3]/button/span";
DoneAddDrug="//span[normalize-space()='Done Adding Drugs']";
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
}
export default ManagePrescriptionPage;