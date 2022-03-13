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

   


//import route files
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
app.use('/api',authRouter);
app.use('/api/user', userRouter);

const port = 3300;
app.listen(port, () => {
    console.log(`Server is runing ${port}`);''
});




