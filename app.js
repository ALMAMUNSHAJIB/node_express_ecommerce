const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());



//database connection
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connected!!!');
    }).catch((err) => console.log(err));

    const port = 3300;

//import route files
const userRouter = require('./routes/user');
app.use('/api/user', userRouter);


app.listen(port, () => {
    console.log(`Server is runing ${port}`);''
});




