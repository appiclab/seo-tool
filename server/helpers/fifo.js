const getHeaders = require("./getHeaders.js");
const updateMetafields = require("./updateMetafields.js"); 
const { api } = require("../database");

module.exports = async function fifo() {
  const { shop_origin } = getHeaders(this);
  const active = await api.get({ shop_origin, fulfilled: false, active: true });

  if (active) {
    return null;
  }

  const task = await api.update({ shop_origin, fulfilled: false, active: false }, { active: true });

  if (task) {
    const _id = await updateMetafields.call(this, task);

    await api.update({ _id }, { fulfilled: true });
    await fifo.call(this);
  }
}