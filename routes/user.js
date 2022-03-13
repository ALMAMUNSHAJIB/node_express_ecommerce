const router = require('express').Router();
const {verifyToken, verifyTokenAndAuthorization} = require('../routes/verifyToken');

// router.get("/test", (req, res) => {
//     res.send("User test was successfully!!!");
// });

router.put('/:id', verifyTokenAndAuthorization, (req, res) => {
     
});

module.exports = router;