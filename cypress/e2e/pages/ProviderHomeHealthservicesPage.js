class ProviderHomeHealthservicesPage {
  homehealthservicesEle = ":nth-child(4) > .category-name";
  street_3Ele = "//input[contains(@id,'mat-input-')]";

  zipcode_3Ele = "//input[contains(@id,'mat-input-')]";
  zipsearch_3Ele = ('.mat-button-wrapper > .mat-icon');
  searchProvider_3Ele = ".display-flex > .mat-focus-indicator > .mat-button-wrapper";
  


clickhomeHealthservicesBtn(homehealthservicesname) {
  cy.get(this.homehealthservicesEle, { timeout: 5000 }).click();
}
clickStreet_3(street_3){
  cy.xpath(this.street_3Ele).eq(1).click({force: true, multiple: true});
}
enterStreet_3(street3){
  cy.xpath(this.street_3Ele).eq(1).type(street3), {timeout: 5000};
}
clickZipCode_3(zipcode_3){
  cy.xpath(this.zipcode_3Ele).eq(2).click({ force: true, multiple: true});
  cy.xpath(this.zipcode_3Ele).eq(2).clear({ force: true });
}
typeZipCode_3(zipcode_3){
  cy.xpath(this.zipcode_3Ele).eq(2).type(zipcode_3)({ force: true, multiple: true});
}
enterZipcode_3(zipcode_3){
 cy.xpath(this.zipcode_3Ele).eq(2).type(zipcode_3), ({ force: true, multiple: true});
}
clickZipSearch_3(zipsearch_3){
 cy.get(this.zipsearch_3Ele).eq(1).click(),({force: true, multiple: true});
}
clickSearchProviderBtn_3(searchProvider_3){
  cy.get(this.searchProvider_3Ele).eq(0.).click(),({ force: true, multiple: true});
}

}
export default ProviderHomeHealthservicesPage;

