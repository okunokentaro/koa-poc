import express, { ErrorRequestHandler } from "express";

function main(): void {
  const app = express();

  app.use((_, __, next) => {
    try {
      console.log("middleware 100");
      throw new Error("middleware 110 Error");
    } catch (e) {
      next(e);
    }
  });

  app.use(
    ((): ErrorRequestHandler => {
      return (err, req, res, next) => {
        console.log("middleware 200");
        console.log("err", err);
        console.log("err instanceof Error", err instanceof Error); // true
        console.log("req", req);
        console.log("res", res);
        console.log("next", next);
        res.status(500).end();
      };
    })()
  );

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
