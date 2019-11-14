# node-mongo-registration-login-api

RESTful API in NodeJS using MongoDB database for a Phonebook where a user manages his/her contacts


API calls:
    1. Register user:

            - route: /users/register
            - type: post
            - require authentication : false
            - body: 
            {
                "username": { type: String, unique: true, required: true },
                "password": { type: String, required: true },
                "firstName": { type: String, required: true },
                "lastName": { type: String, required: true },
            }
            - example: 
            {
                "firstName":"karam",
                "lastName":"atrach",
                "username":"karamat33",
                "password":"karamat33"
            }
            -result:
            {}
            - if user already exists:
            {
                "message": "Username \"karamat33\" is already taken"
            }
            - if a required field is missing:
            {
                "message": "User validation failed: username: Path `username` is required."
            }


    2. Login user:

            - route: /users/authenticate
                - type: post
                - require authentication : false
                - body: 
                {
                    "username": { type: String, unique: true, required: true },
                    "password": { type: String, required: true },
                }
                -example:
                {
                    "username":"karamat33",
                    "password":"karamat33"
                }
                -result:
                {
                    "_id": "5dcd11929b5309324d50e068",
                    "firstName": "karam",
                    "lastName": "atrach",
                    "username": "karamat33",
                    "createdDate": "2019-11-14T08:34:26.289Z",
                    "__v": 0,
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGNkMTE5MjliNTMwOTMyNGQ1MGUwNjgiLCJpYXQiOjE1NzM3MjA2Mzd9.-9-uxIWB4tjOuX16eXPTPPExRTBJ_ENjk-6muyzuu6E"
                }
                - if a required field is missing/incorrect:
                {
                    "message": "Username or password is incorrect"
                }


    CRUD calls for Contact resource

    3. Create contact under loggedIn User:

            - route: /contacts/create
            - type: post
                - require authentication : true
                - Athentication: Bearer Token
                - body: 
                {
                    firstName: { type: String, required: false },
                    lastName: { type: String, required: false },
                    company: { type: String, required: false },
                    email: { type: String, required: false },
                    address: { type: String, required: false },
                    phone: { type: String, required: true }
                }
                -example:
                {
                    "firstName":"karam",
                    "lastName":"atrach",
                    "company":"Addenda",
                    "email":"karamatrach@hotmail.com",
                    "address":"Lebanon, Beirut",
                    "phone":"+961 71 412 639"
                }
                -result:
                {}
                - if a required field is missing/incorrect:
               {
                    "message": "Contact validation failed: phone: Path `phone` is required."
                }

    4. Update contact with ID under loggedIn User:

            - route: /contacts/:id
            - type: put
                - require authentication : true
                - Athentication: Bearer Token
                - body: 
                {
                    firstName: { type: String, required: false },
                    lastName: { type: String, required: false },
                    company: { type: String, required: false },
                    email: { type: String, required: false },
                    address: { type: String, required: false },
                    phone: { type: String, required: true }
                }
                -example:
                {
                    "firstName":"karam",
                    "lastName":"atrach",
                    "company":"Addenda",
                    "email":"karamatrach@hotmail.com",
                    "address":"Lebanon, Beirut",
                    "phone":"+961 71 412 639"
                }
                -result:
                {}



    5. Get all contacts (support pagination):

            - route: /contacts/:page
            - type: get
                - require authentication : true
                - Athentication: Bearer Token
                - body: 
                {}
                -example:
                {}
                -result:
                {
                "0": {
                    "_id": "5dcd0b99fba5c331f7d702af",
                    "phone": "+961 71 412 639",
                    "createdDate": "2019-11-14T08:08:57.498Z",
                    "__v": 0,
                    "firstName": "sdfs",
                    "id": "5dcd0b99fba5c331f7d702af"
                },
                "1": {
                    "_id": "5dcd0e31f40eba323a19a06e",
                    "phone": "+961 71 412 639",
                    "firstName": "sdfs",
                    "createdDate": "2019-11-14T08:20:01.540Z",
                    "__v": 0,
                    "id": "5dcd0e31f40eba323a19a06e"
                },
                "2": {
                    "_id": "5dcd0e32f40eba323a19a06f",
                    "phone": "+961 71 412 639",
                    "firstName": "sdfs",
                    "createdDate": "2019-11-14T08:20:02.366Z",
                    "__v": 0,
                    "id": "5dcd0e32f40eba323a19a06f"
                },
                "3": {
                    "_id": "5dcd0e33f40eba323a19a070",
                    "phone": "+961 71 412 639",
                    "firstName": "sdfs",
                    "createdDate": "2019-11-14T08:20:03.076Z",
                    "__v": 0,
                    "id": "5dcd0e33f40eba323a19a070"
                },
                "4": {
                    "_id": "5dcd0e33f40eba323a19a071",
                    "phone": "+961 71 412 639",
                    "firstName": "sdfs",
                    "createdDate": "2019-11-14T08:20:03.629Z",
                    "__v": 0,
                    "id": "5dcd0e33f40eba323a19a071"
                },
                "page": "1",
                "pages": 5
                }