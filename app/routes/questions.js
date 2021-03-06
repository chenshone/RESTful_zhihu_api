const Router = require('koa-router')
const jwt = require('koa-jwt')

const { secret } = require('../config')
const {
  find,
  findById,
  create,
  update,
  delete: del,
  checkQuestioner,
  checkQuestionExist,
} = require('../controllers/questions')

const router = new Router({ prefix: '/questions' })

const auth = jwt({ secret })

router.get('/', find)

router.post('/', auth, create)

router.get('/:id', checkQuestionExist, findById)

router.patch('/:id', auth, checkQuestionExist, checkQuestioner, update)

router.delete('/:id', auth, checkQuestionExist, checkQuestioner, del)

module.exports = router
