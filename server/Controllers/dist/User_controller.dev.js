"use strict";

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = require("../models/user");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Middel_session = require("../middleware/Middel_session");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.login = _Middel_session.seesionmid, function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _user.User.find({
            email: req.body.email
          }).exec().then(function (data) {
            if (data.length < 1) {
              res.status(200).json({
                message: "Email not found",
                value: false
              });
            } else {
              _bcrypt["default"].compare(req.body.password, data[0].get('password')).then(function (password_coorect) {
                if (password_coorect) {
                  var token = _jsonwebtoken["default"].sign({
                    email: req.body.email,
                    user_id: data[0]._id
                  }, "secret", {
                    expiresIn: '1h'
                  });

                  req.session.token = token;
                  res.status(200).send({
                    token: token
                  });
                } else {
                  res.status(200).json({
                    message: "Password  faild",
                    value: false
                  });
                }
              });
            }
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};