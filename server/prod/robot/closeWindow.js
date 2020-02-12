"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var setWindowPosition_1 = __importDefault(require("../windowManager/setWindowPosition"));
var clickToCloseCornerWindowItem_1 = __importDefault(require("./clickToCloseCornerWindowItem"));
function default_1(_a) {
    var window = _a.window, defaultWindowPosition = _a.defaultWindowPosition;
    window.bringToTop();
    setWindowPosition_1.default({
        window: window,
        defaultWindowPosition: defaultWindowPosition
    });
    clickToCloseCornerWindowItem_1.default({ defaultWindowPosition: defaultWindowPosition });
}
exports.default = default_1;
