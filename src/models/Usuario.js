module.exports = (sequelize, DataTypes) => {
    // sequelize com nome do model
    const Usuario = sequelize.define("Usuario", {
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    });
    console.log(Usuario);
    return Usuario;
};