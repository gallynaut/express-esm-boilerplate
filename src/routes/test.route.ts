import type { Request, Response } from "express";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Test route
 */

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Test
 *     description: Test
 *     tags: [Test]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 greeting:
 *                   type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
router.route("/").get((req: Request, res: Response) => {
  res.json({ greeting: "Hello World!" });
});

export default router;
