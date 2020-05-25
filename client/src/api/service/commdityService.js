/*
 * @Author: 24min
 * @Date: 2020-05-19 20:27:51
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-25 21:52:42
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

export {
    getCommdityList,
    addCommodity
}