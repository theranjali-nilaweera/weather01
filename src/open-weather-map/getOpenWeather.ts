import request from 'superagent';
import * as R from 'ramda';
const { prop } = R;

import { openWeatherMapConfigs as openMapConfigs } from './openWeatherConfig';

import { createLog } from '../logs/logging';
const log = createLog(__filename);

// http://samples.openweathermap.org/data/2.5/weather?q=London,uk)
const baseUrl = 'api.openweathermap.org/data/2.5/weather';

export const getOpenWeather =  async (country: string, city: string) => {
    log.info('openMapConfigs %j', openMapConfigs.keyValue);
    return request
        .get(baseUrl)
        .query({ APPID: openMapConfigs.keyValue })
        .query({ q: populateLocation(country, city) });
};

const populateLocation = (country: string, city: string) => {
    return country + ',' + city;
};
