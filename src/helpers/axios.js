import axios from "axios";

const shop_origin = document.querySelector("#shop_origin").value;
const access_token = document.querySelector("#access_token").value;

axios.defaults.baseURL = "https://appiclab-seo-tool.herokuapp.com";
axios.defaults.headers["X-Shopify-Access-Token"] = access_token;
axios.defaults.headers["X-Shopify-Shop-Origin"] = shop_origin;

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:8081";
}

export default axios;
