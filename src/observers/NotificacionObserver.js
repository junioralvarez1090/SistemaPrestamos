class NotificacionObserver {

    actualizar(prestamo, evento) {

        if (evento === "PAGO_REGISTRADO") {

            console.log(`
🔔 NOTIFICACIÓN

Se registró un pago en el préstamo #${prestamo.id}.

Cliente:
${prestamo.cliente.nombre}

Nuevo saldo:
$${prestamo.saldo.toLocaleString("es-CO")}
            `);
        }

        if (evento === "PRESTAMO_PAGADO") {

            console.log(`
🔔 NOTIFICACIÓN

¡El préstamo #${prestamo.id} ha sido pagado completamente!

Cliente:
${prestamo.cliente.nombre}
            `);
        }
    }
}

module.exports = NotificacionObserver;