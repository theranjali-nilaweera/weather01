import {createLog} from '../logs/logging';
import {getOpenWeather} from './getOpenWeather';

const log = createLog(__filename);

describe('getOpenWeather.spec', () => {
    const chai = require('chai');
    const expect = chai.expect;

    it('should get weather from open weather maps  ', (done) => {
        const country = 'London';
        const city = 'uk';
        getOpenWeather(country, city)
            .then((res: any) => {

            log.info('weatherData : %j', res);
            expect(res).to.be.ok;
            done();
        })
            .catch((errors: any) => {
                log.error('weatherData not returned errors: %j', errors);
                done(errors);
        });

    });

});
