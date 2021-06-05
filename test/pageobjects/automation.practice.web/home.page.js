const Page = require('../base.page');
const defaultTimeout = { timeout: 5000 }

class HomePage extends Page {
    
    get txtInputSearch () {
        return $("#search_query_top");
    }
    get btnSearch () {
        return $('#searchbox button[name="submit_search"]');
    }
    get lblProductNameFound () {
        return $('#center_column ul li h5[itemprop="name"] a.product-name[title]');
    }
    get lblProductUnitPrice () {
        return $('#center_column ul li div span.product-price[itemprop="price"]');
    }
    get btnAddToCart () {
        return $('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')
    }
    
    async inputSearch(textToSearch) {
        await (await this.txtInputSearch).setValue(textToSearch);
    }
    
    async clickOnSearch() {
        await (await this.btnSearch).waitForClickable(defaultTimeout);
        await (await this.btnSearch).click();
    }

    async scrollToProductFound(textToReplace) {
        await (await this.lblProductNameFound).scrollIntoView();
    }

    async clickOnAddCart() {
        await (await this.btnAddToCart).waitForClickable(defaultTimeout);
        await (await this.btnAddToCart).click();
    }
    
}

module.exports = new HomePage();