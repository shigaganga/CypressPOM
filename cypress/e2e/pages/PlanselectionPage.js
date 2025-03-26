class planselectionPage{
    medicareAdv=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
        tick=".mat-checkbox-inner-container";
        medicare=".button-container > :nth-child(1) > .mat-button-wrapper";
     // longterm=".button-container > :nth-child(2) > .mat-button-wrapper";
       longterm="(//span[normalize-space()='Long Term'])[1]"
       AivanteImg="img";
       prescriptionbtn="div[class='button-wrapper ng-star-inserted'] button:nth-child(1) span:nth-child(1)";
       WellcareSimple="#mat-checkbox-28 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       done=".button-container > .mat-focus-indicator > .mat-button-wrapper";
       humanaGold="#mat-checkbox-53 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    humanaGoldFirstplan="#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container"
       humanGoldPlus="#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container"
       pdp='.selected-container > :nth-child(1) > .mat-focus-indicator';
       wellcareValueScriptPdp="#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       donePdp='.button-container > .mat-focus-indicator > .mat-button-wrapper';
       aetenaMedicarePremier="#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container";
       wellcaregiveback="#mat-checkbox-29 > .mat-checkbox-layout > .mat-checkbox-inner-container";



       planWellCaresimpleClick(){
           cy.get(this.WellcareSimple).click();
       }
       humanaGoldPlanClick(){
           cy.get(this.humanaGold).click();
       }
       donePlanSelectionClick(){
           cy.get(this.done).click();
       }
       humanaGoldPlusPlanClick(){
           cy.get(this.humanGoldPlus).click();
       }
       pdpClick(){
           cy.get(this.pdp).click();
       }
       wellcareValuScriptClick(){
           cy.get(this.wellcareValueScriptPdp).click();
       }
       donePdpClick(){
           cy.get(this.donePdp).click();
       }
       aetenaMedicarePremierClick(){
           cy.get(this.aetenaMedicarePremier).click({ force: true });
       }
       wellcaregivebackclick(){
           cy.get(this.wellcaregiveback).scrollIntoView().click({ force: true });
       }
       
       medicareAdvantageClick(){
        cy.get(this.medicareAdv).click();
       }
       tickClick(){
        cy.get(this.tick).click();
       }
       medicareclick(){
        cy.get(this.medicare).click();
       }
longtermClick(){
    //cy.get(this.longterm).should('be.visible').click( { force: true});
    cy.xpath(this.longterm).should('be.visible').click( { force: true});
}
aivanteImagClick(){
    cy.get(this.AivanteImg).click();
}
prescriptionClick(){
    cy.rightclick(this.prescriptionbtn).click();
}
//Rani Suppliment page elements
MedigapArrow='div.mat-select-arrow-wrapper';
    setMedigapArrow()
    {
    cy.wait(2000)    
    cy.get(this.MedigapArrow).should('be.visible').click();
    }

  SupplementButtn='[style="text-align: center;"] > .mat-focus-indicator';
  setSupplementButtn()
  {
    cy.wait(5000)
    cy.get(this.SupplementButtn).click();
  } 

  ProviderButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(2)';
  setProviderButtn()
  {
    cy.get(this.ProviderButtn).click();
  }
  ProfileButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(1)';
  setProfileButtn()
  {
    cy.get(this.ProfileButtn).click();
  }
  PrescriptionButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(3)';
  setPrescriptionButtn()
  {
    cy.get(this.PrescriptionButtn).click();
  }
  PharmacyButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(4)';
  setPharmacyButtn()
  {
    cy.get(this.PharmacyButtn).click();

  }


  //sneha  code  starts for Planselection PDP

  pdpelement='.selected-container > :nth-child(1) > .mat-focus-indicator'
  filterplanEle='[mattooltip="Filter Plan"]'
  insurancecarrierele='#mat-select-16 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow'
  Humanaplanfromfilterele='#mat-option-27 > .mat-option-text'
  starratingele='#mat-select-18 > .mat-select-trigger > .mat-select-arrow-wrapper'
  pickstarratingfromfilterEle='#mat-option-30 > .mat-option-text'
  selectplanfromstarratingele='#mat-checkbox-62 > .mat-checkbox-layout > .mat-checkbox-inner-container'
  drugcoverageele='#mat-select-20 > .mat-select-trigger > .mat-select-arrow-wrapper'
  selectfromdrugcoveragefilterele='.mat-option-text'
  plandetailsEle =':nth-child(1) > .mat-card > .mat-card-actions > .mat-focus-indicator'
  locationselectorele='.location'    //Assertion for location on PDP plan selection page 
  remaningyearele='.info-message > span' //Assertion for remaning plan years 
  inNetworkPharmaciesEle=':nth-child(1) > .mat-card > .mat-card-content > .card-contant-wrapper > :nth-child(8) > .text-explain > span'
  coveragemessageEle =':nth-child(1) > .mat-card > .mat-card-content > .card-contant-wrapper > [style="color: white; background-color: red;"] > .text-explain > span'
  resetbuttonele='.mat-action-row > .mat-focus-indicator'
  fliterexpansionarrowele='.mat-expansion-indicator'
  sortplanele='.mat-icon'    //this is beside the filter option 
  sortplanarrowele='.mat-select-arrow'
  pdpplanatplanselectionEle='#mat-checkbox-37 > .mat-checkbox-layout > .mat-checkbox-inner-container'
  Lowestmonthlypremiumele='#mat-option-24 > .mat-option-text'
  LowestdrugPremiumcostele='#mat-option-23 > .mat-option-text'
  selectwellcareplanele='#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container'
  selectcignahealthEle='#mat-checkbox-26 > .mat-checkbox-layout > .mat-checkbox-inner-container'
  selecthumanabasciEle='#mat-checkbox-27 > .mat-checkbox-layout > .mat-checkbox-inner-container'
  selectaarpEle='#mat-checkbox-32 > .mat-checkbox-layout > .mat-checkbox-inner-container'
  nextexpandBtnEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next'
  lastpageBtnEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-last'
  perivouspageBtnEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-previous'
  firstpageBtnEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-first'
  doneele='.button-container > .mat-focus-indicator'
  canclebtnele='.right-container > .mat-raised-button'
  itemperpageEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-page-size > .mat-paginator-page-size-label'
  expandgruginfoEle='#mat-expansion-panel-header-1 > .mat-expansion-indicator'
  expandremaningyeardrugEle='#mat-expansion-panel-header-2 > .mat-expansion-indicator'
  expandtotaldrugandPeriumcost='#mat-expansion-panel-header-3 > .mat-expansion-indicator'
  expandtotalmonthlydrugcost='#mat-expansion-panel-header-4 > .mat-expansion-indicator'
  BackBtnEle='.button-wrapper > .mat-focus-indicator > .mat-button-wrapper'

clickPdpBtn(){
   cy.get(this.pdpelement).click({force:true})
 }
clickFilterplanBtn(){
   cy.get(this.filterplanEle).click()
}
verifyCoveragemessage(){
  cy.get(this.coveragemessageEle)
  .should('have.text','0 of 1 of selected drugs are covered(Refer plan details)')
}
verifyInnetworkPharmacy(){
  cy.get(this.inNetworkPharmaciesEle)
  .should('have.text','2 of 2 of selected pharmacies are in-network(Refer plan details)')
}
clickPlandetailsBtn(){
  cy.get(this.plandetailsEle).click()
}
clickInsuranceCarrierArrow(){
   cy.get(this.insurancecarrierele).click()
}
selectHumanaPlanfrominsurancefilter(){
   cy.get(this.Humanaplanfromfilterele).click()
}
clickStarRatingFilter(){
   cy.get(this.starratingele).click()
}
selectStarRating(){
   cy.get(this.pickstarratingfromfilterEle).click()
}
checkPlanfromstarrating(){
   cy.get(this.selectplanfromstarratingele).click()
}
clickDrugCoverage(){
   cy.get(this.drugcoverageele).click()
}
SelectDrugCoveragefromfilter(){
   cy.get(this.selectfromdrugcoveragefilterele).click()
}
verifyLocationSelector(){
   cy.get(this.locationselectorele).should('have.text', 'Location : Colorado');
}
verifyRemaningYears(){
   cy.get(this.remaningyearele).should('have.text', 'Remaining Year: All expenses unless specified are for 9 months of 2025');
}
clickResetBtn(){
   cy.get(this.resetbuttonele).click()
}
clickFliterexpansion(){
   cy.get(this.fliterexpansionarrowele).click()
}
clickSortPlan(){
   cy.get(this.sortplanele).click()
}
clickSortplanArrow(){
   cy.get(this.sortplanarrowele).click()
}
selectLowestPremium(){
cy.get(this.Lowestmonthlypremiumele).click()
}
selectLowestdrugPremium(){
   cy.get(this.LowestdrugPremiumcostele).click()
}
selectWellcarePlan(){
   cy.get(this.selectwellcareplanele).click()
}
selectCignahealthCare(){
  cy.get(this.selectcignahealthEle).click()
}
selectHumanaBasic(){
  cy.get(this.selecthumanabasciEle).click()
}
selectPdpPlanatPlanselectionPage(){
  cy.get(this.pdpplanatplanselectionEle).click()
}
selectAARP(){
  cy.get(this.selectaarpEle).click()
}
selectNextExpandBtn(){
   cy.get(this.nextexpandBtnEle).click()
}
clickLastPageBtn(){
   cy.get(this.lastpageBtnEle).click()
}
clickPerivousPageBtn(){
   cy.get(this.perivouspageBtnEle).click()
}
clickFirstPageBtn(){
   cy.get(this.firstpageBtnEle).click()
}
itemPerPage(){
   cy.get(this.itemperpageEle).should('contain','Items per page:')
}
clickExpandDrugInfo(){
   cy.get(this.expandgruginfoEle).click()
}
clickRemaningDrugYear(){
   cy.get(this.expandremaningyeardrugEle).click()
}
clickTotaldrugPeriumcost(){
   cy.get(this.expandtotaldrugandPeriumcost).click()
}
expandTotalMonthlyDrugcost(){
   cy.get(this.expandtotalmonthlydrugcost).click()
}
clickBackBtn(){
   cy.get(this.BackBtnEle).click()
}
clickDoneBtn(){
   cy.get(this.doneele).click()
}
clickCancleBtn(){
   cy.get(this.canclebtnele).click()
}

//sneha code end 



 








}
export default planselectionPage;