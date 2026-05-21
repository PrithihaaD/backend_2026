const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

/* ---------------- MONGODB CONNECTION ---------------- */

mongoose.connect("mongodb://prithihaad2024_db_user:student123@ac-7hn6isx-shard-00-00.hibtotj.mongodb.net:27017,ac-7hn6isx-shard-00-01.hibtotj.mongodb.net:27017,ac-7hn6isx-shard-00-02.hibtotj.mongodb.net:27017/studentDB?ssl=true&replicaSet=atlas-9c3uo7-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

/* ---------------- SCHEMA ---------------- */

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    gender: String,
    phone: Number,
    course: String,
    department: String,
    city: String
});

/* ---------------- MODEL ---------------- */

const Student = mongoose.model("Student", studentSchema);

/* ================================================= */
/* ==================== CRUD ======================= */
/* ================================================= */

/* -------- CREATE (POST) -------- */

app.post("/student", async (req, res) => {

    const student = new Student(req.body);

    await student.save();

    res.status(201).json({
        message: "Student Added",
        data: student
    });

});

/* -------- READ ALL (GET) -------- */

app.get("/student", async (req, res) => {

    const students = await Student.find();

    res.status(200).json(students);

});

/* -------- READ SINGLE USING PATH PARAM -------- */

app.get("/student/:id", async (req, res) => {

    const id = req.params.id;

    const student = await Student.findById(id);

    res.status(200).json(student);

});

/* -------- QUERY PARAM -------- */

app.get("/search", async (req, res) => {

    const name = req.query.name;

    const student = await Student.find({ name: name });

    res.status(200).json(student);

});

/* -------- UPDATE -------- */

app.put("/student/:id", async (req, res) => {

    const id = req.params.id;

    const updatedStudent = await Student.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );

    res.status(200).json({
        message: "Student Updated",
        data: updatedStudent
    });

});

/* -------- DELETE -------- */

app.delete("/student/:id", async (req, res) => {

    const id = req.params.id;

    await Student.findByIdAndDelete(id);

    res.status(200).json({
        message: "Student Deleted"
    });

});

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});