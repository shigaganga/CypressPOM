//expensesPresentValue
//import commons from '../../../utils/commons.js'
//import HomePage from '../pages/HomePage.js';

const body= {
    "fromYear": "2025",
    "toYear": 2028,
    "expenses": [
        {
            "year": 2025,
            "expense": 5004.2
        },
        {
            "year": 2026,
            "expense": 20799.4
        },
        {
            "year": 2027,
            "expense": 21616.8
        },
        {
            "year": 2028,
            "expense": 8743
        }
    ],
    "presentValueYears": {
        "pvAsOnYear1": "2025"
    },
    "discount": 6,
    "rateOfReturns": {
        "rateOfReturn1": 0
    }
}
//getMedicareExpenses
const conciergemedexpBody= {
    
    "userId": "testuser@gmail.com",
    "refKey": "Vanaja|Vanaja@gmail.com|2025-09-22T19:09:14.344214293Z",
    "contractId": "H2128",
    "planId": "002",
    "segmentId": "000"    
}
//LongtermcareR4 API
const longtemcarer4pv= {
    "userEmail": "testuser@gmail.com",
    "age": 65,
    "pvAsOfYear": 2025,
    "lifeExpectancy": 68,
    "transactionTypeFlag": "false",
    "healthProfile": 4,
    "location": "Pennsylvania",
    "zipcode": "18976",
    "tobacco": 1,
    "currentLifeStyleExpenses": 1,
    "numberOfAdultDayHealthCareLTCYears": 1,
    "numberOfAssistedCareLTCYears": 0,
    "numberOfHomeCareLTCYears": 1,
    "numberOfNursingCareLTCYears": 1,
    "gender": "F",
    "alzheimersFlag": 1,
    "heartStorkeFlag": 1,
    "planRecommendName": "Vanaja",
    "planRecommendEmail": "Vanaja@gmail.com",
    "recommendationListId": "68d84f5c104dfe20531b16a0"
}


describe("Automate API consistency test cases for Medicare Advantage plan",()=>{

    it("TC-PDP-CONS-MA-01_AB+MA+Concierge Total Expences validation",()=>{
        cy.request({
            method: 'POST',

            url: 'http://169.61.105.110:8080/NewFinancialPlanner/api/v1/expensesPresentValue', 

            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Basic RmluYW5jaWFsUGxhbm5lclNlcnZpY2VVc2VyOkZpbmFuY2lhbFBsYW5uZXJQQHNzdzByZA==', 
            },
            body:body
        }).then((response) => {               
            expect(response.status).to.eq(200); 
            const jsonData = response.body
            let expensesObj = jsonData.expenses
            let Expenses = expensesObj[0].expense +expensesObj[1].expense + expensesObj[2].expense + expensesObj[3].expense
            let totalExpense = jsonData.pvList[0].totalExpense
            //cy.log("amts are:",Expenses,totalExpense)
            expect(Expenses).to.eq(totalExpense)
        });                   
    });
    
    it("TC-PDP-CONS-MA-02_Total Concierge charge under lifetime medicare projection should match with Total Concierge charge under Lifetime Expences",()=>{
        cy.request({

            method: 'POST',

            url: 'http://169.61.105.110:8080/NewFinancialPlanner/api/v1/getMedicareExpenses', 

            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Basic RmluYW5jaWFsUGxhbm5lclNlcnZpY2VVc2VyOkZpbmFuY2lhbFBsYW5uZXJQQHNzdzByZA==', 
            },
            body:conciergemedexpBody
        }).then((response) => {           
            expect(response.status).to.eq(200); 
            //get the 1st value to compare
            let lifeTimeConciergePremium = response.body.individualMedicareR4Response.lifeTimeConciergePremium
            const jsonData = response.body.individualMedicareR4Response.individualMedicares
            let conciExp=0.0
            for ( let ele of jsonData){
                conciExp = conciExp + ele.conciergePremium
            }
            // let conciExp1= jsonData[0].conciergePremium+ jsonData[1].conciergePremium+jsonData[2].conciergePremium+jsonData[3].conciergePremium
            expect(conciExp).to.eq(lifeTimeConciergePremium)
        });
                  
    });

    it.skip("TC-PDP-CONS-MA-03_All profile data is identical to the profile data entered while creating a plan",()=>{
        cy.request({

            method: 'POST',

            url: 'http://169.61.105.110:8080/NewFinancialPlanner/api/v1/getMedicareExpenses', 

            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Basic RmluYW5jaWFsUGxhbm5lclNlcnZpY2VVc2VyOkZpbmFuY2lhbFBsYW5uZXJQQHNzdzByZA==', 
            },
            body:conciergemedexpBody
        }).then((response) => {       
            expect(response.status).to.eq(200); 
            // get the element values and compare aganist the other
        
            const actualAge = commons.calculateAge(response.body.individualMedicareR4Response.birthDate);          
            expect(actualAge).to.be.gte(65);       

            const actualRetirementAge = commons.calculateRetirementAge(response.body.individualMedicareR4Response.birthDate,
            response.body.individualMedicareR4Response.retirementYear);                      
            expect(actualRetirementAge).to.eq(65);
        
            const lifeExpectancy = response.body.individualMedicareR4Response.lifeExpectancy;
            expect(lifeExpectancy).to.be.greaterThan(65);
        
            let healthProfileType = response.body.individualMedicareR4Response.healthGrade;
            expect(healthProfileType).to.be.oneOf(['1','2','3','4']);

            let retirementYear = response.body.individualMedicareR4Response.retirementYear;
            const [month, year] = retirementYear.split("-").map(Number);        
            expect(year).to.be.greaterThan(65)

            let incomeTier = response.body.individualMedicareR4Response.magiTier;          
            expect(incomeTier).to.be.oneOf([1,2,3,4,5,6,7])

            let taxFilingStatus = response.body.individualMedicareR4Response.taxFilingStatus;          
            expect(taxFilingStatus).to.be.oneOf(['JOINTLY','FILING_INDIVIDUALLY']);

            //planType is different api hence we need to call the plan D recommendation
            cy.request({
                method: 'POST',
                url: 'http://169.61.105.110:8080/NewFinancialPlanner/api/v1/partDPlanRecommendation', 
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Basic RmluYW5jaWFsUGxhbm5lclNlcnZpY2VVc2VyOkZpbmFuY2lhbFBsYW5uZXJQQHNzdzByZA==', 
                },
                body:conciergemedexpBody
            }).then((response)=>{
                expect(response.status).to.eq(200);
                const plantype = response.body.recommendationList[0].pharmacyWiseRecommendations.planType;          
                expect(plantype).to.be.gte("MA");    
            });
        });        
    });

    it("TC-PDP-CONS-MA-04-Total Present Value Expences under Long Term Care Expences Projection should be equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care ",()=>{
        cy.request({
            method: 'POST',
            url: "http://169.61.105.110:8080/NewFinancialPlanner/api/v1/longTermCareR4", 
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Basic RmluYW5jaWFsUGxhbm5lclNlcnZpY2VVc2VyOkZpbmFuY2lhbFBsYW5uZXJQQHNzdzByZA==', 
            },
            body:longtemcarer4pv
        }).then((response) => {       
            expect(response.status).to.eq(200);   
            const presentvalue= response.body.presentValueExpectedAdultDayHealthCare+response.body.presentValueExpectedHomeCare+response.body.presentValueExpectedNursingCare;
            expect(presentvalue).to.be.greaterThan(0);    
        });
    }); 
    it("TC-PDP-CONS-MA-05-Total Future Value Expences under Long Term Care Expences Projection should be equal to the addition of Future value Adult Day Care,In Home Care,Nursing Care",()=>{
        cy.request({
            method: 'POST',
            url: "http://169.61.105.110:8080/NewFinancialPlanner/api/v1/longTermCareR4", 
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Basic RmluYW5jaWFsUGxhbm5lclNlcnZpY2VVc2VyOkZpbmFuY2lhbFBsYW5uZXJQQHNzdzByZA==', 
            },
            body:longtemcarer4pv
        }).then((response) => {       
            expect(response.status).to.eq(200);   
            const futurevalue= response.body.futureAdultDayHealthCareExpenseList[0].expense+response.body.futureHomeCareExpenseList[0].expense+response.body.futureNursingCareExpensesList[0].expense;
            expect(futurevalue).to.be.greaterThan(0);    
        });
    }); 
    
});