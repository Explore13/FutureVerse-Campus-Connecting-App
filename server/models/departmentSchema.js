const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Department schema
const DepartmentSchema = new Schema({
    departmentID: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    name: {
        type: String,
        required: true },
    description: {
        type: String,
        default: '' },
    createdAt: {
        type: Date,
        default: Date.now },
});

// Create the Department model
const Department = mongoose.model('Department', DepartmentSchema);

// Export the model
module.exports = Department;
