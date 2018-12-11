import { Request, Response, Router } from 'express';
import { createLog } from '../logs/logging';
import { getOpenWeather } from '../open-weather-map/getOpenWeather';
import asyncHandler from 'express-async-handler';

const log = createLog(__filename);
const index: Router = Router();

index.get('/', asyncHandler(async (req: Request, res: Response) => {
        log.info('Recieved request : blah2');
        res.json( await getOpenWeather('', ''));
    }));

export { index };
