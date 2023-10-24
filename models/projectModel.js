const mongoose = require("mongoose");

// SCHEMA
const projectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
        },
        projectUrl: {
            type: String,
        },
        projectDesc:{
            type:String,
        }
    },
    { timestamps: true }
)

const Project = mongoose.model("project", projectSchema);

module.exports = Project;