
const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    "_id": {
        "type": "Number"
    },
    "agent_id": {
        "type": "Number"
    },
    "guid": {
        "type": "String"
    },
    "isActive": {
        "type": "Boolean"
    },
    "balance": {
        "type": "String"
    },
    "age": {
        "type": "Number"
    },
    "eyeColor": {
        "type": "String"
    },
    "name": {
        "first": {
            "type": "String"
        },
        "last": {
            "type": "String"
        }
    },
    "company": {
        "type": "String"
    },
    "email": {
        "type": "String"
    },
    "phone": {
        "type": "String"
    },
    "address": {
        "type": "String"
    },
    "registered": {
        "type": "Date"
    },
    "latitude": {
        "type": "String"
    },
    "longitude": {
        "type": "String"
    },
    "tags": {
        "type": [
            "String"
        ]
    }
})

const Customer = mongoose.model('Customer', customerSchema);


module.exports = Customer;
