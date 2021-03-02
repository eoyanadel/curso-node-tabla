const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            demandOption: false,
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            demandOption: false,
            describe: 'hasta qué número multiplicar la base'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'.red;
        }
        if (isNaN(argv.h)) {
            throw 'el largo de la tabla "-h" debe ser un número'.red;
        }
        return true;
    })
    .argv;


module.exports = argv;