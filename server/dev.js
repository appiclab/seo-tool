process.env.NODE_ENV = "development";

require("dotenv").config({
  path: require("path").resolve(process.cwd(), ".env")
});

require("./index.js");
