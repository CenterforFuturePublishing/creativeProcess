"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(arrayOdWindow) {
    var arrayOfTitle = [];
    for (var _i = 0, arrayOdWindow_1 = arrayOdWindow; _i < arrayOdWindow_1.length; _i++) {
        var window_1 = arrayOdWindow_1[_i];
        arrayOfTitle.push(window_1.getTitle());
    }
    return arrayOfTitle;
}
exports.default = default_1;
