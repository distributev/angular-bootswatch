describe('Protractor bootswatch App', function() {
  it('login and using the saved bootstrap theme', function() {
    browser.get('http://localhost/bootswatch/app/index.html#/login');

    //login
    element(by.model('user.username')).sendKeys("user1");
    element(by.model('user.password')).sendKeys("123");
    element(by.id('submit')).click();

    // select the theme
    var eleIds = ["default","cerulean","cosmo","cyborg","darkly","flatly","journal","lumen","paper","readable","sandstone","simplex","slate","spacelab","superhero","united","yeti"];
    var index = Math.floor(Math.random() * 10) + 1;

    element(by.id('themes')).click();
    var EC = protractor.ExpectedConditions;
	//Waits for the element with id 'abc' to be clickable.
	browser.wait(EC.elementToBeClickable($('#'+eleIds[index])), 1000);
    element(by.id(eleIds[index])).click();

    //check the current theme
    element(by.id('bootstrap_theme')).getAttribute("href").then(function(value){
    	if(index!=0)
			expect(value).toContain(eleIds[index]);
		else //defult theme will use href="#", so the href attribute will be current url
			expect(value).toContain("http://localhost/bootswatch/app/index.html#");
    });

    //logout
    element(by.id('logout')).click();

    //login again to see if theme is the one last time selected;
    element(by.model('user.username')).sendKeys("user1");
    element(by.model('user.password')).sendKeys("123");
    
    element(by.id('submit')).click();

    element(by.id('bootstrap_theme')).getAttribute("href").then(function(value){
    	if(index!=0)
			expect(value).toContain(eleIds[index]);
		else
			expect(value).toContain("http://localhost/bootswatch/app/index.html#");
    });
    
  });
});