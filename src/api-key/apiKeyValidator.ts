import _ from 'lodash';
import R from 'ramda';
const { has } = R;

import { appAPIKeys } from './getAppAPIKeys';

export const isValidApiKey = (apiKey: string): boolean => {
    if (!_.isString(apiKey) ) {
        return false;
    }
    if (!has(apiKey, appAPIKeys) ) {
        return false;
    }
    return true;
};

export const hasKeyExceededLimit = (apiKey: string): boolean => {
    return false;
};
