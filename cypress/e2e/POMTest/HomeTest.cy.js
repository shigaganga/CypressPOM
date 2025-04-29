import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
describe('HomePage test', () => {
    const homepage = new HomePage();
    beforeEach(() => {
        cy.session("prescription session", () => {
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
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/home')
    });

    it('TC_PDP_AiVante_Logo_01 Verify the functionality of Aivante logo', () => {
        homepage.clickAiVanteLogo;
        cy.log('AiVante logo test case passed')
    });
    it('TC_PDP_CRT_REC_08, Verify Recommendation email', () => {
        cy.wait(2000);
        homepage.enterEmail("chhabi@gmail.com");
    });
    it('TC_PDP_CRT_REC_HP_12, Verify the health profile field', () => {
        homepage.clickHealthProfile();
        cy.wait(2000);
        cy.log('health profile test case passed')
    });
    it('TC_PDP_CRT_REC_BH_13, Verify Best health Profile', () => {
        homepage.clickHealthProfile();
        cy.wait(2000);
        homepage.clickBestHealth();
    });
    it('TC_PDP_REC_GH_14, Verify Good health Profile', () => {
        homepage.clickHealthProfile();
        cy.wait(1000);
        homepage.clickGoodHealth();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_MH_15, Verify Moderate health Profile', () => {
        homepage.clickHealthProfile();
        cy.wait(1000);
        homepage.clickModerateHealth();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_PH_16, Verify Poor healthProfile', () => {
        homepage.clickHealthProfile();
        cy.wait(1000);
        homepage.clickPoorHealth();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_SH_17, Verify Sick health Profile', () => {
        homepage.clickHealthProfile();
        cy.wait(1000);
        homepage.clickSickHealth();
        cy.wait(1000);
    });
    it('TC_PDP_REC_HP_MSG_18, Verify the Health Profile msg link.', () => {
        homepage.clickHealthProfileMSG();
        cy.wait(1000);
        cy.log('Health Profile msg link test case passed')
    });
    it('TC_PDP_CRT_REC_NAME_19, Verify Recommendation Name', () => {
        cy.wait(1000);
        homepage.enterName('Lata');
        cy.wait(1000);
    });
    it('TC_PDP_REC_LE_22, Verify life expectancy', () => {
        homepage.enterLifeexpectancy('90');
        cy.wait(1000);
    });
    it('TC_PDP_REC_LE_MSG_27, Verify life expectancy msg link.', () => {
        homepage.clicklifeExpectancyMSG();
        cy.wait(1000);
    });
    it('TC_PDP_REC_DOB_CAL_28, Verify the calender', () => {
        homepage.clickCalenderEle();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_DOB_30, Verify the year', () => {
        homepage.clickCalenderEle();
        cy.wait(1000);
        homepage.clickYear();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_DOB_32, Verify the month', () => {
        homepage.clickCalenderEle();
        cy.wait(1000);
        homepage.clickYear();
        cy.wait(1000);
        homepage.clickMonth();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_GENDER_33, Verify the Gender', () => {
        homepage.clickGender();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_GENDER_MALE_34, Verify the male', () => {
        homepage.clickGender();
        cy.wait(2000);
        homepage.clickMale();
        cy.wait(2000);
    });
    it('TC_PDP_CRT_REC_GENDER_FEMALE_35, Verify the female', () => {
        homepage.clickGender();
        cy.wait(2000);
        homepage.clickFemale();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_TB_YES_36, Verify TabaccoYes', () => {
        cy.wait(2000);
        homepage.clickTabaccoYes();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_TB_NO_37, Verify TabaccoNo', () => {
        homepage.clickTabaccoNo();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_TB_MSG_38, Verify the Tabacco user link', () => {
        homepage.clickTobaccoUserlink();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_JOINTLY_39, Verify tax filing jointly', () => {

        homepage.clickTaxJoin();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_INDIV_40, Verify tax filing individual', () => {
        homepage.clickTaxIndiv();
        cy.wait(1000);
    });
    it('TC_PDP_STREET_41, Verify the street', () => {
        homepage.enterStreet('Street');
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_ZC_42, Verify the Zip Code', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
    });
    it('TC_PDP_CRT_REC_ZC_49, Verify the Search icon', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
       homepage.clickSearchIcon();
        cy.wait(2000);
    });
    it('TC_PDP_CRT_REC_COUNTY_51, Verify the County State', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearchIcon();
        cy.wait(2000);
        homepage.clickCountyState();
        cy.wait(2000);
    });
    it('TC_PDP_CRT_REC_CITY_54, Verify the City', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearchIcon();
        cy.wait(2000);
        homepage.clickCountyState();
        cy.wait(2000);
        homepage.clickCity();
        cy.wait(2000);
       });
    it('TC_PDP_CRT_REC_CITY_55, Verify the City1', () => {
        homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearchIcon();
        cy.wait(2000);
        homepage.clickCountyState();
        cy.wait(2000);
        homepage.clickCity();
        cy.wait(2000);
        homepage.clickCity1();
        cy.wait(2000);
    });
    it('TC_PDP_CRT_REC_CITY_56, Verify the City2', () => {
homepage.enterZip('80108');
        cy.wait(2000);
        homepage.clickSearchIcon();
        cy.wait(2000);
        homepage.clickCountyState();
        cy.wait(2000);
        homepage.clickCity();
        cy.wait(2000);
        homepage.clickCity2();
        cy.wait(2000);
    });
    it('TC_PDP_CRT_REC_MT_57, Verify the MagiTier', () => {
        homepage.clickMagiTier();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_MT1_58, Verify the MagiTier1', () => {
        homepage.clickMagiTier();
        cy.wait(1000);
        homepage.clickMagiTier1();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_MT2_59, Verify the MagiTier2', () => {
        homepage.clickMagiTier();
        cy.wait(1000);
        homepage.clickMagiTier2();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_MT3_60, Verify the MagiTier3', () => {
        homepage.clickMagiTier();
        cy.wait(1000);
        homepage.clickMagiTier3();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_MT4_61, Verify the MagiTier4', () => {
        homepage.clickMagiTier();
        cy.wait(1000);
        homepage.clickMagiTier4();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_MT5_62, Verify the MagiTier5', () => {
        homepage.clickMagiTier();
        cy.wait(1000);
        homepage.clickMagiTier5();
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_MT6_63, Verify the MagiTier6', () => {
        homepage.clickMagiTier();
        cy.wait(1000)
        homepage.clickmagiTier6();
        cy.wait(1000)
    });
    it('TC_PDP_CRT_REC_COMM_EMAIL_64, Verify the Communication Email', () => {
        homepage.entercommunicationEmail('abc@gmail.com');
        cy.wait(1000);
    });
    it('TC_PDP_CRT_REC_CONTACT_67, Verify the Contact', () => {
        homepage.enterContact('1234567890');
        cy.wait(1000);
    });
    it('TC_PDP_NEXT_68, Verify the Next button in the home page', () => {
        homepage.clickNext();
        cy.wait(1000);
    });



});