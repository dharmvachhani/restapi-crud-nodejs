var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/restapi", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(function () {
    console.log("Connection Established");
  })
  .catch(function (e) {
    console.log("connection error");
    console.log(e);
  });
