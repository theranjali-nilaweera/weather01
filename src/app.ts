import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import nocache from 'nocache';

import { createLog } from './logs/logging';

export const app = express();

const log = createLog(__filename);

app.set('port', 3000);
app.use(nocache());
app.use(cors({allowedHeaders: ['Content-Type', 'Authorization', 'Content-Encoding']}));
app.use(bodyParser.json());

log.info('Start up');

export default app;
