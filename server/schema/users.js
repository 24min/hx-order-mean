/*
 * @Author: 24min
 * @Date: 2020-05-07 19:58:50
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-11 19:54:38
 * @Description: file content
 */
const users = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        sex: {
            type: DataTypes.ENUM('female', 'male'),
            allowNull: false,
            field: 'sex'
        },
        role: {
            type: DataTypes.ENUM('admin', 'procurement', 'user'),
            allowNull: false,
            field: 'role'
        },
        status:{
            type:DataTypes.ENUM('normal','disable'),
            allowNull: false,
            field: 'status'
        },
        phone:{
            type:DataTypes.STRING,
            allowNull: false,
            field:'phone',
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'username'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        company:{
            type:DataTypes.STRING,
            allowNull: false,
            field: 'company'
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        /**
         * 如果为true，则表示名称和model相同，即user
         * 如果为fasle，mysql创建的表名称会是复数，即users
         * 如果指定的表名称本身就是复数，则形式不变
         */
        freezeTableName: false
    })
}
// blogs.belongsTo(comment, { foreignKey: 'cid', targetKey: 'id', as: 'blogs' });
module.exports = users;