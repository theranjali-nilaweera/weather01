import { Router } from 'express';

import { index } from '../weather/index';

export const routes = Router();

routes.use('/weather', index);
