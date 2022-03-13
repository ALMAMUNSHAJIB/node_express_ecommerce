const router = require('express').Router();
const User = require('../models/User');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
//signup
//@method POST
//@public loclahost:3300/api/signup
router.post('/signup', async (req, res) => {

    try {
        const newUser = new User({
            ...req.body,
            password: crypto.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        });
        await newUser.save();
        res.status(201).json({
            message: "User inserted was successfully!!"
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Insert can not successfull"
        })
    }

});


//login
//@method POST
//@private loclahost:3300/api/login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json({
            message: "wrong credentials!"
        });
        const hashPassowrd = crypto.AES.decrypt(user.password, process.env.PASS_SEC);
        const Originalpassword = hashPassowrd.toString(crypto.enc.Utf8);

        Originalpassword !== req.body.password &&
            res.status(401).json({ message: "wrong credentials!!" })
       
       const {password, name, ...others} = user._doc;
       //token genrate
       const token = jwt.sign({
           userId: user._id,
           isAdmin: user.isAdmin
       },process.env.JWT_TOKEN, {
           expiresIn: '2h'
       })
        res.status(200).json({
            ...others,
            Access_token: token,
            message: "Login Successfull!!"
        })

    } catch {
        res.status(500).json({
            message: "login failed!!"
        })
    }
})


module.exports = router;