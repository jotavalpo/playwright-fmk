import { test, describe } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';
import { CartPage } from '../pages/cart-page';
const { USUARIO, CLAVE, NOMBRE, PAIS, CIUDAD, TARJETA, MES, ANIO } = require('../utils/constants');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(USUARIO, CLAVE);

});

test.describe('Realizar compra', () => {
  test('1-Realizar compra exitosa', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validarTextoPostLogin();
    await homePage.validarTituloCategories();
    await homePage.clicProductoIphone();
    const productPage = new ProductPage(page);
    await productPage.validarTituloProducto();
    await productPage.clickAddToCart();
    await homePage.clicCart();
    const cartPage = new CartPage(page);
    await cartPage.validarTituloCart();
    await cartPage.validarProductoAgregado();
    await cartPage.clicPlaceOrder();
    await cartPage.completarFormularioYEnviarOrden(NOMBRE, PAIS, CIUDAD, TARJETA, MES, ANIO);
    await cartPage.validarOrdenExitosa();   
});
});


