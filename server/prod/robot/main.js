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
var stringConain_1 = __importDefault(require("../_tools/stringConain"));
var closeWindow_1 = __importDefault(require("./closeWindow"));
var illustratorProces_1 = __importDefault(require("./illustratorProces"));
var cuterMasterProcess_1 = __importDefault(require("./cuterMasterProcess"));
/**
 * parameters
 */
// robotJS
exports.DEFAULT_MOUSE_DELAY = 500;
// screen info
var INITIAL_WINDOW_POSITION = { x: 0, y: 24 };
var INITIAL_WINDOW_SIZE = {
    width: robotJS.getScreenSize().width - INITIAL_WINDOW_POSITION.x,
    height: robotJS.getScreenSize().height - -INITIAL_WINDOW_POSITION.y,
};
/***/
robotJS.setMouseDelay(exports.DEFAULT_MOUSE_DELAY);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var illustratorIsOpen, _i, _a, window_1, title, listOfPositionInDocument, randomColumnPosition;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, openIllustrator_1.default()];
                case 1:
                    illustratorIsOpen = _b.sent();
                    printInfo_1.default("illustrator is open: ", illustratorIsOpen);
                    if (illustratorIsOpen) {
                        for (_i = 0, _a = main_1.getAllWindow(); _i < _a.length; _i++) {
                            window_1 = _a[_i];
                            title = window_1.getTitle();
                            if (stringConain_1.default(title, "Adobe Illustrator")) {
                                if (stringConain_1.default(title, "erreur")) {
                                    closeWindow_1.default({
                                        window: window_1,
                                        defaultWindowPosition: INITIAL_WINDOW_POSITION,
                                    });
                                }
                            }
                            else if (stringConain_1.default(title, "DL-MODEL.ai")) {
                                window_1.bringToTop();
                                main_1.setWindowPositionAndSize({
                                    window: window_1,
                                    position: {
                                        x: INITIAL_WINDOW_POSITION.x,
                                        y: INITIAL_WINDOW_POSITION.y,
                                        height: INITIAL_WINDOW_SIZE.height,
                                        width: INITIAL_WINDOW_SIZE.width,
                                    }
                                });
                                listOfPositionInDocument = [
                                    1.311,
                                    22.3462,
                                    43.3403,
                                    64.2818,
                                    85.2425,
                                ];
                                randomColumnPosition = listOfPositionInDocument[Math.floor(Math.random() * listOfPositionInDocument.length)];
                                illustratorProces_1.default({
                                    poem: "coucou\nnouveau poeme",
                                    contraste: 55,
                                    graisse: 10000,
                                    rigidite: -10,
                                    yPositionInDocument: randomColumnPosition
                                });
                                cuterMasterProcess_1.default();
                            }
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
main();
