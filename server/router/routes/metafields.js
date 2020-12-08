const ajax = require("../../helpers/ajax.js");

function getMetafields(metafields, keys) {
  const _metafields = {};

  Object.keys(metafields).forEach(key => {
    let _ = metafields[key];

    Object.keys(keys).forEach(_key => {
      const regexp = new RegExp(_key, "g");
      _ = _.replace(regexp, keys[_key])
    })

    _metafields[key] = _
  });

  return _metafields
}

module.exports.get = async ctx => {
  console.log("POST /metafields");
  const response = ajax(ctx, "products/5977552060581/metafields.json")
  ctx.body = {
    data: response.data,
  };
}

module.exports.post = async ctx => {
  console.log("POST /metafields");

  const { body, params } = ctx.request;

  ctx.method = "GET";
  ctx.request.body = {}
  ctx.request.query = {
    fields: "name,customer_email,city,country_name,phone,zip"
  };

  const { data } = await ajax(ctx, "shop.json");

  const keys = {
    "%zip%": data.shop.zip,
    "%name%": data.shop.name,
    "%city%": data.shop.city,
    "%phone%": data.shop.phone,
    "%country_name%": data.shop.country_name,
    "%customer_email%": data.shop.customer_email
  }

  const metafields = getMetafields(body.metafields, keys);

  ctx.method = "PUT";
  ctx.request.body = { page: metafields }

  const res = await ajax(ctx, "pages/71348748453.json");

  console.log(res.data);
  
  ctx.body = {
    data,
    page_type: params.page_type,
    metafields
  };
}