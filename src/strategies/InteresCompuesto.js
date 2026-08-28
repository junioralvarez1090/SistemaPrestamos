class InteresCompuesto {

    calcular(capital, tasa, meses) {

        return capital * Math.pow(1 + tasa, meses) - capital;

    }

    obtenerNombre() {
        return "Interés Compuesto";
    }
}

module.exports = InteresCompuesto;