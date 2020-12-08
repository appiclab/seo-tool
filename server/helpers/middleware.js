const Koa = require("koa");
const cors = require('@koa/cors');
const session = require("koa-session");
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const CONFIG = require("../config");

require('koa-ejs')(app, {
  root: CONFIG.path.public,
  viewExt: 'html',
  layout: false,
  cache: false,
  debug: false
});

app
  .use(cors())
  .use(session(CONFIG.cookies, app))
  .use(bodyParser())
  .use(koaStatic(CONFIG.path.public, {
    index: false
  }));

module.exports = app;