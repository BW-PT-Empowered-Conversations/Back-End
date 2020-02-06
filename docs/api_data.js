define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "/workspace/Back-End/docs/main.js",
    "groupTitle": "/workspace/Back-End/docs/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example of body:",
          "content": "{\n  username: \"Homer\"\n  password: \"DuffBeer\"\n}",
          "type": "json"
        },
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 200 OK\n{\n message: \"User successfully logged in!\",\n username: \"Homer\",\n id: 1,\n first_name: \"Homer\",\n last_name: \"Simpson\",\n token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhvbWVyIiwiaWQiOjEsImlhdCI6MTU4MDk3NDczNCwiZXhwIjoxNTgxMjMzOTM0fQ.P8YtFxD-GvguZoYik8yh0AX0Bi4ewnGVzQPHZ7MZ1ic\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRouter.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "Register User",
    "name": "RegisterUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>A username (required)(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>A password (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>A user email (unique)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>A user first username (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>A user last name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_phone",
            "description": "<p>A user phone number (required)(10 digits)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example of body:",
          "content": "{\n  username:\"Joe\",\n\tpassword:\"123456\",\n\temail:\"joe@joe.com\",\n\tuser_phone:\"1231231231\",\n\tfirst_name:\"Joe\",\n\tlast_name:\"M\"\n}",
          "type": "json"
        },
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 201 OK\n{\n  message: \"User successfully registered!\",\n  username: \"Joe\",\n  id: 2,\n  first_name: \"Joe\",\n  last_name: \"M\",\n  token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhvbWVyIiwiaWQiOjEsImlhdCI6MTU4MDk3NDczNCwiZXhwIjoxNTgxMjMzOTM0fQ.P8YtFxD-GvguZoYik8yh0AX0Bi4ewnGVzQPHZ7MZ1ic\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A successfully registered message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The successfully registered username</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the registered user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_first",
            "description": "<p>The first name of the registered user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_last",
            "description": "<p>The last name of the registered user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A JWT token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./auth/authRouter.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/",
    "title": "",
    "name": "BASEURL",
    "group": "BASEURL",
    "success": {
      "examples": [
        {
          "title": "Example of Successful Reponse:",
          "content": "{\n\"message\": \"Empowerment Conversations API running.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/server.js",
    "groupTitle": "BASEURL"
  },
  {
    "type": "get",
    "url": "/api/user/:user_id",
    "title": "Conversation List by User Id",
    "name": "ConversationsList",
    "group": "Conversations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>the id of the user as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 200 OK\n[\n{\n   \"id\": 1,\n  \"recipient_first_name\": \"Joe\",\n   \"recipient_last_name\": \"M\",\n   \"user_id\": 1,\n   \"recipient_phone\": \"1231231231\",\n   \"topic\": \"Build Week burnout\"\n },\n {\n   \"id\": 2,\n   \"recipient_first_name\": \"Mandi\",\n   \"recipient_last_name\": \"H\",\n   \"user_id\": 1,\n   \"recipient_phone\": \"1231231230\",\n   \"topic\": \"Redux \"\n },\n {\n   \"id\": 3,\n   \"recipient_first_name\": \"Jason\",\n   \"recipient_last_name\": \"S\",\n   \"user_id\": 1,\n   \"recipient_phone\": \"1231231232\",\n   \"topic\": \"React\"\n },\n {\n   \"id\": 4,\n   \"recipient_first_name\": \"Lizzy\",\n   \"recipient_last_name\": \"E\",\n   \"user_id\": 1,\n   \"recipient_phone\": \"1231231233\",\n   \"topic\": \"React\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./conversations/conversationsRouter.js",
    "groupTitle": "Conversations"
  }
] });
