class InteresPreferencial {

    calcular(capital, tasa, meses) {

        const tasaPreferencial = tasa * 0.5;

        return capital * tasaPreferencial * meses;

    }

    obtenerNombre() {
        return "Interés Preferencial";
    }
}

module.exports = InteresPreferencial;