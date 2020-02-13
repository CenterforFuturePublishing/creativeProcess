"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(arrayOfWindow, name) {
    var arrayOfWindowMatchWithName = [];
    for (var _i = 0, arrayOfWindow_1 = arrayOfWindow; _i < arrayOfWindow_1.length; _i++) {
        var window_1 = arrayOfWindow_1[_i];
        if (window_1.getTitle() === name)
            arrayOfWindowMatchWithName.push(window_1);
    }
    return arrayOfWindowMatchWithName;
}
exports.default = default_1;
