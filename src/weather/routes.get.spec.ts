import request from 'supertest';

import * as R from 'ramda';
const { prop } = R;

import app from '../app';
import { createLog } from '../logs/logging';
const log = createLog(__filename);

describe('router-get-weather.spec', () => {
    const chai = require('chai');
    const expect = chai.expect;
    const assert = chai.assert;

    log.info('retrieve weather report ');
    const city = 'uk';
    const country = 'London';
    // er?q=London,uk)
    it('get', (done) => {
        request(app)
            .get(`/weather`)
            .query({ q:  country + ',' + city})
            .expect(200)
            .then((res: any) => {
                expect(res).to.be.ok;
                const found = prop('body', res);
                log.info('weather returned %j', found);

                done();
            })
            .catch((errors: any) => {
                log.error('errors: %s, %j', errors, errors);
                done(errors);
            });
    });

});
