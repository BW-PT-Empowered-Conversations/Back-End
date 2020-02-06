const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authMiddleware = require('../auth/authMiddleware');
const authRouter = require('../auth/authRouter.js');
const conversationsRouter = require('../conversations/conversationsRouter.js');
const messagesRouter = require('../messages/messagesRouter.js');

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/', authRouter);
server.use('/api/user', authMiddleware, conversationsRouter);
server.use('/api/user', authMiddleware, messagesRouter);
server.use('/docs', express.static('./docs'))
server.get("/", (req,res) => {
    res.status(200).json({ message: "Empowerment Conversations API running." })
  })


/**
* @api {get} / 
* @apiName BASEURL
* @apiGroup BASEURL
 
* @apiSuccessExample Example of Successful Reponse:
*{
* "message": "Empowerment Conversations API running."
*}
*/
 


module.exports = server;
