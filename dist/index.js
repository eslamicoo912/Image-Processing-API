"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../assets")));
app.use(routes_1.default);
app.listen(port, function () {
    console.log("listening");
});
exports.default = app;
