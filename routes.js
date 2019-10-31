require('dotenv').config();

// ROUTES FOR OUR API
// =============================================================================
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect(process.env.mongoString, { useNewUrlParser: true, useUnifiedTopology: true });

//Data Models
const AgentModel = require("./models/agent")
const CustomerModel = require("./models/customer")



//Return all agents
router.get('/agents', async (req, res, next) => {
    try {
        const allAgents = await AgentModel.find({});
        res.json(allAgents);
    } catch (error) {
        return next(error);
    }
});


//Add New Agent
router.post('/agents', async (req, res, next) => {
    try {
        const newAgent = new AgentModel(req.body);
        await newAgent.save();
        res.status(200).send(`New Agent Created: ${newAgent._id}`);
    } catch (error) {
        return next(error);
    }
});

//Agent Details
router.get('/agents/:_id', async (req, res, next) => {
    try {
        const agentData = await AgentModel.findById(req.params._id);
        res.json(agentData);
    } catch (error) {
        next(error);
    }
});

//Update Agent
router.put('/agents/:_id', async (req, res, next) => {
    try {
        await AgentModel.updateOne({ "_id": req.params._id }, req.body);
        res.status(200).send(`Agent Updated`);
    } catch (error) {
        return next(error);
    }
});


//Return all customers of given agent
router.get('/agents/customers/:agent_id', async (req, res, next) => {
    try {
        const allCustomers = await CustomerModel.find({ "agent_id": req.params.agent_id });
        res.json(allCustomers);
    } catch (error) {
        next(error);
    }
});





//Returns all customers
router.get('/customers', async (req, res, next) => {
    try {
        const customerData = await CustomerModel.find({});
        res.json(customerData);
    } catch (error) {
        next(error);
    }
});


//Add New Customer
router.post('/customers', async (req, res, next) => {
    try {
        const newCustomer = new CustomerModel(req.body);
        await newCustomer.save()
        res.status(200).send(`New Customer Created: ${newCustomer._id}`);
    } catch (error) {
        return next(error);
    }
});

//Update Customer
router.put('/customers/:_id', async (req, res, next) => {
    try {
        await CustomerModel.updateOne({ "_id": req.params._id }, req.body);
        res.status(200).send(`Updated Customer`);
    } catch (error) {
        return next(error);
    }
});

//Delete Customer
router.delete('/customers/:_id', async (req, res, next) => {
    try {
        await CustomerModel.deleteOne({ "_id": req.params._id });
        res.status(200).send(`Deleted Customer`);
    } catch (error) {
        return next(error);
    }
});










//============================================================================
//Error Handling Middleware (must be below all other routers and middlewares)
router.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) { err.statusCode = 500 };
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});



//404 Middleware (must be below all other routers and middlewares)
router.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})


module.exports = { router };
