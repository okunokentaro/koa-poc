import express from 'express';

function main(): void {
  const app = express();

  app.use((req, res, next)=> {
    console.log(req, res, next);
    res.status(200).end();
  });

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
