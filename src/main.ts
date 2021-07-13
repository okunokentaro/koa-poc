import express from "express";

function main(): void {
  const app = express();

  app.use(() => {
    console.log("middleware 100");
    throw new Error("middleware 110 Error");
  });

  app.use((_, res) => {
    console.log("middleware 200");
    res.status(200).end();
  });

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
