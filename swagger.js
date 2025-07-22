// swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TODO API",
      version: "1.0.0",
      description: "ORM APIS ",
    },
    servers: [
      {
        url: "https://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // path to your route files
};

const swaggerSpec = swaggerJsDoc(options);
module.exports = {
  swaggerUi,
  swaggerSpec,
};