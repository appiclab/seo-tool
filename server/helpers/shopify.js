const db = require("../postgreSQL");

// Import Shopify/Koa modules to assist with authentication
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");


module.exports = function (CONFIG) {
  /* Shopify middleware */
  this.keys = [process.env.SHOPIFY_API_SECRET];
  // Authenticate app with Shopify
  this.use(
    createShopifyAuth({
      // if specified, mounts the routes off of the given path
      // eg. /shopify/auth, /shopify/auth/callback
      prefix: "", // defaults to ''
      // your shopify app api key
      apiKey: process.env.SHOPIFY_API_KEY,
      // your shopify app secret
      secret: process.env.SHOPIFY_API_SECRET,
      // scopes to request on the merchants store
      scopes: process.env.SHOPIFY_APP_SCOPES.split(","),
      // set access mode, default is 'online'
      accessMode: "offline", // offline or online
      // callback for when auth is completed
      async afterAuth(ctx) {
        const {
          shop: shop_origin, 
          accessToken: access_token
        } = ctx.session;
        
        ctx.cookies.set("accessToken", access_token, CONFIG);
        ctx.cookies.set("shopOrigin", shop_origin, CONFIG);

        await db.addOrUpdateUser({ shop_origin, access_token });

        ctx.redirect("/");

        // await require('./subscriptions')(ctx, accessToken, shop);
        // return ctx.redirect(`https://${shop_origin}/admin/apps/${process.env.SHOPIFY_APP_NAME}`);
      },
    })
  );

  // everything after this point will require authentication
  this.use(
    verifyRequest({
      // path to redirect to if verification fails
      authRoute: "/auth", // defaults to '/auth'
      // path to redirect to if verification fails and there is no shop on the query
      fallbackRoute: "/auth", // defaults to '/auth'
    })
  );

  // The index page
  this.use(async ctx => {
    const access_token = ctx.cookies.get("accessToken");
    const shop_origin = ctx.cookies.get("shopOrigin");

    const { data: { shop } } = await require("../helpers/ajax.js")({
      method: "GET",
      request: {
        query: {
          fields: "domain,primary_locale"
        }
      },
      headers: {
        "x-shopify-access-token": access_token,
        "x-shopify-shop-origin": shop_origin
      }
    }, "shop.json");

    shop.app_name = "SEO Tool";
    shop.access_token = access_token;

    await ctx.render('index', { shop });
  });
}