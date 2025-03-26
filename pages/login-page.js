import { expect } from "@playwright/test";
const { URL } = require('../utils/constants');

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = URL;
        this.btnLogIn = page.locator('//a[text()="Log in"]');
        this.inputEmail = page.locator('//div[@class="modal-content"]//input[@id="loginusername"]');
        this.inputClave = page.locator('//div[@class="modal-content"]//input[@id="loginpassword"]');
        this.btnLogin = page.locator('//div[@class="modal-content"]//button[text()="Log in"]');
    }

    async goto() {
        await this.page.goto(this.url);
    }
    
    async login(usuario, clave) {
        await this.goto();
        await expect(this.btnLogIn).toBeVisible();
        await this.btnLogIn.click();
        await this.inputEmail.fill(usuario);
        await this.inputClave.fill(clave);
        await this.btnLogin.click();
    }
}