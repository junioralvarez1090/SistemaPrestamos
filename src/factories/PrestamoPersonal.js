const Prestamo = require("../models/Prestamo");

class PrestamoPersonal extends Prestamo {

    constructor(
        id,
        cliente,
        monto,
        tasa,
        meses,
        estrategia
    ) {

        super(
            id,
            cliente,
            monto,
            tasa,
            meses,
            estrategia
        );

        this.tipo = "Personal";
    }
}

module.exports = PrestamoPersonal;