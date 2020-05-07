/*
 * @Author: 24min
 * @Date: 2020-05-04 13:10:33
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-04 13:17:53
 * @Description: file content
 */
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa2 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    aa:11
  }
})

module.exports = router
