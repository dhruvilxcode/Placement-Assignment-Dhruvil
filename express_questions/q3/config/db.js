const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connect();