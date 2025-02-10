"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreloadPath = getPreloadPath;
exports.getUIPath = getUIPath;
exports.getAssetPath = getAssetPath;
var path_1 = require("path");
var electron_1 = require("electron");
var util_js_1 = require("./util.js");
function getPreloadPath() {
    return path_1.default.join(electron_1.app.getAppPath(), (0, util_js_1.isDev)() ? '.' : '..', '/dist-electron/preload.cjs');
}
function getUIPath() {
    return path_1.default.join(electron_1.app.getAppPath(), '/dist-react/index.html');
}
function getAssetPath() {
    return path_1.default.join(electron_1.app.getAppPath(), (0, util_js_1.isDev)() ? '.' : '..', '/src/assets');
}
