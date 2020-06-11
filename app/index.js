const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')

const routing = require('./routes')
const { connectionStr } = require('./config')
const app = new Koa()

mongoose.connect(
  connectionStr,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('MongoDB 连接成功')
)
mongoose.connection.on('error', console.error)

app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === 'production' ? rest : { stack, ...rest },
  })
)
app.use(bodyParser())
app.use(parameter(app))
routing(app)

app.listen(3000, () =>
  console.log('程序启动成功，请在 http://localhost:3000 访问')
)
