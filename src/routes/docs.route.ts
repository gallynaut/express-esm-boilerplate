import swaggerSpec from "../swagger.js";

import express from "express";
import swaggerUi from "swagger-ui-express";

const router = express.Router();

router.use("/", swaggerUi.serve);
router.get(
  "/",
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
  })
);

export default router;
