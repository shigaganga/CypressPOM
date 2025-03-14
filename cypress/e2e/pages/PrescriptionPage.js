class PrescriptionPage{
    drugSearchBox="//div[contains(@class, 'ant-form-item-control-input')]//input[1]";
    //DrugSearchBox="//input[contains(@class, 'ant-select-selection-search-input')]";
    clickDrugDropDown="//nz-option-item[@title='Gabapentin ']";
    addToDrug="//form//button[contains(@class, 'ant-btn') and span]";
    doneAddDrug="//span[normalize-space()='Done Adding Drugs']";
    goBackToPreferennce="(//span[@class='ng-star-inserted'])[1]";
    enterDrugSearchBox(drugName) {
        cy.xpath(this.drugSearchBox).first().type(drugName, { force: true });
    }
     selectDrug(){
            cy.xpath(this.clickDrugDropDown).click();
        }
    clickAddToDrug(){
        cy.xpath(this.addToDrug)
        .click();
      
    }
    doneAddDrugClick(){
        cy.xpath(this.doneAddDrug).click();
    }
    clickGobackPreference(){
        cy.wait(1000); 
        cy.xpath(this.goBackToPreferennce)
            .should('exist')
            .should('be.visible')
            .click();
    }
    }
    export default PrescriptionPage;