import { createLog } from '../logs/logging';
import { populateWeather } from './openWeatherHelper';
import { testWeatherDataCorrect, testWeatherDataError } from './test-data';

const log = createLog(__filename);

describe('populateWeather.spec', () => {
    const chai = require('chai');
    const expect = chai.expect;
    it('should get description field from json of from open weather maps  ', async () => {
        log.info('weather description for test data: %j', testWeatherDataCorrect);
        const weatherDescription = await populateWeather(testWeatherDataCorrect);

        log.info('weather description : %j', weatherDescription);
        expect(weatherDescription).to.be.ok;

    });

});
