
const mongoose = require('mongoose');
const agentSchema = new mongoose.Schema({
    "_id": {
        "type": "Number"
    },
    "name": {
        "type": "String"
    },
    "address": {
        "type": "String"
    },
    "city": {
        "type": "String"
    },
    "state": {
        "type": "String"
    },
    "zipCode": {
        "type": "Date"
    },
    "tier": {
        "type": "Number"
    },
    "phone": {
        "primary": {
            "type": "String"
        },
        "mobile": {
            "type": "String"
        }
    }
});

const Agent = mongoose.model('Agent', agentSchema);


module.exports = Agent;
