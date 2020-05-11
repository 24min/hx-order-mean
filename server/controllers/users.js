/*
 * @Author: 24min
 * @Date: 2020-05-07 20:26:35
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-11 19:59:05
 * @Description: file content
 */
const UserModule = require('../modules/users')
class UserControler {
    static async users(ctx){
        const { query } = ctx.request;
        try{
            const data = await UserModule.getUsers(query)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: 'success',
                data
            }
        }catch(err){
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: 'error',
                err
            }
        }
    }

    static async delUser(ctx){
        const query = ctx.params.id;
        console.log('query', query)
        if(query){
            try{
                const data = await UserModule.delUser(query)
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: 'success',
                    data
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg:'error',
                    err
                }
            }
        }else{
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '缺少id',
            }
        }
    }


    static async addUsers(ctx){
        const query = ctx.request.body;
        if(query.password && query.username){
            try{
                const data = await UserModule.addUsers(query)
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: 'success',
                    data
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg:'error',
                    err
                }
            }
        }else{
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '参数不全'
            }
        }
    }
}

module.exports = UserControler;