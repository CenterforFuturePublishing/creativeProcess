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
var main_1 = require("../windowManager/main");
var printInfo_1 = __importDefault(require("../_tools/printInfo"));
var main_2 = require("./main");
var TIME_TO_WAIT_FOR_CUTTING_MASTER = 10000;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var cuttingMasterPluginIsLunch, activeWindow, rightOfCuttingMasterPluginWindow, bottomOfCuttingMasterPluginWindow, buttonPosition_send, buttonPosition_close;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lunchCuttingMasterPluginFromIllustrator()];
                case 1:
                    cuttingMasterPluginIsLunch = _a.sent();
                    if (cuttingMasterPluginIsLunch) {
                        activeWindow = main_1.getActiveWindowInfo();
                        if (activeWindow.title === main_2.CUTTING_MASTER_CUTTING_PLUGIN_WINDOW_NAME) {
                            rightOfCuttingMasterPluginWindow = (activeWindow.window.getBounds().x || 0) + (activeWindow.window.getBounds().width || 0);
                            bottomOfCuttingMasterPluginWindow = (activeWindow.window.getBounds().y || 0) + (activeWindow.window.getBounds().height || 0);
                            buttonPosition_send = {
                                x: rightOfCuttingMasterPluginWindow - 130,
                                y: bottomOfCuttingMasterPluginWindow - 30,
                            };
                            buttonPosition_close = {
                                x: rightOfCuttingMasterPluginWindow - 50,
                                y: bottomOfCuttingMasterPluginWindow - 30,
                            };
                            try {
                                // robotJS.setMouseDelay(1000)
                                robotJS.setMouseDelay(1);
                                robotJS.moveMouseSmooth(buttonPosition_send.x, buttonPosition_send.y, 1);
                                robotJS.mouseClick();
                                robotJS.moveMouseSmooth(buttonPosition_close.x, buttonPosition_close.y, 5);
                                robotJS.setMouseDelay(main_2.DEFAULT_MOUSE_DELAY);
                                console.log("getActiveWindowInfo()");
                                console.log(main_1.getActiveWindowInfo());
                                return [2 /*return*/, true];
                            }
                            catch (e) {
                                printInfo_1.default("ERROR: ");
                                console.error("i suspect plugin doesn't have time to communicate with the plotter");
                                return [2 /*return*/, false];
                            }
                        }
                        else {
                            printInfo_1.default("ERROR: ", activeWindow);
                            console.error("cutting master is open but activeWindow has not correct title");
                            return [2 /*return*/, false];
                        }
                    }
                    else {
                        return [2 /*return*/, false];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
function lunchCuttingMasterPluginFromIllustrator() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    openIllustratorMenu_fichier();
                    var window = main_1.getActiveWindowInfo().window;
                    printInfo_1.default("must be 'fichier'", window.getTitle());
                    if (window.getTitle() !== 'Fichier') {
                        printInfo_1.default("================ \n/!\\/!\\/!\\/!\\/!\\\nERROR: lunchCutingMasterFromIllustrator(), can't open 'Fichier' menu");
                        resolve(false);
                    }
                    openIllustratorMenu_fichier_cuttingMaster();
                    openIllustratorMenu_fichier_cuttingMaster_lunchCUtingMaster();
                    setTimeout(function () {
                        resolve(true);
                    }, TIME_TO_WAIT_FOR_CUTTING_MASTER);
                })];
        });
    });
}
function openIllustratorMenu_fichier() {
    robotJS.moveMouseSmooth(168, 13, 1);
    robotJS.mouseClick();
}
function openIllustratorMenu_fichier_cuttingMaster() {
    robotJS.moveMouseSmooth(200, 540, 1);
}
function openIllustratorMenu_fichier_cuttingMaster_lunchCUtingMaster() {
    robotJS.moveMouseSmooth(550, 550, 5);
    robotJS.mouseClick();
}
