import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
describe('HomePage test', () => {
    const homepage = new HomePage();

    beforeEach(() => {
       // cy.session('Home test', () => {
            cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

            cy.fixture('LoginFixture').then((data) => {
                const loginpage = new LoginPage();
                loginpage.setUserName(data.username);
                loginpage.setPassword(data.password);
                loginpage.clickLoginBtn();
            });
            const landingpage = new LandingPage();
            landingpage.clickCreateRecommendation();
        });
        //cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/home')
    //});

    it('TC-1 Verify the functionality of Aivante logo', () => {
        homepage.clickAiVanteLogo;
        cy.log('AiVante logo test case passed')
    });
    it('TC-2, Verify Recommendation email', () => {
        homepage.enterEmail("chhabi@gmail.com");
    });
    it('TC-3, Verify the health profile field', () => {
        homepage.clickHealthProfile();
        cy.log('health profile test case passed')
    });
    it('TC-4, Verify the Health Profile msg link.', () => {
        homepage.clickHealthProfileMSG();
        cy.log('Health Profile msg link test case passed')
    });
    it('TC-5, Verify Best healthProfile', () => {
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
    });
    it('TC-6, Verify Good healthProfile', () => {
        homepage.clickHealthProfile();
        homepage.clickGoodHealth();
    });
    it('TC-7, Verify Moderate healthProfile', () => {
        homepage.clickHealthProfile();
        homepage.clickModerateHealth();
    });
    it('TC-8, Verify Poor healthProfile', () => {
        homepage.clickHealthProfile();
        homepage.clickPoorHealth();
    });
    it('TC-9, Verify Sick healthProfile', () => {
        homepage.clickHealthProfile();
        homepage.clickSickHealth();
    });
    it('TC-10, Verify Recommendation Name', () => {
        homepage.enterName('Lata');
    });

    it('TC-11, Verify life expectancy', () => {
        homepage.enterLifeexpectancy('90');
    });
    it('TC-12, Verify life expectancy msg link.', () => {
        homepage.clicklifeExpectancyMSG();
    });

    it('TC-13, Verify Date of birth', () => {
        homepage.clickDateOfBirth();
    });

    it('TC-14, Verify the year', () => {
        homepage.clickCalenderEle();
        homepage.clickYear();
        homepage.clickMonth();
    });
    it('TC-15, Verify the male', () => {
        homepage.clickGender();
        cy.wait(2000);
        homepage.clickMale();
        cy.wait(2000);
    });
    it('TC-16, Verify the female', () => {
        homepage.clickGender();
        cy.wait(2000);
        homepage.clickFemale();
    });
    it('TC-17, Verify TabaccoNo', () => {
        homepage.clickTabaccoNo();
    });
    it('TC-18, Verify TabaccoYes', () => {
        homepage.clickTabaccoYes();
    });
    it('TC-19, Verify the Tabacco user link', () => {
        homepage.clickTobaccoUserlink();
    });
    it('TC-20, Verify tax filing jointly', () => {
        homepage.clickTaxJoin();
    });
    it('TC-21, Verify tax filing individual', () => {
        homepage.clickTaxIndiv();
    });
    it('TC-22, Verify the street', () => {
        homepage.enterStreet('Street');
    });
    it('TC-23, Verify the Zip Code', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
    });
    it('TC-24, Verify the Zip Code with Search Icon', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
    });
    it('TC-25, Verify the Zip Code with County, State', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickCountyState();
        cy.wait(2000);
    });
    it('TC-26, Verify the Zip Code with city1', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickCountyState();
        cy.wait(2000);
        homepage.clickCity();
        cy.wait(2000);
        homepage.clickCity1();
        cy.wait(2000);
    });
    it('TC-27, Verify the Zip Code with City2', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickCountyState();
        cy.wait(2000);
        homepage.clickCity();
        cy.wait(2000);
        homepage.clickCity2();
        cy.wait(2000);
    });
    it('TC-28, Verify the MagiTier', () => {
        homepage.clickMagiTier();
    });
    it('TC-29, Verify the MagiTier1', () => {
        const homepage = new HomePage();
        homepage.clickMagiTier();
        homepage.clickMagiTier1();
    });
    it('TC-30, Verify the MagiTier2', () => {
        homepage.clickMagiTier();
        homepage.clickMagiTier2();
    });
    it('TC-31, Verify the MagiTier3', () => {
        homepage.clickMagiTier();
        homepage.clickMagiTier3();
    });
    it('TC-32, Verify the MagiTier4', () => {
        homepage.clickMagiTier();
        homepage.clickMagiTier4();
    });
    it('TC-33, Verify the MagiTier5', () => {
        homepage.clickMagiTier();
        homepage.clickMagiTier5();
    });
    it('TC-34, Verify the Communication Email', () => {
        homepage.entercommunicationEmail('abc@gmail.com');
    });

    it('TC-35, Verify the Contact', () => {
        homepage.enterContact('1234567890');
    });

    it('TC-36, Verify the Next button in the home page', () => {
        homepage.clickNext();
    });



});


