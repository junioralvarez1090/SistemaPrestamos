const Prestamo = require("../models/Prestamo");

class PrestamoEducativo extends Prestamo {

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

        this.tipo = "Educativo";
    }
}

module.exports = PrestamoEducativo;