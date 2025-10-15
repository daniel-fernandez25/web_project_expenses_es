# TripleTen web_project_expenses

🧾 Expense Tracker
📖 Descripción

Aplicación web desarrollada en HTML, CSS y JavaScript puro que permite registrar y gestionar gastos personales.
El usuario puede ingresar un gasto, asignarle una categoría (como “supermercado”, “restaurantes”, “transporte”, “hogar” o “suscripciones”), establecer un presupuesto y visualizar el balance disponible junto con el promedio de gastos realizados.

El proyecto no cuenta con conexión a un backend, por lo que los datos se manejan únicamente en el navegador.

⚙️ Características principales

Registro de gastos individuales con descripción y categoría.

Definición de un presupuesto general para comparar contra el total de gastos.

Cálculo automático de:

Total de gastos

Balance disponible

Promedio de gasto

Gasto total por categoría

Interfaz adaptable con diseño responsive.

Manipulación dinámica del DOM mediante JavaScript.

🧩 Estructura del proyecto
web_project_expenses_es/
│
├── index.html # Estructura principal del sitio
│
├── scripts/ # Lógica y manipulación del DOM
│ ├── calculations.js # Funciones de cálculo (totales, promedios, balances)
│ ├── handle-html.js # Manipulación de elementos del DOM
│ └── index.js # Manejo general y flujo principal
│
├── blocks/ # Estilos por componentes (metodología BEM)
│ ├── header.css
│ ├── footer.css
│ ├── expenses.css
│ ├── modal.css
│ └── ...
│
├── pages/index.css # Estilos principales de la página
│
├── vendor/ # Recursos externos
│ ├── normalize.css
│ ├── fonts.css
│ └── fonts/
│ ├── Manrope-\*.ttf
│ └── Montserrat-Bold.ttf
│
└── images/ # Íconos y recursos visuales
└── delete-icon.svg

🖥️ Cómo ejecutar el proyecto

Clonar el repositorio:

git clone https://github.com/daniel-fernandez25/web_project_expenses_es.git

Abrir el archivo index.html directamente en el navegador.

No se requiere servidor local ni instalación adicional.

🧠 Tecnologías utilizadas

HTML5 — estructura semántica del sitio.

CSS3 — diseño modular siguiendo la metodología BEM.

JavaScript (ES6) — lógica de cálculo y actualización del DOM.

🚀 Futuras mejoras

Implementar almacenamiento persistente (LocalStorage o conexión con backend).

Añadir autenticación de usuario.

Incorporar gráficos visuales (por ejemplo, barras o pasteles por categoría).

Integrar una API para exportar o sincronizar los datos.

Mejorar accesibilidad (teclado y lectores de pantalla).

👨‍💻 Autor

Desarrollado por Daniel Fernández como práctica de desarrollo web frontend.
