import { populateWeather } from './openWeatherHelper';
import { getOpenWeather } from './getOpenWeather';

export const openWatherForLocation = async ( country: string, city: string ): Promise<string> => {

    return await populateWeather( await getOpenWeather(country, city));
};
