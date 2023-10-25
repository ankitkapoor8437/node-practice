const Project = require('../models/projectModel');



// Get Projects
const getProjects = async (req, res) => {
    try {
        const allProjects = await Project.find({});
        return res.status(200).json(allProjects);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });

    }
};

// Get Project by Id
const getProjectById = async (req, res) => {
    try {
        const projectById = await Project.findById(req.params.id);
        if (!projectById) {
            return res.status(404).json({ message: "Project not found!" });
        }
        return res.status(200).json(projectById);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });

    }
}

// Create Project Data
const createProject = async (req, res) => {
    const { projectName, projectUrl, projectDesc } = req.body;;
    
    // if (!name || !email || !password) {
    //     return res.status(400).json({ message: "All fields are required!" });
    // }

    try {
        const projectData = await Project.create({
            projectName,
            projectUrl,
            projectDesc
        });
        return res.status(201).json(projectData);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update Project Data
const updateProjectById = async (req, res) => {
    const id = req.params.id;
    const {
        projectName,
        projectUrl,
        projectDesc } = req.body;

    try {
        const dataToUpdate = req.body;
        await Project.findByIdAndUpdate(id, {
            projectName,
            projectUrl,
            projectDesc
        });
        if (!dataToUpdate) {
            return res.status(404).json({ message: "Project data not found" });
        }
        console.log(dataToUpdate);
        return res.status(200).json(dataToUpdate);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete Project Data
const deleteProjectById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProjectData = await Project.findByIdAndDelete(id);
        if (!deletedProjectData) {
            return res.status(404).json({ message: "Project data not found" });
        }
        return res.status(200).json({ message: `Successfully deleted Project with id: ${id}` });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProjectById,
    deleteProjectById
};