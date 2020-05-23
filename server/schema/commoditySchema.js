/*
 * @Author: 24min
 * @Date: 2020-05-18 18:36:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-23 14:50:06
 * @Description: commodity 商品
 */
const commodity = (sequelize, DataTypes) => {
    return sequelize.define('commodity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        /**商品唯一uid标识 */
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'uid',
            unique: true
        },
        /**商品状态 正常（normal） 下架（disable） */
        status: {
            type: DataTypes.ENUM('normal', 'disable'),
            allowNull: false,
            field: 'status'
        },
        /**卖出数量 */
        salesCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'salesCount'
        },
        /**商品名 */
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        /**价格 元*/
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
            field: 'price'
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
        freezeTableName: true
    })
}
// blogs.belongsTo(comment, { foreignKey: 'cid', targetKey: 'id', as: 'blogs' });
module.exports = commodity;