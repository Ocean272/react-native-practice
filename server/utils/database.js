import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dbheroku','','', {
    host: 'mydatabase-1.ctgdayi97uhz.ap-southeast-1.rds.amazonaws.com',
    dialect: 'postgres',
    
});

export default sequelize;
