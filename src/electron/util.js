"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDev = isDev;
exports.ipcMainHandle = ipcMainHandle;
exports.ipcMainOn = ipcMainOn;
exports.ipcWebContentsSend = ipcWebContentsSend;
exports.validateEventFrame = validateEventFrame;
var electron_1 = require("electron");
var pathResolver_js_1 = require("./pathResolver.js");
var url_1 = require("url");
function isDev() {
    return process.env.NODE_ENV === 'development';
}
function ipcMainHandle(key, handler) {
    electron_1.ipcMain.handle(key, function (event) {
        validateEventFrame(event.senderFrame);
        return handler();
    });
}
function ipcMainOn(key, handler) {
    electron_1.ipcMain.on(key, function (event, payload) {
        validateEventFrame(event.senderFrame);
        return handler(payload);
    });
}
function ipcWebContentsSend(key, webContents, payload) {
    webContents.send(key, payload);
}
function validateEventFrame(frame) {
    if (isDev() && new URL(frame.url).host === 'localhost:5123') {
        return;
    }
    if (frame.url !== (0, url_1.pathToFileURL)((0, pathResolver_js_1.getUIPath)()).toString()) {
        throw new Error('Malicious event');
    }
}
