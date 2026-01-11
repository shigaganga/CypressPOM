class MedicarePage {

    medicareArrow=".mat-expansion-indicator";
    submitMedicare=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
    backToPlanSelection=".button-wrapper > :nth-child(1) > .mat-button-wrapper";
    aivanteimg="img[src='assets/images/Aivante-logo.png']";
    
    medicarArrowClick(){
        cy.get(this.medicareArrow).click();
    }
    submitMedicareClick(){
        cy.get(this.submitMedicare).should("be.visible").click({force:true});
    }
    backToplanSelectionClick(){
        cy.get(this.backToPlanSelection).click();
    }
    aivanteImgClick(){
        cy.get(this.aivanteimg).click();
    }

    //clickmedicareEle=".button-container > :nth-child(1) > .mat-button-wrapper";
    clickmedicareEle="//span[text()='Medicare']"
    clickbackEle=".button-wrapper > :nth-child(1)";

    generatepdfEle="//span[normalize-space()='Generate PDF']"  //xpath
    aivanteimgEle="img[src='assets/images/Aivante-logo.png']";

    pagetitleEle=('.fontSize20px');
    rightdrawerbtnEle=('.rightDrawer > .mat-focus-indicator > .mat-button-wrapper > span');
    expansionEle=('.mat-expansion-indicator');
    disableddlEle=('.mat-select');

    purchasepartAtoggEle=('#mat-slide-toggle-1');
    purchasepartAtogglabelEle=('#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-content'); 

    clickMAbtnEle=(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper');
    wellcaresimpleopenppoChck=('#mat-checkbox-26 > .mat-checkbox-layout > .mat-checkbox-inner-container')
    // wellcaresimpleopenppoChck =("label[for='mat-checkbox-26-input'] span[class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']");
    // wellcaresimpleopenppoChck= "//span[normalize-space()='Wellcare Simple Open (PPO)']/following-sibling::section/mat-checkbox";
    planselectdoneEle=("button[class='mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted'] span[class='mat-button-wrapper']");
    selectplanchkboxEle=('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin');

    //edit recommendation and check the plan details from Medicare screen.
    filterbyemailorrecnameEle="//input[contains(@id,'mat-input')]";
    //click on edit recommendation icon
    clickeditRecommendationEle= "//tr[@class='mat-row cdk-row highlight ng-star-inserted']//mat-icon[@role='img'][normalize-space()='border_color']";
    //click next button of profile details screen
    clicknextEle="//span[normalize-space()='Next']";
    // click next button of preferences details screen
    clicknoprefEle="//label[@for='mat-radio-48-input']//span[@class='mat-radio-outer-circle']";
    clickyesprefEle="//label[@for='mat-radio-20-input']//span[@class='mat-radio-inner-circle']";
    clicknextprefEle="//span[normalize-space()='Next']";
    clickadddrugdoneEle="//span[normalize-space()='Done Adding Drugs']";
    clickpharcheckbxEle="//label[@for='mat-checkbox-2-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']";
    clickpharnextbtnEle="//span[normalize-space()='Next']"; 
    //click MAbtn
    clickmabuttonEle="//span[normalize-space()='Medicare Advantage']";
    wellcaresimpleEle= "//*[@id='mat-checkbox-15']/label/span[1]";
    
    clickdonemaEle="//span[normalize-space()='Done']";
    selectchkbxmaEle="//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']";
    selectchkbxmaEle="('#mat-checkbox-15 > .mat-checkbox-layout > .mat-checkbox-inner-container')";
   
    //clickmedicaremaEle="//span[normalize-space()='Medicare']";
    clickmedicarebuttonele="//*[@id='unified-runner']";
    clickExpheaderEle='//*[contains(@id, "mat-expansion-panel-header")]/span[1]'
    purchasepartA='//mat-slide-toggle[@id="mat-slide-toggle-3"]//div[contains(@class, "mat-slide-toggle-bar")]';
    select30lifetimereservedaysEle="//*[@id='mat-select-value-35']";
    lrdarrowclickEle="(//*[contains(@id, 'mat-select')])[1]";
    dropDownEle = "//mat-option/span[normalize-space(text())='30']";
    lrdsubmitbtnEle="//*[@id='cdk-accordion-child-0']//button/span[contains(text(), 'Submit')]"

    // View a plan and check for the Medicare details
    clickrecviewarrowEle="//mat-icon[normalize-space()='keyboard_arrow_down']";
    //clickrecviewarrowEle="//tbody/tr[1]/td[1]/button[1]/span[1]/mat-icon[1]";  //also correct
    
    clickviewrecommendationEle= "//tr[@class='mat-row cdk-row highlight ng-star-inserted']//mat-icon[@role='img'][normalize-space()='remove_red_eye']";
    clickmedicarebtnEle="//span[normalize-space()='Medicare']";
    
    //assertions related to premium and OOP
    TotalPremiumEle=(':nth-child(1) > .legend-text');
    TotalsurchargeEle=(':nth-child(2) > .legend-text');
    TotalOOPEle=(':nth-child(3) > .legend-text');

    //assertions related to PV and AB+MA and IRMA
    //  PVasofyearEle=('.total-container > .ng-star-inserted > :nth-child(1)');
    PVasofyearEle = "//label[normalize-space()='PV as of year 2025:']";
    //  ABandMAtotalexpEle=('.total-container > :nth-child(2) > :nth-child(1)');
    ABandMAtotalexpEle="//label[normalize-space()='AB + MA Total Expenses:']"
    //  IRMAEle=('.total-container > :nth-child(3) > :nth-child(1)');
    IRMAEle="//label[normalize-space()='Total IRMAA Surcharge:']"

    //assertions
    AgeEle=('.details-container > :nth-child(1) > span');
    HealthProfileEle=('.details-container > :nth-child(2) > span');
    plantypeEle=('.details-container > :nth-child(3) > span');
    RetirementageEle=('.details-container > :nth-child(4) > span');
    RetirementyearEle=(':nth-child(5) > span');
    IncomeduringmedicareEle=('.details-container > :nth-child(6) > span');
    LifeexpectancyEle=(':nth-child(7) > span');
    MedicareeligibleyearEle=(':nth-child(8) > span');
    TaxfilingstatusEle=(':nth-child(9) > span');

    // Consistency Test - MA Plan
    longTermBtn = (':nth-child(4) > .mat-button-wrapper');
    totalCTE_up= "td[class='mat-cell cdk-cell cdk-column-lifetimeConciergeCharge mat-column-lifetimeConciergeCharge ng-star-inserted']"
    totalCTE_down= "body app-root div[class='total-container'] div div span[class='ng-star-inserted'] label:nth-child(2)"

    AB_MA_Concierge_Total_Expenses_up = "td[class='mat-cell cdk-cell cdk-column-lifetimeTotalExpense mat-column-lifetimeTotalExpense ng-star-inserted']";    
    AB_MA_Concierge_Total_Expenses_down="//label[normalize-space()='AB + MA + Concierge Total Expenses:']/following-sibling::label"

    IsTotalCTEAmntsEqual() {
        let totalUp, totalDown;
        cy.wait(2000);
        // Get first value
        cy.get(this.totalCTE_up).invoke('text').then((text1) => {
          totalUp = text1.trim();
      
          // Get second value
          cy.get(this.totalCTE_down).invoke('text').then((text2) => {
            totalDown = text2.trim();
      
            // Compare both
            expect(totalUp).to.eq(totalDown);
          });
        });
    }

    IsTotal_AB_MA_CTE_AmntsEqual() {
        let totalUp, totalDown;
        cy.wait(2000);
        // Get first value
        cy.get(this.AB_MA_Concierge_Total_Expenses_up).invoke('text').then((text1) => {
          totalUp = text1.trim();
      
          // Get second value
          cy.xpath(this. AB_MA_Concierge_Total_Expenses_down).invoke('text').then((text2) => {
            totalDown = text2.trim();
      
            // Compare both
            expect(totalUp).to.eq(totalDown);
          });
        });
    }

    age="//div[@class='details-container']//div[1]//span[1]/label";
    retirementage="//div[@class='details-container']//div[4]//span[1]/label";
    lifeexpectancy="//div[@class='details-container']//div[7]//span[1]/label";
    healthprofile="//div[@class='details-container']//div[2]//span[1]/label";
    plantype="//div[@class='details-container']//div[3]//span[1]/label";
    retirementyear="//div[@class='details-container']//div[5]//span[1]/label";
    incomeduringmedicare="//div[@class='details-container']//div[6]//span[1]/label";
    medicareeligibleyear="//div[@class='details-container']//div[8]//span[1]/label";
    taxfilingstatus="//div[@class='details-container']//div[9]//span[1]/label";

    profiledetails(){
        cy.xpath(this.age).invoke('text').then((text1) => {
           const actualAge = parseInt(text1.trim(), 10);          
           expect(actualAge).to.be.greaterThan(65);
        })

        cy.xpath(this.retirementage).invoke('text').then((text1) => {
            const actualRetirementAge = parseInt(text1.trim(), 10);            
           expect(actualRetirementAge).to.eq(65)
        })
        cy.xpath(this.lifeexpectancy).invoke('text').then((text1) => {
           const actual = parseInt(text1.trim(), 10);
            expect(actual).to.be.greaterThan(65);
        })

        cy.xpath(this.healthprofile).invoke('text').then((text1) => {
            expect(text1.trim()).to.eq('Moderate Health');
            //expect(text1.trim()).to.eq(testdata.HealthProfile); //healthprofile is column name from csv file
        })
        cy.xpath(this.plantype).invoke('text').then((text1) => {
            expect(text1.trim()).to.eq('Medicare Advantage (MA)');
        //expect(text1.trim()).to.eq(testdata.plantype); //healthprofile is column name from csv file
        })
        cy.xpath(this.taxfilingstatus).invoke('text').then((text1) => {
            expect(text1.trim()).to.eq('Jointly');
        }) 
    }

    longterm = '.button-container > :nth-child(2) > .mat-button-wrapper';

    clicklongtermbtn(){
        cy.get(this.longterm, {timeout:10000}).click({force:true});
        cy.wait(3000);
    }

    presentValuesup = "//td[normalize-space()='Present Value']/following-sibling::td";
    presentValuedown = "//span[contains(text(),'Total Present Value Expenses')]";
    futureValuesup = "//td[normalize-space()='Future Value']/following-sibling::td";
    futureValuedown = "//span[contains(text(),'Total Future Value Expenses')]";

    getPresentValueFromDown() {
        // Return Cypress chain
        return cy.xpath(this.presentValuedown)
          .invoke('text')
          .then((text) => {
            const num = Number(text.replace(/[^0-9.]/g, ""));
            // cy.log("Present Value Down = " + num);
            return num;   // ✅ yield number to Cypress chain
          });
    } 

    getPresentValuesTotals() {
        return cy.xpath(this.presentValuesup)
          .then(($cells) => {
            const nums = Cypress._.map($cells, (cell) => {
              const text = Cypress.$(cell).text().trim();
              const num = parseFloat(text.replace(/[$,]/g, ""));
              return isNaN(num) ? 0 : num; // fallback if text is not a number
            });
            const sum = nums.reduce((acc, val) => acc + val, 0); // sum arra           
            return sum; 
          });
    }

    getFutureValueFromDown() {
        // Return Cypress chain
        return cy.xpath(this.futureValuedown)
          .invoke('text')
          .then((text) => {
                const num = Number(text.replace(/[^0-9.]/g, ""));
                // cy.log("Present Value Down = " + num);
                return num;   // ✅ yield number to Cypress chain
           });
    } 

    getFutureValuesTotals(){
        return cy.xpath(this.futureValuesup)
          .then(($cells) => {
            const nums = Cypress._.map($cells, (cell) => {
              const text = Cypress.$(cell).text().trim();
              const num = parseFloat(text.replace(/[$,]/g, ""));
              return isNaN(num) ? 0 : num; // fallback if text is not a number
            });
            const sum = nums.reduce((acc, val) => acc + val, 0); // sum array
            // cy.log("Total Sum: " + sum);
            return sum;          
        });        
    }

    longtrmcareage= "//div[@class='personal-info']//div[1]//span[1]/label";
    longtrmcarehealth="//label[normalize-space()='Moderate Health']";
    longtrmcarelifexpectancy="//span[contains(text(),'Life Expectancy')]/label";
    longtrmcareretirementage="//span[contains(text(),'Retirement Age')]/label";
    longtrmcareretirementyear= "//span[contains(text(),'Retirement Year')]/label";

    longtrmcareprofiledetails(){
        cy.xpath(this.longtrmcareage).invoke('text').then((text1) => {
            const actualAge = parseInt(text1.trim(), 10);          
            expect(actualAge).to.be.greaterThan(65);
        })

        cy.xpath(this.longtrmcarehealth).invoke('text').then((text1) => {
            expect(text1.trim()).to.eq('Moderate Health');
        })

        cy.xpath(this.longtrmcareretirementage).invoke('text').then((text1) => {
            const actualRetirementAge = parseInt(text1.trim(), 10);            
            expect(actualRetirementAge).to.eq(65)
        })
        cy.xpath(this.longtrmcarelifexpectancy).invoke('text').then((text1) => {
            const actual = parseInt(text1.trim(), 10);
            expect(actual).to.be.greaterThan(65);
        })
    }

    healtCareAmtFrom_View_exp="//div[text()='Health Care']/following-sibling::div[2]"
    healtCareAmtFrom_View_pv="//div[text()='Health Care']/following-sibling::div[3]"
    longTermCare_View_exp="//div[text()='Longterm Care']/following-sibling::div[2]"
    longTermCare_View_pv="//div[text()='Longterm Care']/following-sibling::div[3]"
    totalExpenses = "//label[contains(text(),'Concierge Total Expenses')]/following-sibling::label";
    // totalExpenses=('.mat-row > .cdk-column-lifetimeTotalExpense');
    pvAsOfYear = "//label[contains(text(),'PV as of year')]/following-sibling::label";
    lt_totalExpenses = "//span[contains(text(),'Total Present Value Expenses')]";
    lt_total_futureValue = "//span[contains(text(),'Total Future Value Expenses')]";

    verifyLongtermCareNA() {                
        cy.xpath(this.longTermCare_View_exp).should('contain.text','NA');
        cy.xpath(this.longTermCare_View_pv).should('contain.text','NA');
    } 

    viewLongtermCareNA() {
        return cy.xpath(this.healtCareAmtFrom_View_pv)
          .invoke('text')
          .then((text) => {
                const num = Number(text.replace(/[^0-9.]/g, ""));
                return num;  
           });
    } 

    getLongTermPresentValueExpensesAmt() {
        return cy.xpath(this.lt_totalExpenses)
          .invoke('text')
          .then((text) => {
                const num = Number(text.replace(/[^0-9.]/g, ""));
                return num;  
           });
    } 

    getLongTermFutureValueExpensesAmt() {
        return cy.xpath(this.lt_total_futureValue)
          .invoke('text')
          .then((text) => {
                const num = Number(text.replace(/[^0-9.]/g, ""));
                return num; 
           });
    } 

    getTotalExpensesAmt() {       
        return cy.xpath(this.totalExpenses,{timeout:3000})
          .invoke('text')
          .then((text) => {
                const num = Number(text.replace(/[^0-9.]/g, ""));
                return num;  
           });
    } 

    getPvAsOfYearAmt() { 
        return cy.xpath(this.pvAsOfYear)
            .invoke('text')
            .then((text) => {
                const num = Number(text.replace(/[^0-9.]/g, ""));
                return num
            });
    }

    searchRecommendationAndView(email){
        cy.log("email in method="+email);
        cy.xpath(this.filterbyemailorrecnameEle, { timeout: 50000 }).click().type(email);
        cy.wait(3000)
        cy.xpath(this.clickviewrecommendationEle, { timeout: 50000 }).click({ multiple: true });
        cy.wait(5000)
        cy.xpath(this.clickmedicarebtnEle, { timeout: 50000 }).should('be.visible');
    }

 
    // Consistency Test - PDP and Suppliment plan G

    cignaHealthCareSaverPlan = ('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container')
    // cignaHealthCareSaverPlab=(':nth-child(2) > .mat-card > .mat-card-header > .mat-card-header-text > .mat-card-title > .card-header > .main-header > .ng-star-inserted');
    pdpButon = ('.selected-container > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper')
    planGsupplementBtn = ('[style="text-align: center;"] > .mat-focus-indicator > .mat-button-wrapper')
    pdpplanChkbox = ('#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container')
    pdpSupplementPlanChkbox = ('#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container')
    // pdpSupplementPlanChkbox =(':nth-child(2) > .mat-card > .mat-card-header > .mat-card-header-text > .mat-card-title > .card-header > .main-header > .mat-tooltip-trigger');
    finalSupplementPlanChkbox = ('#mat-checkbox-27 > .mat-checkbox-layout > .mat-checkbox-inner-container')  
    totalexpABDG= ('.mat-row > .cdk-column-lifetimeTotalExpense')
    totalABDConcierge= ('.total-container > :nth-child(2) > :nth-child(1) > :nth-child(2)')
    totalconciergepdpup=('.mat-row > .cdk-column-lifetimeConciergeCharge');
    totalconciergepdpdown=('.total-container > :nth-child(2) > div > .ng-star-inserted > :nth-child(2)');

    cignaHealthCareSaverPlanSelect(){
        cy.get(this.cignaHealthCareSaverPlan,{timeout:2000}).click();
    }

    clickPdpBtn(){
        cy.get(this.pdpButon, {timeout:3000}).click();
    }

    clickplanGsupplementBtn(){
        cy.get(this.planGsupplementBtn,{timeout:2000}).click();
    }

    clickPdpplanChkbox(){
        cy.wait(3000);
        cy.get(this.pdpplanChkbox).click();
    }

    clickPdpSupplementPlanChkbox(){
        cy.wait(3000);
        cy.get(this.pdpSupplementPlanChkbox).click();
    }


    clickFinalSupplementPlanChkbox(){
        cy.get(this.finalSupplementPlanChkbox,{timeout:3000}).click();
    }

    IsPDPTotalCTEAmntsEqual() {
        let totalUp, totalDown;
        cy.wait(2000);
        // Get first value
        cy.get(this.totalexpABDG).invoke('text').then((text1) => {
          totalUp = text1.trim();
      
          // Get second value
          cy.get(this.totalABDConcierge).invoke('text').then((text2) => {
            totalDown = text2.trim();
      
            // Compare both
            expect(totalUp).to.eq(totalDown);
          });
        });
    }

    IsPDPTotalConciergeAmntsEqual() {
        let totalUp, totalDown;
        cy.wait(2000);
        // Get first value
        cy.get(this.totalconciergepdpup).invoke('text').then((text1) => {
          totalUp = text1.trim();
      
          // Get second value
          cy.get(this.totalconciergepdpdown).invoke('text').then((text2) => {
            totalDown = text2.trim();
      
            // Compare both
            expect(totalUp).to.eq(totalDown);
          });
        });
    }
    agepdp = (':nth-child(1) > span > label')
    healthprofilepdp = "//span[text()[normalize-space()='Health Profile:']]"
    plantypepdp=('.details-container > :nth-child(3) > span')
    retirementagepdp = (':nth-child(4) > span > label')
    retirementyearpdp=(':nth-child(5) > span')
    incomeduringmedicarepdp=(':nth-child(6) > span')
    lifeexpectancypdp = "//span[contains(text(),'Life Expectancy')]/label"
    medicareeeligibleyearpdp=(':nth-child(8) > span')
    textfilingstatuspdp=(':nth-child(9) > span')
    
    profiledetailspdp(){
        cy.get(this.agepdp,{timeout:3000})
            .should('be.visible')
            .invoke('text')
            .then((txt) => {
                cy.log('Age text:', txt);  
                const match = txt.match(/\d+/); 
                expect(match, `Expected a number inside "${txt}"`).to.not.be.null;            
                const actualAge = parseInt(match[0], 10);
                expect(actualAge).to.be.greaterThan(65);
            });

        cy.get(this.retirementagepdp)
            .should('be.visible')
            .invoke('text')
            .then((txt) => {
                const num = parseInt(txt.replace(/\D/g, ""), 10);  // keep only digits
                expect(num).to.eq(65);
            });

        cy.xpath(this.lifeexpectancypdp)
            .should('be.visible')
            .invoke('text')
            .then((txt) => {    
                const actual = parseInt(txt.replace(/\D/g, ""), 10); // keep only digits
                expect(actual).to.be.greaterThan(65);
            });
    
        cy.xpath(this.healthprofilepdp)
            .invoke('text')
            .then((txt) => {
            const actual = txt.replace("Health Profile:", "").trim(); 
            expect(actual).to.eq("Moderate Health");
        });       
    }
    
    checkPlanType(){
        cy.get(this.plantypepdp).should('contain', 'Plan G');    
        cy.get(this.textfilingstatuspdp).should('contain', 'Jointly');
    }
    // PDP and Suppl Plan N

    medigapplanN=('.mat-select-arrow-wrapper');
    //selectplanN=('#mat-option-4 > .mat-option-text')
    selectplanN="//span[normalize-space()='N']";

    //incomeDuringMedicare = ('.details-container > :nth-child(6)>span > label')
    incomeDuringMedicare="//span[normalize-space()='Income During Medicare:']";
   
    selectmedigapplanN(){
        cy.get(this.medigapplanN, {timeout:10000}).click();
        cy.xpath(this.selectplanN,{timeout:2000}).click();
    }

    Gplantypemagitaxfstatus(){
        cy.get(this.plantypepdp).should('contain', 'Plan G');    
        cy.get(this.textfilingstatuspdp).should('contain', 'Jointly'); 
        cy.xpath(this.incomeDuringMedicare).should('contain', '< $ 212K');
    }
    Nplantypemagitaxfstatus(){
        cy.get(this.plantypepdp).should('contain', 'Plan N');    
        cy.get(this.textfilingstatuspdp).should('contain', 'Jointly'); 
        cy.xpath(this.incomeDuringMedicare).should('contain', '< $ 212K');
    }
    HDGplantypemagitaxfstatus(){
        cy.get(this.plantypepdp).should('contain', 'Plan HDG');    
        cy.get(this.textfilingstatuspdp).should('contain', 'Jointly'); 
        //cy.xpath(this.incomeDuringMedicare).should('less than','212');
        cy.xpath(this.incomeDuringMedicare).should('contain', '< $ 212K');
    }


    // PDP and Suppl Plan HDG
    medigapplanHDGddlclick=('.mat-select-arrow-wrapper');
    selectHDGfromddl="//span[normalize-space()='HDG']";
    clickonsupplimentbtnHDG="//span[normalize-space()='Supplement']";
   

    clickonmedigaparrowandselectHDG(){
        cy.get(this.medigapplanHDGddlclick,{timeout:10000}).click();
        cy.xpath(this.selectHDGfromddl, {timeout:10000}).click();
    }
    clicksupplimentbuttonhdg(){
        cy.xpath(this.clickonsupplimentbtnHDG, {timeout:1000}).click();
    }

        
    

    clickMAbtn(){
        cy.get(this.clickMAbtnEle,{timeout:10000}).click();
        cy.wait(3000);
    }

    wellcaresimpleopenppo(){
        cy.wait(3000)
        cy.get(this.wellcaresimpleopenppoChck,{timeout:10000}).click({force: true});
    }
    
    planselectdone(){
        cy.get(this.planselectdoneEle,{timeout:10000}).click();
    }

    selectplanchkbox(){
        cy.get(this.selectplanchkboxEle,{timeout:10000}).click();
    }

    clickmedicare(){
        cy.xpath(this.clickmedicareEle,{timeout:10000}).click({force:true});
        cy.wait(3000);
    }
    
    clickbackbtn(){
            cy.get(this.clickbackEle,{timeout:30000}).should('exist').should('be.visible').click({ multiple: true }); 
    }

    generatepdf(){
        cy.wait(3000);
       cy.xpath(this.generatepdfEle, { timeout: 10000 }).should('not.be.disabled').click();
    }

    aivanteimgclick(){
        cy.get(this.aivanteimgEle).click();
    }

    //edit recommendation plan details
    editRecommendation(){
        cy.xpath(this.filterbyemailorrecnameEle, { timeout: 10000 }).click().type('Vanaja@gmail.com');
        cy.wait(3000);

        cy.xpath(this.clickeditRecommendationEle, { timeout: 10000 }).click();
        cy.wait(3000);

        cy.xpath(this.clicknextEle, { timeout: 10000 }).click();
        cy.wait(3000);
       
        cy.xpath(this.clicknextprefEle).click();
        cy.wait(300);

        cy.xpath(this.clickadddrugdoneEle).click();
        cy.xpath(this.clickpharcheckbxEle).click();
        cy.xpath(this.clickpharnextbtnEle).click();
        cy.wait(3000)
        cy.xpath(this.clickmabuttonEle).click();
        cy.wait(5000)
        cy.xpath(this.wellcaresimpleEle).click();
        cy.get(this.planselectdoneEle).click();
        cy.get(this.selectplanchkboxEle).click();
        cy.get(this.clickmedicareEle).click({ multiple: true });
        cy.xpath(this.clickExpheaderEle).click();
        cy.xpath(this.purchasepartA).click();

        }
         //from Medicare screen select 30 lifetime reserve days from dropdown values
           select30lifetimeresdays() {
            cy.xpath(this.clickExpheaderEle).click();
            cy.wait(5000);
            cy.xpath(this.lrdarrowclickEle).click();
            cy.wait(4000)
            cy.xpath(this.dropDownEle)
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
            cy.xpath(this.lrdsubmitbtnEle).click();
          }
        
          //view medicare plan details
          viewrecommendation(){
            cy.xpath(this.filterbyemailorrecnameEle, { timeout: 50000 }).click().type('Vanaja');
            cy.wait(3000)
            cy.xpath(this.clickviewrecommendationEle, { timeout: 50000 }).click({ multiple: true });
            cy.xpath(this.clickmedicarebtnEle, { timeout: 50000 }).should('be.visible').click();
             cy.get(this.TotalPremiumEle).should('contain.text','Total Premium');
             cy.get(this.TotalsurchargeEle).should('contain.text','Total Surcharge');
            cy.get(this.TotalOOPEle).should('contain.text','Total OOP');

          }
          
// validations
validatepgelements() {
  //cy.get(this.pagetitleEle).should('contain.text', 'Your Medicare Options');
  cy.get(this.rightdrawerbtnEle).should('contain.text', 'T');
  //this.backButton.should('be.visible').and('have.text', 'Back');
  cy.get(this.expansionEle).should('be.visible');
  cy.get(this.disableddlEle).should('have.class', 'mat-select-disabled');
}

togglepurchasepartA() {
  cy.get(this.purchasepartAtoggEle).click({ force: true });
  cy.get(this.purchasepartAtogglabelEle).should('contain.text', 'Purchase Part A');
}

verifyUrl(expectedUrl) {
    // Verify if the current URL matches the expected URL
    cy.url().should('include', expectedUrl);
    
}

//assertions related to premium and OOP
verifytotalpremiumsurchargeoop(){
    cy.get(this.TotalPremiumEle).should('contain.text','Total Premium');
    cy.get(this.TotalsurchargeEle).should('contain.text','Total Surcharge');
    cy.get(this.TotalOOPEle).should('contain.text','Total OOP');
 }

//assertions related to PV and AB+MA and IRMA
verifyPVABMAIRMA(){
    cy.xpath(this.PVasofyearEle).should('be.visible');
    cy.xpath(this.ABandMAtotalexpEle).should('be.visible');
    cy.xpath(this.IRMAEle).should('be.visible');

 }

// Assertions
verifyuserinfodetalis(){
    cy.get(this.AgeEle).should('be.visible');
    // cy.get(this.HealthProfileEle).should('contain.text','Best Health');

    const profileTypes = ['Good Health', 'Best Health', 'Moderate Health','Poor Health',"Sick"];
    cy.get(this.HealthProfileEle).invoke('text').then((text) => {
        const matchFound = profileTypes.some(type => text.includes(type));
        expect(matchFound).to.be.true;
    });

    cy.get(this.plantypeEle).should('be.visible');
    cy.get(this.RetirementageEle).should('be.visible');
    cy.get(this.RetirementyearEle).should('be.visible');
    cy.get(this.IncomeduringmedicareEle).should('be.visible');
    cy.get(this.LifeexpectancyEle).should('be.visible');
    cy.get(this.MedicareeligibleyearEle).should('be.visible');
    cy.get(this.TaxfilingstatusEle).should('contain.text','Jointly');
    }
      
}

export default MedicarePage;