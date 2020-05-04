const JwtModel = require('models/jwt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

module.exports.getList = getList;
module.exports.create = create;
