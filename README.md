This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Introduction

This is a simple application with 2 primary functions:

* Show the number of GitHub users in a country;
* Show the 10 users with the most number of followers in that country.

## Running locally

Clone the repository and navigate into the project root. Run

```
npm install

REACT_APP_GMAPS_API_KEY=xxx npm start
```

to start the app on `localhost:3000`

### Initial Options

Pass additional environments to set the initial location _(default shown in parentheses)_:

* `REACT_APP_INITIAL_COUNTRY_NAME` _(Singapore)_
* `REACT_APP_INITIAL_LAT` _(1.3521)_
* `REACT_APP_INITIAL_LNG` _(103.8198)_

This may be useful for deployments in different regions.
