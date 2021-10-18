const mongoose = require('mongoose');


const Connect = async () => {
    try{
        
        const con = await mongoose.connect("mongodb+srv://<YOUR USERNAME>:<YOUR PASSWORD>@cluster0.afdor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex : true
        })

        console.log(`MongoDB Connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect