const PrestamoPersonal = require("./PrestamoPersonal");
const PrestamoEmpresarial = require("./PrestamoEmpresarial");
const PrestamoEducativo = require("./PrestamoEducativo");

class PrestamoFactory {

    static crearPrestamo(
        tipo,
        id,
        cliente,
        monto,
        tasa,
        meses,
        estrategia
    ) {

        switch (tipo) {

            case "personal":

                return new PrestamoPersonal(
                    id,
                    cliente,
                    monto,
                    tasa,
                    meses,
                    estrategia
                );

            case "empresarial":

                return new PrestamoEmpresarial(
                    id,
                    cliente,
                    monto,
                    tasa,
                    meses,
                    estrategia
                );

            case "educativo":

                return new PrestamoEducativo(
                    id,
                    cliente,
                    monto,
                    tasa,
                    meses,
                    estrategia
                );

            default:

                throw new Error(
                    "Tipo de préstamo no válido."
                );
        }
    }
}

module.exports = PrestamoFactory;