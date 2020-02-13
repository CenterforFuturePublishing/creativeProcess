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
var openIllustrator_1 = __importDefault(require("./openIllustrator"));
var printInfo_1 = __importDefault(require("../_tools/printInfo"));
var main_1 = require("../windowManager/main");
var getWindowInWindowsInstanceByTitle_1 = __importDefault(require("../windowManager/getWindowInWindowsInstanceByTitle"));
var lunchPrintingProcess_1 = __importDefault(require("./lunchPrintingProcess"));
/**
 * parameters
 */
// window names
var CUTTING_MASTER_CUTTING_PLUGIN_WINDOW_NAME = "Découper/Tracer";
// robotJS
exports.DEFAULT_MOUSE_DELAY = 500;
// screen info
exports.INITIAL_WINDOW_POSITION = { x: 0, y: 24 };
exports.INITIAL_WINDOW_SIZE = {
    width: robotJS.getScreenSize().width - exports.INITIAL_WINDOW_POSITION.x,
    height: robotJS.getScreenSize().height - -exports.INITIAL_WINDOW_POSITION.y,
};
/***/
robotJS.setMouseDelay(exports.DEFAULT_MOUSE_DELAY);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var illustratorIsOpen, printingProcess, allWindowsOpen, arrayOfCuttingMasterPluginWindow, _i, arrayOfCuttingMasterPluginWindow_1, cuttingMasterPluginWindow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, openIllustrator_1.default()];
                case 1:
                    illustratorIsOpen = _a.sent();
                    printInfo_1.default("illustrator is open: ", illustratorIsOpen);
                    if (!illustratorIsOpen) return [3 /*break*/, 6];
                    printingProcess = void 0;
                    allWindowsOpen = main_1.getAllWindow();
                    arrayOfCuttingMasterPluginWindow = getWindowInWindowsInstanceByTitle_1.default(allWindowsOpen, CUTTING_MASTER_CUTTING_PLUGIN_WINDOW_NAME);
                    printInfo_1.default('cutting master plugin windows find: ', arrayOfCuttingMasterPluginWindow);
                    if (!(arrayOfCuttingMasterPluginWindow.length > 0)) return [3 /*break*/, 3];
                    for (_i = 0, arrayOfCuttingMasterPluginWindow_1 = arrayOfCuttingMasterPluginWindow; _i < arrayOfCuttingMasterPluginWindow_1.length; _i++) {
                        cuttingMasterPluginWindow = arrayOfCuttingMasterPluginWindow_1[_i];
                        process.kill(cuttingMasterPluginWindow.processId);
                    }
                    return [4 /*yield*/, lunchPrintingProcess_1.default(allWindowsOpen)];
                case 2:
                    printingProcess = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, lunchPrintingProcess_1.default(allWindowsOpen)];
                case 4:
                    printingProcess = _a.sent();
                    _a.label = 5;
                case 5:
                    if (printingProcess) {
                        printInfo_1.default("document printing with success!");
                    }
                    else {
                        printInfo_1.default("ERROR: ");
                        console.error("document can't be printing… =(");
                    }
                    return [3 /*break*/, 7];
                case 6:
                    console.error("check illustrator opening failed");
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
main();
