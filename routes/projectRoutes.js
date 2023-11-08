const express = require("express");
const router = express.Router();
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

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
router.post('/api/project', upload.single('projectImageURL'), createProject);

// GET BY ID, PUT, DELETE
router.route('/api/project/:id').get(getProjectById)
    .patch(updateProjectById)
    .delete(deleteProjectById);

module.exports = router;
