import express, { json } from 'express';
import { corsMiddleware } from './middlewares/cors.js';
import { moviesRouter } from './routes/movies.js';

const app = express();

app.disable('x-powered-by');
app.use(corsMiddleware());
app.use(json());
app.use("/movies", moviesRouter);

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})