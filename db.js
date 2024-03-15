const { Sequelize } = require("sequelize");

// database
const sequelize = new Sequelize(
  process.env.DATABASE_URL,

  {
    host: process.env.DB_HOST, // Host
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: "added",
      updatedAt: "updated",
    },
  }
);

sequelize.authenticate();
sequelize.sync();

module.exports = sequelize;
