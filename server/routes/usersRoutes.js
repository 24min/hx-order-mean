/*
 * @Author: 24min
 * @Date: 2020-05-04 13:10:33
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-27 20:07:42
 * @Description: file content
 */
const router = require('koa-router')()
const UserController = require('../controllers/usersControllers')
router.prefix('/api/users')

router.get('/userList', UserController.users)
router.delete('/users/:id', UserController.delUser)
router.post('/register', UserController.addUsers)
router.post('/login',UserController.login)

module.exports = router

