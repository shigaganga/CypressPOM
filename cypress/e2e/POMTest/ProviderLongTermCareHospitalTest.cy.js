import LoginPage from "../pages/LoginPage.js";
import ProviderLongTermCareHospitalPage from '../pages/ProviderLongTermCareHospitalPage.js';

describe('Long-term care hospitals testing', () => {
    const loginSetup = () => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');
        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
            // Add assertion to ensure login was successful
            cy.url().should('not.include', '/login');
        });
    };

    beforeEach(() => {
        // Create/restore the session before each test
        cy.session('login', loginSetup, {
            validate: () => {
                cy.url().should('not.include', '/login');
            }
        });
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page');
    });

    it("Test1: Verify Long-term care hospitals Category is Visible and Clickable", () => {
        const providerPage = new ProviderLongTermCareHospitalPage();
        providerPage.clickProviderPage();
        providerPage.wait(2000);
        providerPage.clickLongTermCareCategory();
        providerPage.wait(1000);
        providerPage.verifyLongTermCareCategory();
    });

    it("Test2: Verify Default Radius Value is 250 Miles", () => {
        const providerPage2 = new ProviderLongTermCareHospitalPage();
        providerPage2.clickProviderPage();
        providerPage2.wait(2000);
        providerPage2.clickLongTermCareCategory();
        providerPage2.wait(2000);
        providerPage2.verifyLongTermCareRadius('250');
    });

    it("Test3: Verify Radius Entry up to 500 Miles for Long-term care hospitals Category on the Provider Page", () => {
        const providerPage3 = new ProviderLongTermCareHospitalPage();
        providerPage3.clickProviderPage();
        providerPage3.wait(2000);
        providerPage3.clickLongTermCareCategory();
        providerPage3.wait(2000);
        providerPage3.enterZipCode('80108');
        providerPage3.clickSearchField();
        providerPage3.wait(1000);
        providerPage3.enterRadiusin('500');
        providerPage3.clickSearchProviderButton();
    });

    it("Test4: Verify Radius Entry more than 500 Miles for Long-term care hospitals Category on the Provider Page", () => {
        const providerPage4 = new ProviderLongTermCareHospitalPage();
        providerPage4.clickProviderPage();
        providerPage4.wait(2000);
        providerPage4.clickLongTermCareCategory();
        providerPage4.wait(2000);
        providerPage4.enterZipCode('80108');
        providerPage4.clickSearchField();
        providerPage4.wait(1000);
        providerPage4.enterRadiusin('501');
        providerPage4.checkSearchProviderButton();
    });

    it("Test5: Verify Functionality of the Optional LTC hospitals Name (Optional) Field on the Provider Page", () => {
        const providerPage5 = new ProviderLongTermCareHospitalPage();
        providerPage5.clickProviderPage();
        providerPage5.wait(2000);
        providerPage5.clickLongTermCareCategory();
        providerPage5.wait(2000);
        providerPage5.enterZipCode('80108');
        providerPage5.clickSearchField();
        providerPage5.wait(1000);
        providerPage5.enterRadiusin(50);
        providerPage5.verifyLongTermCareHospitalName("LTC hospital name(optional)");
        providerPage5.enterLongTermCareHospitalName("KINDRED HOSPITAL-DENVER");
        providerPage5.clickSearchProviderButton();
    });

    it("Test6: Verify that the Long-term care hospitals name field empty", () => {
        const providerPage6 = new ProviderLongTermCareHospitalPage();
        providerPage6.clickProviderPage();
        providerPage6.wait(2000);
        providerPage6.clickLongTermCareCategory();
        providerPage6.wait(2000);
        providerPage6.enterZipCode('80108');
        providerPage6.clickSearchField();
        providerPage6.wait(1000);
        providerPage6.enterRadiusin(100);
        providerPage6.enterLongTermCareHospitalName(" ");
        providerPage6.clickSearchProviderButton();
    });

    it("Test7: Verify Search Providers with Category Long-term care hospitals and radius as 250 miles on the Provider Page", () => {
        const providerPage7 = new ProviderLongTermCareHospitalPage();
        providerPage7.clickProviderPage();
        providerPage7.wait(2000);
        providerPage7.clickLongTermCareCategory();
        providerPage7.wait(2000);
        providerPage7.enterZipCode('80108');
        providerPage7.clickSearchField();
        providerPage7.wait(1000);
        providerPage7.enterRadiusin(200);
        providerPage7.clickSearchProviderButton();
        providerPage7.wait(3000);
        providerPage7.checkTheNumberOfResult(5);
    });

    it("Test8: Verify Distance Filter Options for Long-Term Care Hospitals Category on the Provider Page", () => {
        const providerPage8 = new ProviderLongTermCareHospitalPage();
        providerPage8.clickProviderPage();
        providerPage8.wait(2000);
        providerPage8.clickLongTermCareCategory();
        providerPage8.wait(2000);
        providerPage8.enterZipCode('80108');
        providerPage8.clickSearchField();
        providerPage8.wait(1000);
        providerPage8.enterRadiusin(50);
        providerPage8.clickSearchProviderButton();
        providerPage8.wait(3000);
        providerPage8.checkTheNumberOfResult(5);
        providerPage8.expandTheProviderFilters();
        providerPage8.enterTheDistance(40);
        providerPage8.clickApplyFilterButton();
        providerPage8.checkTheNumberOfResult(4);
    });

    it("Test9: Verify Search Providers with Category as Long-Term Care Hospitals and Ownership Dropdown options", () => {
        const providerPage9 = new ProviderLongTermCareHospitalPage();
        providerPage9.clickProviderPage();
        providerPage9.wait(2000);
        providerPage9.clickLongTermCareCategory();
        providerPage9.wait(2000);
        providerPage9.enterZipCode('80108');
        providerPage9.clickSearchField();
        providerPage9.wait(1000);
        providerPage9.enterRadiusin(50);
        providerPage9.clickSearchProviderButton();
        providerPage9.wait(3000);
        providerPage9.checkTheNumberOfResult(5);
        providerPage9.expandTheProviderFilters();
        providerPage9.checkOwnershipDropdownOptions();
    });

    it("Test10: Verify Apply Filter Button Functionality in the Long-Term Care Hospitals Category on the Provider Page", () => {
        const providerPage10 = new ProviderLongTermCareHospitalPage();
        providerPage10.clickProviderPage();
        providerPage10.wait(2000);
        providerPage10.clickLongTermCareCategory();
        providerPage10.wait(2000);
        providerPage10.enterZipCode('80108');
        providerPage10.clickSearchField();
        providerPage10.wait(1000);
        providerPage10.enterRadiusin(200);
        providerPage10.clickSearchProviderButton();
        providerPage10.wait(3000);
        providerPage10.checkTheNumberOfResult(5);
        providerPage10.expandTheProviderFilters();
        providerPage10.enterTheDistance(150);
        providerPage10.clickApplyFilterButton();
        providerPage10.checkTheNumberOfResult(5);
        providerPage10.expandTheProviderFilters();
        providerPage10.clearApplyFilterButton();
    });

    it("Test11: Verify Clear Filter Button Functionality in the Long-Term Care Hospitals Category on the Provider Page", () => {
        const providerPage11 = new ProviderLongTermCareHospitalPage();
        providerPage11.clickProviderPage();
        providerPage11.wait(2000);
        providerPage11.clickLongTermCareCategory();
        providerPage11.wait(2000);
        providerPage11.enterZipCode('80108');
        providerPage11.clickSearchField();
        providerPage11.wait(1000);
        providerPage11.enterRadiusin(200);
        providerPage11.clickSearchProviderButton();
        providerPage11.wait(3000);
        providerPage11.checkTheNumberOfResult(5);
        providerPage11.expandTheProviderFilters();
        providerPage11.checkOwnershipDropdownOptions();
        providerPage11.enterTheDistance(150);
        providerPage11.clickApplyFilterButton();
        providerPage11.checkTheNumberOfResult(5);
        providerPage11.expandTheProviderFilters();
        providerPage11.clickOwnerShipDropdown();
        providerPage11.clickApplyFilterButton();
        providerPage11.expandTheProviderFilters();
        providerPage11.clearApplyFilterButton();
    });

    it("Test12: This is to verify Back button Functionality on the manage-providers/provider-list page within PDP application", () => {
        const providerPage12 = new ProviderLongTermCareHospitalPage();
        providerPage12.clickProviderPage();
        providerPage12.wait(2000);
        providerPage12.clickLongTermCareCategory();
        providerPage12.wait(2000);
        providerPage12.enterZipCode('80108');
        providerPage12.clickSearchField();
        providerPage12.wait(1000);
        providerPage12.enterRadiusin(200);
        providerPage12.clickSearchProviderButton();
        providerPage12.wait(3000);
        providerPage12.checkTheNumberOfResult(5);
        providerPage12.expandTheProviderFilters();
        providerPage12.checkOwnershipDropdownOptions();
        providerPage12.enterTheDistance(150);
        providerPage12.clickApplyFilterButton();
        providerPage12.clickBackButton();
    });
});

