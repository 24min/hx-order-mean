/*
 * @Author: 24min
 * @Date: 2020-05-11 20:32:15
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-27 20:07:31
 * @Description: 用户模块前缀
 */
import { callHttp } from "../request"
import { productPrefix } from "../config"

/**获取用户列表 */
const getUserList = (params) => {
    return callHttp(`${productPrefix.userPrefix}/userList`, 'get', params)
}

/**注册用户 */
const addUser = (params) => {
    return callHttp(`${productPrefix.userPrefix}/register`, 'post',params)
}
const userLogin = (params) =>{
    return callHttp(`${productPrefix.userPrefix}/login`,'post',params)
}
export {
    getUserList,
    addUser,
    userLogin
}