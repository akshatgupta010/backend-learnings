const express = require('express');
const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());

// In-memory data store for notes
const notes = [];

/**
 * API Endpoints Overview:
 * - POST   /notes        -> Create a note
 * - GET    /notes        -> Get all notes
 * - DELETE /notes/:index -> Delete a note
 * - PATCH  /notes/:index -> Update a note
 */

// POST /notes
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "Note created successfully"
    });
});

// GET /notes 
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    });
});

// DELETE /notes/:index -
app.delete('/notes/:index', (req, res) => {
    const { index } = req.params;
    delete notes[index];
    res.status(200).json({
        message: "Note deleted successfully"
    });
});

// PATCH /notes/:index 
app.patch('/notes/:index', (req, res) => {
    const { index } = req.params;
    const { description } = req.body;
    
    if (notes[index]) {
        notes[index].description = description;
        res.status(200).json({
            message: "Note updated successfully"
        });
    } else {
        res.status(404).json({
            message: "Note not found"
        });
    }
});

module.exports = app;

