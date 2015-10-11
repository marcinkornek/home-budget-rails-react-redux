var APIRoot
APIRoot = 'http://localhost:3000'

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
