/*
 * @Author: 24min
 * @Date: 2020-05-07 20:13:18
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-07 20:30:03
 * @Description: file content
 */
const db = require('../config/db')
const Sequelize = db.sequelize;
const User = Sequelize.import('../schema/users.js')
User.sync({ force: false })

class UserModule {
    static async getUsers(query) {
        console.log('query', query)
        return await User.findAll({
            where: {
                ...query
            },
            order: [
                ["id"]
            ],
        })

    }

    static async delUser(id) {
        return await User.destroy({
            where: {
                id
            }
        })
    }

    static async addUsers(query) {
        return await User.create({
            username: query.username,
            password: query.password,
        })
    }
}

module.exports = UserModule;