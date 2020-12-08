const ajax = require("../../helpers/ajax.js");

module.exports.get = async ctx => {
  const response = await ajax(ctx, "custom_collections.json");

  ctx.body = response.data;
}

module.exports.getByID = async ctx => {
  const response = await ajax(ctx, `collections/${ctx.request.params.id}.json`);

  ctx.body = response.data;
}
