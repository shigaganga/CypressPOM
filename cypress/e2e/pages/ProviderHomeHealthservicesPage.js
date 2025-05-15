class ProviderHomeHealthservicesPage {
  homehealthservicesEle = ":nth-child(4) > .category-name";
  street_3Ele = "//input[contains(@id,'mat-input-')]";

  zipcode_3Ele = "//input[contains(@id,'mat-input-')]";
  zipsearch_3Ele = "(//mat-icon[normalize-space()='search'])[1]";
  searchProvider_3Ele = ".display-flex > .mat-focus-indicator > .mat-button-wrapper";
  backButton_3Ele = ".button-wrapper > .mat-focus-indicator";
  homehealthname_3Ele = "(//input[@id='mat-input-0'])[1]";
  county_State_3Ele = "//div[contains(@class, 'mat-select-arrow ng-tns-c216-5')]"; 
  county_State_Dropdown_3Ele = "//div[contains(@class,'mat-select-arrow-wrapper ng-tns-c216-5')]";
  county_State_Dropdown_Box_3Ele = "span[class*='mat-option-text']";
  city_3Ele ="//div[contains(@class,'mat-form-field-infix ng-tns-c170-6')]";
  city_DropDown_Arrow_3Ele = "//div[contains(@class,'mat-select-arrow-wrapper ng-tns-c216-7')]";
  city_DropDown_Box_3Ele = "//span[@class='mat-option-text'][normalize-space()='CHERRY HILLS']";
  city_DropDownBox_options_3Ele = "//span[@class='mat-option-text'][normalize-space()='CHERRY HILLS']";
  provider_Filter_Button_3Ele= "//span[@class='mat-content ng-tns-c210-14']";
  overall_rating_3Ele= "(//div[@class='mat-form-field-flex ng-tns-c170-25'])[1]";
  overall_rating_dropdoen_option_3Ele= "(//span[normalize-space()='5'])[1]";
  apply_filter_3Ele= "(//button[@type='submit'])[2]";
  clear_filter_3Ele= "(//button[@type='button'])[4]";

clickhomeHealthservicesBtn(homehealthservicesname) {
  cy.get(this.homehealthservicesEle).should('be.visible'),({ force: true}, {timeout:5000});
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
 cy.xpath(this.zipsearch_3Ele).click(),({force: true, multiple: true});
}
clickZipSearch_3Blank(zipsearch_3blank){
  cy.xpath(this.zipsearch_3Ele).click(),({force: true, multiple: true});
 }
clickCountyStateDropDown_3(countystate_dropdown_3){
  cy.xpath(this.county_State_Dropdown_3Ele).click(),({force: true, multiple: true});
  
}
enterCountyStateDropDownBox_3(countystatedropdoenbox_3){
  cy.xpath(this.county_State_Dropdown_Box_3Ele).should('be.visible'),({ force: true});
  //cy.xpath(this.county_State_Dropdown_Box_3Ele).should('be."ARAPAHOE, CO"'),({ force: true, multiple: true});
}
enterCountyState_3(countystate_3){
  cy.xpath(this.county_State_3Ele).should('be.visible'),({ force: true});
  //cy.xpath(this.county_State_3Ele).contain('ARAPAHOE, CO'),({ force: true,});
}

clickCityDropDown_Arrow_3(dropdownarrow_3){
  cy.xpath(this.city_DropDown_Arrow_3Ele).click(),({force: true, multiple: true});
}

clickCityDropDown_Box_Option_3(citydropdownbox_option_3){
  cy.get(this.city_DropDownBox_options_3Ele).click(),({force: true, multiple: true});
}
enterCity_3(city_3){
  cy.xpath(this.city_3Ele).should('be.visible'),({force: true, multiple: true});
}

clickSearchProviderBtn_3(searchProvider_3){
  cy.get(this.searchProvider_3Ele).eq(0.).click(),({ force: true, multiple: true});
}
clickBackButton_3(backbutton_3){
  cy.get(this.backButton_3Ele).click(),({ force: true});
}
clickHomeHealthName_3(homehealthname_3){
  cy.xpath(this.homehealthname_3Ele).click(), ({ force: true, multiple: true});
}
enterHomeHealthName_3(homehealthname_3){
  cy.xpath(this.homehealthname_3Ele).type(homehealthname_3), ({ force: true, multiple: true});
  }
clickProviderFiltersButton_3(providersfiltersbutton_3){
  cy.xpath(this.provider_Filter_Button_3Ele).should('be.visible'), ({ force: true, multiple: true});
  cy.xpath(this.provider_Filter_Button_3Ele).click(), ({ force: true, multiple: true});
}
clickOverallRating_3(overallrating_3){
  cy.xpath(this.overall_rating_3Ele).should('be.visible'),({ force: true, multiple: true});
  cy.xpath(this.overall_rating_3Ele).click(),({ force: true, multiple: true});

}
clickOverallRatingDropdownOption_3(overallratingdropdownoption_3){
  cy.xpath(this.overall_rating_dropdoen_option_3Ele).click(),({ force: true, multiple: true});
  cy.xpath(this.overall_rating_dropdoen_option_3Ele).should('be.visible'),({ force: true, multiple: true});
}
clickApplyFilter_3(applyfilter_3){
  cy.xpath(this.apply_filter_3Ele).click(),({ force: true, multiple: true});
}
clickClearFilter_3(clearfilter_3){
  cy.xpath(this.clear_filter_3Ele).click(),({ force: true, multiple: true});
}
}

export default ProviderHomeHealthservicesPage;