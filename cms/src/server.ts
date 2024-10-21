import express from "express";
import path from "path";
import payload from "payload";

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const app = express();

app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3000);
  payload.logger.info("Server running at http://localhost:3000");
};

start();
