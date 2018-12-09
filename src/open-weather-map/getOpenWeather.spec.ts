import { createLog } from '../logs/logging';
import { getOpenWeather } from './getOpenWeather';

const log = createLog(__filename);

describe('getOpenWeather.spec', () => {
    const chai = require('chai');
    const expect = chai.expect;
    // const assert = chai.assert;

    it('should get weather from open weather maps  ', async () => {
        const country = 'London';
        const city = 'uk';
        const weatherData = await getOpenWeather(country, city);

        log.info('weatherData : %j', weatherData);
        expect(weatherData).to.be.ok;

    });

});
