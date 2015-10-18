var APIRoot
APIRoot = 'http://localhost:3000'

module.exports = {
  APIEndpoints: {
    USERS: APIRoot + '/api/users',
  },

  Permissions: {
    'USER': 'user',
    'ADMIN': 'admin',
    'PUBLIC': 'public'
  }
};
