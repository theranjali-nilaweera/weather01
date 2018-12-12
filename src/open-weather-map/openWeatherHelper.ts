import { prop, isEmpty, equals } from 'ramda';
import { getOpenWeather } from './getOpenWeather';
import { createLog } from '../logs/logging';
const log = createLog(__filename);

const successCod = 200;

export const populateWeather = async ( res: any ): Promise<any> => {
    log.info('populateWeather>> recieved weather %s ', res.body);
    const weatherData = res.body;
    if ( ! isValidOpenWeatherData(weatherData) ) {
        return Promise.reject('Open Weather Map returned error. Please check request and try again.');
    }
    const weatherDesc = populateDescription(weatherData);
    if ( isEmpty(weatherDesc) ) {
        return Promise.reject('No weather data found.');
    }
    return Promise.resolve(weatherDesc);
};

const populateDescription =  ( weatherData: any ): string => {
    const weather = prop('weather', weatherData);
    log.info('populateDescription>>weather %s', weather);
    return prop('description', weather[0]);
};

const isValidOpenWeatherData = ( weatherData: any ): boolean => {
    const responseCode = prop('cod', weatherData);
    log.info('isValidOpenWeatherData>>responseCode %s', responseCode);
    return equals(responseCode, successCod) ;
};

// TODO check if the free account hard limit of 60 has been reached
const hasExceededOpenWeatherCalls = ( cod: number ): boolean => {
    return false;
};
