import { expect } from "@playwright/test";

export class HomePage {
    constructor(page) {
        this.page = page;
        this.cartPage = page.locator('//a[text()="Cart"]');        
        this.lblTextoUsuarioLogeado = page.locator('//a[text()="Welcome demo@test.com"]');
        this.lblCategories = page.locator('//a[text()="CATEGORIES"]');
        this.lblPhones = page.locator('//a[text()="Phones"]');
        this.lblLaptops = page.locator('//a[text()="Laptops"]');
        this.lblMonitors = page.locator('//a[text()="Monitors"]');
        this.linkProductoIphone = page.locator('//a[text()="Iphone 6 32gb"]');

    }

    async clicCart() {
        await expect(this.cartPage).toBeVisible();
        await this.cartPage.click();
    } 

    async validarTextoPostLogin() {
        await expect(this.lblTextoUsuarioLogeado).toBeVisible();

    }

    async validarTituloCategories() {
        await expect(this.lblCategories).toBeVisible();
    }

    async clicSubCategoryPhones() {
        await expect(this.lblPhones).toBeVisible();
        await this.lblPhones.click();
    }

    async clicSubCategoryLaptops() {
        await expect(this.lblLaptops).toBeVisible();
        await this.lblLaptops.click();
    }

    async clicSubCategoryMonitors() {
        await expect(this.lblMonitors).toBeVisible();
        await this.lblMonitors.click();
    }

    async clicProductoIphone() {
        await expect(this.linkProductoIphone).toBeVisible();
        await this.linkProductoIphone.click();
    }
    
    
}