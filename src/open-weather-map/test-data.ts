export const testWeatherDataCorrect = {
body : { coord: {
        lon: -0.13,
        lat: 51.51
    },
    weather: [
        {
            id: 300,
            main: 'Drizzle',
            description: 'light intensity drizzle',
            icon: '09d'
        }
    ],
    id: 2643743,
    name: 'London',
    cod: 200
}};

export const testWeatherDataError = {
    id: 2643743,
    name: 'London',
    cod: 401
};
