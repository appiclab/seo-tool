require("isomorphic-fetch");
require("./postgreSQL").init();

const PORT = parseInt(process.env.PORT, 10) || 3000;
const CONFIG = require("./config");
const app = require("./helpers/middleware");

require("./helpers/errorHandler.js").call(app); // Error Handler
require("./router").call(app); // Router
require("./helpers/shopify.js").call(app, CONFIG.cookies); // Shopify middleware

/* Start-up the server */
const http = require("http")
const server = http.createServer(app.callback())


server.listen(PORT, () => {
  let shop = "SHOP_ORIGIN.myshopify.com";

  if (process.env.SHOPIFY_SHOP) {
    shop = process.env.SHOPIFY_SHOP;
  }
  
  console.log(`> Server running in ${process.env.NODE_ENV} mode.`);
  console.log(`> To authenticate visit: ${process.env.HOST}/auth/inline?shop=${shop}`);
});

// server.timeout = 1000 * 60 * 10;