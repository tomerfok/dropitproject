import express, { json, urlencoded } from 'express';
import routes from "./api/api.routes"
import { createTimeslotsMock } from './methods/methods';
// import dotenv from 'dotenv';

// dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

const toPrintResult = await createTimeslotsMock();
console.log(toPrintResult);