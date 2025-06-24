# 🚀 CRUD-FRONT (Aplicación Frontend con Angular)

Este repositorio contiene el código fuente de la aplicación frontend **CRUD-FRONT**, desarrollada con **Angular**. Esta aplicación está diseñada para interactuar con una API backend (como la aplicación [CRUD-APP de Laravel](https://github.com/Ricardojpq/CRUD-APP)) para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre diversos recursos.

---

### ✨ Características Principales

* **Interfaz de Usuario Moderna y Responsiva:** Diseñada para adaptarse a diferentes tamaños de pantalla.
* **Conectividad API RESTful:** Integración fluida con servicios backend para la gestión de datos.
* **Componentes Reutilizables:** Estructura modular que facilita el mantenimiento y la escalabilidad.

---

### 📋 Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema antes de comenzar:

* **Node.js:** Se recomienda la versión LTS más reciente. Incluye `npm` (Node Package Manager).
* **npm o Yarn:** Gestores de paquetes para JavaScript. `npm` viene con Node.js, Yarn se puede instalar globalmente.
* **Angular CLI:** La interfaz de línea de comandos de Angular, esencial para el desarrollo.
    Instálala globalmente si aún no lo has hecho:

    ```bash
    npm install -g @angular/cli
    ```

---

### 🚀 Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

1.  **Clona el repositorio:**

    ```bash
    git clone [https://github.com/Ricardojpq/CRUD-FRONT.git](https://github.com/Ricardojpq/CRUD-FRONT.git)
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd CRUD-FRONT
    ```

3.  **Instala las dependencias de Node.js:**

    ```bash
    npm install
    # Si prefieres usar Yarn:
    # yarn install
    ```

4.  **Configuración de la API Backend:**
    Edita el archivo `src/environments/environment.ts` (y `src/environments/environment.development.ts` para desarrollo) para asegurar que la variable `apiUrl` apunte a la dirección correcta de tu API backend (ej. tu CRUD-APP de Laravel).

    ```typescript
    // src/environments/environment.ts
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:8000/api' // ¡Asegúrate de que esta URL sea correcta para tu backend!
    };
    ```

---

### ▶️ Uso de la Aplicación

#### Iniciar el Servidor de Desarrollo

Para ejecutar la aplicación en modo de desarrollo, con recarga en vivo y herramientas de depuración:

```bash
ng serve
# Para abrir automáticamente la aplicación en tu navegador predeterminado:
# ng serve --open
