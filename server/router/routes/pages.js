const ajax = require("../../helpers/ajax.js");

module.exports.get = async ctx => {
  const response = await ajax(ctx, "pages.json");

  ctx.body = response.data;
}

module.exports.put = async ctx => {
  const response = await ajax(ctx, "pages/71347732645.json");

  ctx.body = response.data;
}