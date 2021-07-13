import express from "express";

function main(): void {
  const app = express();

  app.use((_, __, next) => {
    console.log("middleware 100");
    next();
  });

  app.use((_, res) => {
    console.log("middleware 200");
    res.status(200).end();
  });

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
