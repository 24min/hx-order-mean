/*
 * @Author: 24min
 * @Date: 2020-05-18 18:37:24
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-18 20:10:13
 * @Description: file content 商品 moudles
 */ 
const db = require('../config/db')
const Sequelize = db.sequelize;
const commodity = Sequelize.import('../schema/commoditySchema.js')
commodity.sync({ force: false })

class CommodityModule {
    /**获取商品数据 */
    static async commodityList(query){
        return await commodity.findAll({
            where: {
                ...query
            },
            order: [
                ["id"]
            ],
        })
    }
}

module.exports = CommodityModule;