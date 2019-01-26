const assert = require('assert');
import LoginFlow from '../test_flow/LoginFlow'
import testingData from '../resources/test_data/Login_1_2';

describe('webdriver.io page', () => {
    let testingDataWithWrongAuth = testingData.get('incorrectLogin').info;

    it('should show error when input wrong auth', () => {
        let loginFlow = new LoginFlow();
        loginFlow
            .openHomePage()
            .goToLoginPage()
            .loginByPhoneNumber(testingDataWithWrongAuth.telephoneNumber, testingDataWithWrongAuth.password);
        let actualError = loginFlow.getErrorMessage();
        let expectedError = "Số điện thoại hoặc mật khẩu không đúng, vui lòng đăng nhập lại.";
        assert.equal(actualError, expectedError)
    })
});