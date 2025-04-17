import LoginPage from "../pages/LoginPage.js";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from "../pages/PrescriptionPage.js";
import PharmacyPage from "../pages/PharmacyPage.js";
import PlanselectionPage from "../pages/PlanselectionPage.js";

describe('Recommendation Flow Test', () => {
    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');
//To test
        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        });

    });

    it('test1 Verify Tsign', () => {
        //const recPage = new LandingPage();
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickTsign();
        cy.wait(2000);
    });
    it('test2 Verify logout', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickTsign();
        cy.wait(2000);
        recPage.clickLogOut();
        cy.wait(2000);
    });
    it('test3 Verify  Recommendation radio button', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
    });
    it('test4 Verify create Recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickCreateRecommendation();
        cy.wait(2000);
    });
    it.skip('test5 Verify delete Recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('lata');//Filter by recommendation email or name
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickDeletePlanIcon();
        cy.wait(2000);
        recPage.clickDeleteBut();
        cy.wait(2000);
    });
    it('test6 Verify cancel Recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('lata');//Filter by recommendation email or name
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickDeletePlanIcon();
        cy.wait(2000);
        recPage.clickCancelDeleteBut();
        cy.wait(2000);
        
    });
    it('test7 Verify the Expand Plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('lata');//Filter by recommendation email or name
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
    });
    it('test8 Verify the Collapses Plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('lata');//Filter by recommendation email or name
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickCollapsesPlan();
        cy.wait(2000);
    });
    it('test9 Verify Items per page (Next Page)', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickItemPerPageNext();
        cy.wait(2000);
    });
    it('test10 Verify the Previous page (PreviousPage)', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickItemPreviousPage();
        cy.wait(2000);
    });
    it('test11 Verify the Last Page (LastPage)', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickItemLastPage();
        cy.wait(2000);
    });
    it('test12 Verify the First Page (firstPage)', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickItemFirstPage();
        cy.wait(2000);
    });
    it.skip('test13 Verify create Recommendation', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickCreateRecommendation();
        cy.wait(2000);
        const homepage = new HomePage();
        cy.wait(2000);
        homepage.enterEmail('chhabi@gmail.com');
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
        homepage.enterName('Lata');
        homepage.enterLifeexpectancy('80');
        homepage.clickDateOfBirth();
        homepage.clickCalenderEle();
        homepage.clickYear();
        homepage.clickMonth();
        homepage.clickGender();
        homepage.clickMale();
        homepage.enterZip("80108");
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickMagiTier();
        homepage.clickMagiTier1();
        homepage.clickNext();
        const preferencespage = new PreferencePage();
        preferencespage.clickyesRadioDrugCost();
        preferencespage.clickNextPrefPage();
        const prescriptionpage = new PrescriptionPage();
        prescriptionpage.clickBrowseAtoZlink();
        prescriptionpage.enterLetter('C');
        prescriptionpage.clickSelectDrug();//Captopril
        prescriptionpage.clickAddDrug();
        prescriptionpage.clickAddToDrugList();
        prescriptionpage.doneAddDrugClick();
        //const pharmacypage = new PharmacyPage();
        const pharmacypg = new PharmacyPage();
pharmacypg.selectPharmacy();
        pharmacypg.clickNextBtn();
        //const planselectionpage =new planselectionPage();
        const planselectionpage=new planselectionPage;
        planselectionpage.clickMA();
        planselectionpage.clickPlan();
        planselectionpage.clickDone();
        planselectionpage.clickPlanCheckbox();
        planselectionpage.clickMedicareBut();
        planselectionpage.clickBackBut();
        planselectionpage.clicklongTermBut();
        planselectionpage.clickAivanteLogo();
    });
    it('test14 edit healthProfile', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        recPage.enterByEmail('Lata');//Filter by recommendation email or name
        recPage.clickExpandPlan();
        recPage.clickEditRecommandtion();
        recPage.clickEditHealthProfile(); 
        recPage.clickmoderateHealth();
});
it('test15 edit name', () => {
    const recPage = new LandingPage();
    cy.wait(2000);
    recPage.clickRecommendationRadioBut();
    recPage.enterByEmail('Lata');//Filter by recommendation email or name
    recPage.clickExpandPlan();
    recPage.clickEditRecommandtion();
    recPage.enterEditName('Name'); 
    });
    it('test16 edit life expectancy', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        recPage.enterByEmail('Lata');//Filter by recommendation email or name
        recPage.clickExpandPlan();
        recPage.clickEditRecommandtion();
        recPage.entereditLifeExpectancy('90'); 
        });
        it('test17 edit DOB', () => {
            const recPage = new LandingPage();
            cy.wait(2000);
            recPage.clickRecommendationRadioBut();
            recPage.enterByEmail('Lata');//Filter by recommendation email or name
            recPage.clickExpandPlan();
            recPage.clickEditRecommandtion();
            recPage.clickeditCalenderEle();
            recPage.clickeditYear();
            recPage.clickeditMonth();
            });
it('test18 edit Gender Male', () => {
                const recPage = new LandingPage();
                cy.wait(2000);
                recPage.clickRecommendationRadioBut();
                recPage.enterByEmail('Lata');//Filter by recommendation email or name
                recPage.clickExpandPlan();
                recPage.clickEditRecommandtion();
                recPage.clickeditGender();
                recPage.clickeditGenderM();
        });
it('test19 edit Gender Female', () => {
            const recPage = new LandingPage();
            cy.wait(2000);
            recPage.clickRecommendationRadioBut();
            recPage.enterByEmail('Lata');//Filter by recommendation email or name
            recPage.clickExpandPlan();
            recPage.clickEditRecommandtion();
            recPage.clickeditGender();
            recPage.clickeditGenderF();
    });
    it('test20 edit Tabacco No', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        recPage.enterByEmail('Lata');//Filter by recommendation email or name
        recPage.clickExpandPlan();
        recPage.clickEditRecommandtion();
        recPage.clickedittabaccoNo();
  });
  it('test21 edit Tabacco Yes', () => {
    const recPage = new LandingPage();
    cy.wait(2000);
    recPage.clickRecommendationRadioBut();
    recPage.enterByEmail('Lata');//Filter by recommendation email or name
    recPage.clickExpandPlan();
    recPage.clickEditRecommandtion();
    recPage.clickedittabaccoYes();
});
it('test22 edit Tax filing with individual', () => {
    const recPage = new LandingPage();
    cy.wait(2000);
    recPage.clickRecommendationRadioBut();
    recPage.enterByEmail('Lata');//Filter by recommendation email or name
    recPage.clickExpandPlan();
    recPage.clickEditRecommandtion();
    recPage.clickEditTaxIndiv();
});
it('test23 edit Tax filing with Jointly', () => {
    const recPage = new LandingPage();
    cy.wait(2000);
    recPage.clickRecommendationRadioBut();
    recPage.enterByEmail('Lata');//Filter by recommendation email or name
    recPage.clickExpandPlan();
    recPage.clickEditRecommandtion();
    recPage.clickEditTaxJoin();
});
it('test24 edit Street', () => {
    const recPage = new LandingPage();
    cy.wait(2000);
    recPage.clickRecommendationRadioBut();
    recPage.enterByEmail('Lata');//Filter by recommendation email or name
    recPage.clickExpandPlan();
    recPage.clickEditRecommandtion();
    recPage.entEreditStreet();
});
it('test25 edit Zip code', () => {
    const recPage = new LandingPage();
    cy.wait(2000);
    recPage.clickRecommendationRadioBut();
    recPage.enterByEmail('Lata');//Filter by recommendation email or name
    recPage.clickExpandPlan();
    recPage.clickEditRecommandtion();
    recPage.enterEditZip();
    recPage.clickeditsearch();
});
it('test26 edit Contact', () => {
    const recPage = new LandingPage();
    cy.wait(2000);
    recPage.clickRecommendationRadioBut();
    recPage.enterByEmail('Lata');//Filter by recommendation email or name
    recPage.clickExpandPlan();
    recPage.clickEditRecommandtion();
    recPage.enterEditContact('1234567899');
});
    it('test27 Verify view recommendation', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(2000);
        recPage.clickviewBackbut();
        cy.wait(2000);
    });
    it('test28 Verify view low cost pharmacy view-recommendation page then back to the landing page', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(3000)
        recPage.clickviewLowCost();
        cy.wait(3000);
        recPage.clickbackLowCost();//back to the view-recommendation
        cy.wait(3000);
        recPage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test29 Verify view provider on the view-recommendation page then back', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(2000)
        recPage.clickviewProvider();
        cy.wait(2000);
        recPage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        recPage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test30 Verify view medicare on the view-recommendation page then back', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(2000)
        recPage.clickviewMedicare();
        cy.wait(2000);
        recPage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        recPage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test31 Verify view longTerm on the view-recommendation page then back', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(2000)
        recPage.clickviewLongTerm();
        cy.wait(2000);
        recPage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        recPage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test32 Verify delete recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickDeletePlanIcon();
        cy.wait(2000)
        recPage.clickDeleteBut();
    });
    it('test33 Verify cancel the delete recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickDeletePlanIcon();
        cy.wait(2000)
        recPage.clickCancelDeleteBut();
    });
    it('test34 Verify Prescription Radio button', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
    });
    it('test35 Verify Edit Prescription', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
        recPage.enterEditPresEmail('chha');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickeditPresDrug();
        cy.wait(2000);
        recPage.clickeditDrug();
        cy.wait(2000);
        recPage.clickFrequencyBut();
        cy.wait(2000);
        recPage.clickFrequency60();
        cy.wait(2000);
        recPage.enterQuanty('45');
    });
    it('test36 Verify view drug', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
        recPage.enterEditPresEmail('chha');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewDrug();
        cy.wait(2000);
    });
    it('test37 Verify delete durg', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
        recPage.enterEditPresEmail('chha');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickdeleteDrug();
        cy.wait(2000);
        recPage.clickdeleteDrugBut();
        cy.wait(2000); 
    });
    it('test38 Verify cancel Delete Drug', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
        recPage.enterEditPresEmail('chha');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickdeleteDrug();
        cy.wait(2000);
        recPage.clickcancelDeleteDrug();
        cy.wait(2000);
    });

});




