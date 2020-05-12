/*
 * @Author: 24min
 * @Date: 2020-05-04 13:10:33
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-12 18:39:15
 * @Description: file content
 */
const router = require('koa-router')()
const UserController = require('../controllers/users')
router.prefix('/api/users')

router.get('/userList', UserController.users)
router.delete('/users/:id', UserController.delUser)
router.post('/register', UserController.addUsers)


module.exports = router

