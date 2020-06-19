const Router = require('koa-router')
const jwt = require('koa-jwt')

const { secret } = require('../config')
const {
  find,
  findById,
  create,
  update,
  delete: del,
  checkCommentIdExist,
  checkCommentator,
} = require('../controllers/comments')

const router = new Router({
  prefix: '/questions/:questionId/answers/:answerId/comments',
})

const auth = jwt({ secret })

router.get('/', find)

router.post('/', auth, create)

router.get('/:id', checkCommentIdExist, findById)

router.patch('/:id', auth, checkCommentIdExist, checkCommentator, update)

router.delete('/:id', auth, checkCommentIdExist, checkCommentator, del)

module.exports = router
