import { Sequelize } from "sequelize";

const db = new Sequelize('siAdmin', 'root', 'Mazmur91!!!',{
    host:'localhost',
    dialect:'mysql'
})

export default db