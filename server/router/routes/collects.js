const ajax = require("../../helpers/ajax.js");

module.exports.get = async ctx => {
  const response = await ajax(ctx, "collects.json");

  ctx.body = response.data;
}
