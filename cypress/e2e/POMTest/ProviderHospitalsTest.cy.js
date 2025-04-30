import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";    
import PreferencePage from "../pages/PreferencePage";    
import PlanselectionPage from "../pages/PlanselectionPage";
import ProviderHospitalsPage from "../pages/ProviderHospitalsPage";
describe('ProviderHospitalTest',()=>{
    beforeEach(()=>{
        cy.session('ProviderHospital Session',()=>{
                                                                        
     cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
     cy.fixture('LoginFixture').then((data)=>{
    const ln=new LoginPage();
        
         ln.setUserName(data.username);
         ln.setPassword(data.password);
         ln.clickLoginBtn();
         ln.verifyLogin();
           
    const recPage = new LandingPage();
        
        recPage.clickCreateRecommendation();

    const homepage=new HomePage(); 
        
        homepage.enterEmail(data.email);  // Using email from fixture
        homepage.clickhealthArrow();
        homepage.clickGoodHealth();
        homepage.enterName(data.name);  // Using name from fixture
        homepage.enterLifeexpectancy(data.lifeexpectancy);  // Using life expectancy from fixture
        homepage.datePickerclick();
        homepage.year1957click();
        homepage.month1957click();
        homepage.enterZip(data.zip);  // Using ZIP code from fixture
        homepage.clickSearch();
        homepage.nextHomeClick();
     });
    
    const prefPage=new PreferencePage();
        
        prefPage.clicknoRadioDrugCost();   
        prefPage.clickNextPrefPage();

    const planSelect = new PlanselectionPage();
        
        planSelect.setProviderButtn();

    const provHos=new ProviderHospitalsPage();
        
        provHos.clickHospitalCat();
    });
    cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-providers")
    });
        it('TC_PDP_PRV_HOS_128 : verify the functionality of Category as "Hospitals"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();    
        });
        it('TC_PDP_PRV_HOS_129 : verify the functionality of "Search " button.',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
        });
        it('TC_PDP_PRV_HOS_130 : verify the functionality of Provider down arrow',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
            provHos.clickProviderDownArrow();
        });
        it('TC_PDP_PRV_HOS_131 : verify the functionality of Distance filter in Hospital category with valid distance',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
            provHos.clickProviderDownArrow();
            provHos.setDistance('25');
            provHos.clickApplyFilter();
        });
        it('TC_PDP_PRV_HOS_132 : verify the functionality of Distance filter in Hospital category with invalid distance >num',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
            provHos.clickProviderDownArrow();
            provHos.setDistance('30');
            provHos.displayError(); 
            provHos.disabledapplyfilter();
        });
        it('TC_PDP_PRV_HOS_133 : verify the functionality of Distance filter in Hospital category with invalid distance >alphanumeric',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
            provHos.clickProviderDownArrow();
            provHos.setDistance('@a3');
            provHos.clickApplyFilter();
            provHos.getNoProviderFound();
        });
        it('TC_PDP_PRV_HOS_134 : valiadate the functionality of filter "Hospital types" in Hospital category',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('40');
            cy.wait(2000);
            provHos.ClickSearchProv('40');
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.displayHosType();
        });
        it('TC_PDP_PRV_HOS_135 : validate the functionality of filter "Hospital types" with type "Acute Care Hospitals"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('50');
            provHos.ClickSearchProv('50').then((providerFound)=>{
                
                     if (!providerFound) {
                     
                     
                         cy.log('Test stopped because no provider was found.');
                         return; // Stop further execution
                     }
                     else{
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.setAcuteCareHospitals();
            provHos.clickApplyFilter();
            provHos.displayAcuteCareHos();
                     }
                    });
        });
        it('TC_PDP_PRV_HOS_136 : validate the functionality of filter "Hospital types" with type "Acute Care - Veterans Administration"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('50');
            provHos.ClickSearchProv('50')
            .then((providerFound)=>{
               
                     if (!providerFound) {
                     
                     
                         cy.log('Test stopped because no provider was found.');
                         return; 
                     }
                     else{
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.setAcuteCareVeteransAdmin();
            provHos.clickApplyFilter();
            provHos.displayAcuteCareVeteransAdmin();
                     }
                    });
        });
        it('TC_PDP_PRV_HOS_137 : validate the functionality of filter "Hospital types" with type "Critical Access Hospitals"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('20');
            provHos.ClickSearchProv('20').then((providerFound)=>{
                
                     if (!providerFound) {
                     
                     
                         cy.log('Test stopped because no provider was found.');
                         return; // Stop further execution
                     }
                     else{
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.setCriticalAccessHospitals();
            provHos.clickApplyFilter();
            provHos.displayCriticalAccessHos();
                         }
                        });
        });
        it('TC_PDP_PRV_HOS_138 : validate the functionality of filter "Hospital types" with type "Childrens"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('100');
            provHos.ClickSearchProv('100')
            .then((providerFound)=>{
                
                     if (!providerFound) {
                     
                     
                         cy.log('Test stopped because no provider was found.');
                         return; // Stop further execution
                     }
                     else{
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.setChildrenHospitals();
            provHos.clickApplyFilter();

            provHos.displaychildHos();
                         }
                        });
        });
       it('TC_PDP_PRV_HOS_139 : validate the functionality of filter "Hospital types" with type "Psychiatric"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('40');
            provHos.ClickSearchProv('40').then((providerFound)=>{
                
                     if (!providerFound) {
                     
                     
                         cy.log('Test stopped because no provider was found.');
                         return; // Stop further execution
                     }
                     else{
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.setPsychiatricHospitals();
            provHos.clickApplyFilter();
            provHos.displayPsychiatricHos();
                     }
                    });
       });
       it('TC_PDP_PRV_HOS_140 : validate the functionality of filter "Hospital types" with type "Acute Care - Department of Defense"',()=>{     
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('100');
            provHos.ClickSearchProv('100').then((providerFound)=>{
                
                     if (!providerFound) {
                     
                     
                         cy.log('Test stopped because no provider was found.');
                         return; // Stop further execution
                     }
                     else{
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.setAcuteCareDept();
            provHos.clickApplyFilter();
            provHos.displayAcuteCareDept();
                     }
                    });
       });
       it('TC_PDP_PRV_HOS_141 : verify the functionality of Overall rating filter dropdown',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('50');
        provHos.ClickSearchProv('50');
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.displayOverallRatePanel();
       });
       it('TC_PDP_PRV_HOS_142 : verify the functionality of filter "Overall rating" with 3 star rating',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('50');
        provHos.ClickSearchProv('50');
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.getOverallRat('3');
        provHos.clickApplyFilter();
        provHos.displayOverRateThree();
       });
       it('TC_PDP_PRV_HOS_143 : verify the functionality of filter "Pating rating" drop down',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('50');
        provHos.ClickSearchProv('50');
        provHos.clickProviderDownArrow();
        provHos.getPatientSurveyRating();
        provHos.clickApplyFilter();
        provHos.displayPatientSurRat();
       });
       it('TC_PDP_PRV_HOS_144 : verify the functionality of filter "Pating rating" with 2 star rating',()=>{     
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('60');
        provHos.ClickSearchProv('60');
        provHos.clickProviderDownArrow();
        provHos.getPatientSurveyRating();
        provHos.getPatientSurveyRat('2');
        provHos.clickApplyFilter();
       });
       it('TC_PDP_PRV_HOS_145 : verify the functionality of Yes radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('70');
        provHos.ClickSearchProv('70');
        provHos.clickProviderDownArrow();
        provHos.getEmergencyYes();
        provHos.clickApplyFilter();
        provHos.displayEmergYes();
       }); 
       it('TC_PDP_PRV_HOS_146 : verify the functionality of No radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('80');
        provHos.ClickSearchProv('80');
        provHos.clickProviderDownArrow();
        provHos.getEmergencyNo();
        provHos.clickApplyFilter();
        provHos.displayEmergNo();
       });
       it('TC_PDP_PRV_HOS_147 : verify the functionality of both radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('90');
        provHos.ClickSearchProv('90');
        provHos.clickProviderDownArrow();
        provHos.getEmergencyBoth();
        provHos.clickApplyFilter();
        provHos.displayEmergBoth();
       });
       it('TC_PDP_PRV_HOS_148 : verify the functionality of clear filter button',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('100');
        provHos.ClickSearchProv('100');
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.getOverallRat('4');
        provHos.clickClearFilter();
        provHos.setFiltertoDefault();  
       });
       it('TC_PDP_PRV_HOS_149 : verify the functionality of Hospital Name text box',()=>{     
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setHospitalName('RALEIGH OAKS BEHAVIORAL HEALTH');
        provHos.setRadius('25');
        provHos.ClickSearchProv('25')
        provHos.displayHosName('RALEIGH OAKS BEHAVIO...');
        
       });
       it("TC_PDP_PRV_HOS_000 : verify the functionality of Radius if it is above 200 miles",()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('300');
        provHos.disabledSearchProvBtn();
       });
    
    
});
