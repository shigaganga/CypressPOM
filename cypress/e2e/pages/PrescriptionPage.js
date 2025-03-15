class PrescriptionPage{
    drugSearchBox="div[contains(@class, 'ant-form-item-control-input')]input[1]";
    clickDrugDropDown="nz-option-item[@title='Gabapentin ']";
    clickDrugDropDown= "nz-option-containernz-option-item[1]";
    addToDrug="formbutton[contains(@class, 'ant-btn') and span]";
    doneAddDrug="span[normalize-space()='Done Adding Drugs']";
    goBackToPreferennce="(span[@class='ng-star-inserted'])[1]";
    dosageInfo='.ant-card-body';
    genericBrandWindow='.ant-modal-body';
    addBrand=".marginLeft20pxImp > .ng-star-inserted";
    addMyDrugList="button[class='marginTop2Percent login-form-button login-form-margin primary-btn floatLeft ant-btn ant-btn-primary ng-star-inserted'] span[class='ng-star-inserted']";
   browzeA_Zlink=":nth-child(1) > .login-form-forgot > u";
   selectLetter="nz-select-item[title='A']";
   lettertEle =('.ant-select-selection-item');
   drugfoundEle = ('.ant-select-item-option-content');
  selectdrugEle = ('.ant-drawer-body > :nth-child(8)');
  adddrugEle = ('.ant-drawer-footer > div.ng-star-inserted > :nth-child(2) > .ng-star-inserted');
  addtodruglistEle =('.marginTop2Percent > .ng-star-inserted');
  
  clearSearch=".floatRight > u"
  cantFindDrug=":nth-child(2) > .login-form-forgot > u";
  existingDrugList=".ng-tns-c108-29 > .ant-select-selection-search > .ant-select-selection-search-input";//Select Prescription Drug from your Existing List field
  selectdrugFromlist="[title='Save'] > .ant-select-item-option-content"; // select save drug list name
  removeDrug=".floatRight > a > u"; //Remove drug
  editDrug="[style='bottom: -10px; position: relative;'] > :nth-child(1) > u";//Edit the drug
  cancelUpdate=".floatRight > .ng-star-inserted";
  updateThisDrug=".floatLeft > .ng-star-inserted";  //Update this drug

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
    verifyDosageWindow() {
        cy.get(this.dosageInfo, { timeout: 5000 }) // Wait up to 5 seconds
            .should('exist')
            .and('be.visible');
    }
    verifyGenericBrandWindow() {
        cy.get(this.genericBrandWindow, { timeout: 5000 })  
            .should('exist')
            .and('be.visible');
            cy.log("user should view add generic and brand information in a Window ");
    }
    addBrandInsteadClick(){
        cy.get(this.addBrand).click();
    }
    addMyDrugListClick(){
        cy.get(this.addMyDrugList).should('be.visible').click( { force: true});
    }
    clickBrowseAtoZlink(){
        cy.get(this.browzeA_Zlink).click();
    }
    enterLetter(letter){
        cy.get(this.lettertEle).type(letter);
        }
        clickDrugFound(){
        cy.get(this.drugfoundEle).click();
        }
        clickSelectDrug(){
        cy.get(this.selectdrugEle).click();
        }
        clickAddDrug(){
        cy.get(this.adddrugEle).click();
        }
        clickAddToDrugList(){
        cy.get(this.addtodruglistEle).click();
        }
     clickAddAnotherDrug(){cy.get(this.addAnotherDrug).wait(2000).click(); }
  clickClearSearch(){cy.get(this.clearSearch).wait(2000).click(); }
  clickCantFindDrug(){cy.get(this.cantFindDrug).click(); }
  clickExistingDrigList(){cy.get(this.existingDrugList).wait(2000).click(); }
  clickDrugExistingList(){cy.get(this.selectdrugFromlist).wait(2000).click(); }
  clickRemoveDrug(){cy.get(this.removeDrug).wait(2000).click();  }
  clickEditDrug(){cy.get(this.editDrug).wait(2000).click(); }
  clickcancelUpdate(){cy.get(this.cancelUpdate).wait(2000).click();  }
  clickUpdateThisDrug(){cy.get(this.updateThisDrug).wait(2000).click();  }
}
    export default PrescriptionPage;