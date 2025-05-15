import ProviderInpatientRehabilitationPage from "../pages/ProviderInpatientRehabilitationPage.js";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from "../pages/PreferencePage";
import PlanselectionPage from "../pages/PlanselectionPage.js";


describe('providerTest' , ()=>
{
    beforeEach(() => {
        cy.session("ProviderInPatientRehab Page", () => {
            cy.task('csv:parseFromDropbox').then((data) => {
                const testData = data[0];
                cy.visit(testData.baseUrl);
                cy.wait(500);
          
                const lPage = new LoginPage();
                lPage.setUserName(testData.username);
                cy.wait(500);
                lPage.setPassword(testData.password);
                cy.wait(500);
                lPage.clickLoginBtn();
                cy.wait(500);
          
                const recPage = new LandingPage();
                recPage.clickCreateRecommendation();
                cy.wait(500);
          
                const homepage = new HomePage();
                homepage.enterEmail(testData.email);
                cy.wait(500);
                homepage.enterName(testData.name);
                cy.wait(500);
                homepage.clickDatePicker();
                cy.wait(500);
                homepage.clickYear(testData.yearOfBirth);
                cy.wait(500);
                homepage.clickMonth(testData.monthOfBirth);
                cy.wait(500);
                homepage.clickGender();
                cy.wait(500);
                homepage.selectGender(testData.gender);
                cy.wait(500);
                homepage.enterStreet(testData.street);
                cy.wait(500);
                homepage.enterZip(testData.zip);
                cy.wait(500);
                homepage.clickSearch();
                cy.wait(500);
                homepage.entercommunicationEmail(testData.communicationEmail);
                cy.wait(500);
                homepage.enterContact(testData.contactNumber);
                cy.wait(500);
                homepage.clickhealthArrow();
                cy.wait(500);
                homepage.clickHealthProfile(testData.healthProfile);
                cy.wait(500);
                homepage.enterLifeexpectancy(testData.lifeExpectancy);
                cy.wait(500);
                homepage.selectTobaccoOption(testData.tobacco);
                cy.wait(500);
                homepage.selectTaxFilingStatus(testData.taxFilingStatus);
                cy.wait(500);
                homepage.clickMagiTier();
                cy.wait(500);
                homepage.clickMaggiTireOptions(testData.magiTier);
                cy.wait(500);
                homepage.selectConciergeOption(testData.conceirge);
                cy.wait(500);
                homepage.nextHomeClick();
                cy.wait(500);
          
                const prefPage = new PreferencePage();
                prefPage.clickyesRadioDrugCost();
                cy.wait(500);
                prefPage.clickNextPrefPage();
                cy.wait(500);
          
        });

        });
      
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/plan-selection');
      });

    it('TC_PDP_PRV_IRF_196: test1 , Should click on provider link' ,()=>
    {
         const planselectionPage=new PlanselectionPage();
         planselectionPage.clickProviderButton();

    })

    it('TC_PDP_PRV_IRF_197: test2,Inpatient Rehabilitation Facilities is visible' , ()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
    })

    it('TC_PDP_PRV_IRF_198: test3, Inpatient Rehabilitaion Facilities should be searchable in 100 miles radius' , ()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
    })

    it('TC_PDP_PRV_IRF_201 : test4, Check providers by giving Rehabilitaion Name',()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.optionalIpName();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
    })

    it('TC_PDP_PRV_IRF_202 : test5 , Check provider list is displaying without Rehibiltation Name also' , ()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
    })

    it('TC_PDP_PRV_IRF_203 : test6, Ownership dropdown should have all the required values',()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
        providerInRePage.clickProviderFilter();
    })

    it('TC_PDP_PRV_IRF_205 : test7 , select Government from ownership dropdown',()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
        providerInRePage.clickProviderFilter();
        providerInRePage.selectDropDown();
    })

    it('TC_PDP_PRV_IRF_206 : test8, click on apply filter' ,()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
        providerInRePage.clickProviderFilter();
        providerInRePage.selectDropDown();
        providerInRePage.clickApplyFilter();
    })

    it('TC_PDP_PRV_IRF_207 : test9, click clear filter',()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
        providerInRePage.clickProviderFilter();
        providerInRePage.selectDropDown();
        providerInRePage.clickApplyFilter();
        providerInRePage.clickClearFilter();
    })
       
    })