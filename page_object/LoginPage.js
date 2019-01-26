import {HandleElement} from "../utils/HandleElement";

class LoginPage {
    get url() {
        return "http://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com";
    }

    get title() {
        return "Chợ Tốt - Chợ của người Việt - Mua bán rao vặt đơn giản & miễn phí - Đăng Nhập";
    }

    get telephoneInput() {
        return HandleElement.findElement('//input[@type="tel"]');
    }

    get passwordInput() {
        return HandleElement.findElement('//input[@type="password"]');
    }

    get rememberMeCheckbox() {
        return HandleElement.findElement('#rememberMe');
    }

    get loginButton() {
        return HandleElement.findElement('//button[@type="submit"]');
    }

    get forgotPasswordButton() {
        return HandleElement.findElement('//button[@data-reactid="52"]');
    }

    get loginByFacebookButton() {
        return HandleElement.findElement('//button[@data-reactid="56"]');
    }

    get registerButton() {
        return HandleElement.findElement('//button[@data-reactid="59"]');
    }

    get errorMessage() {
        return HandleElement.findElement('div.errorMessage');
    }

    inputTelephone(phoneNumber) {
        this.telephoneInput.setValue(phoneNumber);
        return this;
    }

    inputPassword(password) {
        this.passwordInput.setValue(password);
        return this;
    }

    clickOnLoginButton() {
        this.loginButton.click();
    }

    clickOnForgotPasswordButton() {
        this.forgotPasswordButton.click();
    }

    clickOnLoginByFacebookButton() {
        this.loginByFacebookButton.click();
    }

    clickOnRegisterButton() {
        this.registerButton.click();
        return RegisterPage;
    }
}

export default new LoginPage()

import RegisterPage from "./RegisterPage";