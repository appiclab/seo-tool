const getHeaders = require("../../helpers/getHeaders.js");
const fifo = require("../../helpers/fifo.js");
const { api } = require("../../database");

module.exports.get = async (ctx) => {
  ctx.body = { task: "not done yet" };
};

module.exports.getOne = async (ctx) => {
  const task_id = ctx.request.params;

  if (!task_id._id) {
    return ctx.body = "task id required"
  }

  const response = await api.get(task_id);

  ctx.body = !response ? { task: null } : {
    task: {
      _id: response._id,
      fulfilled: response.fulfilled,
      type: response.type,
      created_at: response.created_at,
      metafields: response.metafields,
    }
  }
};

module.exports.post = async (ctx) => {
  const { metafields } = ctx.request.body;
  
  if (!metafields) {
    return ctx.body = "metafields objects required"
  }

  const headers = getHeaders(ctx);
  
  if (!headers) {
    return ctx.body = "Shop Origin or Access Token is missing";
  }

  const { shop_origin } = headers;
  const task = await api.push({
    shop_origin,
    type: "products",
    metafields
  });
  
  fifo.call(ctx);
  
  ctx.body = task;
};