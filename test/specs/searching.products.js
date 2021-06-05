const HomePage = require('../pageobjects/automation.practice.web/home.page');

describe('Search product item', () => {

    it('should find the Blouse as search result', async () => {
        const productName = 'Blouse'
        await HomePage.openAutomationPractice('index.php')
        await HomePage.inputSearch(productName)
        await HomePage.clickOnSearch()
        await (await HomePage.lblProductNameFound).waitForDisplayed({ timeout: 7000 })
        await HomePage.scrollToProductFound()
        await expect(HomePage.lblProductNameFound).toHaveTextContaining(productName)
        HomePage.takeScreenshot('home_product_found')
    });

});


