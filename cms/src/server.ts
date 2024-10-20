import express from "express";
import path from "path";
import payload from "payload";

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  console.log(path.resolve(__dirname, "../../.env"));
  console.log(process.env.DATABASE_URL);

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
