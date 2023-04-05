import type { OAS3Options } from "swagger-jsdoc";
import swaggerJsdoc from "swagger-jsdoc";

const options: OAS3Options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Switchboard API Example",
      version: "1.0.0",
      contact: {
        name: "Switchboard Support",
        url: "https://switchboard.xyz",
        email: "hello@switchboard.xyz",
      },
    },
    externalDocs: {
      description: "Find out more about Switchboard",
      url: "https://switchboard.xyz",
    },
    servers: [
      {
        url: "http://localhost:{port}/",
        description: "Local server",
        variables: {
          port: {
            description: "The network port",
            default: "3000",
          },
        },
      },
      {
        url: "https://api.switchboard.xyz",
        description: "Production Server",
      },
    ],
    tags: [{ name: "switchboard", description: "Switchboard API" }],
    components: {
      schemas: {
        Error: {
          type: "object",
          properties: {
            code: {
              type: "number",
            },
            message: {
              type: "string",
            },
          },
        },
      },
      responses: {
        Unauthorized: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
              example: {
                code: 401,
                message: "Please authenticate",
              },
            },
          },
        },
        Forbidden: {
          description: "Forbidden",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
              example: {
                code: 403,
                message: "Forbidden",
              },
            },
          },
        },
        NotFound: {
          description: "Not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
              example: {
                code: 403,
                message: "Not found",
              },
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*"],
};

const openapiSpecification = swaggerJsdoc(options);

export default openapiSpecification;
