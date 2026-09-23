const { sequelize, Student } = require("./models");

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const deleteRow = await Student.destroy(
        {where:{id:3}}
    )
        console.log('\nDeleted ROW: ',deleteRow);

    
    

    console.log('Student created successfully.');
    console.log(students.toJSON());

    await sequelize.close();
    console.log("Connection has been closed successfully.");
  } catch (error) {
    console.error("Error updating student:", error);
  }
}

connectDatabase();