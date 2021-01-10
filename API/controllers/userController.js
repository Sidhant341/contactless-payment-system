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

const removeFromCart = async(req, res) => {
    try {
        const { id } = jwt.verify(
            req.headers.authorization.split(' ')[1],
            process.env.JWTSECRET
          );
        const { product_id } = req.body;
        var { rows } = await db.query(
            `SELECT * from orders WHERE user_id='${id}' AND status=0`
          );
        const order_id = rows[0].order_id
        if (rows.length > 0) {                                    // If there is an active cart, remove the item from it
            var { rows } = await db.query(`SELECT * FROM order_items WHERE order_id=${order_id} AND product_id=${product_id}`)
            if(rows[0].quantity > 1) {
                var { rows } = await db.query(`UPDATE order_items SET quantity = quantity-1 WHERE order_id = ${order_id} AND product_id=${product_id}`)
            }
            else {
                const result = await db.query(`DELETE FROM order_items WHERE order_id=${order_id} AND product_id = ${product_id}`)
            }
            res.status(200).send(rows)     
        } else {
            res.status(400).send('Bad request');

        }
    } catch(err) {
        res.status(500).send(err)
    }
}

module.exports = {
    addToCart,
    removeFromCart
}