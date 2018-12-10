import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import nocache from 'nocache';

import { wrap } from 'async-middleware';
import { createLog } from './logs/logging';
import { routes } from './routes';

const log = createLog(__filename);

export const app = express();

app.set('port', 3000);
app.use(nocache());
app.use(cors({allowedHeaders: ['Content-Type', 'Authorization', 'Content-Encoding']}));
app.use(bodyParser.json());
app.use('/', routes);
app.use(wrap( (req: express.Request, res: express.Response) => {
    log.error('Error occured %j  and re %j ', req, res);
    return Promise.reject(new Error('Error !!!!'));
}));

log.info('Start up');

export default app;
