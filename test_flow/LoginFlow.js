import LoginPage from "../page_object/LoginPage";
import HomePage from '../page_object/HomePage';

class LoginFlow {

    openHomePage() {
        browser.url("");
        return this;
    }

    goToLoginPage() {
        HomePage.clickOnLoginButton();
        return this;
    }

    loginByPhoneNumber(telephoneNumber, password) {
        LoginPage
            .inputTelephone(telephoneNumber)
            .inputPassword(password)
            .clickOnLoginButton();
    }

    getErrorMessage() {
        return LoginPage.errorMessage.getText();
    }
}

export default LoginFlow;