import express from "express";

function main(): void {
  const app = express();

  app.use((_, res, next) => {
    console.log("middleware 100");
    res.status(200)
    next();
  });

  app.use((_, res) => {
    console.log("middleware 200");
    res.status(500).end();
  });

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
