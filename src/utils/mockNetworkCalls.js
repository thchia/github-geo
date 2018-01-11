export default {
  getCoordinates: jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve([{ latlng: [1.2, -0.5] }])
    })
  }),
  getGithubUsers: jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve({ total_count: 88, items: [] })
    })
  })
}
