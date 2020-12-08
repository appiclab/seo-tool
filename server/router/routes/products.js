const ajax = require("../../helpers/ajax.js");
const getPaginationLinks = require("../../helpers/getPaginationLinks.js");

module.exports.get = async (ctx) => {
  const response = await ajax(ctx, "products.json");

  ctx.body = {
    products: response.data.products,
    pagination: getPaginationLinks(response.headers.link)
  };
};

module.exports.put = async (ctx) => {
  const response = await ajax(ctx, `products/${ctx.request.params.id}.json`);

  ctx.body = {
    product: response.data.product
  };
};