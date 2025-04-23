import { beforeEach } from "mocha";
import ProviderInpatientRehabilitationPage from "../pages/ProviderInpatientRehabilitationPage.js";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from "../pages/PreferencePage";
import PlanselectionPage from "../pages/PlanselectionPage.js";


describe('providerTest' , ()=>
{
    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); 
           
        });

        const recPage = new LandingPage();
        recPage.clickCreateRecommendation();
        const homepage = new HomePage();
        const preferencePage=new PreferencePage();
       

        homepage.enterEmail("darsh@gmail.com");
        
        homepage.clickhealthArrow();
        
        homepage.clickGoodHealth();
        
        homepage.enterName("darshana");
        
        homepage.enterLifeexpectancy("86");
        
        homepage.datePickerclick();
        
        homepage.year1957click();
        
        homepage.month1957click();
        
        homepage.enterZip("76248");
        
        homepage.clickSearch();
        
        homepage.nextHomeClick();

        preferencePage.clickNextPrefPage();
        
    });

    it('test1 , Should click on provider link' ,()=>
    {
         const planselectionPage=new PlanselectionPage();
         planselectionPage.clickProviderButton();

    })

    it('test2,Inpatient Rehabilitation Facilities is visible' , ()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
    })

    it('test3, Inpatient Rehabilitaion Facilities should be searchable in 100 miles radius' , ()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
    })

    it('test4, Check providers by giving Rehabilitaion Name',()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.optionalIpName();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
    })

    it('test5 , Check provider list is displaying without Rahibiltation Name also' , ()=>
    {
        const planselectionPage=new PlanselectionPage();
        const providerInRePage=new ProviderInpatientRehabilitationPage();
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius();
        providerInRePage.clickSearchProvider();
    })

    it('test6, Ownership dropdown should have all the required values',()=>
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

    it('test7 , select Government from ownership dropdown',()=>
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

    it('test8, click on apply filter' ,()=>
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

    it('test9, click clear filter',()=>
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
