import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";    
import PreferencePage from "../pages/PreferencePage";    
import PlanselectionPage from "../pages/PlanselectionPage";
import ProviderHospitalsPage from "../pages/ProviderHospitalsPage";
describe('ProviderHospitalTest',()=>{
    beforeEach(()=>{
        cy.session('ProviderHospital Session',()=>{
       // const login=new LoginPage();
        
     //   login.visit();
     cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
     cy.fixture('LoginFixture').then((data)=>{
         const ln=new LoginPage();
         ln.setUserName(data.username);
         ln.setPassword(data.password);
         ln.clickLoginBtn();
         ln.verifyLogin();
           
                 
      /*  login.setUserName('testuser@gmail.com');
        login.setPassword('user123');       
        login.clickLogin();
        login.verifyLogin();*/
        const recPage = new LandingPage();
           recPage.clickCreateRecommendation();
    
    

      /*  const land=new LandingPage();
        
        land.searchfilter('Lego');
        land.clickItemsPerPage();
        land.getTable();
        land.setCreateRecBtn();*/

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
    
        
       
        /*home.enterEmail
        

        home.clickHealthProfile();
        home.clickModerateHealth();
        home.clickYear();
        home.clickMonth();
        home.enterName(Pinecone);
        home.clickCountyState();
        home.enterLifeexpectancy();
        home.clickDateOfBirth();
        home.clickGender();
        home.clickTobaccoStatus();
        home.clickTaxFillingStatus();
        home.clickZipCode();
        home.clickNextBtn();*/
    
    

        
            const prefPage=new PreferencePage();
        
        prefPage.clicknoRadioDrugCost();   
        prefPage.clickNextPrefPage();

        const planSelect = new PlanselectionPage();
            planSelect.setProviderButtn();



       /* const prov=new ProviderPage();
        
        prov.getProvider();*/

        const provHos=new ProviderHospitalsPage();
        
        provHos.clickHospitalCat();
    });
    cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-providers")
    });
        it('TC128verify the functionality of Category as "Hospitals"',()=>{
            const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();

            
        });
        it('TC129verify the functionality of "Search " button.',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
        });
        it('TC130verify the functionality of Provider down arrow',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
            provHos.clickProviderDownArrow();
        });
        it('TC131verify the functionality of Distance filter in Hospital category with valid distance',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
            provHos.clickProviderDownArrow();
            provHos.setDistance('25');
            provHos.clickApplyFilter();
        });
        it('TC132verify the functionality of Distance filter in Hospital category with invalid distance >num',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
            provHos.clickProviderDownArrow();
            provHos.setDistance('30');
            provHos.displayError(); 
            provHos.disabledapplyfilter();
        });
        it('TC133verify the functionality of Distance filter in Hospital category with invalid distance >alphanumeric',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('25');
            provHos.ClickSearchProv('25');
            provHos.clickProviderDownArrow();
            provHos.setDistance('@a3');
            provHos.clickApplyFilter();
            provHos.getNoProviderFound();
        });
        it('TC134valiadate the functionality of filter "Hospital types" in Hospital category',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('40');
            cy.wait(2000);
            provHos.ClickSearchProv('40');
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.displayHosType();
        });
        it('TC135validate the functionality of filter "Hospital types" with type "Acute Care Hospitals"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('50');
            provHos.ClickSearchProv('50').then((providerFound)=>{
                //provHos.checkNoProviderFound().then((providerFound)=>{
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
        it('TC136validate the functionality of filter "Hospital types" with type "Acute Care - Veterans Administration"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('50');
            provHos.ClickSearchProv('50')
            .then((providerFound)=>{
                //provHos.checkNoProviderFound().then((providerFound)=>{
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
        it('TC137validate the functionality of filter "Hospital types" with type "Critical Access Hospitals"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('20');
            provHos.ClickSearchProv('20').then((providerFound)=>{
                //provHos.checkNoProviderFound().then((providerFound)=>{
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
        it('TC138validate the functionality of filter "Hospital types" with type "Childrens"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('100');
            provHos.ClickSearchProv('100')
            .then((providerFound)=>{
                //provHos.checkNoProviderFound().then((providerFound)=>{
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
       it('TC139validate the functionality of filter "Hospital types" with type "Psychiatric"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('40');
            provHos.ClickSearchProv('40').then((providerFound)=>{
                //provHos.checkNoProviderFound().then((providerFound)=>{
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
       it('TC140validate the functionality of filter "Hospital types" with type "Acute Care - Department of Defense"',()=>{     
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius('100');
            provHos.ClickSearchProv('100').then((providerFound)=>{
                //provHos.checkNoProviderFound().then((providerFound)=>{
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
       it('TC141verify the functionality of Overall rating filter dropdown',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('50');
        provHos.ClickSearchProv('50');
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.displayOverallRatePanel();
       });
       it('TC142verify the functionality of filter "Overall rating" with 3 star rating',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('50');
        provHos.ClickSearchProv('50');
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.getOverallRatThree();
        provHos.clickApplyFilter();
        provHos.displayOverRateThree();
       });
       it('TC143verify the functionality of filter "Pating rating" drop down',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('50');
        provHos.ClickSearchProv('50');
        provHos.clickProviderDownArrow();
        provHos.getPatientSurveyRating();
        provHos.clickApplyFilter();
        provHos.displayPatientSurRat();
       });
       it('TC144verify the functionality of filter "Pating rating" with 2 star rating',()=>{     
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('60');
        provHos.ClickSearchProv('60');
        provHos.clickProviderDownArrow();
        provHos.getPatientSurveyRating();
        provHos.getPatientSurveyRatTwo();
        provHos.clickApplyFilter();
        //provHos.displaypatientSurRatTwoEle();
       });
       it('TC145 verify the functionality of Yes radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('70');
        provHos.ClickSearchProv('70');
        provHos.clickProviderDownArrow();
        provHos.getEmergencyYes();
        provHos.clickApplyFilter();
        provHos.displayEmergYes();
       }); 
       it('TC146 verify the functionality of No radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('80');
        provHos.ClickSearchProv('80');
        provHos.clickProviderDownArrow();
        provHos.getEmergencyNo();
        provHos.clickApplyFilter();
        provHos.displayEmergNo();
       });
       it('TC147verify the functionality of both radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('90');
        provHos.ClickSearchProv('90');
        provHos.clickProviderDownArrow();
        provHos.getEmergencyBoth();
        provHos.clickApplyFilter();
        provHos.displayEmergBoth();
       });
       it('TC148verify the functionality of clear filter button',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('100');
        provHos.ClickSearchProv('100');
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.getOverallRatFive();
        provHos.clickClearFilter();
        provHos.setFiltertoDefault();
        
        
       });
       it('TC149verify the functionality of Hospital Name text box',()=>{     
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setHospitalName('RALEIGH OAKS BEHAVIORAL HEALTH');
        provHos.setRadius('25');
        provHos.ClickSearchProv('25');
        provHos.displayHosName('RALEIGH OAKS BEHAVIO...');
        
       });
       it("TC verify the functionality of Radius if it is above 200 miles",()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('300');
        provHos.disabledSearchProvBtn();
       });


    
});
