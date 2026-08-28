# Sistema de Préstamos

Aplicación desarrollada en **Node.js** para gestionar clientes, préstamos y pagos, aplicando patrones de diseño de software.

El proyecto fue desarrollado con el objetivo de demostrar la aplicación práctica de patrones de diseño en una solución escalable, modular y fácil de mantener.

---

## 1. Descripción del proyecto

El **Sistema de Préstamos** permite administrar diferentes operaciones relacionadas con créditos, entre ellas:

* Registrar clientes.
* Crear préstamos.
* Seleccionar diferentes tipos de préstamos.
* Aplicar diferentes estrategias para calcular intereses.
* Registrar pagos.
* Consultar información de los préstamos.
* Consultar el saldo pendiente.
* Consultar el historial de pagos.
* Identificar cuándo un préstamo ha sido completamente pagado.
* Generar notificaciones y registros de auditoría.

La aplicación funciona mediante una interfaz de consola y utiliza **Node.js**.

---

## 2. Patrones de diseño utilizados

En el proyecto se implementaron tres patrones de diseño:

### Strategy

Se utiliza para manejar diferentes estrategias de cálculo de intereses.

Actualmente se encuentran disponibles:

* Interés Simple.
* Interés Compuesto.
* Interés Preferencial.

Esto permite agregar nuevas formas de cálculo sin modificar directamente la clase principal del préstamo.

---

### Observer

Se utiliza para notificar diferentes eventos relacionados con los préstamos.

Actualmente existen dos observadores:

* `NotificacionObserver`
* `AuditoriaObserver`

Cuando se registra un pago o un préstamo queda completamente pagado, los observadores reciben automáticamente la información del evento.

---

### Factory Method

Se utiliza para crear diferentes tipos de préstamos.

Actualmente se pueden crear:

* Préstamo Personal.
* Préstamo Empresarial.
* Préstamo Educativo.

La fábrica permite crear nuevos tipos de préstamos sin modificar considerablemente el programa principal.

---

# 3. Tecnologías utilizadas

El proyecto utiliza:

* **Node.js**
* **JavaScript**
* **Visual Studio Code**
* **Git**
* **GitHub**

No es necesario instalar librerías externas para ejecutar la versión actual del proyecto.

---

# 4. Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

### Node.js

Descarga e instala Node.js desde su página oficial:

https://nodejs.org/

Después de instalarlo, puedes comprobar que funciona ejecutando en una terminal:

```bash
node --version
```

Deberías obtener una versión similar a:

```text
v22.x.x
```

También puedes comprobar npm:

```bash
npm --version
```

---

# 5. Descargar el proyecto

Si el proyecto se encuentra publicado en GitHub, abre Visual Studio Code y selecciona:

```text
Terminal → New Terminal
```

También puedes utilizar el atajo:

```text
Ctrl + Shift + `
```

Desde la terminal ejecuta:

```bash
git clone https://github.com/junioralvarez1090/SistemaPrestamos.git
```

Reemplaza:

```text
TU-USUARIO
```

por el nombre real de tu usuario de GitHub.

Después ingresa a la carpeta:

```bash
cd sistema-gestion-prestamos
```

---

# 6. Abrir el proyecto en Visual Studio Code

Una vez ubicada la terminal dentro de la carpeta del proyecto, ejecuta:

```bash
code .
```

Esto abrirá automáticamente el proyecto en Visual Studio Code.

Si el comando `code .` no está disponible, también puedes abrir Visual Studio Code manualmente y seleccionar:

```text
File → Open Folder
```

Después selecciona la carpeta:

```text
sistema-prestamos
```

---

# 7. Estructura del proyecto

La estructura principal del proyecto es:

```text
sistema-prestamos/
│
├── package.json
│
└── src/
    │
    ├── main.js
    │
    ├── models/
    │   ├── Cliente.js
    │   ├── Prestamo.js
    │   └── Pago.js
    │
    ├── strategies/
    │   ├── InteresSimple.js
    │   ├── InteresCompuesto.js
    │   └── InteresPreferencial.js
    │
    ├── observers/
    │   ├── NotificacionObserver.js
    │   └── AuditoriaObserver.js
    │
    ├── factories/
    │   ├── PrestamoPersonal.js
    │   ├── PrestamoEmpresarial.js
    │   ├── PrestamoEducativo.js
    │   └── PrestamoFactory.js
    │
    └── services/
        └── PrestamoService.js
```

---

# 8. Instalar las dependencias

Aunque la aplicación actualmente utiliza principalmente funcionalidades nativas de Node.js, se recomienda ejecutar:

```bash
npm install
```

Este comando utiliza el archivo `package.json` para preparar el proyecto.

---

# 9. Ejecutar la aplicación

Existen dos formas de iniciar la aplicación.

## Opción 1: utilizando npm

Desde la terminal de Visual Studio Code:

```bash
npm start
```

El comando ejecutará:

```text
node src/main.js
```

---

## Opción 2: utilizando Node.js directamente

También puedes ejecutar:

```bash
node src/main.js
```

---

# 10. Menú principal

Cuando la aplicación se ejecute correctamente aparecerá el siguiente menú:

```text
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

Seleccione una opción:
```

El usuario puede seleccionar la funcionalidad escribiendo el número correspondiente.

---

# 11. Ejemplo de uso

## Registrar un cliente

Seleccione:

```text
1
```

La aplicación solicitará:

```text
Nombre:
Documento:
Teléfono:
```

Después mostrará:

```text
Cliente registrado correctamente.

ID asignado: 1
Nombre: Juan Pérez
```

---

## Crear un préstamo

Seleccione:

```text
2
```

Primero se mostrará la lista de clientes registrados.

Después se seleccionará el tipo de préstamo:

```text
TIPO DE PRÉSTAMO

1. Personal
2. Empresarial
3. Educativo
```

Posteriormente se solicitará:

```text
Monto del préstamo:
Tasa mensual (%):
Plazo en meses:
```

Finalmente se seleccionará la estrategia de interés:

```text
ESTRATEGIA DE INTERÉS

1. Interés Simple
2. Interés Compuesto
3. Interés Preferencial
```

---

# 12. Registrar un pago

Seleccione:

```text
3
```

Después indique el ID del préstamo:

```text
ID del préstamo:
```

Finalmente ingrese el valor:

```text
Valor del pago:
```

El sistema actualizará automáticamente el saldo pendiente.

---

# 13. Ejemplo de Observer

Cuando se registra un pago, el sistema puede mostrar:

```text
🔔 NOTIFICACIÓN

Se registró un pago en el préstamo #1.

Cliente:
Juan Pérez

Nuevo saldo:
$2.500.000
```

Además, se genera un evento de auditoría:

```text
📝 AUDITORÍA

Fecha: 28/08/2026
Préstamo: #1
Cliente: Juan Pérez
Evento: PAGO_REGISTRADO
Saldo actual: $2.500.000
```

Esto demuestra el funcionamiento del patrón **Observer**.

---

# 14. Consultar un préstamo

Seleccione:

```text
4
```

El sistema mostrará información como:

```text
========================================
      INFORMACIÓN DEL PRÉSTAMO
========================================

ID: 1

Cliente:
Juan Pérez

Tipo:
Personal

Monto:
$3.000.000

Tasa:
2.00%

Plazo:
12 meses

Estrategia:
Interés Simple

Intereses:
$720.000

Total:
$3.720.000

Saldo pendiente:
$2.500.000

Estado:
ACTIVO

Cantidad de pagos:
1
```

---

# 15. Listar clientes

Seleccione:

```text
5
```

El sistema mostrará los clientes registrados:

```text
========================================
             LISTA DE CLIENTES
========================================

ID: 1 | Nombre: Juan Pérez | Documento: 123456 | Préstamos: 1
ID: 2 | Nombre: María López | Documento: 987654 | Préstamos: 2
```

---

# 16. Listar préstamos

Seleccione:

```text
6
```

El sistema mostrará:

```text
========================================
             LISTA DE PRÉSTAMOS
========================================

ID: 1 | Cliente: Juan Pérez | Tipo: Personal | Saldo: $2.500.000 | Estado: ACTIVO
ID: 2 | Cliente: María López | Tipo: Educativo | Saldo: $1.200.000 | Estado: ACTIVO
```

---

# 17. Finalizar la aplicación

Para salir del programa seleccione:

```text
7
```

La aplicación mostrará:

```text
Gracias por utilizar el Sistema de Gestión de Préstamos.
```

También puede detenerse directamente desde la terminal utilizando:

```text
Ctrl + C
```

---

# 18. Funcionamiento de la arquitectura

El proyecto separa las responsabilidades de cada componente.

```text
                    SISTEMA DE PRÉSTAMOS
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
       MODELOS          SERVICES          PATRONES
          │                 │                 │
          │                 │        ┌────────┼────────┐
          │                 │        │        │        │
          ▼                 ▼        ▼        ▼        ▼
      Cliente          Prestamo   Strategy Observer Factory
      Prestamo         Service
      Pago
```

Esta separación permite que cada componente tenga una responsabilidad específica.

---

# 19. Ventajas de la solución

La aplicación presenta las siguientes ventajas:

* Código modular.
* Separación de responsabilidades.
* Bajo acoplamiento.
* Facilidad para realizar modificaciones.
* Posibilidad de agregar nuevos tipos de préstamos.
* Posibilidad de agregar nuevas estrategias de cálculo.
* Posibilidad de agregar nuevos observadores.
* Mayor facilidad para realizar mantenimiento.
* Aplicación práctica de patrones de diseño.

---

# 20. Agregar un nuevo tipo de préstamo

Gracias al patrón Factory Method, en el futuro se podría agregar, por ejemplo:

```text
PrestamoHipotecario
```

sin tener que modificar toda la aplicación.

La nueva clase podría extender:

```javascript
Prestamo
```

y posteriormente incorporarse a:

```text
PrestamoFactory.js
```

---

# 21. Agregar una nueva estrategia

También es posible agregar una nueva estrategia de cálculo.

Por ejemplo:

```text
InteresVariable.js
```

La nueva clase implementaría:

```javascript
class InteresVariable {

    calcular(capital, tasa, meses) {

        // Nueva lógica de cálculo

    }

    obtenerNombre() {

        return "Interés Variable";

    }
}
```

Esto demuestra la flexibilidad proporcionada por **Strategy**.

---

# 22. GitHub

El código fuente del proyecto puede publicarse en GitHub para facilitar su revisión y demostrar el desarrollo realizado.

Repositorio:

```text
https://github.com/TU-USUARIO/sistema-gestion-prestamos
```

Debe reemplazarse `TU-USUARIO` por el usuario real de GitHub.

---

# 23. Solución de problemas

### Error: `node is not recognized`

Si Visual Studio Code muestra:

```text
'node' is not recognized as an internal or external command
```

significa que Node.js no está instalado correctamente o no se encuentra configurado en las variables de entorno.

Solución:

1. Instalar Node.js.
2. Cerrar Visual Studio Code.
3. Abrir nuevamente Visual Studio Code.
4. Ejecutar:

```bash
node --version
```

---

### Error: `Cannot find module`

Si aparece:

```text
Cannot find module
```

verifica que estés ubicado en la carpeta principal del proyecto.

Ejecuta:

```bash
dir
```

En Linux/macOS:

```bash
ls
```

Deberías visualizar:

```text
package.json
src
```

Después ejecuta:

```bash
npm install
```

---

### El programa no inicia

Verifica que el archivo principal exista:

```text
src/main.js
```

Después ejecuta:

```bash
node src/main.js
```

---

# 24. Autor

**Junior Diaz**

Proyecto académico desarrollado para demostrar la implementación de patrones de diseño de software utilizando Node.js.

---

## Licencia

Este proyecto se desarrolla con fines académicos y educativos.
