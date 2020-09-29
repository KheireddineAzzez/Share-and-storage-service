"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("../server/app"));
var User_socket_1 = require("./sockets/User_socket");
var User_action_aws_1 = require("./database_AWs/User_action_aws");
var port = process.env.port || 3000;
var serve = http_1.default.createServer(app_1.default);
User_socket_1.user_sockets._server = serve;
User_socket_1.user_sockets.data_aws = new User_action_aws_1.upload_to_aws("", "", null);
User_socket_1.user_sockets.listen_to_real_time();
serve.listen(port);
