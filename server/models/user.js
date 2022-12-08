import { Sequelize } from 'sequelize';
import sequelize from '../utils/database.js';

const User = sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

export default User;