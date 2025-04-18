class PharmacyPage{
   // y='.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper';
   findFarmacy =':nth-child(4) > .mat-focus-indicator > .mat-button-wrapper';
    farmacy1='#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container';
    farmacy2='#mat-checkbox-15 > .mat-checkbox-layout > .mat-checkbox-inner-container';
    farmacy3Edit='#mat-checkbox-43 > .mat-checkbox-layout > .mat-checkbox-inner-container';
    nextFarmacy='.button-wrapper > .mat-button-wrapper';
//snehacode

    zipcodebtn='#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'//14
    addressbtn='#mat-radio-3 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'//15
    zipele='#mat-input-2'//13
    Ziphistoryarrow='.mat-select-arrow'
    addressEle='#mat-input-3'//14
    zipfindphramacyelement=':nth-child(4) > .mat-focus-indicator > .mat-button-wrapper'
    AddressfindpharmacyELe="(//span[normalize-space()='Find Pharmacy'])[1]"
    distanceele='#mat-input-1'//12
    phramcynameEle='#mat-input-0'//11
    selecttheziphistoryele='#mat-option-0 > .mat-option-text'//20
    nextpageBtnEle=':nth-child(2) > .paginator-wrapper > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next'
    lastpageBtnEle=':nth-child(2) > .paginator-wrapper > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-last'
    periviouspageBtnEle='.mat-paginator-navigation-previous'
    firstpageBtnEle='body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > mat-sidenav-container:nth-child(1) > mat-sidenav-content:nth-child(5) > app-pharmacy:nth-child(3) > div:nth-child(3) > app-pharmacy-list:nth-child(1) > div:nth-child(2) > div:nth-child(2) > mat-paginator:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2) > span:nth-child(1) > svg:nth-child(1)'
    pharmacycheckBoxEle='#mat-checkbox-26 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    secondpharmacyCheckEle='#mat-checkbox-27 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    thirdpharmacyCheckEle='#mat-checkbox-28 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    fourthpharmacyCheckele='#mat-checkbox-29 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    fifthpharmacycheckEle='#mat-checkbox-31 > .mat-checkbox-layout > .mat-checkbox-inner-container'
    googlemapRadioBtnEle='app-pharmacy-card:nth-child(2) div:nth-child(1) mat-card:nth-child(1) mat-card-header:nth-child(1) div:nth-child(1) mat-card-title:nth-child(1) div:nth-child(1) div:nth-child(3) span:nth-child(1) mat-icon:nth-child(1)'
    itemperPageEle=':nth-child(2) > .paginator-wrapper > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-page-size'
    nextbtnEle='.selected-pharmacy > .button-wrapper'
    backbtnEle='.button-wrapper > .mat-focus-indicator'
    errormessageEle="(//mat-error[@id='mat-error-0'])[1]"
    errormessageindistance='#mat-error-2'
    pharmacy3="//label[@for='mat-checkbox-3-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']";
    clickPharmacy3(){
        cy.xpath(this.pharmacy3).click();
    }

    clickZipcoderadio(){
        cy.get(this.zipcodebtn).click({force:true})
    }
    verifyZipcodeSelected() {
        cy.get(this.zipcodebtn).should('be.checked');
    }
    enterZipcode(zip){
        cy.get(this.zipele).clear().type(zip)
    }
    enterZipcodeEle(){
        cy.get(this.zipele).clear()
    }
    clickAddressradio(){
        cy.get(this.addressbtn).click({force:true})
    }
    clickZiphistoryarrow(){
        cy.get(this.Ziphistoryarrow).click()
    }
    enterAddress(address){
       cy.get(this.addressEle,{ timeout: 10000 }).type(address)
    }
    enterAddressEle(){
        cy.get(this.addressEle,{ timeout: 10000 }).click({ froce:true })
     }
    clickFindPahramcyinzipcode(){
        cy.get(this.zipfindphramacyelement).click()
    }
    clickAddressFindPhramacy(){
        cy.xpath(this.AddressfindpharmacyELe,{ timeout: 20000 }).click({ froce:true })
    }
    enterDistance(miles){
        cy.get(this.distanceele).clear().type(miles)
    }
    enterDistanceEle(){
        cy.get(this.distanceele).clear()
    }
    enterPharmacyname(nameofpharmacy){
        cy.get(this.phramcynameEle).type(nameofpharmacy)
    }
    clickNextpageBtn(){
        cy.get(this.nextpageBtnEle).click({ multiple: true })
    }
    clickLastPageBtn(){
        cy.get(this.lastpageBtnEle).click({ multiple: true })
    }
    clickPerivousPageBtn(){
        cy.get(this.periviouspageBtnEle).click({ multiple: true})
    }
    clickFirstPageBtn(){
        cy.get(this.firstpageBtnEle).scrollIntoView().click({force: true})
    }
    selectPharmacy(){
        cy.get(this.pharmacycheckBoxEle).click()
    }
    selectSecondPharmacy(){
        cy.get(this.secondpharmacyCheckEle).click()
    }
    selectThirdPharmacy(){
        cy.get(this.thirdpharmacyCheckEle).click()
    }
    selectFourthPharmacy(){
        cy.get(this.fourthpharmacyCheckele).click()
    }
    selectFifthpharmacy(){
        cy.get(this.fifthpharmacycheckEle).click()
    }
    clickGoogleBtn(){
        cy.get(this.googlemapRadioBtnEle).click()
    }
    itemPerPage(){
        cy.get(this.itemperPageEle).should('exist');
    }
    enterZipcodePharmacy(Pname){
        cy.get(this.Zipcodepharamcyele).clear().type(Pname)
    }
    clickNextBtn(){
        cy.get(this.nextbtnEle).click({force:true})
    }
    clickBackBtn(){
        cy.get(this.backbtnEle).click()
    }
    selectZiphistoryZipcode(){
        cy.get(this.selecttheziphistoryele).click()
    }

    verifyErrorMessage(expectedMsg){
        cy.xpath(this.errormessageEle).should('be.visible').and('have.text', expectedMsg);
    }
    verifyErrorMessageinDistance(expectedMsg){
        cy.get(this.errormessageindistance).should('be.visible').and('have.text', expectedMsg);
    }

    pharmacy3="//label[@for='mat-checkbox-3-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']";
    clickPharmacy3(){
    cy.xpath(this.pharmacy3).click();
    }


//end
clickFindFarmacy(){
   cy.get(this.findFarmacy).click();

}
clickfarmacyOne(){
    cy.get(this.farmacy1).click();
}
clickfarmacyTwo(){
    cy.get(this.farmacy2).click();
}
clickfarmacy3Edit(){
    cy.get(this.farmacy3Edit).click();
}
clicknextpharmacy(){
    cy.get(this.nextFarmacy).click();
}
}
export default PharmacyPage;