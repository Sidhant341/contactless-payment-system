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

const register = async(req, res) => {
    try {
        const { first_name, last_name, email, isadmin } = req.body
        let { password } = req.body

        const { rows } = await db.query(`SELECT * FROM customers where email = '${email}'`)
        if(rows.length)
            return res.status(400).json('Email registered!')
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const result = await db.query(`INSERT INTO customers(first_name, last_name, email, password, isadmin) VALUES($1, $2, $3, $4, $5)`, 
        [first_name, last_name, email, password, isadmin])

        res.status(200).json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    login
}