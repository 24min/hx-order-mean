/*
 * @Author: 24min
 * @Date: 2020-05-18 18:38:59
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-18 20:14:03
 * @Description: file content 商品路由
 */ 
const router = require('koa-router')()
const commodityControllers = require('../controllers/commodityControllers')

router.prefix('/api/commodity')

router.get('/list', commodityControllers.commodityList)

module.exports = router