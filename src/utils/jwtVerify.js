const jwt = require('jsonwebtoken')

const jwtVerify = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY)
}

const jwtSign = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY)
}

modules.export = { jwtSign, jwtVerify };