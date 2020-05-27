/*
 * @Author: 24min
 * @Date: 2020-05-18 18:38:23
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-27 21:08:10
 * @Description: file content 商品
 */
const CommodityModule = require('../modules/commodityModules')
class CommodityControler {
    static async commodityList(ctx) {
        const { query } = ctx.request
        try {
            const data = await CommodityModule.commodityList(query)
            // console.log('ssss', data)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: 'success',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: 'error',
                err
            }
        }
    }
    static async commodityCreate(ctx) {
        const query = ctx.request.body;
        try {
            const data = await CommodityModule.commodityCreate(query)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: 'success',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: 'error',
                err
            }
        }
    }

    static async commodityUpdate(ctx) {
        const query = ctx.request.body;
        try {
            const data = await CommodityModule.commodityUpdate(query)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: 'success',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: 'error',
                err
            }
        }
    }
}

module.exports = CommodityControler;