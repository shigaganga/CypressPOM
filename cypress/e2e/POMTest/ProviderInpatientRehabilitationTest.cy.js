import ProviderInpatientRehabilitationPage from "../pages/ProviderInpatientRehabilitationPage.js";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from "../pages/PreferencePage";
import PlanselectionPage from "../pages/PlanselectionPage.js";


describe('providerTest' , ()=>
{
   
    const planselectionPage=new PlanselectionPage();
    const providerInRePage=new ProviderInpatientRehabilitationPage();
    let testData = null;
    before(()=>{
        //cy.fixture('LoginFixture').then((data)=>{
          //  testData=data;
            cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
         });

    })
    beforeEach(() => {
      
               cy.session("ProviderInPatientRehab Page", () => {
            
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
                //homepage.clickMagiTier();
                //cy.wait(500);
               // homepage.clickMaggiTireOptions(testData.magiTier);
               homepage.clickMagiTier(testData.magiTier);
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

       
      
        cy.visit(testData.planSelection_url);
      });

    it('TC_PDP_PRV_IRF_212: test1 , Should click on provider link' ,()=>
    {
         const planselectionPage=new PlanselectionPage();
         planselectionPage.clickProviderButton();

    })

    it('TC_PDP_PRV_IRF_212: test2,Inpatient Rehabilitation Facilities is visible' , ()=>
    {
        
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
    })

    it('TC_PDP_PRV_IRF_213: test3, Inpatient Rehabilitaion Facilities should be searchable in 100 miles radius' , ()=>
    {
        
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.searchIpRehabRadius(testData.radius);
        providerInRePage.clickSearchProvider();
    })

    it('TC_PDP_PRV_IRF_216: test4, Check providers by giving Rehabilitaion Name',()=>
    {
        
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.optionalIpName(testData.ipname);
        providerInRePage.searchIpRehabRadius(testData.radius);
        providerInRePage.clickSearchProvider();
    })

    it('TC_PDP_PRV_IRF_217 : test5 , Check provider list is displaying without Rehibiltation Name also' , ()=>
    {
        
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius(testData.radius);
        providerInRePage.clickSearchProvider();
    })

    it('TC_PDP_PRV_IRF_219 : test6, Ownership dropdown should have all the required values',()=>
    {
      
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius(testData.radius);
        providerInRePage.clickSearchProvider();
        providerInRePage.clickProviderFilter();
    })

    it('TC_PDP_PRV_IRF_221: test7 , select Government from ownership dropdown',()=>
    {
       
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius(testData.radius);
        providerInRePage.clickSearchProvider();
        providerInRePage.clickProviderFilter();
        providerInRePage.selectDropDown();
    })

    it('TC_PDP_PRV_IRF_222 : test8, click on apply filter' ,()=>
    {
        
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius(testData.radius);
        providerInRePage.clickSearchProvider();
        providerInRePage.clickProviderFilter();
        providerInRePage.selectDropDown();
        providerInRePage.clickApplyFilter();
    })

    it('TC_PDP_PRV_IRF_223 : test9, click clear filter',()=>
    {
      
        planselectionPage.clickProviderButton();
        providerInRePage.clickIpRehab();
        providerInRePage.emptyRehabName();
        providerInRePage.searchIpRehabRadius(testData.radius);
        providerInRePage.clickSearchProvider();
        providerInRePage.clickProviderFilter();
        providerInRePage.selectDropDown();
        providerInRePage.clickApplyFilter();
        providerInRePage.clickClearFilter();
    })
});  
    