import {HandleElement} from '../utils/HandleElement';

class HomePage {
    get url() {
        return "http://www.chotot.com/";
    }

    get title() {
        return HandleElement.findElement('/html/head/title');
    }

    get loginButton() {
        return HandleElement.findElement('//a[contains(@class,"HomePage__ButtonLogin")]');
    }

    get registerLink() {
        return HandleElement.findElement('//a[contains(@class,"HomePage__ButtonRegister")]');
    }

    clickOnLoginButton() {
        this.loginButton.click();
        return LoginPage;
    }

    clickOnRegisterLink() {
        this.registerLink.click();
        return RegisterPage
    }
}

export default new HomePage();

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
