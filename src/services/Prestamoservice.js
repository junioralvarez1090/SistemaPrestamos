class PrestamoService {

    constructor() {

        this.clientes = [];
        this.prestamos = [];

        this.contadorCliente = 1;
        this.contadorPrestamo = 1;
        this.contadorPago = 1;
    }

    registrarCliente(
        nombre,
        documento,
        telefono
    ) {

        const cliente = new (
            require("../models/Cliente")
        )(
            this.contadorCliente++,
            nombre,
            documento,
            telefono
        );

        this.clientes.push(cliente);

        return cliente;
    }

    buscarCliente(id) {

        return this.clientes.find(
            cliente => cliente.id === id
        );
    }

    crearPrestamo(
        tipo,
        cliente,
        monto,
        tasa,
        meses,
        estrategia
    ) {

        const PrestamoFactory =
            require("../factories/PrestamoFactory");

        const prestamo =
            PrestamoFactory.crearPrestamo(
                tipo,
                this.contadorPrestamo++,
                cliente,
                monto,
                tasa,
                meses,
                estrategia
            );

        this.prestamos.push(prestamo);

        cliente.agregarPrestamo(prestamo);

        return prestamo;
    }

    buscarPrestamo(id) {

        return this.prestamos.find(
            prestamo => prestamo.id === id
        );
    }

    registrarPago(prestamo, valor) {

        const Pago =
            require("../models/Pago");

        const pago = new Pago(
            this.contadorPago++,
            valor
        );

        return prestamo.registrarPago(pago);
    }

    listarClientes() {

        if (this.clientes.length === 0) {

            console.log(
                "\nNo existen clientes registrados."
            );

            return;
        }

        console.log(`
========================================
             LISTA DE CLIENTES
========================================
        `);

        this.clientes.forEach(cliente => {

            console.log(
                `ID: ${cliente.id} | ` +
                `Nombre: ${cliente.nombre} | ` +
                `Documento: ${cliente.documento} | ` +
                `Préstamos: ${cliente.prestamos.length}`
            );
        });
    }

    listarPrestamos() {

        if (this.prestamos.length === 0) {

            console.log(
                "\nNo existen préstamos registrados."
            );

            return;
        }

        console.log(`
========================================
             LISTA DE PRÉSTAMOS
========================================
        `);

        this.prestamos.forEach(prestamo => {

            console.log(
                `ID: ${prestamo.id} | ` +
                `Cliente: ${prestamo.cliente.nombre} | ` +
                `Tipo: ${prestamo.tipo} | ` +
                `Saldo: $${prestamo.saldo.toLocaleString("es-CO")} | ` +
                `Estado: ${prestamo.estado}`
            );
        });
    }
}

module.exports = PrestamoService;