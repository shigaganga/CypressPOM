import LoginPage from "../pages/LoginPage";

import LandingPage from "../pages/LandingPage";

import HomePage from "../pages/HomePage";
 
describe('HomePage test', () => {

    let testData = null;

    const loginPage = new LoginPage();

    const recPage = new LandingPage();

    const homepage = new HomePage();
 
    before(() => {

        //return cy.fixture('LoginFixture').then((data) => {
cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
            //testData = data;

        });

    });
 
    beforeEach(() => {

        if (!testData || !testData.username || !testData.password || !testData.baseUrl) {

            throw new Error('Test data or required fields not loaded!');

        }

        cy.session('Home session', () => {

            cy.visit(testData.baseUrl);

            loginPage.setUserName(testData.username);

            loginPage.setPassword(testData.password);

            loginPage.clickLoginBtn();

            recPage.clickCreateRecommendation();

            cy.wait(500);

        });
 
        cy.visit(testData.homePage_url);

    });
 
    it('TC_PDP_AiVante_Logo_01, Verify the functionality of Aivante logo', () => {

        homepage.clickAiVanteLogo();

        cy.log('AiVante logo test case passed');

    });

    it('TC_PDP_CRT_REC_02, Verify Recommendation email', () => {

        cy.wait(2000);

        homepage.enterEmail(testData.email);

    });

    it('TC_PDP_CRT_REC_BH_03, Verify health Profile', () => {

      cy.wait(500);
       homepage.clickhealthArrow();

        homepage.clickHealthProfile(testData.healthProfile);
        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_BH_04, Verify Best health Profile', () => {
       cy.wait(500);
       homepage.clickhealthArrow();

        homepage.clickHealthProfile("Best Health");

        cy.wait(1000);

        //homepage.clickBestHealth(testData.healthProfileOne);

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_BH_05, Verify Good health Profile', () => {
        cy.wait(500);
       homepage.clickhealthArrow();


        homepage.clickHealthProfile("Good Health");

        cy.wait(1000);

        //homepage.clickGoodHealth(testData.healthProfileTwo);

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MH_06, Verify Moderate health Profile', () => {
        cy.wait(500);
       homepage.clickhealthArrow();


        homepage.clickHealthProfile("Moderate Health");

        cy.wait(1000);

       // homepage.clickModerateHealth(testData.healthProfileThree);

       // cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_PH_07, Verify Poor healthProfile', () => {
        cy.wait(500);
       homepage.clickhealthArrow();


        homepage.clickHealthProfile("Poor Health");

        cy.wait(1000);

        //homepage.clickPoorHealth(testData.healthProfileFour);

       // cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_SH_08, Verify Sick health Profile', () => {
        cy.wait(500);
       homepage.clickhealthArrow();


        homepage.clickHealthProfile("Sick");

        cy.wait(1000);

        //homepage.clickSickHealth(testData.healthProfileFive);

        //cy.wait(1000);

    });

    it('TC_PDP_REC_HP_MSG_09, Verify the Health Profile msg link.', () => {

        homepage.clickHealthProfileMSG();

        cy.wait(1000);

        cy.log('Health Profile msg link test case passed')

    });

    it('TC_PDP_CRT_REC_NAME_10, Verify Recommendation Name', () => {

        cy.wait(1000);

        homepage.enterName(testData.name);

        cy.wait(1000);

    });

    it('TC_PDP_REC_LE_11, Verify life expectancy', () => {

        homepage.enterLifeexpectancy(testData.lifeExpectancy);

        cy.wait(1000);

    });

    it('TC_PDP_REC_LE_MSG_12, Verify life expectancy msg link.', () => {

        homepage.clicklifeExpectancyMSG();

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_DOB_13, Verify the month', () => {

        homepage.clickCalenderEle();

        cy.wait(1000);

        homepage.clickYear(testData.yearOfBirth);

        cy.wait(500);

        homepage.clickMonth(testData.monthOfBirth);

        cy.wait(500);

    });

    it('TC_PDP_CRT_REC_GENDER_FEMALE_14, Verify the Female', () => {

        //homepage.selectGender(gender)();

        //cy.wait(1000);
        homepage.clickGender();

     cy.wait(1000);
        homepage.selectGender(testData.gender);

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_GENDER_MALE_15, Verify the male', () => {

        homepage.clickGender();

        cy.wait(2000);

        homepage.selectGender("Male");

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_TB_YES_16, Verify Tabacco Yes', () => {

        cy.wait(2000);

        homepage.clickTabaccoYes(testData.tobacco);

        cy.wait(500);

    });

    it('TC_PDP_CRT_REC_TB_YES_17, Verify Tabacco No', () => {

        cy.wait(2000);

        homepage.clickTabaccoNo(testData.tobaccoNo);

        cy.wait(500);

    });

    it('TC_PDP_CRT_REC_TB_MSG_18, Verify the Tabacco user link', () => {

        homepage.clickTobaccoUserlink();

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_JOINTLY_19, Verify tax filing jointly', () => {

        cy.wait(1000);

        homepage.selectTaxFilingStatus(testData.taxFilingStatus);

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_INDIV_20, Verify tax filing individual', () => {
        cy.wait(1000);

        homepage.selectTaxFilingStatus("individual");

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_NAME_21, Verify Zip code', () => {

        cy.wait(1000);

        homepage.enterZip(testData.zip);

        cy.wait(1000);

        homepage.clickSearch();

    });

    it('TC_PDP_STREET_22, Verify the street', () => {

        homepage.enterStreet(testData.street);

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MT_23, Verify the MagiTier text field', () => {

        homepage.magiTierTxtField();

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MT1_24, Verify the MagiTier', () => {

       /* homepage.clickMagiTier();

        cy.wait(2000);

        homepage.clickMaggiTireOptions(testData.magiTier);

        cy.wait(1000);*/
        homepage.clickMagiTier(testData.magiTier);
        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MT2_25, Verify the MagiTier one', () => {

        homepage.clickMagiTier("< $ 212K");

        cy.wait(1000);

        //homepage.clickMagiTier1(testData.magiTierOne);

        //cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MT3_26, Verify the MagiTier two', () => {

        homepage.clickMagiTier("$ 212K to $ 266K");

        cy.wait(1000);

        //homepage.clickMagiTier2(testData.magiTierTwo);

       // cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MT4_27, Verify the MagiTier three', () => {

        homepage.clickMagiTier("$ 266K to $ 334K");

        cy.wait(1000);

        //homepage.clickMagiTier3(testData.magiTierThree);

        //cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MT5_28, Verify the MagiTier four', () => {

        homepage.clickMagiTier("$ 334K to $ 400K");

        cy.wait(1000);

        //homepage.clickMagiTier4(testData.magiTierFour);

       // cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MT5_29, Verify the MagiTier five', () => {

        homepage.clickMagiTier("$ 400K to $ 750K");

        cy.wait(1000);

        //homepage.clickMagiTier5(testData.magiTierFive);

       // cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_MT5_30, Verify the MagiTier six', () => {

        homepage.clickMagiTier(" > $750K");

        cy.wait(1000);

        //homepage.clickMagiTier6(testData.magiTierSix);

        //cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_COMM_EMAIL_31, Verify the Communication Email', () => {

        homepage.entercommunicationEmail(testData.communicationEmail);

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_CONTACT_32, Verify the Contact', () => {

        homepage.enterContact(testData.contactNumber);

        cy.wait(1000);

    });

    it('TC_PDP_CRT_REC_CONTACT_33, Verify the Contact', () => {

        homepage.selectConciergeOption(testData.conceirge);

        cy.wait(500);

    });

    it('TC_PDP_CRT_REC_CONTACT_34, Verify the ConceirgeNo', () => {

        cy.wait(500);

        homepage.clickConceirgeNo(testData.ConceirgeNo);

        cy.wait(500);

    });

    it('TC_PDP_CRT_REC_CONTACT_35, Verify the ConceirgeYes', () => {

        cy.wait(500);

        homepage.clickConciergeYes(testData.ConceirgeYes);

        cy.wait(500);

    });

    /*it('TC_PDP_CRT_REC_CONTACT_36, Verify the Concerierge Amount', () => {
        homepage.clickConciergeYes(testData.ConceirgeYes);

        cy.wait(500);

        homepage.enterConceriergeAmount(testData.ConceriergeAmount);

        cy.wait(500);

    });*/

    it('TC_PDP_NEXT_37, Verify the Next button in the home page', () => {

        cy.wait(1000);

        homepage.enterEmail(testData.email);

        cy.wait(1000);

        homepage.enterName(testData.name);

        cy.wait(1000);

        homepage.enterZip(testData.zip);

        cy.wait(500);

        homepage.clickSearch();

        homepage.clicknextButt();

        cy.wait(1000);

    });
 
 
});
 