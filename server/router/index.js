const Router = require("koa-router");
const router = new Router();

const metafields = require("./routes/metafields.js");
const shop = require("./routes/shop.js");
const products = require("./routes/products.js");
const tasks = require("./routes/tasks.js");
const pages = require("./routes/pages.js");
const collects = require("./routes/collects.js");
const collections = require("./routes/collections.js");

router
  .get("/metafields", metafields.get)
  .post("/metafields/:page_type", metafields.post)
router
  .get("/shop", shop.get)
router
  .get("/pages", pages.get)
  .put("/pages/:_id", pages.put);
router
  .get("/collects", collects.get)
router
  .get("/collections", collections.get)
  .get("/collections/:id", collections.getByID)
router
  .get("/products", products.get)
  .put("/products/:id", products.put);
router
  .get("/tasks", tasks.get)
  .get("/tasks/:_id", tasks.getOne)
  .post("/tasks", tasks.post);

module.exports = function () {
  this.use(router.allowedMethods());
  this.use(router.routes());

  return router
};