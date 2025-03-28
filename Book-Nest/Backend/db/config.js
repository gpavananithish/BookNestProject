// const mongoose = require("mongoose");
// // Middleware
// const MONGO_URI = 'mongodb+srv://elf:elf123@myprojects.inzgx1q.mongodb.net/BookStore?retryWrites=true&w=majority'
// // Connect to MongoDB using the connection string
// mongoose.connect(MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// }).then(() => {
//   console.log(`Connection successful`);
// }).catch((e) => {
//   console.log(`No connection: ${e}`);
// });

// // mongodb://localhost:27017 


/*
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/BookStore', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});
*/
const mongoose = require("mongoose");

// Your MongoDB Atlas connection string (replace with your actual credentials)
const MONGO_URI =
  "mongodb+srv://gundanithi:Pavan123@book-nestcluster.jocgq1a.mongodb.net/book?retryWrites=true&w=majority";

// Connect to MongoDB using the connection string
mongoose
  .connect(MONGO_URI, {
    // useNewUrlParser: true, // No longer needed in Mongoose 6+
    // useUnifiedTopology: true, // No longer needed in Mongoose 6+
  })
  .then(() => {
    console.log(`Connection to MongoDB Atlas successful`);
  })
  .catch((e) => {
    console.log(`No connection to MongoDB Atlas: ${e}`);
  });

