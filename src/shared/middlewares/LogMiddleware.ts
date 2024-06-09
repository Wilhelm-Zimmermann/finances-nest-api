import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

const Reset = "\x1b[0m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgCyan = "\x1b[36m";

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    const method = `${FgCyan}${req.method}${Reset}`;
    res.on("close", () => {
      const end = Date.now();
      const duration = end - start;

      let status = "";
      status =
        res.statusCode >= 200 && res.statusCode < 300
          ? `${FgGreen}${res.statusCode}${Reset}`
          : res.statusCode >= 300 && res.statusCode < 400
            ? `${FgBlue}${res.statusCode}${Reset}`
            : res.statusCode >= 400 && res.statusCode < 500
              ? `${FgYellow}${res.statusCode}${Reset}`
              : res.statusCode >= 500
                ? `${FgRed}${res.statusCode}${Reset}`
                : null;

      console.log(`${req.originalUrl} [${method}]:${status}<>${duration}ms`);
      if (["POST", "PUT", "PATCH"].includes(req.method)) {
        console.log(req.body);
      }
    });
    next();
  }
}
