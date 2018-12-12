import { Request, Response, Router } from 'express';
import { createLog } from '../logs/logging';
import { getOpenWeatherForLocation } from './getWeather';
import asyncHandler from 'express-async-handler';

const log = createLog(__filename);
const index: Router = Router();

index.get('/', asyncHandler(async (req: Request, res: Response) => {

        log.info('Recieved request for apikey %j country %j city %j', req.headers.apikey, req.query.country, req.query.city);
        res.json(await getOpenWeatherForLocation( req.headers.apikey, req.query.country, req.query.city));
    }));

export { index };
