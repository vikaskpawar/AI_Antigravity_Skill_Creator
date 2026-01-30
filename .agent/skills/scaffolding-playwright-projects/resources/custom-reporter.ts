import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';

class MyReporter implements Reporter {
    onTestEnd(test: TestCase, result: TestResult) {
        if (result.status !== 'passed') {
            console.log(`❌ Test ${test.title} failed with status: ${result.status}`);
        }
    }
}
export default MyReporter;
