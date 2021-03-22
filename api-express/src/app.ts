import express = require("express");

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req, res) => {
  res.send("hello ");
});

// export our app
export default app;






// import express, { Application, Request, Response, NextFunction } from 'express';

// const app: express.Application = express();

// const add = (a: number): number => a ;

// app.get('/', (req: Request, res:Response, next: NextFunction ) => {
//     console.log(add(5))
//     res.send('hello');
// });

// app.listen(5000, ()=> console.log(add(5)));
