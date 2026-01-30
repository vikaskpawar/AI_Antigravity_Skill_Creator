# Example: Refactoring a Fragile Selenium Java Test

### ❌ The "Bad" Code
```java
@Test
public void testLogin() {
    driver.get("http://myapp.com/login");
    Thread.sleep(2000);
    driver.findElement(By.xpath("//*[@id='u_0_1']")).sendKeys("admin");
    driver.findElement(By.name("pass")).sendKeys("1234");
    driver.findElement(By.tagName("button")).click();
    Thread.sleep(5000);
    String header = driver.findElement(By.xpath("/html/body/div[1]/h1")).getText();
    Assert.assertEquals(header, "Welcom Admin");
}
```

### ✅ The "Senior" Refactor
**LoginPage.java (POM)**
```java
public class LoginPage extends BasePage {
    private By usernameField = By.id("email");
    private By passwordField = By.id("pass");
    private By loginBtn = By.cssSelector("button[type='submit']");

    public void login(String user, String pwd) {
        waitForElementVisible(usernameField).sendKeys(user);
        sendText(passwordField, pwd);
        click(loginBtn);
    }
}
```

**LoginTest.java**
```java
@Test
public void testUserCanLoginWithValidCredentials() {
    loginPage.navigate();
    loginPage.login(config.getAdminUser(), config.getAdminPassword());
    
    Assert.assertEquals(dashboardPage.getHeaderText(), "Welcome Admin", 
        "Dashboard header was incorrect after login");
}
```

### Key Improvements:
1. **Explicit Waits**: Replaced `Thread.sleep` with dynamic waits.
2. **Robust Locators**: Switched from absolute XPath to ID/CSS.
3. **Externalized Data**: Removed hardcoded strings/URLs.
4. **Maintenance**: Moved UI logic to Page Objects.
