/*
 * @Author: 24min
 * @Date: 2020-05-18 18:37:24
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-25 21:58:13
 * @Description: file content 商品 moudles 与数据库进行交互
 */
const db = require('../config/db')
const Sequelize = db.sequelize;
const commodity = Sequelize.import('../schema/commoditySchema.js')
commodity.sync({ force: false })

class CommodityModule {
    /**获取商品数据 */
    static async commodityList(query) {
        return await commodity.findAll({
            where: {
                ...query
            },
            order: [
                ["id"]
            ],
        })
    }
    /**新建商品 */
    static async commodityCreate(query) {
        const result = { ...query, 'status': 'normal', 'salesCount': 0 }
        return await commodity.create({
            ...result
        })
    }
}

module.exports = CommodityModule;