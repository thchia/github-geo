const githubEndpoint = 'https://api.github.com/search'
const restCountriesURL = 'https://restcountries.eu/rest/v2/name'

// This simulates an API library that can be passed to the app as a dependency
export default {
  getCoordinates: ({ countryName }) =>
    fetch(`${restCountriesURL}/${countryName}?fields=latlng`),
  getGithubUsers: ({ countryName, query }) =>
    fetch(`${githubEndpoint}/users?q=location:${countryName}${query || ''}`)
}
