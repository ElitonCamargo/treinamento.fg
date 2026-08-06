
import { Router } from "express";
import type { Request, Response } from "express";

const routes = Router();

routes.get("/teste", (_request: Request, response: Response) => {
  response.status(200).json({
    message: "API is running",
  });
});

export { routes };