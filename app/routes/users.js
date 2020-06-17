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
  listLikingAnswers,
  likeAnswer,
  unLikeAnswer,
  listDislikingAnswers,
  dislikeAnswer,
  unDislikeAnswer,
  listCollectingAnswers,
  collectAnswer,
  unCollectAnswer,
} = require('../controllers/users')
const { secret } = require('../config')
const { checkTopicExist } = require('../controllers/topics')
const { checkAnswerExist } = require('../controllers/answers')

const router = new Router({ prefix: '/users' })

const auth = jwt({ secret })

router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', auth, checkOwner, update)
router.delete('/:id', auth, checkOwner, del)

router.post('/login', login)

router.get('/:id/followers', listFollowers)

router.get('/:id/following', listFollowing)
router.put('/following/:id', auth, checkUserExist, follow)
router.delete('/following/:id', auth, checkUserExist, unFollow)

router.get('/:id/followingTopics', listFollowingTopics)
router.put('/followingTopics/:id', auth, checkTopicExist, followTopics)
router.delete('/followingTopics/:id', auth, checkTopicExist, unFollowTopics)

router.get('/:id/questions', listQuestions)

router.get('/:id/likingAnswers', listLikingAnswers)
router.put(
  '/likingAnswers/:id',
  auth,
  checkAnswerExist,
  likeAnswer,
  unDislikeAnswer
)
router.delete('/likingAnswers/:id', auth, checkAnswerExist, unLikeAnswer)

router.get('/:id/dislikingAnswers', listDislikingAnswers)
router.put(
  '/dislikingAnswers/:id',
  auth,
  checkAnswerExist,
  dislikeAnswer,
  unLikeAnswer
)
router.delete('/dislikingAnswers/:id', auth, checkAnswerExist, unDislikeAnswer)

router.get('/:id/collectingAnswers', listCollectingAnswers)
router.put('/collectingAnswers/:id', auth, checkAnswerExist, collectAnswer)
router.delete('/collectingAnswers/:id', auth, checkAnswerExist, unCollectAnswer)

module.exports = router
