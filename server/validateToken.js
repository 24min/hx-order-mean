/*
 * @Author: 24min
 * @Date: 2020-05-27 20:51:36
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-27 21:16:24
 * @Description: token验证
 */
const jwt = require('jsonwebtoken')
const secret = require('./config/secret.json')
const util = require('util')
const verify = util.promisify(jwt.verify)

module.exports = function () {
    return async function (ctx, next) {
        // 设置接口白名单，不进行token验证
        if (ctx.url === '/users/login') {
            console.log('sssssssssss')
            await next()
        } else {
            try {
                let token = ctx.header.authorization  // 获取请求携带的token
                if (token) {
                    let payload
                    try {
                        payload = await verify(token, secret.sign)  // 解密payload，获取用户名和ID
                        console.log('payload', payload)
                        await next()
                    } catch (err) {
                        ctx.response.status = 401;
                        ctx.body = { msg: '登录密钥失效或过期，请重新登录', code: 401, err }
                        console.log('token verify fail: ', err)
                    }
                } else {
                    ctx.response.status = 401;
                    ctx.body = { msg: '登录密钥失效或过期，请重新登录', code: 401 }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}
