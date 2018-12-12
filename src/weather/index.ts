import { Request, Response, Router } from 'express';
import { createLog } from '../logs/logging';
import { getOpenWeatherForLocation } from './getWeather';
import asyncHandler from 'express-async-handler';

const log = createLog(__filename);
const index: Router = Router();

index.get('/', asyncHandler(async (req: Request, res: Response) => {

        log.info('Recieved request');
        res.json(await getOpenWeatherForLocation( 'key02' , 'London', 'uk'));
    }));

export { index };
