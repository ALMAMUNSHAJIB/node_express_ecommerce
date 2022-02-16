const router = require('express').Router();

router.get("/test", (req, res) => {
    res.send("User test was successfully!!!");
});


module.exports = router;