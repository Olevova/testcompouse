const { describe } = require("mocha");
const { Builder, By } = require("selenium-webdriver");
const should = require("chai").should();
const chrome = require("selenium-webdriver/chrome");
const waitOn = require("wait-on");


describe("api simple test ", () => {
    
  let driver;
  const textLocator = By.id('test');
  
  beforeEach(async () => {

    // await waitOn({
    //   resources: ["http://selenium-hub:4444"],
    //   timeout: 10000,
    // });
  
    const options = new chrome.Options();
    options.addArguments("--incognito");
    
    driver = await new Builder()
      .forBrowser("chrome")
      .usingServer("http://selenium-hub:4444")
      .setChromeOptions(options)
      .build();

  });

  afterEach(async () => {

    if (driver) {
      await driver.quit();
    };

  });

  it("test, find word", async () => {
    
      await driver.get("http://html-server");

      const findeText = await driver.findElement(textLocator).getText();
      findeText.should.to.equal('Its test time');
  });
});
