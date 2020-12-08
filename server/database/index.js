const mongoose = require("mongoose");
const Tasks = require("./model/tasks");
const Users = require("./model/users");

const url = "mongodb+srv://shopify:shopify@cluster0.sh8lu.mongodb.net/shopify-app?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}
module.exports.init = () => {
  mongoose.connect(url, options)
    .then(() => console.log('> DB Connected'))
    .catch((error) => console.log('> DB error', error));
}

module.exports.api = {
  setUser: async (payload) => {
    const find = { shop_origin: payload.shop_origin };
    const set = { access_token: payload.access_token };

    if (!await Users.findOneAndUpdate(find, { $set: set })) {
      await new Users(payload).save();
    }
  },
  push: async (payload) => {
    const task = await new Tasks(payload).save();

    return {
      task: {
        _id: task._id,
        fulfilled: task.fulfilled,
        type: task.type,
        created_at: task.created_at,
        metafields: task.metafields,
      }
    };
  },
  get: async (find) => {
    return await Tasks.findOne(find);
  },
  update: async (find, update) => {
    return await Tasks.findOneAndUpdate(find, { $set: update });
  }
}