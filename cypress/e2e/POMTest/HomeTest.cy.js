import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
describe('HomePage test', () => {

    beforeEach(() => {
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

    it('TC-1 Verify the functionality of Aivante logo', () => {
        const homepage = new HomePage();
        homepage.clickai;
        cy.log('AiVante logo test case passed')

    });
    it('TC-2, Verify Recommendation email', () => {
        const homepage = new HomePage();
        homepage.enterEmail("Sh@gmail.com");
    });
    it('TC-3, Verify the health profile field', () => {
        const homepage = new HomePage();
        homepage.clickHealthProfile();
        cy.log('health profile test case passed')
    });
    it('TC-4, Verify the Health Profile msg link.', () => {
        const homepage = new HomePage();
        homepage.clickHealthProfileMSG();
        cy.log('Health Profile msg link test case passed')
    });
    it('TC-5, Verify Best healthProfile', () => {
        const homepage = new HomePage();
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
    });
    it('TC-6, Verify Good healthProfile', () => {
        const homepage = new HomePage();
        homepage.clickHealthProfile();
        homepage.clickGoodHealth();
    });
    it('TC-7, Verify Moderate healthProfile', () => {
        const homepage = new HomePage();
        homepage.clickHealthProfile();
        homepage.clickModerateHealth();
    });
    it('TC-8, Verify Poor healthProfile', () => {
        const homepage = new HomePage();
        homepage.clickHealthProfile();
        homepage.clickPoorHealth();
    });
    it('TC-9, Verify Sick healthProfile', () => {
        const homepage = new HomePage();
        homepage.clickHealthProfile();
        homepage.clickSickHealth();
    });
    it('TC-10, Verify Recommendation Name', () => {
        const homepage = new HomePage();
        homepage.enterName('Lata');
    });

    it('TC-11, Verify life expectancy', () => {
        const homepage = new HomePage();
        homepage.enterLifeexpectancy('90');
    });
    it('TC-12, Verify life expectancy msg link.', () => {
        const homepage = new HomePage();
        homepage.clicklifeExpectancyMSG();
    });

    it('TC-13, Verify Date of birth', () => {
        const homepage = new HomePage();
        homepage.clickDateOfBirth();
    });

    it('TC-14, Verify the year', () => {
        const homepage = new HomePage();
        homepage.clickCalenderEle();
        homepage.clickYear();
        homepage.clickMonth();
    });
    it('TC-15, Verify the male', () => {
        const homepage = new HomePage();
        homepage.clickGender();
        cy.wait(2000);
        homepage.clickMale();
        cy.wait(2000);
    });
    it('TC-16, Verify the female', () => {
        const homepage = new HomePage();
        homepage.clickGender();
        cy.wait(2000);
        homepage.clickFemale();
    });
    it('TC-17, Verify TabaccoNo', () => {
        const homepage = new HomePage();
        homepage.clickTabaccoNo();
    });
    it('TC-18, Verify TabaccoYes', () => {
        const homepage = new HomePage();
        homepage.clickTabaccoYes();
    });
    it('TC-19, Verify the Tabacco user link', () => {
        const homepage = new HomePage();
        homepage.clickTobaccoUserlink();
    });
    it('TC-20, Verify tax filing jointly', () => {
        const homepage = new HomePage();
        homepage.clickTaxJoin();
    });
    it('TC-21, Verify tax filing individual', () => {
        const homepage = new HomePage();
        homepage.clickTaxIndiv();
    });
    it('TC-22, Verify the street', () => {
        const homepage = new HomePage();
        homepage.enterStreet('Street');
    });
    it('TC-23, Verify the Zip Code', () => {
        const homepage = new HomePage();
        homepage.enterZip('80108');
        cy.wait(2000);
    });
    it('TC-24, Verify the Zip Code', () => {
        const homepage = new HomePage();
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
    });
    it('TC-25, Verify the Zip Code', () => {
        const homepage = new HomePage();
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickCountyState();
        cy.wait(2000);
    });
    it('TC-26, Verify the Zip Code', () => {
        const homepage = new HomePage();
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
    it('TC-27, Verify the Zip Code', () => {
        const homepage = new HomePage();
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
        const homepage = new HomePage();
        homepage.clickMagiTier();
    });
    it('TC-29, Verify the MagiTier1', () => {
        const homepage = new HomePage();
        homepage.clickMagiTier();
        homepage.clickMagiTier1();
    });
    it('TC-30, Verify the MagiTier2', () => {
        const homepage = new HomePage();
        homepage.clickMagiTier();
        homepage.clickMagiTier2();
    });
    it('TC-31, Verify the MagiTier3', () => {
        const homepage = new HomePage();
        homepage.clickMagiTier();
        homepage.clickMagiTier3();
    });
    it('TC-32, Verify the MagiTier4', () => {
        const homepage = new HomePage();
        homepage.clickMagiTier();
        homepage.clickMagiTier4();
    });
    it('TC-33, Verify the MagiTier5', () => {
        const homepage = new HomePage();
        homepage.clickMagiTier();
        homepage.clickMagiTier5();
    });
    it('TC-34, Verify the Communication Email', () => {
        const homepage = new HomePage();
        homepage.entercommunicationEmail('abc@gmail.com');
    });

    it('TC-35, Verify the Contact', () => {
        const homepage = new HomePage();
        homepage.enterContact('1234567890');
    });

    it('TC-36, Verify the Next button in the home page', () => {
        const homepage = new HomePage();
        homepage.clickNext();
    });



});