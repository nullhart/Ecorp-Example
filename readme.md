

### dependencies

* MongoDB 4.2
* Node.js 12

# Getting Started
* Create .env file with this content: "mongoString=mongodb://localhost/test"
* run "yarn" to grab required NPM packages
* run "yarn dev" to start Dev DB/Node Server
* Run "yarn loadData" in second terminal to import example data



# API Endpoints

### Returns all agents | Method: GET
* http://localhost:8080/api/agents


### Add New Agent | Method: POST
* http://localhost:8080/api/agents

### Example Body 
```json
    {
        "_id": 123,
        "name": "John Doe",
        "address": "2445 Onion Belt Ave",
        "city": "Springfield",
        "state": "IL",
        "zipCode": "62701",
        "tier": 1,
        "phone":{
            "primary": "217-345-2345",
            "mobile": "217-987-3211"
        }
    }
```


### Update Agent Details | Method: PUT
* http://localhost:8080/api/agents/_id

 
### Add New Customer | Method: Post
* http://localhost:8080/api/customers


### returns all customers of given agent | Method: GET
* http://localhost:8080/api/agents/customers/Agent_ID


### returns all customers | Method: GET
* http://localhost:8080/api/customers




### Add New Customer | Method: POST
* http://localhost:8080/api/customers

### Example Body
```json
{
        "_id": 1233,
        "agent_id": 467,
        "guid": "6b71c8c6-f87f-4518-b277-ee81fc9c24ed",
        "isActive": false,
        "balance": "$3,613.23",
        "age": 68,
        "eyeColor": "brown",
        "name": {
            "first": "Mccullough",
            "last": "Wall"
        },
        "company": "EXODOC",
        "email": "mccullough.wall@exodoc.us",
        "phone": "+1 (842) 497-3565",
        "address": "175 Malbone Street, Ezel, New Hampshire, 5880",
        "registered": "Saturday, June 2, 2018 6:03 PM",
        "latitude": "-35.784215",
        "longitude": "-17.864023",
        "tags": [
            "et",
            "anim",
            "reprehenderit",
            "reprehenderit",
            "sint"
        ]
    }
```


### Update Customer | Method: PUT
* http://localhost:8080/api/customers/_id




### Delete Customer | Method: DELETE
* http://localhost:8080/api/customers/_id
