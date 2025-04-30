class ProviderHospitalsPage {
  HospitalCatEle=':nth-child(2) > .category-name';
  urlEle='http://169.61.105.110/medicareAdvantage_sandbox/manage-providers';
  pageheadingEle='.fontSize20px.center-text';
 imgEle="img[src='assets/images/Aivante-logo.png']";
 userInitEle='.mat-focus-indicator.mat-menu-trigger.user-initial.mat-fab.mat-button-base.mat-accent';
 backbtnEle="div[class='button-wrapper'] button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']";
 headingEle='.heading';
 searchProvHeadEle=':nth-child(1) > .heading-text';
 userAddHeadEle='body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > mat-sidenav-container:nth-child(1) > mat-sidenav-content:nth-child(5) > app-provider:nth-child(3) > app-search-providers:nth-child(2) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > app-provider-search-form:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1)';
 hospitalNameEle='#mat-input-0';
 displayHosNameEle='[style="width: 65%;"] > .mat-tooltip-trigger';
 radiusEle='#mat-input-4';
 streetEle='mat-input-6';
 zipcodeEle='#mat-input-7';
 searchiconEle='.mat-form-field-suffix > .mat-focus-indicator';
 countyEle='#mat-select-value-5';
 cityEle='#mat-select-value-7';
 searchProvBtnEle='.display-flex > .mat-focus-indicator';
 providerDownArrowEle='#mat-expansion-panel-header-1';
 distanceEle='input#distance';
 valueMustBeErrorEle='#mat-error-1';//'#mat-error-13'
 hospitalTypeEle='#hospitalType > .mat-select-trigger > .mat-select-arrow-wrapper';
 hosTypePanelEle='#hospitalType-panel';
 hosTypeDropDownEle='.mat-option-text';
   acuteCareHospitalsEle='Acute Care Hospitals'//'#mat-option-15 > .mat-option-text';
    displayAcuteCareHosEle=':nth-child(1) > .ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(1)';
   acuteCareVeteransAdminEle=' Acute Care - Veterans Administration '//'#mat-option-16 > .mat-option-text';
    displayAcuteCareVetAdminEle=':nth-child(1) > .ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(1)';
   criticalAccessHospitalsEle=' Critical Access Hospitals ';
    displaycriticAccHosEle=':nth-child(1) > app-hospital-card.ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(1)';
   childHosEle = ' Childrens ';
    displaychildHosEle=':nth-child(1) > app-hospital-card.ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(1)';
    //displaychildHosEle='[style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(1)';
   psychiatricHospitalsEle=' Psychiatric ';
    displayPsychiatricHosEle=':nth-child(1) > app-hospital-card.ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(1)';
   acuteCareDeptEle=' Acute Care - Department of Defense ';
    displayacuteCareDeptEle='[style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(1)';
 hosTypeEle=' Hospital Type ';
 overallRatingEle='#rating_overall > .mat-select-trigger > .mat-select-arrow-wrapper';
   displayOverallRatePanelEle='.cdk-overlay-container';
   overallRatFiveEle='#mat-option-22 > .mat-option-text';
   overallRatFourEle='#mat-option-23 > .mat-option-text';
   overallRatThreeEle='#mat-option-24 > .mat-option-text';
   displayOverRateThreeEle=':nth-child(1) > app-hospital-card.ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(3)';
   overallRatTwoEle='#mat-option-25 > .mat-option-text';
   overallRatOneEle='#mat-option-26 > .mat-option-text';
 patientSurveyRatEle='#rating_patient > .mat-select-trigger > .mat-select-arrow-wrapper';
   displaypatientSurRatEle='#rating_patient-panel';
   patientSurveyRatFiveEle='#mat-option-27 > .mat-option-text';
   patientSurveyRatFourEle='#mat-option-28 > .mat-option-text';
   patientSurveyRatThreeEle='#mat-option-29 > .mat-option-text';
   patientSurveyRatTwoEle='#mat-option-30 > .mat-option-text';
   patientSurveyRatOneEle='#mat-option-31 > .mat-option-text';
 emergenyBothEle='#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle'//'span.mat-radio-label-content';
   displayEmergBothEle=':nth-child(4) > app-hospital-card.ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > [style="font-size: 14px; font-weight: 500;"]';
 emergencyYesEle='#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle';
   displayEmergYesEle=':nth-child(1) > .ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > [style="font-size: 14px; font-weight: 500;"]';
 emergencyNoEle='#mat-radio-3 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle';
   displayEmergNoEle=':nth-child(1) > app-hospital-card.ng-star-inserted > .mat-card > .mat-card-content > [style="display: flex; justify-content: space-between;"] > :nth-child(1) > [style="font-size: 14px; font-weight: 500;"]';
 clearFilterEle='form.ng-dirty > :nth-child(2) > [type="button"]';
 applyFilterEle=':nth-child(2) > [type="submit"]';
 disabledapplyfilEle='form.ng-dirty > :nth-child(2) > .mat-button-disabled';
 providerListEle='#mat-expansion-panel-header-2 > .mat-expansion-indicator';
 noproviderfoundEle='#cdk-accordion-child-2 > .mat-expansion-panel-body > .ng-star-inserted';
 disabledSearchProvBtnEle='.display-flex > .mat-focus-indicator';
clickHospitalCat()
{
  cy.get(this.HospitalCatEle).click();
}
verifyUrl()
{
  cy.url().should('eq','http://169.61.105.110/medicareAdvantage_sandbox/manage-providers');
}
getpageHeading()
{
  cy.get(this.pageheadingEle).should('have.text','Your Medicare Options');
}
getUserInitial()
{
  cy.get(this.userInitEle).should('have.text','T');
}
getBackBtn()
{
  cy.get(this.backbtnEle).should('have.text','Back');
}
getUserAddressHead()
{
  cy.get(this.userAddHeadEle).should('have.text','User Address');
}
setRadius(Radius)
{
  cy.get(this.radiusEle).clear();
  cy.get(this.radiusEle).type(Radius).should('have.value', Radius);
  cy.log('Radius value :' ,Radius);
}
setZipcode(zipcode)
{  
  cy.get(this.zipcodeEle).type(zipcode);
}
clickSearchIcon()
{
  cy.get(this.searchiconEle).click();
}
ClickSearchProv(Radius)
{
  const radiusValue = Number(Radius); 

  // Intercept the API request and modify the request body
  cy.intercept('POST', 'http://169.61.105.110:8080/NewFinancialPlanner/api/v1/searchProviders', (req) => {
      // Modify the 'searchRadiusInMiles' value in the request body
      if (req.body && req.body.searchRadiusInMiles !== undefined) {
          req.body.searchRadiusInMiles = radiusValue; // Set the new value
          console.log('Modified Request Body:', req.body); // Log the modified request body
      }
      req.continue(); // Forward the modified request to the server
  }).as('searchProviders');

  // Click the search provider button
  cy.get(this.searchProvBtnEle).click();
  cy.wait('@searchProviders', { timeout: 15000 }); 
  return cy.get('body')
  //find("span[class='ng-star-inserted']",{ timeout: 0 })
  .then(($body) => {
    const providerList = $body.find('[style="display: flex; flex-wrap: wrap;"]');
    if (providerList.length > 0) {cy.log(`Providers found: ${providerList.length}`);
    return cy.wrap(true); 
  }

   });
}
getHeading()
{
  cy.get(this.headingEle).should('have.text','Find hospitals near me');
}
clickProviderDownArrow()
{
  cy.get(this.providerDownArrowEle).click({force:true});
  cy.wait(4000);
}
setDistance(Distance)
{
  cy.get(this.distanceEle).type(Distance).blur();
}
displayError()
{
  cy.get(this.valueMustBeErrorEle).should('have.text',' Value must be at less than 25. ');
}
getHospitalType()
{
  cy.get(this.hospitalTypeEle).click();
}
setAcuteCareHospitals()
{
  cy.get(this.hosTypeDropDownEle).contains(this.acuteCareHospitalsEle).click();    
}
displayAcuteCareHos()
{
  cy.get("body").then(($body) => {
    if ($body.find("span[class='ng-star-inserted']").length) {
      cy.get("span[class='ng-star-inserted']").then(($el) => {
        const text = $el.text();
          if (text.includes('No Provider found with given search criteria.')) {
            cy.log('Assertion found: Ending the test case.');
            //throw new Error('Stopping test due to - No Provider found with given search criteria.');
            return;
          }
        });
      } else {
       
        cy.log('Providers are displayed for Acute Care Hospitals');
        cy.wait(2000);
        cy.get(this.displayAcuteCareHosEle).should('have.text','Acute Care Hospitals');
      }
    });
}
setAcuteCareVeteransAdmin()
{
  cy.get(this.hosTypeDropDownEle).contains(this.acuteCareVeteransAdminEle).click();
}
displayAcuteCareVeteransAdmin()
{
  cy.get("body").then(($body) => {
    if ($body.find("span[class='ng-star-inserted']").length) {
      cy.get("span[class='ng-star-inserted']").then(($el) => {
        const text = $el.text();
          if (text.includes('No Provider found with given search criteria.')) {
            cy.log('Stopping test due to - No Provider found with given search criteria: Ending the test case.');
          return;
          }
        });
      } else {
       
        cy.log('Providers are displayed for Acute Care Veterans Hospitals');
        cy.wait(2000);
        cy.get(this.displayAcuteCareVetAdminEle).should('have.text', 'Acute Care - Veterans Administration');
      }
    });
}
setCriticalAccessHospitals()
{
  cy.get(this.hosTypeDropDownEle).contains(this.criticalAccessHospitalsEle).click();
}   
displayCriticalAccessHos()
{
  cy.get("body").then(($body) => {
    if ($body.find("span[class='ng-star-inserted']").length) {
      cy.get("span[class='ng-star-inserted']").then(($el) => {
        const text = $el.text();
          if (text.includes('No Provider found with given search criteria.')) {
            cy.log('Assertion found: Ending the test case.');
            return;
          }
        });
      } else {
       
        cy.log('Providers are displayed for Critical Access Hospitals');
        cy.wait(2000);
        cy.get(this.displaycriticAccHosEle).should('have.text','Critical Access Hospitals');
      }
    });
}
setChildrenHospitals()
{
  cy.get(this.hosTypeDropDownEle).contains(this.childHosEle).click();
}   
displaychildHos()
{
  cy.get("body").then(($body) => {
    if ($body.find("span[class='ng-star-inserted']").length) {
      cy.get("span[class='ng-star-inserted']").then(($el) => {
        const text = $el.text();
        if (text.includes('No Provider found with given search criteria.')) {
          cy.log('Stopping test due to - No Provider found with given search criteria: Ending the test case.');
          return;
          }
        });
      } else {
       
        cy.log('Providers are displayed for Children Hospitals');
        cy.wait(2000);
        cy.get(this.displaychildHosEle).should('have.text', 'Childrens');
      }
    });
}
setPsychiatricHospitals()
{
 cy.get(this.hosTypeDropDownEle).contains(this.psychiatricHospitalsEle).click();
}
displayPsychiatricHos()
{
  cy.get("body").then(($body) => {
    if ($body.find("span[class='ng-star-inserted']").length) {
      cy.get("span[class='ng-star-inserted']").then(($el) => {
        const text = $el.text();
        if (text.includes('No Provider found with given search criteria.')) {
          cy.log('Stopping test due to - No Provider found with given search criteria: Ending the test case.');
          return;
          }
        });
      } else {
       
        cy.log('Providers are displayed for Psychiatric Hospitals');
        cy.wait(2000);
        cy.get(this.displayPsychiatricHosEle).should('have.text', 'Psychiatric');
      }
    });
    
}
setAcuteCareDept()
{
 cy.get(this.hosTypeDropDownEle).contains(this.acuteCareDeptEle).click();
}
displayAcuteCareDept()
{
  cy.get("body").then(($body) => {
    if ($body.find("span[class='ng-star-inserted']").length) {
      cy.get("span[class='ng-star-inserted']").then(($el) => {
       const text = $el.text();
        if (text.includes('No Provider found with given search criteria.')) {
          cy.log('Stopping test due to - No Provider found with given search criteria: Ending the test case.');
          return;
          }
        });
      } else {
       
        cy.log('Providers are displayed for Acute Care Department of Defense Hospitals');
        cy.wait(2000);
        cy.get(this.displayacuteCareDeptEle).should('have.text', 'Acute Care - Department of Defense');
      }
    });

}
setHosType()
{
  cy.get(this.hosTypeDropDownEle).contains(this.hosTypeEle).click();
}
displayHosType() 
{
  cy.get(this.hosTypePanelEle).should('be.visible');
}
getOverallRating()
{
  cy.get(this.overallRatingEle).click();
}
displayOverallRatePanel()
{
  cy.get(this.displayOverallRatePanelEle).should('be.visible');
}
getOverallRat(rating)
{
  cy.get(this.hosTypeDropDownEle).contains(String(rating)).parents('mat-option').click();
}
displayOverRateThree()
{
  cy.get(this.displayOverRateThreeEle).each(($card) => {
  cy.wrap($card)
      .find('svg') 
      .its('length')
      .should('be.gte', 3); 
});    
}
getPatientSurveyRating()
{
  cy.get(this.patientSurveyRatEle).click();
}
displayPatientSurRat()
{
  cy.get(this.displaypatientSurRatEle).should('be.visible');
}
getPatientSurveyRat(patientrate)
{
  cy.get(this.hosTypeDropDownEle).contains(String(patientrate)).parents('mat-option').click();
}
 
getEmergencyBoth()
{
  cy.get(this.emergenyBothEle).click({force:true});
}
displayEmergBoth()
{
  cy.get(this.displayEmergBothEle).should('be.visible').invoke('text').should('be.oneOf', ['Emergency : Yes', 'Emergency : No']);
}
getEmergencyYes()
{
  cy.get(this.emergencyYesEle).click({force:true});
}
displayEmergYes()
{
  cy.get(this.displayEmergYesEle).should('be.visible').should('have.text','Emergency : Yes');
}
getEmergencyNo()
{
  cy.get(this.emergencyNoEle).click({force:true});
}
displayEmergNo()
{
  cy.get(this.displayEmergNoEle).should('be.visible').should('have.text','Emergency : No');
}
clickClearFilter()
{
  cy.get(this.clearFilterEle).click();
}
setFiltertoDefault()
{
  cy.get('span.mat-select-placeholder').contains('Select Hospital Types');
  cy.get('span.mat-select-placeholder').contains('Select Overall Rating');
  cy.get('span.mat-select-placeholder').contains('Select Patient Survey Rating');
  cy.get('span.mat-radio-label-content').contains('Both').parents('.mat-radio-button').find('input[type="radio"]').should('be.checked');
}
clickApplyFilter()
{
  cy.get(this.applyFilterEle).click({force:true});
}
disabledapplyfilter()
{
  cy.wait(5000);
  cy.get(this.disabledapplyfilEle).should('have.class', 'mat-button-disabled');
}
clickProviderList()
{
  cy.get(this.providerListEle).click();
}
getNoProviderFound()
{
  cy.get(this.noproviderfoundEle).should('have.text',' No Provider found with given search criteria.');
}
setHospitalName(HospitalName)
{
  cy.get(this.hospitalNameEle).type(HospitalName);
  cy.wait(2000);
}
displayHosName(HospitalName)
{
  cy.get("body").then(($body) => {
    if ($body.find("span[class='ng-star-inserted']").length) {
      cy.get("span[class='ng-star-inserted']").then(($el) => {
       const text = $el.text();
        if (text.includes('No Provider found with given search criteria.')) {
          cy.log('Stopping test due to - No Provider found with given search criteria: Ending the test case.');
          return;
          }
        });
      }
    else {
    cy.get(this.displayHosNameEle)
    .invoke('text')
    .then((text) => {
     expect(text.trim()).to.equal(HospitalName);
    })
   }
  });
}
disabledSearchProvBtn()
{
  cy.get(this.disabledSearchProvBtnEle).should('have.class','mat-button-disabled');    
}  

}





export default ProviderHospitalsPage;



