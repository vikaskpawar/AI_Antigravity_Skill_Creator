# Java Selenium Code Review Checklist

### 1. Project & Structure
- [ ] Is POM architecture followed?
- [ ] Are Page Objects separated from Test Logic?
- [ ] Is there a BaseTest class for common setup/teardown?

### 2. WebDriver Management
- [ ] Is WebDriver properly initialized and quit?
- [ ] Is a WebDriverManager/Selenium Manager used (vs. local .exe paths)?
- [ ] Are timeouts (Implicit vs Explicit) handled correctly? (Never mix them!)

### 3. Element Identification
- [ ] Are locators unique and stable?
- [ ] Is `findBy` annotation used efficiently if Page Factory is employed?
- [ ] Are selectors readable (avoiding deep nested XPaths)?

### 4. Logic & Assertions
- [ ] Are TestNG/JUnit assertions specific (e.g., `assertEquals` vs `assertTrue(a==b)`)?
- [ ] Are there meaningful assertion messages for failure reports?
- [ ] Is test data externalized (DataProviders, Excel, Properties)?

### 5. Coding Standards
- [ ] Does it follow Java Naming Conventions?
- [ ] Are comments used for "Why" not "What"?
- [ ] Is there unnecessary code or unused imports?
