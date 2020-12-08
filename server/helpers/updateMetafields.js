const productsRouter = require("../router/routes/products.js");

module.exports = async function(task) {
  console.time("test");

  this.internal = true;
  this.request.query = {
    limit: 5,
    fields: "id"
  };

  const products = await productsRouter.get(this);
  const count = products.length - 1;
  const promises = [];

  await new Promise(resolve => {
    let i = 0;
    const timer = setInterval(_inner.bind(this), 500, i);

    function _inner() {
      console.log(i);
      
      if (i === count) {
        clearInterval(timer);
        resolve();
      }

      this.internal = true;
      this.request.query = {};
      this.request.body = {
        product: {
          id: products[i].id,
          metafields_global_title_tag: task.metafields.title,
          metafields_global_description_tag: task.metafields.description
        }
      };

      promises.push(productsRouter.put(this));

      i++;
    }
  });

  await Promise.all(promises);

  console.timeEnd("test");

  return task._id;
}