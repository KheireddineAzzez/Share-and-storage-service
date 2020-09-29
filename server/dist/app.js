"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var express_session_1 = __importDefault(require("express-session"));
var mongoose_1 = __importDefault(require("mongoose"));
var User_router_1 = __importDefault(require("./routes/User_router"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var File_route_1 = __importDefault(require("./routes/File_route"));
var Share_files_router_1 = __importDefault(require("./routes/Share_files_router"));
var app = express_1.default();
mongoose_1.default.connect(" mongodb+srv://khayry:azzez" +
    "@cluster0.70l28.mongodb.net/project 0?retryWrites=true&w=majority", {});
app.use(morgan_1.default('dev'));
app.use(cookie_parser_1.default());
app.use(express_session_1.default({ secret: 'secret', saveUninitialized: true, resave: true, cookie: { maxAge: 800000 } }));
app.use(body_parser_1.default.urlencoded({ extended: false, limit: '500mb' }));
app.use(body_parser_1.default.json({ limit: '500mb' }));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();
});
app.use(cors_1.default());
app.set('trust proxy', 1);
/**
 * Route of user
*/
app.use('/user', User_router_1.default);
/**
 * Route of upload file
*/
app.use('/image', File_route_1.default);
app.use('/shared', Share_files_router_1.default);
exports.default = app;
