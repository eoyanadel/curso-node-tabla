const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar, hasta) => {

    let salida = '';
    let consola = '';

    try {
        for (i = 1; i <= hasta; i++) {
            consola += `${ base } ${ 'x'.yellow } ${ i } ${ '='.yellow } ${ base * i }\n`;
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if (listar) {
            console.log('==============='.rainbow)
            console.log('  Tabla del', base, '  ');
            console.log('==============='.rainbow)
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`; /* resolve */

    } catch (error) {
        throw error; /* reject */
    }
}

module.exports = {
    crearArchivo
}