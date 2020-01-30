const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authMiddleware = require('../auth/authMiddleware');
const authRouter = require('../auth/authRouter.js');

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req,res) => {
    res.status(200).json({ message: "Empowerment Conversations API running." })
  })

module.exports = server;
