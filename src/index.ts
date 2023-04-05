import config from "./config/config.js";
import logger from "./config/logger.js";
import app from "./app.js";

import type { Server } from "http";

const server: Server = app.listen(config.port, () => {
  console.log(`🚀 server started at http://localhost:${config.port}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: any) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

["SIGTERM", "SIGINT", "exit"].forEach((signal) => {
  process.on(signal, () => {
    logger.info(`${signal} received`);
    if (server) {
      server.close();
    }
  });
});
