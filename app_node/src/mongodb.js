const mongoose = require('mongoose')

const URI = `mongodb://mongo:27017/mongodb_test`

const connectMongoDB = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      socketTimeoutMS: 300000,
      connectTimeoutMS : 300000
    })
    .then((db) => console.log('db is connected on port 27017'))
    .catch((err) => console.error(err))
}

module.exports = connectMongoDB
