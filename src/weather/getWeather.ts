import { isEmpty } from 'ramda';
import { isString } from 'lodash';

import { isValidApiKey, hasKeyExceededLimit } from '../api-key/apiKeyValidator';
import { openWatherForLocation } from '../open-weather-map/index';
import { createLog } from '../logs/logging';
const log = createLog(__filename);

export const getOpenWeatherForLocation =  async ( apiKey: any, country: any, city: any ): Promise<string> => {
    log.info('getOpenWeatherForLocation>>start');
    const requestValidation = isValidRequest(apiKey, country, city );
    if ( !isEmpty(requestValidation)) {
        log.info('getOpenWeatherForLocation>>requestValidation failed');
        return Promise.reject(requestValidation);
    }
    await canProcessGetWeather(apiKey, country, city);
    return await openWatherForLocation(country, city);
};

// TODO change over request parameter checks to express validator
const isValidRequest = ( apiKey: any, country: any, city: any ): string => {
    if ( !isString(apiKey) || !isString(country) || !isString(city) ) {
        return 'Valid strings required for apiKey, country, city!';
    }
    if ( !isValidApiKey(apiKey) ) {
        return 'Invalid apiKey. Please contact support';
    }
    if ( hasKeyExceededLimit(apiKey) ) {
        return 'ApiKey has exceeded request limit. Please try again in 1 hr.';
    }
    return '';
};

const canProcessGetWeather =  async (apiKey: string, country: string, city: string ): Promise<string> => {
    const reqValidations = isValidRequest(apiKey, country, city) ;
    if ( !isEmpty(reqValidations) ) {
        return Promise.reject(reqValidations);
    }
    return Promise.resolve('');
};
