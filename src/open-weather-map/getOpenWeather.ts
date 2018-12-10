import request from 'superagent';
import { createLog } from '../logs/logging';
const log = createLog(__filename);

// http://samples.openweathermap.org/data/2.5/weather?q=London,uk)
const baseUrl = 'samples.openweathermap.org/data/2.5/weather';

export const getOpenWeather = async (country: string, city: string): Promise<any> => {
    return request
        .get(baseUrl);
};

const populateLocation = (country: string, city: string) => {
    return country + ',' + city;
};
