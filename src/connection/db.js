const Sequelize = require('sequelize');

    const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
    
        {
            host: process.env.DATABASE_HOST,
            dialect: 'mysql',
            port: process.env.DATABASE_PORT
        }
    );

module.exports = sequelize;