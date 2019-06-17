const config        = require('config');
const jwt           = require('jsonwebtoken');
const Joi           = require('joi');
const pool          = require('./database');

async function test() {
    try {
        return await pool.query('SELECT * FROM test');
    } catch(err) {
        throw new Error(err)
    }
}

function createToken(name) {
    const token = jwt.sign({ isName: name}, config.get('jwtPrivateKey'));
    return token;
}

function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).max(255).email().required(),
        password: Joi.string().min(3).max(255).required()
    }

    return Joi.validate(user, schema);
}

exports.test        = test;
exports.createToken = createToken;
exports.validate    = validateUser;