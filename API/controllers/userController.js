const db = require('../db')
const jwt = require('jsonwebtoken');
const pg = require('pg')
require('dotenv').config();

const addToCart = async(req, res) => {
    try {
        const { id } = jwt.verify(
            req.headers.authorization.split(' ')[1],
            process.env.JWTSECRET
          );
        const { product_id, quantity } = req.body;
        const { rows } = await db.query(
            `SELECT * from orders WHERE user_id='${id}' AND status=0`
          );
        if (rows.length > 0) {                                    // If there is an active cart, add items to it
        const { data, } = await db.query(`INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1,$2, $3)`,
              [rows[0].id, product_id, quantity]
            );  
        res.status(200).json(data);
    } else {
        const orderID = ObjectId().toString()
        const data  = await db.query(
          `INSERT INTO orders (id, user_id, status) VALUES ($1,$2,$3)`,
          [orderID, id, 0]         
        );
        const itemData = await db.query( 
            `INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1,$2, $3)`,
            [orderID, product_id, quantity]
            );
        res.status(200).json(data);
    }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
}