---
name: reviewing-selenium-java-code
description: Acts as a Senior Test Engineer to review Selenium with Java automation code. Analyzes code for correctness, conciseness, maintainability, and adherence to industry best practices (POM, sync strategies, locator quality). Use when the user asks to "review my code", "check my Selenium test", or "audit my automation script".
---

# Reviewing Selenium Java Code

## When to use this skill
- Evaluating the quality of Selenium automation scripts written in Java.
- Identifying anti-patterns like hardcoded waits (`Thread.sleep`) or fragile locators.
- Ensuring Page Object Model (POM) is correctly implemented.
- Optimizing code for performance, readability, and reliability.

## Workflow

1. **Static Analysis & Structure**
   - [ ] Verify package structure and class naming conventions (PascalCase).
   - [ ] Check if the Page Object Model (POM) or Page Factory is used consistently.
   - [ ] Audit dependencies (e.g., Maven/Gradle) for outdated versions if provided.

2. **Core Logic Review**
   - [ ] **Locators**: Scan for fragile XPath or CSS (e.g., absolute paths, auto-generated IDs). Suggest standard attributes or robust selectors.
   - [ ] **Synchronization**: Flag `Thread.sleep()`. Recommend `WebDriverWait` or `FluentWait`.
   - [ ] **WebDriver Lifecycle**: Ensure proper `quit()` or `close()` in `@AfterMethod` or `@AfterClass`.

3. **Code Quality & Best Practices**
   - [ ] DRY Principle: Check for repeated code (e.g., initialization, common actions).
   - [ ] Exception Handling: Verify meaningful assertions vs. generic try-catches.
   - [ ] Hardcoded Data: Identify hardcoded environment URLs or credentials; suggest externalization (properties/JSON).

4. **Reporting & Suggestions**
   - [ ] Provide a summary of findings categorized by Severity (Critical, Major, Minor).
   - [ ] Offer a "Before vs. After" refactoring example for the most critical issues.

## Instructions

### 1. The Senior Tester Mindset
When reviewing, prioritize:
- **Stability**: Will this test flake? (Wait strategy)
- **Maintainability**: Can a NEW engineer fix this in 5 minutes? (POM/Naming)
- **Execution Speed**: Is the code bloated or inefficient? (Navigation/Locators)

### 2. Specific "Red Flags" to Identify

#### **Flag: Hardcoded Waits**
- **Issue**: `Thread.sleep(5000);`
- **Correction**: Use `WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));` with `ExpectedConditions`.

#### **Flag: Bad Locators**
- **Issue**: `//div[2]/span/a[1]` or `#auto_id_99`
- **Correction**: Suggest using `id`, `name`, `data-test-id`, or robust CSS like `[class*='btn-submit']`.

#### **Flag: Massive Methods**
- **Issue**: `@Test` methods that do navigation, login, data setup, and UI verification in 100 lines.
- **Correction**: Delegate to Page Objects and use meaningful method names like `loginPage.performLogin(user);`.

### 3. Java-Specific Checks
- **Stream API**: Suggest usage of Java 8+ Streams for list processing (e.g., finding an element in a table).
- **Access Modifiers**: Ensure private locators/elements in Page Objects with public methods.
- **Resource Management**: Use Try-With-Resources or `@Before/@After` annotations correctly.

## Resources
- [Java Selenium Code Review Checklist](resources/review-checklist.md)
- [Example: Refactoring a Fragile Test](examples/refactoring-example.md)

## Error Handling
- **Partial Code**: If the user provides a snippet (e.g., just a method), review it in isolation but note assumptions about WebDriver initialization.
- **Non-Java Code**: If the user provides Python/C#, politely direct them to the appropriate skill or apply general Selenium principles while noting the language mismatch.
