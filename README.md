# Dragonpedia Backend

Este repositorio contiene la API RESTful que sirve datos a la aplicación de Dragonpedia. Funciona como una base de datos de personajes y comentarios, permitiendo una comunicación eficiente con el frontend.

### Tecnologías Clave
- **Node.js & Express:** Para un servidor web ligero y eficiente.
- **JSON Server:** Utilizado para simular una API RESTful y una base de datos para desarrollo y producción.

### Endpoints de la API
La API se puede consumir desde los siguientes endpoints:
- `[URL_DE_RENDER]/characters`: Para obtener y buscar personajes.
- `[URL_DE_RENDER]/comments`: Para gestionar los comentarios.
  (Reemplaza `[URL_DE_RENDER]` con la URL de tu despliegue en Render, por ejemplo: `https://dragonpedia-backend.onrender.com/`).

### Cómo Iniciar el Proyecto (Local)
1.  Clona este repositorio: `git clone https://github.com/juanbry/dragonpedia-backend.git`
2.  Navega a la carpeta del proyecto: `cd dragonpedia-backend`
3.  Instala las dependencias: `npm install`
4.  Inicia el servidor: `npm start`
