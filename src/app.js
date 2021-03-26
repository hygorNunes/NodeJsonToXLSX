import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import routes from "./routes/index";
import DocsRoute from "./routes/DocsRoute"

app.use("/", routes);
app.use("/docs", DocsRoute)

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

const server = http.createServer(app);
const port = 3001;

server.listen(port, () => {
    console.log(`Sua API REST está funcionando na porta ${port}`);
})

export default app;
