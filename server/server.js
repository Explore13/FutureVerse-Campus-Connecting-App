const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');
const mongoose = require('mongoose');


// CONNECT TO DB
// const mongoDB = .replace(
//     '<password>',
//     process.env.DATABASE_PASSWORD
// );

mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        //console.log(conn.connections);
        console.log('DB connection successful ✔✔✔');
    });


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port} ...`);
});