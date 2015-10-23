var APIRoot
if (__DEVELOPMENT__) {
  APIRoot = 'http://localhost:3000'
} else {
  APIRoot = 'https://home-budget-react.herokuapp.com'
}

module.exports = {
  APIEndpoints: {
    ITEMS: APIRoot + '/api/items',
  },

  Permissions: {
    'USER': 'user',
    'ADMIN': 'admin',
    'PUBLIC': 'public'
  }
};
