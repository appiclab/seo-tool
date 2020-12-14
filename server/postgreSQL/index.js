const { Client } = require('pg');

let client = null;

module.exports = {
  init,
  addOrUpdateUser
};

async function init() {
  client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();
  } catch (error) {
    console.log("> postgresql error", error)
  }

  console.log("> postgresql connected")
}

async function addOrUpdateUser(payload) {
  const { access_token, shop_origin } = payload;
  
  try {
    const shop = await client.query(`SELECT shop_origin FROM users WHERE shop_origin='${shop_origin}'`);

    if (shop.rowCount) {
      return await client.query(
        `UPDATE users SET access_token='${access_token}', updated_at=CURRENT_TIMESTAMP WHERE shop_origin='${shop_origin}'`
      );
    }


    return await client.query(
      `INSERT INTO users (shop_origin, access_token) VALUES ('${shop_origin}', '${access_token}')`
    );
  } catch (error) {
    console.log("error", error);
  }
}
