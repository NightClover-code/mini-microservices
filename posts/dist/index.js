"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var uuid_1 = require("uuid");
var bodyParser = require('body-parser')();
var app = (0, express_1.default)();
app.use(bodyParser);
var posts = {};
app.get('/posts', function (req, res) {
    res.send(posts);
});
app.post('/posts', function (req, res) {
    var id = (0, uuid_1.v4)();
    var title = req.body.title;
    posts[id] = { id: id, title: title };
    res.status(201).send(posts[id]);
});
app.listen(4000, function () { return console.log("Listening on 4000"); });
