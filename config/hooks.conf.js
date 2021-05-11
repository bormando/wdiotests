import LoginPage from '../test/pageobjects/login.page';
import ProfilePage from '../test/pageobjects/portal/profile.portal.page';
import { config } from 'dotenv';
const reportportal = require('wdio-reportportal-reporter');
const path = require('path');
const fs = require('fs');

module.exports = {
    before: function (capabilities, specs) {
        config();
        browser.addCommand('login', function (username, password) {
            LoginPage.open();
            LoginPage.setLogin(username);
            LoginPage.setPassword(password);
            LoginPage.clickSubmitButton();
            ProfilePage.isOpen();
        })
    },

    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot();
            const filename = "screnshot.png";
            const outputFile = path.join(__dirname, filename);
            browser.saveScreenshot(outputFile);
            reportportal.sendFileToTest(test, 'info', filename, fs.readFileSync(outputFile));
        }
    }
}
