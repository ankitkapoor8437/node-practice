const express = require("express");
const router = express.Router();

const {
    getProjects,
    getProjectById,
    createProject,
    updateProjectById,
    deleteProjectById } = require('../controllers/projectController');



// Routes for Project

// GET
router.get('/api/project', getProjects);

// POST
router.post('/api/project', createProject);

// GET BY ID, PUT, DELETE
router.route('/api/:id').get(getProjectById)
    .patch(updateProjectById)
    .delete(deleteProjectById);

module.exports = router;
