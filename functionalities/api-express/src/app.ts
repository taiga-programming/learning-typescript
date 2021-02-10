import express, { Application, Request, Response, NextFunction } from 'express';

const app: express.Application = express();

const add = (a: number): number => a ;

app.get('/', (req: Request, res:Response, next: NextFunction ) => {
    console.log(add(5))
    res.send('hello');
});

app.listen(5000, ()=> console.log(add(5)));
