const Prestamo = require("../models/Prestamo");

class PrestamoEmpresarial extends Prestamo {

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

        this.tipo = "Empresarial";
    }
}

module.exports = PrestamoEmpresarial;