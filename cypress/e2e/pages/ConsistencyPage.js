

class Consistency{
ExpandRecommPlan="//td[normalize-space()='Shiga@gmail.com']";   
PlanSelectCheckbox='.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin';
//medicare page
ABDGTotalExpences='.total-container > :nth-child(2) > :nth-child(1) > :nth-child(2)';
PVasOfYear="//div[@class='total-container']/div[1]/span/label[2]";
LifeTimeTotalExpences='.mat-row > .cdk-column-lifetimeTotalExpense';
LifeExpectancy="//div[contains(@class, 'details-container')]/*[7]/span/label";
HealthProfile="//div[contains(@class, 'details-container')]/*[2]/span/label";
TaxFilingStatus="//div[contains(@class,'details-container')]/*[9]/span/label";
//longterm page
LongTermTotalPresentValueExpenses=".total-cost > :nth-child(1)";
AdultDayCarePresentValue="//tbody/tr[3]/td[contains(@class, 'cdk-column-adultdaycare')]";
InHomeCarePresentValue="//tbody/tr[3]/td[contains(@class, 'cdk-column-inhomecare')]";
NursingCarePresentValue="//tbody/tr[3]/td[contains(@class, 'cdk-column-nursingcare')]";

LongTermTotalFutureValueExpenses=".total-cost > :nth-child(2)";
AdultDayCareFutureValue="//tbody/tr[2]/td[contains(@class, 'cdk-column-adultdaycare')]";
InHomeCareFutureValue="//tbody/tr[2]/td[contains(@class, 'cdk-column-inhomecare')]";
NursingCareFutureValue="//tbody/tr[2]/td[contains(@class, 'cdk-column-nursingcare')]";

LTCHealthProfile="//div[contains(@class,'personal-info')]/*[2]/span/label";
LTCLifeExpectancy="//div[contains(@class,'personal-info')]/*[3]/span/label";

AivanteLogo="//div[@class='logo']//img[@src='assets/images/Aivante-logo.png']";

//view page
MedicareBtn="//span[@class='mat-button-wrapper' and normalize-space()='Medicare']";
LongTermBtn="//span[@class='mat-button-wrapper' and normalize-space()='Long Term']";
HealthCareExpense="//div[@class='label' and normalize-space()='Health Care']/following-sibling::div[2]";
HealthCarePresentValue="//div[@class='label' and normalize-space()='Health Care']/following-sibling::div[3]";
LongtermCareExpenseViewPage="//div[@class='label' and normalize-space()='Longterm Care']/following-sibling::div[2]";
LongtermCarePresentValueViewPage="//div[@class='label' and normalize-space()='Longterm Care']/following-sibling::div[3]";
setPlanSelectCheckboxFirst(){
    cy.get(this.PlanSelectCheckbox).first().click({force:true});
};
setPlanSelectCheckboxSecond(){
    cy.get(this.PlanSelectCheckbox).eq(1).click({force:true});
};
setPlanSelectCheckboxMA(){
   cy.get(this.PlanSelectCheckbox).click({force:true}); 
}


//ABD+GTotalExpences='.total-container > :nth-child(2) > :nth-child(1) > :nth-child(2)';
setABDGTotalExpences() {
  return cy.get(this.ABDGTotalExpences)
    .invoke('text')
    .then((text) => {
      return text.trim();
    });
}

setPVasOfYear(){
    return cy.xpath(this.PVasOfYear)
    .invoke('text')
    .then((text)=>{
        return text.trim();
    })
}

setLifeTimeTotalExpences() {
  return cy.get(this.LifeTimeTotalExpences)
    .invoke('text')
    .then((text) => {
      return text.trim();
    });
}

setLifeExpectancy(){
 return cy.xpath(this.LifeExpectancy) 
 .invoke ('text')
 .then((text)=>{
  return text.trim();  
 }) 
}

setHealthProfile(){
    return cy.xpath(this.HealthProfile)
    .invoke('text')
    .then((text)=>{
        return text.trim();
    })
}

setTaxFilingStatus(){
    return cy.xpath(this.TaxFilingStatus)
    .invoke('text')
    .then((text)=>{
        return text.trim();
    })
}

setLongTermTotalPresentValueExpenses(){
    return cy.get(this.LongTermTotalPresentValueExpenses)
    .invoke('text')
    .then((text)=>{
        return text.split(':')[1].trim();
    })
}

setAdultDayCarePresentValue(){
    return cy.xpath(this.AdultDayCarePresentValue)
    .invoke('text')
    .then((text)=>{
    return text.split('$')[1].trim();    
    })
};

setInHomeCarePresentValue(){
    return cy.xpath(this.InHomeCarePresentValue)
    .invoke('text')
    .then((text)=>{
    return text.split('$')[1].trim();    
    });

}

setNursingCarePresentValue(){
    return cy.xpath(this.NursingCarePresentValue)
    .invoke('text')
    .then((text)=>{
    return text.split('$')[1].trim();
})
}

setLongTermTotalFutureValueExpenses(){
    return cy.get(this.LongTermTotalFutureValueExpenses)
    .invoke('text')
    .then((text)=>{
        return text.split(':')[1].trim();
    })
}

setAdultDayCareFutureValue(){
    return cy.xpath(this.AdultDayCareFutureValue)
    .invoke('text')
    .then((text)=>{
    const parts = text.split('$');
      if (parts.length < 2) {
        throw new Error(`Expected a '$' in text but got: "${text}"`);
      }
      return parts[1].trim();    
    })
};

setInHomeCareFutureValue(){
    return cy.xpath(this.InHomeCareFutureValue)
    .invoke('text')
    .then((text)=>{
    const parts = text.split('$');
      if (parts.length < 2) {
        throw new Error(`Expected a '$' in text but got: "${text}"`);
      }
      return parts[1].trim();   
    });

}

setNursingCareFutureValue(){
    return cy.xpath(this.NursingCareFutureValue)
    .invoke('text')
    .then((text)=>{
    const parts = text.split('$');
      if (parts.length < 2) {
        throw new Error(`Expected a '$' in text but got: "${text}"`);
      }
      return parts[1].trim();
})
}


setLTCHealthProfile(){
return cy.xpath(this.LTCHealthProfile)
.invoke('text')
.then((text)=>{
    return text.trim();
})
}

setLTCLifeExpectancy(){
    return cy.xpath(this.LTCLifeExpectancy)
    .invoke('text')
    .then((text)=>{
        return text.trim();
    })
}

setMedicareBtn(){
    cy.xpath(this.MedicareBtn).click({force:true});
};

setLongTermBtn(){
    cy.xpath(this.LongTermBtn).click({force:true});
}

setHealthCareExpense(){
    return cy.xpath(this.HealthCareExpense)
    .invoke('text')
    .then((text)=>{
        return text.trim();
    })
}

setHealthCarePresentValue(){
    return cy.xpath(this.HealthCarePresentValue)
    .invoke('text')
    .then((text)=>{
        return text.trim();
    })
}

setAivanteLogo(){
    cy.xpath(this.AivanteLogo).should('be.visible').click({force:true});
}


setLongtermCareExpenseViewPage(){
    return cy.xpath(this.LongtermCareExpenseViewPage)
    .invoke('text')
    .then((text)=>{
        return text.trim();
    })
}


setLongtermCarePresentValueViewPage(){
    return cy.xpath(this.LongtermCarePresentValueViewPage)
    .invoke('text')
    .then((text)=>{
        return text.trim();
    })
}

}

export default Consistency;
