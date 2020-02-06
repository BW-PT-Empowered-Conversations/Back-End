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
            "field": "first_name",
            "description": "<p>The first name of the registered user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
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
    "url": "/api/user/:user_id/:conversation_id",
    "title": "Conversation by User Id and Conversation Id",
    "name": "ConversationByUserIdAndConversationId",
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
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>the id of the conversation as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>A unique id that identifies the conversation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipient_first_name",
            "description": "<p>The first name of the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipient_last_name",
            "description": "<p>The last name of the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipient_phone",
            "description": "<p>The phone number of the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The user id of the user who created the conversation</p>"
          },
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "array",
            "description": "<p>An array with the single specified conversation (Array of specified conversation Object)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 4,\n   \"recipient_first_name\": \"Lizzy\",\n   \"recipient_last_name\": \"E\",\n   \"user_id\": 1,\n   \"recipient_phone\": \"1231231233\",\n   \"topic\": \"React\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./conversations/conversationsRouter.js",
    "groupTitle": "Conversations"
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>A unique id that identifies the conversation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipient_first_name",
            "description": "<p>The first name of the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipient_last_name",
            "description": "<p>The last name of the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipient_phone",
            "description": "<p>The phone number of the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The user id of the user who created the conversation</p>"
          },
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "List",
            "description": "<p>of conversations (Array of Objects)</p>"
          }
        ]
      },
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
  },
  {
    "type": "post",
    "url": "/api/user/:user_id",
    "title": "Create A Conversation",
    "name": "CreateConversation",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient_first_name",
            "description": "<p>A name for the recipient (required) in the body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient_last_name",
            "description": "<p>A name for the recipient (required) in the body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient_phone",
            "description": "<p>A number for the recipient (10 digits)(required) in the body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>A topic for the conversation (required) in the body</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>A unique id that identifies the created conversation</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>An array containing the created conversation_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of body:",
          "content": "{\n  recipient_first_name:\"Joe\",\n\trecipient_last_name:\"M\",\n\trecipient_phone:\"1233211231\",\n\ttopic:\"React\",\n}",
          "type": "json"
        },
        {
          "title": "Example of sucessful response:",
          "content": "HTTP/1.1 201 OK\n[\n5  \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./conversations/conversationsRouter.js",
    "groupTitle": "Conversations"
  },
  {
    "type": "delete",
    "url": "/api/user/:user_id/:conversation_id",
    "title": "Delete Conversation by User Id and Conversation Id",
    "name": "DeleteConversationByUserIdAndConversationId",
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
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>the id of the conversation as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./conversations/conversationsRouter.js",
    "groupTitle": "Conversations"
  },
  {
    "type": "put",
    "url": "/api/user/:user_id/:conversation_id",
    "title": "Update Conversation by User Id and Conversation Id",
    "name": "UpdateConversationByUserIdAndConversationId",
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
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>the id of the conversation as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A successfully updated message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of body:",
          "content": "{\n  recipient_first_name:\"Johnny\",\n\trecipient_last_name:\"Cash\",\n}",
          "type": "json"
        },
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 201 OK\n{\nmessage: \"conversation successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./conversations/conversationsRouter.js",
    "groupTitle": "Conversations"
  },
  {
    "type": "delete",
    "url": "/api/user/:user_id/:conversation_id/message/:message_id",
    "title": "Delete Message by User Id, Conversation Id, and Message Id",
    "name": "DeleteMessageByUserIdConversationIdAndMessageId",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>the id of the user as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>the id of the conversation as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "message_id",
            "description": "<p>the id of the message as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./messages/messagesRouter.js",
    "groupTitle": "Messages"
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/:conversation_id/message/:message_id",
    "title": "Message by User Id, Conversation Id, and Message Id",
    "name": "MessageByUserIdConversationIdAndMessageId",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>the id of the user as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>the id of the conversation as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "message_id",
            "description": "<p>the id of the message as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>A unique id that identifies the message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message by the user or the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>The conversation_id that belongs to the message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sent_by",
            "description": "<p>Describes whether the massage was sent by either the user or the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time_sent",
            "description": "<p>A javascript time stamp with the Date() method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message_timestamp",
            "description": "<p>A javascript time stamp with the Date().now method (unix timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "array",
            "description": "<p>List of messages (Array of specified message Object)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   id: 2,\n   message: \"hello world\",\n   conversation_id: 1,\n   sent_by: \"recipient\",\n   time_sent: \"Thu Feb 06 2020 14:38:18 GMT+0000 (Coordinated Universal Time)\",\n   message_timestamp: \"1580999898934\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./messages/messagesRouter.js",
    "groupTitle": "Messages"
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/:conversation_id/messages",
    "title": "Message List by User Id and Conversation Id",
    "name": "MessageList",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>the id of the user as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>the id of the conversation as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>A unique id that identifies the message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message by the user or the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>The conversation_id that belongs to the message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sent_by",
            "description": "<p>Describes whether the massage was sent by either the user or the recipient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time_sent",
            "description": "<p>A javascript time stamp with the Date() method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message_timestamp",
            "description": "<p>A javascript time stamp with the Date().now method (unix timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "array",
            "description": "<p>List of messages (Array of Objects)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of Successful Reponse:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   id: 1,\n   message: \"hello world\",\n   conversation_id: 1,\n   sent_by: \"user\",\n   time_sent: \"Thu Feb 06 2020 14:33:59 GMT+0000 (Coordinated Universal Time)\",\n   message_timestamp: \"1580999639432\"\n },\n {\n   id: 2,\n   message: \"hello world\",\n   conversation_id: 1,\n   sent_by: \"recipient\",\n   time_sent: \"Thu Feb 06 2020 14:38:18 GMT+0000 (Coordinated Universal Time)\",\n   message_timestamp: \"1580999898934\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./messages/messagesRouter.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/:conversation_id/message",
    "title": "Send A message",
    "name": "SendMessage",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>the id of the user as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "conversation_id",
            "description": "<p>the id of the conversation as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "message_id",
            "description": "<p>the id of the message as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message to the recipient in the body (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "message_id",
            "description": "<p>A unique id that identifies the created message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>An array containing the created message_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of body:",
          "content": "{\n  message:\"Hello World!\",\n}",
          "type": "json"
        },
        {
          "title": "Example of sucessful response:",
          "content": "HTTP/1.1 201 OK\n[\n2  \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./messages/messagesRouter.js",
    "groupTitle": "Messages"
  }
] });
