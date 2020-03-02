module.exports = (sequelize, DataTypes) => {
    // sequelize com nome do model
    return sequelize.define("Usuario", {
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    });
     
};