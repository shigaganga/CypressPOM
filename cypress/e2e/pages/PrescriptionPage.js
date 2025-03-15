class PrescriptionPage{
    drugSearchBox="//div[contains(@class, 'ant-form-item-control-input')]//input[1]";
    //clickDrugDropDown="//nz-option-item[@title='Gabapentin ']";
    clickDrugDropDown= "//nz-option-container//nz-option-item[1]";
    addToDrug="//form//button[contains(@class, 'ant-btn') and span]";
    doneAddDrug="//span[normalize-space()='Done Adding Drugs']";
    goBackToPreferennce="(//span[@class='ng-star-inserted'])[1]";
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
  doneadddruglEle = ('.ng-star-inserted > .mat-focus-indicator');
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
        cy.get(this.genericBrandWindow, { timeout: 5000 }) // Wait up to 5 seconds
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
        clickDoneAddDrug(){
        cy.get(this.doneadddruglEle).click();
   
    }}
    export default PrescriptionPage;