const { findById } = require("../model/customerModel");
const customerModel = require("../model/customerModel");
const {  isValidEmail, isValidName,isIdValid, isValidMobile,isValidDate} = require("../validator/validator")


const createCustomer = async function(req,res){
  try{
      let data = req.body
      let {firstName, lastName, mobileNumber, DOB, emailID, address, customerID, status} = data

      if(!firstName || !isValidName(firstName)) return res.status(400).send({status : false, message : "first Name is not present or first name not valid"})

      if(!lastName || !isValidName(lastName)) return res.status(400).send({status : false, message : "Last Name is not present or Last name not valid"})

      if(!mobileNumber || !isValidMobile(mobileNumber)) return res.status(400).send({status : false, message : "Mobile no is not presente or mobile no not valid"})

      let checkMob = await customerModel.findOne({mobileNumber:mobileNumber}) 
      if(checkMob)return res.status(400).send({status : false, message : "Mobile no already exists"})

      if(!DOB||!isValidDate(DOB)) return res.status(400).send({status : false, message : "DOB is not present"})

      if(!emailID || !isValidEmail(emailID)) return res.status(400).send({status : false, message : "email id not present or email id not valid"})
      let checkEmail = await customerModel.findOne({emailID:emailID}) 
      if(checkEmail)return res.status(400).send({status : false, message : "emailID already exists"})

      if(!address) return res.status(400).send({status : false, message : "address not present"})

      if(!customerID) return res.status(400).send({status : false, message : "customer Id not present"})
      let cusID = await customerModel.findOne({customerID:customerID}) 
      if(cusID)return res.status(400).send({status : false, message : "customerID already exists"})

      if(status){
      if(status != "ACTIVE" && status != "INACTIVE") return res.status(400).send({status : false, message : "status should be ACTIVE or INACTIVE"})}
      let newData = await customerModel.create(data)
      return res.status(201).send({status : true, message : "CUSTOMER DETAIL SUCCESSFULLY CREATED", data : newData})

  }
  catch(error){
      res.status(500).send({status : false, message : error.message})
  }
}
   


const getCustomer = async function (req, res) {
  try {
    let obj = {
        status: "ACTIVE"
    }
    let getData = await customerModel.find(obj)
    if(getData.length===0) return res.status(404).send({status:false,message:"No ACTIVE User Found"})

    return res.status(200).send({ status: false, message: getData })
}
catch (error) {
    return res.status(500).send({ status: false, message: error.message })
}
}

const deleteCustomer = async function (req,res){

  try{
    let data = req.params.userId
    let {userId} = data
    if(!data || !isIdValid(data)) return res.status(400).send({ status: false, message: "UserId is not valid" })

    let userExists = await customerModel.findById(data)
    if(!userExists) return res.status(400).send({ status: false, message: "No User Found with this userId" })

    let del = await customerModel.findOneAndUpdate({_id:data},{ $set: {status: "INACTIVE"}})
    return res.status(200).send({status:true,message:"Customer is sucessfully deleted"})



  }catch (error) {
    return res.status(500).send({ status: false, message: error.message })
}
}



module.exports={createCustomer,getCustomer,deleteCustomer}
