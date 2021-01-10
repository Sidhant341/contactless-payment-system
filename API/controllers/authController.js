const bcrypt = require('bcryptjs');
const db = require('../db');
const jwt = require('jsonwebtoken');

const login = async(req, res) => {
    try {
        const { rows } = db.query(`SELECT * FROM customers WHERE email = ${req.body.email}`)
        if(rows.length) {
            const isMatch = await bcrypt.compare(req.body.password, rows[0].password)
            if(!isMatch)
                return res.status(400).send('Invalid credentials.')
            const payload = {
                id: rows[0].id
            }
            jwt.sign(
                payload,
                process.env.JWTSECRET,
                {
                    expiresIn: 36000
                },
                (err, token) => {
                    if(err) throw err
                    res.status(200).json({ token })
                }
            );   
            
        } else return res.status(400).json('Invalid credentials')
    } catch(err) {
        res.status(500).send(err.message)
    }
}

module.exports = {
    login
}