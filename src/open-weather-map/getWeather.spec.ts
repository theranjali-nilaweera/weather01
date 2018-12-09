import { createLog } from '../logs/logging';
import { getWeather } from './getWeather';

const log = createLog(__filename);

describe('getWeather.spec', () => {
    const chai = require('chai');
    const expect = chai.expect;
    // const assert = chai.assert;

    it('should get weather from open weather maps  ', async () => {
        const country = 'London';
        const city = 'uk';
        const weatherData = await getWeather(country, city);

        log.info('weatherData : %j', weatherData);
        expect(weatherData).to.be.ok;

    });

});
