"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizedImagePath = exports.resizeImage = void 0;
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var resizeImage = function (filename, height, width) {
    return (0, sharp_1.default)(path_1.default.resolve("assets/full/".concat(filename, ".jpg")))
        .resize({
        width: Number(width),
        height: Number(height),
        fit: sharp_1.default.fit.cover,
    })
        .toBuffer();
};
exports.resizeImage = resizeImage;
var resizedImagePath = function (filename, height, width) {
    return "assets/thumb/".concat(filename).concat(height, "x").concat(width, ".jpg");
};
exports.resizedImagePath = resizedImagePath;
