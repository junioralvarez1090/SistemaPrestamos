class Prestamo {

    constructor(
        id,
        cliente,
        monto,
        tasa,
        meses,
        estrategia
    ) {

        this.id = id;
        this.cliente = cliente;
        this.monto = monto;
        this.tasa = tasa;
        this.meses = meses;

        // Strategy
        this.estrategia = estrategia;

        this.interes = estrategia.calcular(
            monto,
            tasa,
            meses
        );

        this.total = monto + this.interes;

        this.saldo = this.total;

        this.estado = "ACTIVO";

        this.pagos = [];

        // Observer
        this.observadores = [];
    }

    agregarObservador(observador) {
        this.observadores.push(observador);
    }

    notificar(evento) {

        this.observadores.forEach(
            observador => observador.actualizar(
                this,
                evento
            )
        );
    }

    registrarPago(pago) {

        if (this.estado === "PAGADO") {
            console.log("El préstamo ya está completamente pagado.");
            return false;
        }

        if (pago.valor > this.saldo) {

            console.log(
                `El pago no puede superar el saldo pendiente de $${this.saldo.toLocaleString("es-CO")}`
            );

            return false;
        }

        this.pagos.push(pago);

        this.saldo -= pago.valor;

        if (this.saldo === 0) {
            this.estado = "PAGADO";
        }

        this.notificar("PAGO_REGISTRADO");

        if (this.estado === "PAGADO") {
            this.notificar("PRESTAMO_PAGADO");
        }

        return true;
    }

    mostrarInformacion() {

        console.log(`
========================================
          INFORMACIÓN DEL PRÉSTAMO
========================================

ID: ${this.id}

Cliente:
${this.cliente.nombre}

Tipo:
${this.tipo}

Monto:
$${this.monto.toLocaleString("es-CO")}

Tasa:
${(this.tasa * 100).toFixed(2)}%

Plazo:
${this.meses} meses

Estrategia:
${this.estrategia.obtenerNombre()}

Intereses:
$${this.interes.toLocaleString("es-CO", {
            maximumFractionDigits: 0
        })}

Total:
$${this.total.toLocaleString("es-CO", {
            maximumFractionDigits: 0
        })}

Saldo pendiente:
$${this.saldo.toLocaleString("es-CO", {
            maximumFractionDigits: 0
        })}

Estado:
${this.estado}

Cantidad de pagos:
${this.pagos.length}

========================================
        `);
    }

    mostrarHistorial() {

        console.log(`
========================================
          HISTORIAL DE PAGOS
========================================
        `);

        if (this.pagos.length === 0) {

            console.log("No existen pagos registrados.");

            return;
        }

        this.pagos.forEach(pago => pago.mostrar());

        console.log(`
Saldo pendiente:
$${this.saldo.toLocaleString("es-CO")}

Estado:
${this.estado}

========================================
        `);
    }
}

module.exports = Prestamo;