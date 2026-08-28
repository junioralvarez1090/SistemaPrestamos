const readline = require("readline");

const PrestamoService =
    require("./services/PrestamoService");

const InteresSimple =
    require("./strategies/InteresSimple");

const InteresCompuesto =
    require("./strategies/InteresCompuesto");

const InteresPreferencial =
    require("./strategies/InteresPreferencial");

const NotificacionObserver =
    require("./observers/NotificacionObserver");

const AuditoriaObserver =
    require("./observers/AuditoriaObserver");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const service = new PrestamoService();


function preguntar(pregunta) {

    return new Promise(resolve => {

        rl.question(
            pregunta,
            respuesta => resolve(respuesta)
        );

    });
}


async function registrarCliente() {

    console.log(`
========================================
          REGISTRAR CLIENTE
========================================
    `);

    const nombre =
        await preguntar("Nombre: ");

    const documento =
        await preguntar("Documento: ");

    const telefono =
        await preguntar("Teléfono: ");

    const cliente =
        service.registrarCliente(
            nombre,
            documento,
            telefono
        );

    console.log(`
Cliente registrado correctamente.

ID asignado: ${cliente.id}
Nombre: ${cliente.nombre}
    `);
}


async function crearPrestamo() {

    console.log(`
========================================
          CREAR PRÉSTAMO
========================================
    `);

    service.listarClientes();

    if (service.clientes.length === 0) {
        return;
    }

    const clienteId =
        parseInt(
            await preguntar(
                "\nIngrese ID del cliente: "
            )
        );

    const cliente =
        service.buscarCliente(clienteId);

    if (!cliente) {

        console.log(
            "\nCliente no encontrado."
        );

        return;
    }


    console.log(`
TIPO DE PRÉSTAMO

1. Personal
2. Empresarial
3. Educativo
    `);

    const opcionTipo =
        await preguntar("Seleccione: ");


    let tipo;


    switch (opcionTipo) {

        case "1":
            tipo = "personal";
            break;

        case "2":
            tipo = "empresarial";
            break;

        case "3":
            tipo = "educativo";
            break;

        default:

            console.log(
                "Tipo de préstamo inválido."
            );

            return;
    }


    const monto =
        parseFloat(
            await preguntar(
                "Monto del préstamo: "
            )
        );


    const tasaPorcentaje =
        parseFloat(
            await preguntar(
                "Tasa mensual (%): "
            )
        );


    const tasa =
        tasaPorcentaje / 100;


    const meses =
        parseInt(
            await preguntar(
                "Plazo en meses: "
            )
        );


    console.log(`
ESTRATEGIA DE INTERÉS

1. Interés Simple
2. Interés Compuesto
3. Interés Preferencial
    `);


    const opcionEstrategia =
        await preguntar("Seleccione: ");


    let estrategia;


    switch (opcionEstrategia) {

        case "1":
            estrategia =
                new InteresSimple();
            break;

        case "2":
            estrategia =
                new InteresCompuesto();
            break;

        case "3":
            estrategia =
                new InteresPreferencial();
            break;

        default:

            console.log(
                "Estrategia inválida."
            );

            return;
    }


    const prestamo =
        service.crearPrestamo(
            tipo,
            cliente,
            monto,
            tasa,
            meses,
            estrategia
        );


    // Observer
    prestamo.agregarObservador(
        new NotificacionObserver()
    );

    prestamo.agregarObservador(
        new AuditoriaObserver()
    );


    console.log(`
========================================
     PRÉSTAMO CREADO CORRECTAMENTE
========================================
    `);

    prestamo.mostrarInformacion();
}


async function registrarPago() {

    console.log(`
========================================
          REGISTRAR PAGO
========================================
    `);

    service.listarPrestamos();

    if (service.prestamos.length === 0) {
        return;
    }


    const id =
        parseInt(
            await preguntar(
                "\nID del préstamo: "
            )
        );


    const prestamo =
        service.buscarPrestamo(id);


    if (!prestamo) {

        console.log(
            "\nPréstamo no encontrado."
        );

        return;
    }


    const valor =
        parseFloat(
            await preguntar(
                "Valor del pago: "
            )
        );


    const resultado =
        service.registrarPago(
            prestamo,
            valor
        );


    if (resultado) {

        console.log(`
========================================
       PAGO REGISTRADO CORRECTAMENTE
========================================
        `);

        console.log(
            `Nuevo saldo: $${prestamo.saldo.toLocaleString("es-CO")}`
        );

        console.log(
            `Estado: ${prestamo.estado}`
        );
    }
}


async function consultarPrestamo() {

    console.log(`
========================================
       CONSULTAR PRÉSTAMO
========================================
    `);


    service.listarPrestamos();


    if (service.prestamos.length === 0) {
        return;
    }


    const id =
        parseInt(
            await preguntar(
                "\nID del préstamo: "
            )
        );


    const prestamo =
        service.buscarPrestamo(id);


    if (!prestamo) {

        console.log(
            "\nPréstamo no encontrado."
        );

        return;
    }


    prestamo.mostrarInformacion();

    prestamo.mostrarHistorial();
}


async function menu() {

    let salir = false;


    while (!salir) {

        console.log(`
╔══════════════════════════════════════╗
║    SISTEMA DE GESTIÓN DE PRÉSTAMOS  ║
╠══════════════════════════════════════╣
║ 1. Registrar cliente                 ║
║ 2. Crear préstamo                    ║
║ 3. Registrar pago                    ║
║ 4. Consultar préstamo                ║
║ 5. Listar clientes                   ║
║ 6. Listar préstamos                  ║
║ 7. Salir                             ║
╚══════════════════════════════════════╝
        `);


        const opcion =
            await preguntar(
                "Seleccione una opción: "
            );


        switch (opcion) {

            case "1":
                await registrarCliente();
                break;

            case "2":
                await crearPrestamo();
                break;

            case "3":
                await registrarPago();
                break;

            case "4":
                await consultarPrestamo();
                break;

            case "5":
                service.listarClientes();
                break;

            case "6":
                service.listarPrestamos();
                break;

            case "7":

                salir = true;

                console.log(`
Gracias por utilizar el Sistema de Gestión de Préstamos.
                `);

                break;

            default:

                console.log(
                    "\nOpción no válida."
                );
        }
    }


    rl.close();
}


menu();