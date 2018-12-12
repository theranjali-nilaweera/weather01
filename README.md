# weather01
Front the OpenWeatherMap API for current weather based on country and city.

### How to run
Clone the master branch

* nvm use
* npm run start-serve

This is also available through 
* run-local.sh
This may vary on your local machine nvm settings and profile.


## How to build

* npm i
* npm run build-ts

## To run tests

* npm run test-ts

## Assumptions
OpenWeatherMap mention the API calls have a limitation of 60 calls per hour regardless of the API key value, for a free account.

In the exercise what is asked is to limit the API to be 5 API keys and 5 calls each for an hour. The max calls per hour would be 25 calls per hour. 

Since the asked limit in the exercise is less than the hard limit for a free account will only use one key in OpenWeatherMap to manage all the calls in this exercise.

## Sprint planning
### Sprint 0
- Get basic hello world skeleton working
- Look in to OpenWeatherMap API
### Sprint 01
- Build basic version to get OpenWeatherMap weather data
- Add unit test for OpenWeatherMap apis caller
### Sprint 02
- Router and top level service to encompass the OpenWeatherMap API
- Integration testing
### Sprint 03
- Add API Keys for top level API
- Basic validations for API keys

### Future sprints 
### Sprint 04
- Investigate how OpenWeatherMap handles if city and country are mismatching.
- Modify error handling, client response to handle these mismatched request data
### Sprint 05
- JSON file saving API to save summary of API calls made for each API KEY separately
- Change API key validations to base it on the first request time saved in the JSON 
### Sprint 06
- Caching API to connect to DB or S3 to cache requests made, ( Weather requests if cached can be used to send to user when they reach the max API key based calls are reached)
- Logic to see if API key limit reached and the same country/city request was made within a reasonable time before
- Modify response accordingly to notify user that the returned value is a cached version
