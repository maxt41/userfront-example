const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
require('dotenv').config()

router.get('/', auth, async (req, res) => {
    try {
        return res.status(200).json('Authenticated')
    } catch (error) {
        return res.status(400).json('Bad Request')
    }
})

module.exports = router;