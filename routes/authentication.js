const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/authentication', (req, res) => {

    res.render('authentication', { msg: null });

});

router.post('/authentication', async (req, res) => {
    try {

        const { username, password } = req.body;
        if (!username || !password) {

            res.json({
                path: '/authentication',
                success: false
                , result: {
                    error: 'username and password must fill'
                }
            });
            return;
        };
        const user = await User.findOne({ username });
        if (!user) {
            res.json({
                path: '/authentication',
                success: false
                , result: {
                    error: `user with this username does'nt exist`
                }
            });
            return;
        }
        if (user.password !== password) {
            res.json({
                path: '/authentication',
                success: false
                , result: {
                    error: 'password is wrong!'
                }
            });
            return;
        };

        res.json({
            path: '/authentication',
            success: true
            , result: {
                user
            }
        });
        return;

    } catch (err) {

        console.log(`err of authentication user:${err}`);
    }








})

module.exports = router;