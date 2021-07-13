import express from 'express';

function main(): void {
  const app = express();

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
