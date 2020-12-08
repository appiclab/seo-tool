const axios = require("axios");
const getQueries = require("./getQueries.js");

module.exports = async (ctx, endpoint) => {
  const queries = getQueries(ctx);
  const access_token = ctx.headers['x-shopify-access-token'];
  const shop_origin = ctx.headers['x-shopify-shop-origin'];
  const baseURL = `https://${shop_origin}/admin/api/${process.env.SHOPIFY_API_VERSION}`;
  const url = !queries 
    ? `${baseURL}/${endpoint}` 
    : `${baseURL}/${endpoint}?${queries}`;

  const options = {
    url,
    method: ctx.method,
    headers: {
      "x-shopify-access-token": access_token,
      "x-shopify-shop-origin": shop_origin
    }
  };

  if (Object.keys(ctx.request.body || {}).length) {
    options.data = ctx.request.body;
  }

  const response = await axios(options);

  return response
}