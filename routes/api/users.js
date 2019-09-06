const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// models
const User = require('../../models/User');

// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
    check('name', 'Name field is required.')
        .not()
        .isEmpty(),
    check('email', 'Email field is required.')
        .isEmail(),
    check('password', 'Enter password with at least 6 characters.')
        .isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    // if errors
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        // if user exists
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists.' }] });
        }
        // get user gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new User({
            name,
            email,
            avatar,
            password
        });
        // encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        // return json web token
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error.');
    }
});

module.exports = router;