"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var robotJS = __importStar(require("robotjs"));
var main_1 = require("./main");
var main_2 = require("../windowManager/main");
var printInfo_1 = __importDefault(require("../_tools/printInfo"));
function default_1(_a) {
    var poem = _a.poem, graisse = _a.graisse, contraste = _a.contraste, rigidite = _a.rigidite, xPositionInDocument = _a.xPositionInDocument;
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_b) {
            robotJS.setMouseDelay(main_1.DEFAULT_MOUSE_DELAY);
            robotJS.setKeyboardDelay(500);
            robotJS.moveMouseSmooth(250, 250, 1);
            robotJS.keyTap("escape");
            robotJS.keyToggle("a", "down", "command");
            robotJS.keyToggle("a", "up");
            robotJS.keyToggle("command", "up");
            robotJS.keyTap("delete");
            robotJS.typeString("t");
            robotJS.mouseClick();
            robotJS.typeString(poem);
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var caracterPanel, positionPanelWindow;
                        return __generator(this, function (_a) {
                            robotJS.keyTap("escape");
                            robotJS.typeString("v");
                            caracterPanel = openCaracterePanel();
                            printInfo_1.default("caracterPanel: ", caracterPanel);
                            if (caracterPanel) {
                                // familly name
                                setValueOfInputString({
                                    inputPositionRelativeOfPanel: {
                                        x: 85,
                                        y: 77,
                                    },
                                    panelWindow: caracterPanel,
                                    stringToEnter: "DL-08",
                                });
                                // font -size
                                setValueOfInputString({
                                    inputPositionRelativeOfPanel: {
                                        x: 65,
                                        y: 137,
                                    },
                                    panelWindow: caracterPanel,
                                    stringToEnter: "22pt",
                                });
                                // line-height
                                setValueOfInputString({
                                    inputPositionRelativeOfPanel: {
                                        x: 195,
                                        y: 137,
                                    },
                                    panelWindow: caracterPanel,
                                    stringToEnter: "25pt",
                                });
                                //=====
                                // font variable value
                                //=====
                                clickAtPositionRelativeToAWindow({
                                    panelWindow: caracterPanel,
                                    inputPositionRelativeOfPanel: {
                                        x: 228,
                                        y: 104,
                                    }
                                });
                                // épaisseur
                                if (graisse < 0 || graisse > 100)
                                    graisse = 0;
                                robotJS.keyTap("tab");
                                robotJS.typeStringDelayed("" + graisse, 2000);
                                // contrast
                                if (contraste < 0 || contraste > 100)
                                    contraste = 0;
                                robotJS.keyTap("tab");
                                robotJS.typeStringDelayed("" + contraste, 2000);
                                // rigidité
                                if (rigidite < 0 || rigidite > 100)
                                    rigidite = 0;
                                robotJS.keyTap("tab");
                                robotJS.typeStringDelayed("" + rigidite, 2000);
                                robotJS.keyTap("enter");
                            }
                            positionPanelWindow = openTransformationPanel();
                            printInfo_1.default("positionPanelWindow: ", positionPanelWindow);
                            if (positionPanelWindow) {
                                // set x position
                                setValueOfInputString({
                                    inputPositionRelativeOfPanel: {
                                        x: 75,
                                        y: 50,
                                    },
                                    panelWindow: positionPanelWindow,
                                    stringToEnter: xPositionInDocument + "cm",
                                });
                                // set y position
                                setValueOfInputString({
                                    inputPositionRelativeOfPanel: {
                                        x: 75,
                                        y: 75,
                                    },
                                    panelWindow: positionPanelWindow,
                                    stringToEnter: "0cm",
                                });
                            }
                            // unselect all
                            robotJS.keyTap("a", ["command", "shift"]);
                            resolve(true);
                            return [2 /*return*/];
                        });
                    }); }, 100);
                })];
        });
    });
}
exports.default = default_1;
function minimalCheckForIllustratorPanelIsOpen(activeWindow) {
    var windowPosition = {
        x: activeWindow.getBounds().x,
        y: activeWindow.getBounds().y,
    };
    if (windowPosition.x && windowPosition.y)
        return activeWindow.getTitle() === '' && windowPosition.x >= 50 && windowPosition.y >= 50;
    return false;
}
function openTransformationPanel() {
    robotJS.keyToggle("f8", "down", "shift");
    var window = main_2.getActiveWindowInfo().window;
    var panelIs_NOT_open = !minimalCheckForIllustratorPanelIsOpen(window);
    if (panelIs_NOT_open) {
        robotJS.keyToggle("f8", "down", "shift");
    }
    panelIs_NOT_open = !minimalCheckForIllustratorPanelIsOpen(window);
    if (panelIs_NOT_open)
        return null;
    return window;
}
function openCaracterePanel() {
    robotJS.keyToggle(":", "down", "command");
    var window = main_2.getActiveWindowInfo().window;
    var panelIs_NOT_open = !minimalCheckForIllustratorPanelIsOpen(window);
    if (panelIs_NOT_open) {
        robotJS.keyToggle(":", "down", "command");
    }
    panelIs_NOT_open = !minimalCheckForIllustratorPanelIsOpen(window);
    if (panelIs_NOT_open)
        return null;
    return window;
}
function setValueOfInputString(_a) {
    var panelWindow = _a.panelWindow, _b = _a.stringTypingSpeed, stringTypingSpeed = _b === void 0 ? 2000 : _b, stringToEnter = _a.stringToEnter, inputPositionRelativeOfPanel = _a.inputPositionRelativeOfPanel, _c = _a.stringPast, stringPast = _c === void 0 ? false : _c, _d = _a.validate, validate = _d === void 0 ? true : _d;
    clickAtPositionRelativeToAWindow({
        inputPositionRelativeOfPanel: inputPositionRelativeOfPanel,
        panelWindow: panelWindow,
    });
    robotJS.keyToggle("a", "down", "command");
    robotJS.keyToggle("a", "up");
    robotJS.keyToggle("command", "up");
    if (stringPast) {
        robotJS.typeString(stringToEnter);
    }
    else {
        robotJS.typeStringDelayed(stringToEnter, stringTypingSpeed);
    }
    if (validate)
        robotJS.keyTap("enter");
}
function clickAtPositionRelativeToAWindow(_a) {
    var panelWindow = _a.panelWindow, inputPositionRelativeOfPanel = _a.inputPositionRelativeOfPanel;
    robotJS.moveMouseSmooth(inputPositionRelativeOfPanel.x + (panelWindow.getBounds().x || 0), inputPositionRelativeOfPanel.y + (panelWindow.getBounds().y || 0));
    robotJS.mouseClick();
}
