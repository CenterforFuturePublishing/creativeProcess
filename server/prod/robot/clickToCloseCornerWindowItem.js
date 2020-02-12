"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var robotJS = __importStar(require("robotjs"));
function default_1(_a) {
    var defaultWindowPosition = _a.defaultWindowPosition;
    robotJS.setMouseDelay(0);
    robotJS.moveMouseSmooth(15 + defaultWindowPosition.x, 10 + defaultWindowPosition.y);
    robotJS.mouseClick();
}
exports.default = default_1;
