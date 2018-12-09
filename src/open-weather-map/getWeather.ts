import request from 'superagent';
import { createLog } from '../logs/logging';
const log = createLog(__filename);

// http://samples.openweathermap.org/data/2.5/weather?q=London,uk)
const baseUrl = 'samples.openweathermap.org/data/2.5/weather';

export const getWeather = async (country: string, city: string): Promise<any> => {
    return request.get(baseUrl);
};
