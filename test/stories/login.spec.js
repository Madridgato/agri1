
waitUntilReady = function (elm) {
  browser.wait(function () {
    return elm.isPresent();
  },10000);
  browser.wait(function () {
    return elm.isDisplayed();
  },10000);
};


describe('Login page', function() {
  beforeEach(function() {
    browser.get('/login');
  });


  it('should login and edit the mob list name', function () {
    
    element(by.id('username-txt')).sendKeys("barnabydino@mailinator.com");
    element(by.id('password-txt')).sendKeys("Easter2018");
    element(by.id('login-btn')).click();
    var loggedInURL = browser.getCurrentUrl();
    var newName = "Barnaby Dinosaur 1";
    var livestockIconPresent = element(by.xpath('//li[@data-target ="Livestock-menu"]'));
    
    expect(livestockIconPresent.isPresent()).toBe(true);
    browser.actions().mouseMove(livestockIconPresent).perform();

    var mobList = element(by.partialLinkText("Mob List"));
    waitUntilReady(mobList);
    
    expect(mobList.isPresent()).toBe(true);
    mobList.click();
    loggedInURL = browser.getCurrentUrl();
    

    var editButton = element(by.xpath('(//table//div//button[contains(text(), Edit)])[1]'));
    editButton.click();
    
    var editTitle= element(by.id("title-txt"));
    waitUntilReady(editTitle);
    editTitle.clear().then(function() {
      editTitle.sendKeys(newName);
      editTitle.click();
      browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform();
    });
    

    var savebutton = element(by.xpath('//p-footer/div/button[@class="aw-btn aw-btn-primary"]'));

    waitUntilReady(savebutton);
    
    expect(savebutton.isDisplayed()).toBe(true);
    

    savebutton.click().then(function(checkEdit){
      waitUntilReady(element(by.xpath("(//p-datatable//table//div[contains(text(), '"+newName+"')])[1]")));        
    
    });
    
    var signoutbutton = element(by.xpath('//span[contains(text(),\'Sign Out\')]'));

    element(by.xpath('//header//span[contains(text(),\'Settings\')]')).click().then(function(checkEdit){
      waitUntilReady(signoutbutton);
      signoutbutton.click().then(function() {
        var loginURL = browser.getCurrentUrl();
        expect(loginURL).toBe("https://portal.agriwebb.com/login");
      });
    });

  });

    
});