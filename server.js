// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Nuestra "base de datos" simulada
let comments = [
    { id: 101, postId: 1, name: 'Goku Son', email: 'goku@dragonball.com', body: '¡Wow, qué increíble! ¡Me encantaría pelear contra él!', date: new Date(Date.now() - 86400000).toISOString() },
    { id: 102, postId: 1, name: 'Vegeta El Príncipe', email: 'vegeta@dragonball.com', body: 'Hmph... no es rival para el príncipe de los saiyajin.', date: new Date(Date.now() - 172800000).toISOString() },
    { id: 103, postId: 2, name: 'Trunks Brief', email: 'trunks@capsulecorp.com', body: 'Papá, ¿crees que soy tan fuerte como él?', date: new Date(Date.now() - 259200000).toISOString() }
];

// Ruta GET para obtener comentarios de un post
app.get('/posts/:postId/comments', (req, res) => {
    const postId = parseInt(req.params.postId);
    const postComments = comments.filter(comment => comment.postId === postId);
    res.json(postComments);
});

// Ruta POST para crear un nuevo comentario
app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1,
        ...req.body,
        date: new Date().toISOString()
    };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Ruta PUT para actualizar un comentario
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let updatedComment = {};

    comments = comments.map(comment => {
        if (comment.id === id) {
            updatedComment = {
                ...comment,
                ...req.body,
                date: new Date().toISOString()
            };
            return updatedComment;
        }
        return comment;
    });

    res.json(updatedComment);
});

// Ruta DELETE para eliminar un comentario
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments = comments.filter(comment => comment.id !== id);
    res.status(204).send();
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`API de comentarios escuchando en http://localhost:${PORT}`);
});