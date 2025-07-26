


class PlanselectionPage{
medicareAdv=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
tick=".mat-checkbox-inner-container";
medicare=".button-container > :nth-child(1) > .mat-button-wrapper";
longterm="(//span[normalize-space()='Long Term'])[1]";
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
MAsecondPlan="#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container";
backMA=".button-wrapper > :nth-child(1)";
clickSecondPlan(){
  cy.get(this.MAsecondPlan).click();
}
clickbackMA(){
  cy.get(this.backMA).click();
}

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
    humanaGoldPlusPlanClick() {
  cy.get(this.humanGoldPlus, { timeout: 10000 })
    .should('exist')
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true });
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
  cy.wait(5000);  // Wait for 2 seconds to ensure element is loaded
  cy.xpath(this.longterm).click({ force: true });
  
 // cy.xpath(this.longterm).click();
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
  cy.get(this.MedigapArrow,{timeout:5000}).should('be.visible').click();
  }

SupplementButtn='[style="text-align: center;"] > .mat-focus-indicator';
setSupplementButtn()
{
  cy.wait(5000)
  cy.get(this.SupplementButtn).click();
} 

PDPButtn="//span[normalize-space()='PDP']";
setPDPButtn(){
  cy.xpath(this.PDPButtn,{timeout:1000 }).click({ force: true });
}

MedicareAdvantageButtn="//button/span[contains (@class,'mat-button-wrapper') and normalize-space()='Medicare Advantage']";

setMedicareAdvantageButtn(){
 cy.xpath(this.MedicareAdvantageButtn,{timeout:1000 }).click({ force: true }); 
}

ProviderButtn='div[class="button-wrapper ng-star-inserted"] button:nth-child(2)';
setProviderButtn()
{
  cy.get(this.ProviderButtn).click();
}

clickProviderButton()
{
    cy.get('.ng-star-inserted > :nth-child(2) > .mat-button-wrapper')
  .should('exist')
  .should('be.visible').contains('Provider')
  .click({ force: true });

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

PlanSelectionCheckBox='.mat-checkbox-layout > .mat-checkbox-inner-container'

setPlanSelectionCheckBox(index)
{
cy.get(this.PlanSelectionCheckBox, { timeout: 10000 })
.should('be.visible')
.eq(index) .click({ force: true });


}
setPlanSelectionCheckBoxByPlanName(PlanName)
{
  //cy.contains('.mat-tooltip-trigger.header-title', 'PlanName')
 // .parentsUntil('span') // or adjust to target the correct parent
 // .find('.mat-checkbox-inner-container-no-side-margin input[type="checkbox"]')
 // .click();
 cy.xpath("//span[contains(text(), PlanName) and contains(@class, 'header-title')]/following-sibling::section//input[@type='checkbox']",{timeout:10000}).first()
 .should('be.visible')
 .click({force:true});



}

max3PlanVerifyMsg()
{
cy.on('window:confirm',(t)=>{
    expect(t).to.contains("Maximum 3 plans allowed.Remove previous plan to add new plan"); 
})
}

verifyMsg()
{
cy.on('window:confirm',(t)=>{
    expect(t).to.contains("Maximum 1 MA with/without 1 PDP or 1 PDP with 1 supplement plan are allowed");     //asretion ,user can selectonly 1 plan out of selected 3  maximum plans.
    
})
}


SelectPlanN='.mat-option-text';
setSelectPlanN()
{
cy.get(this.SelectPlanN).contains("N").wait(2000).click({force:true});
}

setSelectPlanHDG(){
 cy.get(this.SelectPlanN).contains("HDG").wait(2000).click({force:true}); 
}

FilterButton='.ng-fa-icon'
setFilterButton()
{
  cy.get(this.FilterButton,{timeout:8000}).should('be.visible').click({force:true}) 
}

filterByInsuranceCarrier(InsuranceCarrier)
{
  cy.get('.mat-select-placeholder').click()
  cy.get('div>.mat-select-panel-wrap')
  .find('div[role="listbox"]')
  .contains(InsuranceCarrier)
  .scrollIntoView({ timeout: 10000 })
  .should('be.visible')
  .click({ force: true })
      
}

ResetButton='.mat-action-row > .mat-focus-indicator';
setResetButton()
{
  cy.get(this.ResetButton).click()
}

PlanDetailsButton='.mat-button-wrapper';
setPlanDetailsButton()
{
  cy.get(this.PlanDetailsButton).contains('Plan Details').click();
}

Hospitalization='.mat-expansion-panel-body:nth-child(1)'
verifyHospitalization()
{
  cy.get(this.Hospitalization).contains("Hospitalization");  //Hospitalization validation under partA
 cy.wait(2000)
}

PartAExpandsCollapsIndicator='#mat-expansion-panel-header-1 > .mat-expansion-indicator';
setPartAExpandsCollapsIndicator()
{
  cy.get(this.PartAExpandsCollapsIndicator).click();
}

setHospitalizationClick()
{
  cy.get('.mat-content .mat-expansion-panel-header-title').contains('Hospitalization').click({force:true});
}


setPartBExpands()
{
  cy.get('.mat-content .mat-expansion-panel-header-title').contains('Part B').click(); //PartB expands
cy.wait(2000)
}
setPartBCollapse()
{
  cy.get('#mat-expansion-panel-header-2 >span.mat-expansion-indicator').should('be.visible').invoke('click');
  cy.wait(2000);
}

setPartABExpands()
{
  cy.get(".mat-content .mat-expansion-panel-header-title").contains('Parts A & B').click(); //Part A &B expands
cy.wait(2000)
}
setPartABCollapse()
{
  cy.get('#mat-expansion-panel-header-2 >span.mat-expansion-indicator').should('be.visible').invoke('click'); //Part A & B collapse
cy.wait(2000)
}

setOtherBenefitsExpands()
{
  cy.get(".mat-content .mat-expansion-panel-header-title").contains('Other Benefits').click(); //Other Benefits expands
cy.wait(2000)
}

setOtherBenefitsCollapse()
{
  cy.get("#mat-expansion-panel-header-3 > span.mat-expansion-indicator").should('be.visible').click({force:true}); //Other Benefits collapse
cy.wait(2000)
}

BackButton='.button-wrapper > .mat-focus-indicator';
setBackButton()
{
  cy.get(this.BackButton).click();
}

CancelButton='.right-container > .mat-focus-indicator > .mat-button-wrapper';
setCancelButton()
{
  cy.get(this.CancelButton).contains("Cancel").click()
}


//sneha  code  starts for Planselection PDP

pdpelement="//span[normalize-space()='PDP']"
filterplanEle='[mattooltip="Filter Plan"]'
insurancecarrierele='#mat-select-value-3 > .mat-select-placeholder'//16
Humanaplanfromfilterele='#mat-option-7 > .mat-option-text'
starratingele='#mat-select-value-5 > .mat-select-placeholder'
pickstarratingfromfilterEle='#mat-option-11 > .mat-option-text'
selectplanfromstarratingele='#mat-checkbox-62 > .mat-checkbox-layout > .mat-checkbox-inner-container'
drugcoverageele='#mat-select-6 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow'
selectfromdrugcoveragefilterele='.mat-option-text'
plandetailsEle =':nth-child(1) > .mat-card > .mat-card-actions > .mat-focus-indicator'
locationselectorele='.location'    //Assertion for location on PDP plan selection page 
remaningyearele='.info-message > span'//Assertion for remaning plan years 
inNetworkPharmaciesEle=':nth-child(1) > .mat-card > .mat-card-content > .card-contant-wrapper > :nth-child(8) > .text-explain > span'
coveragemessageEle =':nth-child(1) > .mat-card > .mat-card-content > .card-contant-wrapper > [style="color: white; background-color: green;"] > .text-explain > span'
resetbuttonele='.mat-action-row > .mat-focus-indicator'
fliterexpansionarrowele='.mat-expansion-indicator'
sortplanele='.mat-icon'    //this is beside the filter option 
sortplanarrowele='.mat-select-arrow'
pdpplanatplanselectionEle='#mat-checkbox-13 > .mat-checkbox-layout > .mat-checkbox-inner-container'//37
Lowestmonthlypremiumele='#mat-option-4 > .mat-option-text'
LowestdrugPremiumcostele='#mat-option-3 > .mat-option-text'
selectwellcareplanele="//label[@for='mat-checkbox-1-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']"
selectcignahealthEle="//label[@for='mat-checkbox-2-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']"
selecthumanabasciEle="//label[@for='mat-checkbox-3-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']"
selectaarpEle='#mat-checkbox-8 > .mat-checkbox-layout > .mat-checkbox-inner-container'//32
nextexpandBtnEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next'
lastpageBtnEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-last'
perivouspageBtnEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-previous'
firstpageBtnEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-first'
doneele="//button[@class='mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted']"
canclebtnele='.right-container > .mat-raised-button'
itemperpageEle=':nth-child(1) > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-page-size > .mat-paginator-page-size-label'
expandgruginfoEle='#mat-expansion-panel-header-1 > .mat-expansion-indicator'
expandremaningyeardrugEle='#mat-expansion-panel-header-2 > .mat-expansion-indicator'
expandtotaldrugandPeriumcost='#mat-expansion-panel-header-3 > .mat-expansion-indicator'
expandtotalmonthlydrugcost='#mat-expansion-panel-header-3'
BackBtnEle='.button-wrapper > .mat-focus-indicator > .mat-button-wrapper'

clickPdpBtn(){
 cy.xpath(this.pdpelement,{ timeout: 12000 }).click({force:true})
}
clickFilterplanBtn(){
 cy.get(this.filterplanEle).click()
}
verifyCoveragemessage(){
cy.get(this.coveragemessageEle)
.should('have.text','1 of 1 of selected drugs are covered(Refer plan details)')
}
verifyInnetworkPharmacy(){
cy.get(this.inNetworkPharmaciesEle)
.should('have.text','1 of 2 of selected pharmacies are in-network(Refer plan details)')
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
 cy.get(this.locationselectorele).should('have.text', 'Location : North Carolina');
}
verifyRemaningYears(){
  cy.get(this.remaningyearele,{ timeout: 10000 }).contains('Remaining Year: All expenses unless specified are for ');
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
 cy.xpath(this.selectwellcareplanele).click({force:true})
}
selectCignahealthCare(){
cy.xpath(this.selectcignahealthEle).click({force:true})
}
selectHumanaBasic(){
cy.xpath(this.selecthumanabasciEle).click({force:true})
}
selectPdpPlanatPlanselectionPage(){
cy.get(this.pdpplanatplanselectionEle).click()
}
selectAARP(){
cy.get(this.selectaarpEle).click({force:true})
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
 cy.get(this.itemperpageEle).should('contain','Max items')
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
 cy.xpath(this.doneele).click()
}
clickCancleBtn(){
 cy.get(this.canclebtnele).click()
}

//sneha code end 





}
export default PlanselectionPage;
