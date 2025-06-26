import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";    
import PreferencePage from "../pages/PreferencePage";    
import PlanselectionPage from "../pages/PlanselectionPage";
import ProviderHospitalsPage from "../pages/ProviderHospitalsPage";
describe('ProviderHospitalTest',()=>{
    let testdata = null;
    before(()=>{
         cy.fixture('LoginFixture').then((data)=>{
            testdata=data;
         });

    })
    beforeEach(()=>{
        cy.session('ProviderHospital Session',()=>{
           
         cy.visit(testdata.baseUrl);
      cy.wait(500);

      const lPage = new LoginPage();
      lPage.setUserName(testdata.username);
      cy.wait(500);
      lPage.setPassword(testdata.password);
      cy.wait(500);
      lPage.clickLoginBtn();
      cy.wait(500);

      const recPage = new LandingPage();
      recPage.clickCreateRecommendation();
      cy.wait(500);

      const homepage = new HomePage();
      homepage.enterEmail(testdata.email);
      cy.wait(500);
      homepage.enterName(testdata.name);
      cy.wait(500);
      homepage.clickDatePicker();
      cy.wait(500);
      homepage.clickYear(testdata.yearOfBirth);
      cy.wait(500);
      homepage.clickMonth(testdata.monthOfBirth);
      cy.wait(500);
      homepage.clickGender();
      cy.wait(500);
      homepage.selectGender(testdata.gender);
      cy.wait(500);
      homepage.enterStreet(testdata.street);
      cy.wait(500);
      homepage.enterZip(testdata.zip);
      cy.wait(500);
      homepage.clickSearch();
      cy.wait(500);
      homepage.entercommunicationEmail(testdata.communicationEmail);
      cy.wait(500);
      homepage.enterContact(testdata.contactNumber);
      cy.wait(500);
      homepage.clickhealthArrow();
      cy.wait(500);
      homepage.clickHealthProfile(testdata.healthProfile);
      cy.wait(500);
      homepage.enterLifeexpectancy(testdata.lifeExpectancy);
      cy.wait(500);
      homepage.selectTobaccoOption(testdata.tobacco);
      cy.wait(500);
      homepage.selectTaxFilingStatus(testdata.taxFilingStatus);
      cy.wait(500);
      homepage.clickMagiTier();
      cy.wait(500);
      homepage.clickMaggiTireOptions(testdata.magiTier);
      cy.wait(500);
      homepage.selectConciergeOption(testdata.conceirge);
      cy.wait(500);
      homepage.nextHomeClick();
      cy.wait(500);

      const prefPage = new PreferencePage();
        
            prefPage.clicknoRadioDrugCost();   
             cy.wait(500);

            prefPage.clickNextPrefPage();
           cy.wait(500);

        const planSelect = new PlanselectionPage();
        
            planSelect.setProviderButtn();

        const provHos=new ProviderHospitalsPage();
        
            provHos.clickHospitalCat();
    });

           
        cy.visit(testdata.manageProviders_url)
    });
     
        it('TC_PDP_PRV_HOS_136 : verify the functionality of Category as "Hospitals"',()=>{
            cy.wait(500);
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();    
        });
        it('TC_PDP_PRV_HOS_137 : verify the functionality of Hospital Name text box',()=>{     
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setHospitalName(testdata.ProviderHosName);
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.displayHosName(testdata.ProviderHosExepectName);
        
       });
       it("TC_PDP_PRV_HOS_138 : verify the functionality of Radius if it is above 200 miles",()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius('300');
        provHos.disabledSearchProvBtn();
       });
       it('TC_PDP_PRV_HOSP_139 : Verify Zip Code Field Accepts Valid Zip Codes',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setZipcode(testdata.ProviderHosZipcode);
        provHos.clickSearchIcon();
        provHos.ClickSearchProv('35');
        
       });
        
       it('TC_PDP_PRV_HOS_140 : verify the functionality of Provider down arrow',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        });
        it('TC_PDP_PRV_HOS_141 : verify the functionality of Distance filter in Hospital category with valid distance',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius);
            provHos.clickProviderDownArrow();
            provHos.setDistance('25');
            provHos.clickApplyFilter();
        });
        it('TC_PDP_PRV_HOS_142 : verify the functionality of Distance filter in Hospital category with invalid distance >num',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius);
            provHos.clickProviderDownArrow();
            provHos.setDistance('30');
            provHos.displayError(); 
            provHos.disabledapplyfilter();
        });
        it('TC_PDP_PRV_HOS_143 : verify the functionality of Distance filter in Hospital category with invalid distance >alphanumeric',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius);
            provHos.clickProviderDownArrow();
            provHos.setDistance('@a3');
            provHos.clickApplyFilter();
            provHos.getNoProviderFound();
        });
        it('TC_PDP_PRV_HOS_144 : valiadate the functionality of filter "Hospital types" in Hospital category',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            cy.wait(2000);
            provHos.ClickSearchProv(testdata.ProviderHosRadius);
            provHos.clickProviderDownArrow();
            provHos.getHospitalType();
            provHos.displayHosType();
        });
        it('TC_PDP_PRV_HOS_145 : validate the functionality of filter "Hospital types" with type "Acute Care Hospitals"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius).then((providerFound)=>{
                
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
        it('TC_PDP_PRV_HOS_146 : validate the functionality of filter "Hospital types" with type "Acute Care - Veterans Administration"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius)
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
        it('TC_PDP_PRV_HOS_147 : validate the functionality of filter "Hospital types" with type "Critical Access Hospitals"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius).then((providerFound)=>{
                
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
        it('TC_PDP_PRV_HOS_148 : validate the functionality of filter "Hospital types" with type "Childrens"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius)
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
       it('TC_PDP_PRV_HOS_149 : validate the functionality of filter "Hospital types" with type "Psychiatric"',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius).then((providerFound)=>{
                
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
       it('TC_PDP_PRV_HOS_150 : validate the functionality of filter "Hospital types" with type "Acute Care - Department of Defense"',()=>{     
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius).then((providerFound)=>{
                
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
       it('TC_PDP_PRV_HOS_151 : verify the functionality of Overall rating filter dropdown',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.displayOverallRatePanel();
       });
       it('TC_PDP_PRV_HOS_152 : verify the functionality of filter "Overall rating" with 3 star rating',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.getOverallRat(testdata.ProviderHosOverAllRat);
        provHos.clickApplyFilter();
        provHos.displayOverRateThree();
       });
       it('TC_PDP_PRV_HOS_153 : verify the functionality of filter "Patient rating" drop down',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        provHos.getPatientSurveyRating();
        provHos.clickApplyFilter();
        provHos.displayPatientSurRat();
       });
       it('TC_PDP_PRV_HOS_154 : verify the functionality of filter "Patient rating" with 2 star rating',()=>{     
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        provHos.getPatientSurveyRating();
        provHos.getPatientSurveyRat(testdata.ProviderHosPatSurveyRat);
        provHos.clickApplyFilter();
       });
       it('TC_PDP_PRV_HOS_155 : verify the functionality of Yes radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        provHos.getEmergencyYes();
        provHos.clickApplyFilter();
        provHos.displayEmergYes();
       }); 
       it('TC_PDP_PRV_HOS_156 : verify the functionality of No radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        provHos.getEmergencyNo();
        provHos.clickApplyFilter();
        provHos.displayEmergNo();
       });
       it('TC_PDP_PRV_HOS_157 : verify the functionality of both radio button in Emergency section',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);    
        provHos.clickProviderDownArrow();
        provHos.getEmergencyBoth();
        provHos.clickApplyFilter();
        provHos.displayEmergBoth();
       });
       it('TC_PDP_PRV_HOS_158 : verify the functionality of clear filter button',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        provHos.getOverallRating();
        provHos.getOverallRat(testdata.ProviderHosOverAllRat);
        provHos.clickClearFilter();
        provHos.setFiltertoDefault();  
       });
       it('TC_PDP_PRV_HOSP_159 : Verify the Apply filter button on the manage-providers/provider-list page.',()=>{
        const provHos = new ProviderHospitalsPage();
        provHos.clickHospitalCat();
        provHos.setRadius(testdata.ProviderHosRadius);
        provHos.ClickSearchProv(testdata.ProviderHosRadius);
        provHos.clickProviderDownArrow();
        provHos.getHospitalType();
        provHos.setAcuteCareHospitals();
        provHos.getOverallRating();
        provHos.getOverallRat(testdata.ProviderHosOverAllRat);
        provHos.getEmergencyBoth();
        provHos.clickApplyFilter(); 
      });
        
       it('TC_PDP_PRV_HOS_000 : verify the functionality of "Search " button.',()=>{
            const provHos = new ProviderHospitalsPage();
            provHos.clickHospitalCat();
            provHos.setRadius(testdata.ProviderHosRadius);
            provHos.ClickSearchProv(testdata.ProviderHosRadius);
        });
       

    });
    
    
//});
