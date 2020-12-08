module.exports = {
  /** (string) cookie key (default is koa.sess) */
  key: "koa.sess",
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  /** (boolean) automatically commit headers (default true) */
  autoCommit: true,
  /** (boolean) can overwrite or not (default true) */
  overwrite: true,
  /** (boolean) httpOnly or not (default true) */
  httpOnly: true,
  /** (boolean) signed or not (default true) */
  signed: true,
  /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  rolling: false,
  /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false) */
  renew: false,
  /** (boolean) secure cookie */
  secure: true,
  /** (string) session cookie sameSite options (default null, don't set it) */
  sameSite: "none",
};
