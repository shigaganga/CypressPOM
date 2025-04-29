//import { beforeEach } from "mocha";
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
          cy.fixture('LoginFixture').then((data) => {
            cy.visit(data.baseUrl);
      
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin();
      
            const recPage = new LandingPage();
            recPage.clickCreateRecommendation();
            const homepage = new HomePage();
            const preferencePage = new PreferencePage();
      
            homepage.enterEmail(data.email);
            homepage.clickhealthArrow();
            homepage.clickGoodHealth();
            homepage.enterName(data.name);
            homepage.enterLifeexpectancy(data.lifeexpectancy);
            homepage.datePickerclick();
            homepage.year1957click();
            homepage.month1957click();
            homepage.enterZip(data.zip);
            homepage.clickSearch();
            homepage.nextHomeClick();
            
            preferencePage.clickNextPrefPage();
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