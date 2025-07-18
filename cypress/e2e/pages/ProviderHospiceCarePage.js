class ProviderHospiceCarePage{
    providerbtn='.mat-focus-indicator mat-raised-button mat-button-base mat-primary';
  hospiceCareCategory='app-provider-types > .direction-column > :nth-child(5)';//
  hospiceCareName=':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix';
 searchProviderBtn='.display-flex > .mat-focus-indicator';
    Street='#mat-input-15';
     //zipcode='.mat-form-field.ng-tns-c170-10 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix';
     zipcode='//input[@formcontrolname="zipcode" and @maxlength="5" and @required]'

     ZipcodeSearch='.mat-button-wrapper > .mat-icon';
     County='#mat-select-value-19';
     City='#mat-select-value-21';
     providerFilter='#mat-expansion-panel-header-1 > .mat-content > .mat-expansion-panel-header-title';
    ownershipDropdown='#ownership > .mat-select-trigger';
      //other='#mat-option-113 > .mat-option-text';
      other='//span[@class="mat-option-text" and normalize-space(text())="Other"]';
    //nonprofit='#mat-option-114 > .mat-option-text';
     nonprofit='//span[@class="mat-option-text" and normalize-space(text())="Non-Profit"]';
     //forporfit='#mat-option-115 > .mat-option-text';
     forporfit='//span[@class="mat-option-text" and normalize-space(text())="For-Profit"]'
     applyFilterBtn=':nth-child(2) > [type="submit"] > .mat-button-wrapper';
     clearFilterBtn='form.ng-valid > :nth-child(2) > [type="button"] > .mat-button-wrapper';
     backButton='.button-wrapper > .mat-focus-indicator > .mat-button-wrapper';

     clickHospiceCareCategory() {
        cy.get(this.hospiceCareCategory).click();
     }
        enterHospiceCareName(name) {
          cy.get(this.hospiceCareName).type(name);
        }
  
     enterStreet(street) {
      cy.get(this.streetInput).type(street);
     }
   
   
     enterZipcode(zipcode) {
   
       cy.xpath(this.zipcode).type(zipcode); 
       
     }
     clickzipcode(){
      cy.get(this.ZipcodeSearch).click();
     }
     
   selectCounty(county) {
    cy.get(this.County).select(county);
  }
 
  selectCity(city) {
    cy.get(this.City).select(city);
  }
 
 
     clickSearchProvider() {
        cy.get(this.searchProviderBtn).click();
     }
 
     selectOwnership() {
       cy.get(this.ownershipDropdown).click();
     }
     clickproviderFilter(){
      cy.get(this.providerFilter).click();
     }
    // clickproviderFilter() {
      // cy.get(this.providerFilter, {timeout: 5000}).should('be.visible').click(); 
     //}
    // selectDropDown()

    //cy.get(this.dropDown).click();

     
     selectother(){
      cy.xpath(this.other).click();
     }
     selecnonprofit(){
       cy.xpath(this.nonprofit,{timeout:5000}).should('be.visible').click();
    }
     selectforprofit(){
      cy.xpath(this.forporfit,{timeout:5000}).should('be.visible').click();
     }
     clickApplyFilter() {
        cy.get(this.applyFilterBtn).click();
     }
 
     clickClearFilter() {
        cy.get(this.clearFilterBtn).click();
     }
 
     clickBackButton() {
         cy.get(this.backButton).click();
     }
    
 }
 export default ProviderHospiceCarePage;
 
    