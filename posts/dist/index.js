"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var uuid_1 = require("uuid");
var app = (0, express_1.default)();
app.use(body_parser_1.default);
var posts = {};
app.get('posts', function (req, res) { });
app.post('posts', function (req, res) {
    var id = (0, uuid_1.v4)();
    var title = req.body;
    posts[id] = { id: id, title: title };
    res.status(201).send(posts[id]);
});
app.listen(4000, function () { return console.log("Listening on 4000"); });
