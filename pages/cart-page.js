import {expect} from "@playwright/test";

export class CartPage {
    constructor(page) {
        this.page = page;
        this.tituloCart = page.locator('//h2[text()="Products"]');
        this.textoProductoAgregado = page.locator('//td[text()="Iphone 6 32gb"]');
        this.btnPlaceOrder = page.locator('//button[text()="Place Order"]');
        this.tituloModalOrder = page.locator('//h5[text()="Place order"]');
        this.inputName = page.locator('//input[@id="name"]');
        this.inputCountry = page.locator('//input[@id="country"]');
        this.inputCity = page.locator('//input[@id="city"]');
        this.inputCreditCard = page.locator('//input[@id="card"]');
        this.inputMonth = page.locator('//input[@id="month"]');
        this.inputYear = page.locator('//input[@id="year"]');
        this.btnPurchase = page.locator('//button[text()="Purchase"]');
        this.msjeCompraExitosa = page.locator('//h2[text()="Thank you for your purchase!"]');
        this.btnOK = page.locator('//button[text()="OK"]');

    }

    async validarTituloCart() {
        await expect(this.tituloCart).toBeVisible();
    }

    async validarProductoAgregado() {
        await expect(this.textoProductoAgregado).toBeVisible();
    }

    async clicPlaceOrder() {
        await expect(this.btnPlaceOrder).toBeVisible();
        await this.btnPlaceOrder.click();
    }

    async completarFormularioYEnviarOrden(nombre, pais, ciudad, tarjeta, mes, anio) {
        await expect(this.tituloModalOrder).toBeVisible();
        await this.inputName.fill(nombre);
        await this.inputCountry.fill(pais);
        await this.inputCity.fill(ciudad);
        await this.inputCreditCard.fill(tarjeta);
        await this.inputMonth.fill(mes);
        await this.inputYear.fill(anio);
        await this.btnPurchase.click();
    }

    async validarOrdenExitosa() {
        await expect(this.msjeCompraExitosa).toBeVisible();
        await this.btnOK.click();
    }

}    