import { expect } from "@playwright/test";

export class ProductPage {
    constructor(page) {
        this.page = page;
        this.lblTituloProductName = page.locator('//h2[text()="Iphone 6 32gb"]');
        this.btnAddToCart = page.locator('//a[text()="Add to cart"]');

    }

    async validarTituloProducto() {
        await expect(this.lblTituloProductName).toBeVisible();
    }

    async clickAddToCart() {
        await expect(this.btnAddToCart).toBeVisible();
        await this.btnAddToCart.click();
    }
}