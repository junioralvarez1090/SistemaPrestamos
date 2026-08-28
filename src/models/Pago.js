class Pago {
    constructor(id, valor, fecha = new Date()) {
        this.id = id;
        this.valor = valor;
        this.fecha = fecha;
    }

    mostrar() {
        console.log(
            `Pago #${this.id} | Valor: $${this.valor.toLocaleString(
                "es-CO"
            )} | Fecha: ${this.fecha.toLocaleDateString("es-CO")}`
        );
    }
}

module.exports = Pago;