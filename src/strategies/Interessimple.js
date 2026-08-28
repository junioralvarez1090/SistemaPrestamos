class InteresSimple {

    calcular(capital, tasa, meses) {

        return capital * tasa * meses;

    }

    obtenerNombre() {
        return "Interés Simple";
    }
}

module.exports = InteresSimple;