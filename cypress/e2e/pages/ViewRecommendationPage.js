class ViewRecommendationPage{
  backEle="(//span[normalize-space()='Back'])[1]"  ;
  lowCostPharmacy="//span[normalize-space()='Low Cost Pharmacy']"
clickBackEle() {
  cy.xpath(this.backEle, { timeout: 10000 })       
    .should('exist')                               
    .should('be.visible')                          
    .click();
}

clickLowCostPharmacy() {
  cy.xpath(this.lowCostPharmacy, { timeout: 10000 }) // Waits for up to 10s
    .should('exist')                                 // Wait for DOM presence
    .should('be.visible')                            // Wait for UI visibility
    .click();
}
}
export default ViewRecommendationPage