const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/costomer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("connection successfully")
}).catch((err) => {
    console.log(err)
})
