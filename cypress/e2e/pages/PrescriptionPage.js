class PrescriptionPage{
DrugSearchBox="//div[contains(@class, 'ant-form-item-control-input')]//input[1]";
//DrugSearchBox="//input[contains(@class, 'ant-select-selection-search-input')]";
ClickDrugDropDown="//nz-option-item[@title='Gabapentin ']";
AddToDrug="//form//button[contains(@class, 'ant-btn') and span]";
DoneAddDrug="//span[normalize-space()='Done Adding Drugs']";
goBackToPreferennce="(//span[@class='ng-star-inserted'])[1]";
EnterDrugSearchBox(){
   // cy.get(this.DrugSearchBox).type(DrugName);
   cy.xpath(this.DrugSearchBox).first().type("Gabapentin", { force: true });

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
export default PrescriptionPage;