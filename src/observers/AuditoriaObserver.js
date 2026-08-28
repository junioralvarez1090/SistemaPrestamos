class AuditoriaObserver {

    actualizar(prestamo, evento) {

        const fecha = new Date().toLocaleString("es-CO");

        console.log(`
📝 AUDITORÍA

Fecha: ${fecha}
Préstamo: #${prestamo.id}
Cliente: ${prestamo.cliente.nombre}
Evento: ${evento}
Saldo actual: $${prestamo.saldo.toLocaleString("es-CO")}
        `);
    }
}

module.exports = AuditoriaObserver;