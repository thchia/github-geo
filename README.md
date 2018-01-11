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

> npm v5 is recommended to read `package-lock.json`

### Initial Options

Pass additional environments to set the initial location _(default shown in parentheses)_:

* `REACT_APP_INITIAL_COUNTRY_NAME` _(Singapore)_
* `REACT_APP_INITIAL_LAT` _(1.3521)_
* `REACT_APP_INITIAL_LNG` _(103.8198)_

This may be useful for deployments in different regions.

# Usage

This is a single page application with a single route. The rendered view is a map provided by the [Google Maps API](https://developers.google.com/maps/). The map itself is rendered into the DOM with React using the [react-google-maps](https://www.npmjs.com/package/react-google-maps) library.

Users can select a country from the dropdown, upon which a marker will be displayed at the co-ordinates of the selected country (co-ordinates are retrieved from the [REST Countries](https://restcountries.eu/) endpoint).

Clicking the marker will toggle an info box to be displayed, which shows the number of GitHub users in that country, as well as the avatars of the top-10 most followed users in that country (GitHub data is retrieved from the [Github API](https://developer.github.com/v3/)).

# Development

## Architecture

This app showcases usage of React and Redux. The Redux state tree has the following shape:

```javascript
const store = {
  coordinates: {
    fetching: false,
    error: '',
    lat: 1.08,
    lng: -0.47
  },
  countryName: 'Singapore',
  statistics: {
    fetching: false,
    error: '',
    topFollowed: [],
    userCount: 0
  },
  ui: {
    infoBoxVisible: false
  }
}
```

Asynchronous actions are handled with the [redux-saga](https://github.com/redux-saga/redux-saga) framework. There are 2 actions that are listened to by the sagas:

* `REQUEST_COUNTRY_COORDS`
* `REQUEST_COUNTRY_STATS`

The saga accepts two dependencies (`api`, `logger`), injected primarily for testing purposes. `api` is an example of a curated API library that may be consumed by a larger application. In this case it has just two functions:

* `getCoordinates()`
* `getGithubUsers()`

`logger` is a logging object that should have the same interface as the native `console`.

## Testing Philosophy

Testing uses the [jest](https://facebook.github.io/jest/) test framework. To run tests:

`npm test`

Unit tests are included for the following:

* React components (using airbnb's [enzyme](https://github.com/airbnb/enzyme) library)
* Redux action creators
* Redux reducers

> The tests for the ErrorBoundary component cause an error to be logged in the console. This is part of the React 16 API and cannot be overridden in a robust manner. It does not indicate a failed test.

Data flow through the app is tested at `src/sagas/index.test.js`. It may be thought of as an integration test suite as it tests data flow from dispatching actions, ensuring that external functions are called and finally that the Redux store has the correct resulting data.
