/*
 * @Author: 24min
 * @Date: 2020-05-07 20:13:18
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-18 18:28:37
 * @Description: file content
 */
const db = require('../config/db')
const Sequelize = db.sequelize;
const User = Sequelize.import('../schema/usersSchema.js')
User.sync({ force: false })

class UserModule {
    static async getUsers(query) {
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
        console.log('node', query)
        const result = { ...query, 'role': 'user', 'status': 'normal' }
        return await User.create({
            ...result
        })
    }
}

module.exports = UserModule;