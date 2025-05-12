class PrescriptionPage {
    drugSearchBox = "//div[contains(@class, 'ant-form-item-control-input')]//input[1]";
    clickDrugDropDown = "//nz-option-container//nz-option-item[1]";
    addToDrug = "//form//button[contains(@class, 'ant-btn') and span]";
    doneAddDrug = "//span[normalize-space()='Done Adding Drugs']";
    goBackToPreferennce = "(//span[@class='ng-star-inserted'])[1]";
    goBackAddDrug = "//span[contains(text(),'Go back to Add Drug')]";
    dosageInfo = '.ant-card-body';
    genericBrandWindow = '.ant-modal-body';
    addGeneric = "button[class='marginTop2Percent login-form-button login-form-margin primary-btn floatLeft ant-btn ant-btn-primary'] span[class='ng-star-inserted']";
    addBrand = ".marginLeft20pxImp > .ng-star-inserted";
    addMyDrugList = "//span[normalize-space()='Add To My Drug List']";
    browzeA_Zlink = ":nth-child(1) > .login-form-forgot > u";
    selectLetter = "nz-select-item[title='A']";
    lettertEle =('.ant-select-selection-item');
    drugfoundEle = ('.ant-select-item-option-content');
    selectdrugEle = ('.ant-drawer-body > :nth-child(8)');
    adddrugEle = ('.ant-drawer-footer > div.ng-star-inserted > :nth-child(2) > .ng-star-inserted');
    addtodruglistEle =('.marginTop2Percent > .ng-star-inserted');
    quantity = "input[placeholder='Quantity']";
    clearSearch = ".floatRight > u";
    cantFindDrug = ":nth-child(2) > .login-form-forgot > u";
    existingDrugList = ".ng-tns-c108-29 > .ant-select-selection-search > .ant-select-selection-search-input";
    selectdrugFromlist = "[title='Save'] > .ant-select-item-option-content";  
    editDrug = "[style='bottom: -10px; position: relative;'] > :nth-child(1) > u";
    cancelUpdate = ".floatRight > .ng-star-inserted";
    quantityLessText = ".ant-form-item-explain > .ng-tns-c132-36";
    refillFreequency = ".marginTop2Percent > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item";
    sixtyDaysRefill = "nz-option-item[title='60 Days'] div[class='ant-select-item-option-content']";
    addAnotherDrug = "span[class='ng-star-inserted']";
    updateThisDrug = "//span[normalize-space()='Update This Drug']";
    removeDrug = "//u[normalize-space()='Remove drug']";
    reviewPrescriptionList = "//span[normalize-space()='Review prescription list']";

    enterDrugSearchBox(drugName) {
        cy.wait(3000);
        cy.xpath(this.drugSearchBox)
          .first() // Make sure to select the first matched element
          .scrollIntoView()
          .should('be.visible')
          .click({ force: true }) // Ensure input is activated
          .clear()
          .type(drugName, { force: true });
          cy.wait(3000);
      }
      

    selectDrug() {
        cy.xpath(this.clickDrugDropDown).should('be.visible').click({ force: true });
    }

    clickAddToDrug() {
        cy.xpath(this.addToDrug).should('be.visible').click();
    }

    doneAddDrugClick() {
        cy.xpath(this.doneAddDrug).should('be.visible').click({ force: true });
    }

    clickGobackPreference() {
        cy.wait(1000); 
        cy.xpath(this.goBackToPreferennce)
            .should('exist')
            .should('be.visible')
            .click();
    }

    clickGobackAddDrug() {
        cy.xpath(this.goBackAddDrug)
            .should('exist')
            .should('be.visible')
            .click({ force: true });
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

    addBrandInsteadClick() {
        cy.get(this.addBrand).should('be.visible').click();
    }

    addGenericClick() {
        cy.get(this.addGeneric).should('be.visible').click();
    }
    selectGenericBrandOption(option) {
        if (option.toLowerCase() === 'brand') {
            cy.get(this.addBrand)
                .should('be.visible')
                .click();
        } else if (option.toLowerCase() === 'generic') {
            cy.get(this.addGeneric)
                .should('be.visible')
                .click();
        } else {
            throw new Error(`Invalid option: ${option}. Use 'brand' or 'generic'.`);
        }
    }
    addMyDrugListClick() {
        cy.xpath(this.addMyDrugList).should('be.visible').click({ force: true });
    }

    clickBrowseAtoZlink() {
        cy.get(this.browzeA_Zlink).should('be.visible').click();
    }

    enterLetter(letter) {
        cy.get(this.lettertEle).should('be.visible').type(letter);
    }

    clickDrugFound() {
        cy.get(this.drugfoundEle).should('be.visible').click();
    }

    clickSelectDrug() {
        cy.get(this.selectdrugEle).should('be.visible').click();
    }

    clickAddDrug() {
        cy.get(this.adddrugEle).should('be.visible').click();
    }

    clickAddToDrugList() {
        cy.get(this.addtodruglistEle).should('be.visible').click();
    }

    clickClearSearch() {
        cy.get(this.clearSearch).should('be.visible').click();
    }

    enterQuantity(quantity){
        cy.get(this.quantity).clear().type(quantity);
    }

    verifyQuantityText() {
        cy.get(this.quantityLessText)
            .should('be.visible') 
            .should('have.text', 'Quantity should be greater than 0');
    }

    clickRefillFreequency() {
        cy.get(this.refillFreequency).should('be.visible').click();
    }

    clickSixtyDaysRefill() {
        cy.get(this.sixtyDaysRefill).should('be.visible').click({ force: true });
    }

    clickAddAnotherDrug() {
        cy.get(this.addAnotherDrug).should('be.visible').click();
    }

    editDrugClick() {
        cy.get(this.editDrug).should('be.visible').click();
    }

    updateThisDrugClick() {
        cy.xpath(this.updateThisDrug).should('be.visible').click();
    }

    removeDrugClick() {
        cy.xpath(this.removeDrug).should('be.visible').click();
    }

    reviewPrescriptionListClick() {
        cy.xpath(this.reviewPrescriptionList).should('be.visible').click();
    }
}

export default PrescriptionPage;
