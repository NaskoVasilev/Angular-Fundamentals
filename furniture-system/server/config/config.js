module.exports = {
  development: {
    port: process.env.PORT || 5000,
    dbPath: 'mongodb://localhost:27017/furniture-system'
  },
  production: {}
};