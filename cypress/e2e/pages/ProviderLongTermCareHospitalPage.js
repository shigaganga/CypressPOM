class ProviderLongTermCareHospitalPage{
    userNameEle="#mat-input-0";
    passwordEle="#mat-input-1";
    loginButtonEle=".mat-button-wrapper";
    homePageHeading = ".page-heading";
    longTermCareHeading = "body > app-root > div > div.main-content > mat-sidenav-container > mat-sidenav-content > app-provider > app-search-providers > div:nth-child(2) > mat-card > div.provider-form > div";
    providerButton=".button-container > :nth-child(2) > .mat-button-wrapper";
    longTermCareCategory=":nth-child(7) > .category-name";
    LongTermCareRadius='input[formcontrolname="radius"]';
    LongTermCareHospitalName='input[formcontrolname="searchKeyword"]';
    Zipcode='input[formcontrolname="zipcode"]';
    SearchField='.mat-button-wrapper > .mat-icon';
    SearchProviderButton='.display-flex > .mat-focus-indicator > .mat-button-wrapper';
    searchProvider='Search Provider';
    ownershipTag='#ownership';
    LtcHospitalNme='mat-label';
    NumberofProviders='app-ltc-card';
    FilterExpand='#mat-expansion-panel-header-1 > .mat-content > .mat-expansion-panel-header-title';
    ApplyFilter='[style="display: flex; justify-content: flex-start; flex-wrap: wrap;"] > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix';
    Distance='#distance';
    ApplyFilterButton=':nth-child(2) > [type="submit"] > .mat-button-wrapper';
    OwnershipDropdown='mat-option .mat-option-text';
    ClearApplyFilterButton='.ng-submitted > :nth-child(2) > [type="button"] > .mat-button-wrapper';
    SelectOwnerShipDropdown='.mat-select-placeholder';
    DropdownList='#mat-option-113 > .mat-option-text';
    BackButton='.button-wrapper > .mat-focus-indicator > .mat-button-wrapper';





clickProviderPage(){
    cy.get(this.providerButton).click();
}
clickLongTermCareCategory(){
    cy.get(this.longTermCareCategory).click();
}
verifyLongTermCareCategory(){
    cy.get(this.longTermCareHeading)
    .should('be.visible')
    .and('have.text', "Find long-term care hospitals near me");
}
verifyLongTermCareRadius(radius){
    cy.get(this.LongTermCareRadius).should('have.value', '250');

}
enterZipCode(zip) {
    cy.get(this.Zipcode).clear().type(zip);
  }


wait(number){
    cy.wait(number);
}
enterRadiusin(value) {
    cy.get(this.LongTermCareRadius).clear().type(value);
  }
clickSearchField(){
    cy.get(this.SearchField).click();
} 
clickSearchProviderButton(){
    cy.get(this.SearchProviderButton).contains(this.searchProvider).should('be.visible').click();
}
checkSearchProviderButton() {
    cy.contains('button', 'Search Provider')
      .should('be.disabled');
}
verifyLongTermCareHospitalName() {
    cy.get(this.LtcHospitalNme)
      .contains('LTC hospital name(Optional)')
      .should('be.visible');
}
enterLongTermCareHospitalName(name) {
    cy.get(this.LongTermCareHospitalName)
      .clear()
      .type(name);
}
checkTheNumberOfResult(number){
    cy.get(this.NumberofProviders).should('have.length', number);
}
expandTheProviderFilters(){
    cy.get(this.FilterExpand).click();
    cy.get(this.ApplyFilter);
}
enterTheDistance(number){
    cy.get(this.Distance).clear();
    cy.get(this.Distance).type(number);
}
clickApplyFilterButton(){
    cy.get(this.ApplyFilterButton).click();

}
checkOwnershipDropdownOptions() {
    const expectedOptions = ['Non-profit','For profit' ];
  
    cy.get(this.ownershipTag).click(); // Open the dropdown
  
    cy.get(this.OwnershipDropdown) // Adjust selector if needed
      .then($options => {
        const actualOptions = [...$options].map(option => option.textContent.trim());
        expect(actualOptions).to.include.members(expectedOptions);
      });
  
    cy.get('body').click(); // Close dropdown after check (optional)
}

clearApplyFilterButton(){
    cy.get(this.ClearApplyFilterButton).click();
}
clickOwnerShipDropdown(){
    cy.get(this.SelectOwnerShipDropdown).click();
    cy.get(this.DropdownList).click();
}
clickBackButton(){
    cy.get(this.BackButton).click();
}

}

export default ProviderLongTermCareHospitalPage;
