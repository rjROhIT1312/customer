const express = require("express")
const customerModel = require("../model/customerModel")
const cardModel = require("../model/cardModel")
const customerController = require('../controller/customer.js')
const cardController = require("../controller/card")
const router = express.Router()

//CREATE Customer
router.post('/customer',customerController.createCustomer)

//GET Customer
router.get('/customer',customerController.getCustomer)

//DELETE Customer
router.delete('/customer/:userId',customerController.deleteCustomer)

//CREATE Card
router.post('/card',cardController.createCard)

//WRONG PATH
router.all('/*', (req, res) => {res.status(400).send({status: false,message: 'Path not found' })})


module.exports = router
