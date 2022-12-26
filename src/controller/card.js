const customerModel = require("../model/customerModel");
const cardModel = require("../model/cardModel")
const {  isValidEmail, isValidName,isIdValid, isValidMobile,isValidDate,isValidCard} = require("../validator/validator")


const createCard = async function(req,res){
    try{
        let data = req.body
        let {cardNumber, cardType, customerName, status ,customerID,} = data
  
        if(!cardNumber || !isValidCard(cardNumber)) return res.status(400).send({status : false, message : "cardNumber is not present or cardNumber not valid"})
  
        if(!cardType) return res.status(400).send({status : false, message : "cardType is not present"})
        if(cardType != "REGULAR" && status != "SPECIAL") {
        return res.status(400).send({status : false, message : "cardType should be REGULAR or SPECIAL"})
        }
  
        if(!customerName || !isValidName(customerName)) return res.status(400).send({status : false, message : "customer Name is not presente or customer Name not valid"})
  
  
        if(status){
        if(status != "ACTIVE" && status != "INACTIVE") return res.status(400).send({status : false, message : "status should be ACTIVE or INACTIVE"})}

        if(!customerID) return res.status(400).send({status : false, message : "customer Id not present"})

        // let newData = await cardModel.create(data)
        // return res.status(201).send({status : true, message : "CARD CREATED SUCCESSFULLY", data : newData})
        let nData = await cardModel.create(data)
        return res.status(201).send({status:true,data:nData})
  
    }
    catch(error){
        res.status(500).send({status : false, message : error.message})
    }
  }


  module.exports={createCard}