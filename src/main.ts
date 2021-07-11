import Koa from 'koa';

function main(): void {
  const app = new Koa();

  const port = 3000;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}

main();
