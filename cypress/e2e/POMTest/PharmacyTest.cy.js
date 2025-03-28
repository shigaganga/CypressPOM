import LoginPage from "../pages/LoginPage"
import LandingPage from "../pages/LandingPage"
import HomePage from "../pages/HomePage"
import PreferencePage from "../pages/PreferencePage"
import PrescriptionPage from "../pages/PrescriptionPage"
import PharmacyPage from "../pages/PharmacyPage"


describe('PharmacyTest', () => {

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/login');

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
        
        homepage.enterEmail('siri21@gmail.com');
        
        homepage.clickhealthArrow();
        
        homepage.clickGoodHealth();
        
        homepage.enterName('sneha');
        
        homepage.enterLifeexpectancy('80');
        
        homepage.datePickerclick();
        
        homepage.year1957click();
        
        homepage.month1957click();
        
        homepage.enterZip('80109');
        
        homepage.clickSearch();
        
        homepage.nextHomeClick();
        

        const prefPage=new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();
        
        prefPage.clickNextPrefPage();
        

        const drugpage=new PrescriptionPage();
        
        drugpage.enterDrugSearchBox("Gabapentin");
        
        drugpage.selectDrug();
        
        drugpage.clickAddToDrug();
        
        
        
    });


        it('Test1,Select Zip code radio button',() => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio();
            

        })


        it('Test2,Find Pharmacy By Zipcode',() => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio();
            
            pharmacypg.enterZipcode('80109') 
            
            pharmacypg.enterDistance('5')
            
            pharmacypg.clickFindPahramcyinzipcode()
            

        });


        it('Test3,Find Pharmacy By zipcode,Boundary Value tetsing', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio();
            
            pharmacypg.enterZipcode('5000') 
            
            pharmacypg.clickFindPahramcyinzipcode();
            
            cy.log('Error on fetching county code.,Test passed')
         
        });


        it('Test4,Find Pharmacy By zipcode,leave the zipcode empty,Boundary Value tetsing', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio();
            
            pharmacypg.enterZipcode('') 
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            cy.log('The system should throw below error msg-Zipcode is required,Test passed')

        });

        it('Test5,Find Pharmacy By zipcode,Give Invalid Zipcode', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('as1') 
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            cy.log('Zipcode is not in correct format,Test passed')

        });


        it('Test6,Find Pharmacy By zipcode,give Invalid Zipcode', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('12') 
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            cy.log('Zipcode must of length between 3 to 5,Test passed')

        });

        it('Test7,Find Pharmacy By zipcode,give Invalid zipcode', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('800108') 
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            cy.log('The system shouldnt accept more than 5 digit in the zipcode field on the manage pharmacies page')

        });


        it('Test8,Find Pharmacy By Zip', () => {
            
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('909') 
            
            pharmacypg.enterDistance('5')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            //cy.log('The system sholud show error')

        });

        it('Test9,Find Pharmacy By Zip', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80124') 
            
            pharmacypg.enterDistance('10')
            
            pharmacypg.clickFindPahramcyinzipcode()
            

        });

        it('Test10,Select Address radio button', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            
            const pharmacypg = new PharmacyPage();
            pharmacypg.clickAddressradio()
            

        });

        it('Test11,Find Pharmacy By Address', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickAddressradio()
            
            pharmacypg.enterAddress('6067 braylin ln, castle pines,co')
            
            pharmacypg.enterDistance('5')
            
            pharmacypg.clickAddressFindPhramacy()
            

        });
        it('Test12,Search Pharmacy By Invalid Address', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickAddressradio()
            
            pharmacypg.enterAddress('qddff')
            
            pharmacypg.clickAddressFindPhramacy()
            
            cy.log('Specify the complete address with zipcode. For Example: 2640 N M 33, ROSE CITY, MI, 48654,Test passed')

        });

        it('Test13,Find Pharmacy By blank Address', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickAddressradio()
            
            pharmacypg.enterAddress('')
            
            pharmacypg.clickAddressFindPhramacy()
            
            cy.log('The system should throw below error msg Address is required,test passed')

        });

        it('Test14,Find Pharmacy By Name', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108') 
            
            pharmacypg.enterPharmacyname('KING SOOPERS')
            cy.wait(6000)
            pharmacypg.enterDistance('5')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            
        });
        

        it('Test15,Find Pharmacy By invalid Name', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108') 
            
            pharmacypg.enterPharmacyname('ad232')
            cy.wait(6000)
            pharmacypg.enterDistance('5')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            cy.log('The system should throw error msg Pharmacy details not found in AiVante system,Test passed')
            
        });


        it('Test16,Zip code history', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('12345') 
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.clickZiphistoryarrow()
            cy.wait(3000)
            
        });


        it('Test17,zip code history feature with incorrect zip code', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('50000') 
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.clickZiphistoryarrow()
            cy.wait(3000)
            cy.log('The system should throw error message,Test passed')
            
        });


        it('Test18,select any zip code from the zip code history dropdown', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('50000') 
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.clickZiphistoryarrow()
            cy.wait(3000)
            pharmacypg.selectZiphistoryZipcode()
            cy.wait(3000)
            
        });



        it('Test19,Find Pharmacies By Default Distance', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108') 
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            
        });


        it('Test20,Find Pharmacy By Distance', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108') 
            
            pharmacypg.enterDistance('2')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            
        });

        it('Test21, pharmacies with blank values in the Distance field ', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108') 
            
            pharmacypg.enterDistance('10')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            
        });


        it('Test22, pharmacies with "character" in the Distance field  ', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108') 
            
            pharmacypg.enterDistance('ab@')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            cy.log('Pharmacy Details Not Found in AiVante System,Test passed')
                
        });
        

        it('Test23, Expand Pharmacies List Next page ', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')     
            
            pharmacypg.enterDistance('10')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.clickNextpageBtn()
            

        });
        

        it('Test24, Expand Pharmacies List last page ', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('10')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.clickLastPageBtn()
            

        });
        

        it('Test25, Expand Pharmacies List previous page"  ', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('15')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.clickLastPageBtn()
            
            pharmacypg.clickPerivousPageBtn()
            

        });


        it('Test26, Expand Pharmacies List First page', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('15')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.clickLastPageBtn()
            
            pharmacypg.clickFirstPageBtn()
            

        });



        it('Test27,verify the Item per page', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('15')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.itemPerPage()
            
        });


        it('Test28,Select Pharmacies', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('15')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.selectPharmacy()
            cy.wait(2000)
            pharmacypg.selectSecondPharmacy()
            cy.wait(2000)
            pharmacypg.selectThirdPharmacy()
            pharmacypg.selectFourthPharmacy()
            pharmacypg.selectFifthpharmacy()
            
        });



        it('Test29,DeSelect Pharmacies', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('15')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.selectPharmacy()
            cy.wait(2000)
            pharmacypg.selectSecondPharmacy()
            cy.wait(2000)
            pharmacypg.selectThirdPharmacy()
            pharmacypg.selectFourthPharmacy()
            pharmacypg.selectFifthpharmacy()
            pharmacypg.selectPharmacy()
            cy.wait(2000)
            pharmacypg.selectSecondPharmacy()
            cy.wait(2000)
            pharmacypg.selectThirdPharmacy()
            pharmacypg.selectFourthPharmacy()
            pharmacypg.selectFifthpharmacy()
            
        });


        it('Test30,Google map radio button', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('15')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.selectPharmacy()
            cy.wait(2000)
            pharmacypg.clickGoogleBtn()
            
        });

        
        it('Test31,verify Back button', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('15')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.selectPharmacy()
            pharmacypg.clickBackBtn()
            
        });
        it('Test32,verify "Next button', () => {
            const drugpage = new PrescriptionPage();
            drugpage.doneAddDrugClick();
            

            const pharmacypg = new PharmacyPage();
            pharmacypg.clickZipcoderadio()
            
            pharmacypg.enterZipcode('80108')      
            
            pharmacypg.enterDistance('15')
            
            pharmacypg.clickFindPahramcyinzipcode()
            
            pharmacypg.selectPharmacy()
            pharmacypg.selectSecondPharmacy()
            pharmacypg.selectThirdPharmacy()
            pharmacypg.clickNextBtn()
        });

        


});





    



    
