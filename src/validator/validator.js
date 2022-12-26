const mongoose = require('mongoose')  

//=========================// isValidEmail //===================================

const isValidEmail = function (value) {
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  if (emailRegex.test(value)) return true;
};

//============================// idCharacterValid //============================

const isIdValid = function (value) {
  return mongoose.Types.ObjectId.isValid(value); 
};

//==========================// isValidString //==================================

const isValidString = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

//==============================// isValidName //===============================

const isValidName = function (name) {
  if (/^[a-zA-Z ]+$/.test(name)) {
    return true;
  }
};

//==============================// isValidMobile //===============================

const isValidMobile = function (mobile) {
 if (/^[0]?[6789]\d{9}$/.test(mobile)){
    return true
 }
}

//==============================// isValidPassword //==============================

const isValidPassword = function (pw) {
    let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/;
    if (pass.test(pw)) return true;
  };

//==============================// isValidISBN //==============================

const isValidISBN = function (pw) {
  let pass = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
  if (pass.test(pw)) return true;
};

//===============================// isValidDate //==============================

function isValidDate (date){
   return /^([0-9]{4}[-][0-9]{2}[-][0-9]{2})$/.test(date)
}

function isValidCard (card){
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(card)
}


//=============================// module exports //================================

module.exports = {isValidDate,isValidISBN ,isValidPassword, isValidEmail, isIdValid, isValidString,isValidName,isValidMobile,isValidCard}