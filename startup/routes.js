const express   = require('express');
const error     = require('../middleware/error');
// === Add Controller === //

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('Public'));
    //  === Create route === //
    app.use(error);
}