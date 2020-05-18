/*
 * @Author: 24min
 * @Date: 2020-05-04 13:10:33
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-18 18:29:56
 * @Description: file content
 */
const router = require('koa-router')()
const UserController = require('../controllers/usersControllers')
router.prefix('/api/users')

router.get('/userList', UserController.users)
router.delete('/users/:id', UserController.delUser)
router.post('/register', UserController.addUsers)


module.exports = router

