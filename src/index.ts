import express, { Express, Request, Response } from 'express';



const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('My Server');
});

app.listen(process.env.PORT || port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});