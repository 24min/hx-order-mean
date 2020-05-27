/*
 * @Author: 24min
 * @Date: 2020-05-07 20:26:35
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-27 20:29:18
 * @Description: file content
 */
const jwt = require('jsonwebtoken')
const UserModule = require('../modules/usersModules')
const secret = require('../config/secret.json')
class UserControler {
    static async users(ctx) {
        const { query } = ctx.request;
        try {
            const data = await UserModule.getUsers(query)
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

    static async delUser(ctx) {
        const query = ctx.params.id;
        console.log('query', query)
        if (query) {
            try {
                const data = await UserModule.delUser(query)
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
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '缺少id',
            }
        }
    }

    /**注册 */
    static async addUsers(ctx) {
        const query = ctx.request.body;
        if (query.password && query.username) {
            try {
                const data = await UserModule.addUsers(query)
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
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '参数不全'
            }
        }
    }

    static async login(ctx) {
        const query = ctx.request.body
        if (query.password && query.jobNumber) {
            const userData = await UserModule.getUsers({ jobNumber: query.jobNumber })
            console.log('userdata', userData)
            if (userData.length > 0) {
                const { password, jobNumber } = userData[0]
                if (password === query.password) {
                    /**密码一致，准备签发token */
                    const token = jwt.sign({ jobNumber }, secret.sign, { expiresIn: '1h' })
                    ctx.response.status = 200;
                    ctx.body = {
                        code: 200,
                        msg: '成功🍉',
                        data: token
                    }
                } else {
                    ctx.response.status = 416;
                    ctx.body = {
                        code: 416,
                        msg: '用户名或者密码不正确！'
                    }
                }

            } else {
                ctx.response.status = 416;
                ctx.body = {
                    code: 416,
                    msg: '用户名或者密码不正确！'
                }
            }

        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '参数不全'
            }
        }
    }
}

module.exports = UserControler;