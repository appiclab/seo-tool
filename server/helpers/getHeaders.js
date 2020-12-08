module.exports = function getHeaders(ctx) {
  console.log(ctx.headers)
  let access_token = ctx.headers['x-shopify-access-token'] || ctx.cookies.get("accessToken");
  let shop_origin = ctx.headers['x-shopify-shop-origin'] || ctx.cookies.get("shopOrigin");
  
  if (!access_token || !shop_origin) {
    return null;
  }

  return {
    access_token,
    shop_origin
  }
}