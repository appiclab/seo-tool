const axios = require('axios');

module.exports = async (ctx, accessToken, shop) => {
  const response = await axios({
    url: `https://${shop}/admin/api/2020-07/application_charges.json`,
    method: "post",
    headers: {
      "X-Shopify-Access-Token": accessToken
    },
    data: {
      application_charge: {
        name: "Super Duper Expensive action",
        price: 1,
        return_url: `https://${shop}/admin/apps/${process.env.SHOPIFY_APP_NAME}/`,
        test: true
      }
    }
  })

  return ctx.redirect(response.data.application_charge.confirmation_url)
};