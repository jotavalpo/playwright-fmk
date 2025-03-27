export class FuncionesUtil {
    /**
     * Método que obtiene una lista de elementos y devuelve sus textos ordenados
     * @param {object} page - La página de Playwright
     * @param {string} selector - El selector de los elementos
     * @returns {Promise<string[]>} - Los textos de los elementos ordenados
     */

    static async obtenerTextosDeListadoDeElementos(page, selector) {
        try {
            const elementos = await page.$$eval(selector, elementosA => {;
                return elementosA.map(a => a.textContent.trim()).filter(text => text);
        });
            return elementos.sort();
        } catch (error) {
            console.error(`Error en obtener elementos: ${error}`);
            return [];
        }
    }
      
}