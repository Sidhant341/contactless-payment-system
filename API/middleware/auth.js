const jwt = require('jsonwebtoken')
const db = require('../db')
require('dotenv').config()

module.exports = function(req, res, next) {

    const token = req.headers.authorization;   
    if (token) {

        const { id } = jwt.verify(token.split(" ")[1], process.env.JWTSECRET);

        db.query(`SELECT * FROM customers WHERE id=$1`, [id])
        .then(({rows}) => {
            if (!rows.length) 
                throw new Error('Credential mismatch')
            else
                next()
        })
        .catch(err => 
            res.status(401).send(err.message)    
        )
    }
    else {
        res.status(401).send('Token required, authorization denied!');
    }
}

