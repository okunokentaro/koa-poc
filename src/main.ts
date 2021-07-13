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
        res.status(400);
        next(err);
      };
    })()
  );

  app.use((_, __, next) => {
    console.log("middleware 300");
    next();
  });

  app.use(
    ((): ErrorRequestHandler => {
      return (err, req, res, next) => {
        console.log("middleware 400");
        res.status(500).end();
        next();
      };
    })()
  );

  app.use((_, __, next) => {
    console.log("middleware 500");
    next();
  });

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
