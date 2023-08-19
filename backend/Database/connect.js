const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://20B81A6704:20B81A6704@data.uzwpvds.mongodb.net/?retryWrites=true&w=majority").then(
    data=>{
        console.log("Database is connected")
    }
)
.catch
{
  (err)=>   console.log(err)
}