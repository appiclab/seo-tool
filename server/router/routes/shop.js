const ajax = require("../../helpers/ajax.js");

module.exports.get = async ctx => {
  const response = await ajax(ctx, "shop.json");

  ctx.body = response.data;
}