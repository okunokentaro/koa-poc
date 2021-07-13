import express from "express";

function main(): void {
  const app = express();

  app.use(() => {
    console.log("middleware 100");
  });

  app.use((_, res) => {
    console.log("middleware 200");
    res.status(200).end();
  });

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
