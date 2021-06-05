
const { addFeature } = require('@wdio/allure-reporter').default

module.exports = class Page {

    maximizeWindow() {
        return browser.maximizeWindow()
    }

    switchWindow(reference) {
        return browser.switchWindow(reference)
    }

    takeScreenshot(fileName) {
        driver.saveScreenshot(`./allure-results/${fileName}.png`)
    }
    
    openAutomationPractice(path) {
        this.maximizeWindow()
        return browser.url(`http://automationpractice.com/${path}`)
    }
    
}
