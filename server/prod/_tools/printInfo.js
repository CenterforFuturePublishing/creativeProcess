"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var date = new Date();
    var dateInfo = date.getDay() + " / " + date.getMonth() + " | " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    console.log(dateInfo, args);
}
exports.default = default_1;
