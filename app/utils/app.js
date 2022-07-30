//const pinoInspector = require("pino-inspector");
const path = require("path");

const fastify = require("fastify")({
  //logger: { prettyPrint: true, level: "debug", prettifier: pinoInspector },

});
fastify.register(require("fastify-cors"));
let baseroutes = require("../config/baseRoute");
baseroutes.forEach(function (dt) {
  fastify.register(require(`../routes/${dt.val}`), { prefix: dt.key });
});

// Run the server!
fastify.listen(3011, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  console.log(`App Server listening on port ${address}`);
});

