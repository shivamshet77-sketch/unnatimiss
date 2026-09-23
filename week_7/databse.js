const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('schooldb', 'root', 'MySQL@2026', {
  host: 'localhost',
  dialect: 'mysql'  
});

async function connectDatabase(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.close();
        console.log('Connection has been closed successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectDatabase();