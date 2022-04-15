// Dependents
const fs = require('fs');
const router = require('express').Router();
const saveData = require('../database/saveData');
const path = require('path');

// GET
router.get('/api/notes', function (req, res) {
    saveData
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST
router.post('/api/notes', (req, res) => {
    saveData
        .addNote(req.body)
            .then((note) => res.json(note))
            .catch(err => res.status(500).json(err));
});

router.delete('/api/notes/:id', function (req, res) {
    saveData
    .deleteNote(req.params.id)
    .then(() => res.json({ok:true}))
    .catch(err => res.status(500).json(err));
});

module.exports = router;