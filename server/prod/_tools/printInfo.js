"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var date = new Date();
    var dateInfo = date.getDay() + " / " + date.getMonth() + " | " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    console.log.apply(console, __spreadArrays([dateInfo], args));
}
exports.default = default_1;
