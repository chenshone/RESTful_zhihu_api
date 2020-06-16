const Router = require('koa-router')
const jwt = require('koa-jwt')

const {
  find,
  findById,
  create,
  update,
  delete: del,
  login,
  checkOwner,
  listFollowing,
  follow,
  unFollow,
  listFollowers,
  checkUserExist,
  followTopics,
  unFollowTopics,
  listFollowingTopics,
  listQuestions,
} = require('../controllers/users')
const { secret } = require('../config')
const { checkTopicExist } = require('../controllers/topics')

const router = new Router({ prefix: '/users' })

const auth = jwt({ secret })

router.get('/', find)

router.post('/', create)

router.get('/:id', findById)

router.patch('/:id', auth, checkOwner, update)

router.delete('/:id', auth, checkOwner, del)

router.post('/login', login)

router.get('/:id/following', listFollowing)

router.get('/:id/followers', listFollowers)

router.put('/following/:id', auth, checkUserExist, follow)

router.delete('/following/:id', auth, checkUserExist, unFollow)

router.put('/followingTopics/:id', auth, checkTopicExist, followTopics)

router.delete('/followingTopics/:id', auth, checkTopicExist, unFollowTopics)

router.get('/:id/followingTopics', listFollowingTopics)

router.get('/:id/questions', listQuestions)

module.exports = router
