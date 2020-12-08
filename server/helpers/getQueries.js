module.exports = function(ctx) {
  const query = ctx.request.query;
  const keys = Object.keys(query);

  return !keys.length ? null : keys.map(key => `${key}=${query[key]}`).join("&");
}