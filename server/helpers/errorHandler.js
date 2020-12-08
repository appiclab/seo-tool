/* 
* centralized error handling:
*/

module.exports = function () {
  this.on('error', (error) => {
    console.log("[ERROR LOGGER]", error);
  })

  this.use(async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      ctx.app.emit('error', error, ctx)
    }
  })
}


// const statusCodes = require('../config/status-codes.json');

// module.exports = (err, ctx) => {
//   if(!err.status && err.message) {
//     const match = err.message.match(/[0-9]{3}/);

//     if(match) {
//       err.status = +match[0];
//       err.message = statusCodes[match[0]]
//     }
//   }

//   if (!err.status) {
//     err.status = 500;
//   }

//   ctx.status = err.status;
//   ctx.body = {
//     status: err.status,
//     message: err.message
//   };
// }