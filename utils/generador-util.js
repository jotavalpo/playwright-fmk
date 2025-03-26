export class GeneradorUtil {
    /**
     * Método que genera un número de teléfono aleatorio, que empiece con +569
     * @param {boolean} prefijo - El número mínimo
     * @returns {string} - con prefijo +569 o sin prefijo
     */
    static generarTelefonoMobileConPrefijo(prefijo) {
        const random = Math.floor(10000000 + Math.random() * 90000000);
        return refijo ? `+569${random}` : `${random}`;
    }

    /**
     * Método que genera la fecha de hoy en formato personalizado
     * digitosDd =digitos del día
     * digitosMm =digitos del mes
     * digitosAaaa =digitos del año
     * separador = '-' o '/'
     * ejemplo: 2, 2. 4, '/'
     * que corresponde: 2 dígitos para día, 2 dígitos para mes, 4 dígitos para año y separador '/'
     * @param {number} digitosDd
     * @param {number} digitosMm 
     * @param {number} digitosAaaa 
     * @param {'-' | '/'} separador 
     * @returns {string}
     */

    static generarFechaHoyDigitosPersonalizados(digitosDd, digitosMm, digitosAaaa, separador) {
        const ahora = new Date();
        const yearSize = digitosAaaa === 4 ? 'numeric' : '2-digit';
        const opciones= {
            timeZone: 'America/Santiago',
            year: yearSize,
            month: '2-digit',
            day: '${digitosDd}-digit'
        };

        let fechaGenerada = new Intl.DateTimeFormat('es-CL', opciones).format(ahora);
        fechaGenerada = fechaGenerada.replace(',', '');

        if (digitosMm === 1) {
            const partes = fechaGenerada = fechaGenerada.split('-');
            partes[1] = partes[1].replace(/^0+/, '');
            fechaGenerada = partes.join('-');
        }
        return fechaGenerada.replaceAll('-', separador);
    }

    /**
     * Método que genera un string aleatorio de una longitud determinada
     * @param {number} longitud 
     * @returns {string} resultado
     */

    static generarRandomString(longitud) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let resultado = '';
        for (let i = 0; i < longitud; i++) {
            resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return resultado;
    }
}