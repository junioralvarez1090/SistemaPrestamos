class Cliente {
    constructor(id, nombre, documento, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.prestamos = [];
    }

    agregarPrestamo(prestamo) {
        this.prestamos.push(prestamo);
    }

    mostrarInformacion() {
        console.log(`
----------------------------------------
CLIENTE
----------------------------------------
ID: ${this.id}
Nombre: ${this.nombre}
Documento: ${this.documento}
Teléfono: ${this.telefono}
Préstamos: ${this.prestamos.length}
----------------------------------------
        `);
    }
}

module.exports = Cliente;