# Dragonpedia Backend

Este repositorio contiene la API RESTful que sirve datos a la aplicación de Dragonpedia. Funciona como una base de datos de personajes y comentarios, permitiendo una comunicación eficiente con el frontend.

### Tecnologías Clave
- **Node.js & Express:** Para un servidor web ligero y eficiente.
- **JSON Server:** Utilizado para simular una API RESTful y una base de datos para desarrollo y producción.

### Endpoints de la API
La API se puede consumir desde la siguiente URL base:
- **URL Base:** `https://dragonpedia-backend.onrender.com`

**Endpoints Disponibles:**
- `GET /characters`: Obtiene la lista completa de personajes.
- `GET /characters?q=[query]`: Permite buscar personajes por nombre.
- `GET /comments?characterId=[id]`: Obtiene todos los comentarios para un personaje específico.
- `POST /comments`: Crea un nuevo comentario.
- `PUT /comments/[id]`: Actualiza un comentario existente.
- `DELETE /comments/[id]`: Elimina un comentario.
