const path = require("path");
const cookies = require("./cookies.js");

module.exports = {
  cookies,
  path: {
    public: path.resolve(process.cwd(), "public"),
    assets: path.resolve(process.cwd(), "public", "assets")
  }
}