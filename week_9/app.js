const express = require('express');
const { Op} = require('sequelize');
const { sequelize, Student } = require('./models');

const app = express();
app.use(express.json());

//Home route

app.get("/",(req,res)=>{
    res.send("Week 9 - Sequelize Querying, Validations and Raw Queries");
});

//insert sample students


app.post("/students", async (req, res) => {
    try {
        const student = await Student.create({
        name: 'shivam shet',
        rollNo: 102,
        email: 'Shivamshet@example.com',
        age: 21,
        department: 'BCA'
    });
        res.status(201).json({message: "Student created successfully", student: student});
    } catch (error) {
        res.status(400).json({message: "Error creating student", error: error.message});
    }
});


// find all students

app.get("/students", async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({message: "Error fetching students", error: error.message});
    }
});

app.get("/students/roll/:rollNo", async (req, res) => {
    try{
        const student = await Student.findOne({
            where: {
                rollNo: req.params.rollNo
            }
        });

        if(!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    }catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
});

//Find Student By Department

app.get("/students/department/:department", async (req, res) => {
    try{

        const students = await Student.findAll({
            where: {
                department: req.params.department
            }
        });

        res.json(students);
    }catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
});

//raw query

app.get("/students/raw", async (req, res) => {
    try {
        const [students]= await sequelize.query(
            "SELECT * FROM Students"
        );
        res.json(students);
    } catch (error) {
        res.status(500).json({message: "Error executing raw query", error: error.message});
    }
});

//raw query with replacements

app.get("/students/raw/:department", async (req, res) => {
    try {
        const [students]= await sequelize.query(
            "SELECT * FROM Students WHERE department = ?",
            {
                replacements: [req.params.department]
            }
        );
        res.json(students);
    } catch (error) {
        res.status(500).json({message: "Error executing raw query", error: error.message});
    }
});

//Find Students by primary key (MUST be LAST among /students/* routes)

app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//select specific attributes

app.get("/student-names", async (req, res) => {
    try {
        const students = await Student.findAll({
            attributes: ['name','email','department']
        });
        res.json(students);
    } catch (error) {
        res.status(500).json({message: "Error fetching student names", error: error.message});
    }
});


//order students

app.get("/students-order", async (req, res) => {
    try {
        const students = await Student.findAll({
            order: [['name', 'ASC']]
        });
        res.json(students);
    } catch (error) {
        res.status(500).json({message: "Error fetching ordered students", error: error.message});
    }
});

//limit results

app.get("/students-limit", async (req, res) => {
    try {
        const students = await Student.findAll({
            limit: 3
        });
        res.json(students);
    } catch (error) {
        res.status(500).json({message: "Error fetching limited students", error: error.message});
    } 
});

// server

const port = 8000;
app.listen(port, async () => {
    try {
        await sequelize.sync();
        console.log(`Server is running on port ${port}`);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});