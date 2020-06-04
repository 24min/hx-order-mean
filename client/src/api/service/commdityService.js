/*
 * @Author: 24min
 * @Date: 2020-05-19 20:27:51
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-26 19:49:08
 * @Description: 商品接口
 */
import { callHttp } from "../request"
import { productPrefix } from "../config"

/**获取用户列表 */
const getCommdityList = (params) => {
    return callHttp(`${productPrefix.commodityPrefix}/list`, 'get', params)
}
/**新建商品 */
const addCommodity = (params) => {
    return callHttp(`${productPrefix.commodityPrefix}/create`, 'post', params)
}
/**更新商品数据 */
const updateCommodity = (params) => {
    return callHttp(`${productPrefix.commodityPrefix}/update`, 'post', params)
}
export {
    getCommdityList,
    addCommodity,
    updateCommodity
}