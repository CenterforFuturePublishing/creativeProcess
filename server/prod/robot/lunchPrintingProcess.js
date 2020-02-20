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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stringConain_1 = __importDefault(require("../_tools/stringConain"));
var closeWindow_1 = __importDefault(require("./closeWindow"));
var main_1 = require("../windowManager/main");
var illustratorProces_1 = __importDefault(require("./illustratorProces"));
var cuterMasterProcess_1 = __importDefault(require("./cuterMasterProcess"));
var main_2 = require("./main");
var printInfo_1 = __importDefault(require("../_tools/printInfo"));
function default_1(allWindowsOpen, poemData) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, allWindowsOpen_1, window_1, title, listOfPositionInDocument, randomColumnPosition, cuttingMasterProcess;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, allWindowsOpen_1 = allWindowsOpen;
                    _a.label = 1;
                case 1:
                    if (!(_i < allWindowsOpen_1.length)) return [3 /*break*/, 5];
                    window_1 = allWindowsOpen_1[_i];
                    title = window_1.getTitle();
                    if (!stringConain_1.default(title, "Adobe Illustrator")) return [3 /*break*/, 2];
                    if (stringConain_1.default(title, "erreur")) {
                        closeWindow_1.default({
                            window: window_1,
                            defaultWindowPosition: main_2.INITIAL_WINDOW_POSITION,
                        });
                    }
                    return [2 /*return*/, false];
                case 2:
                    if (!stringConain_1.default(title, "DL-MODEL.ai")) return [3 /*break*/, 4];
                    window_1.bringToTop();
                    main_1.setWindowPositionAndSize({
                        window: window_1,
                        position: {
                            x: main_2.INITIAL_WINDOW_POSITION.x,
                            y: main_2.INITIAL_WINDOW_POSITION.y,
                            height: main_2.INITIAL_WINDOW_SIZE.height,
                            width: main_2.INITIAL_WINDOW_SIZE.width,
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
                        contraste: poemData.contraste,
                        graisse: poemData.graisse,
                        poem: poemData.poem,
                        rigidite: poemData.rigidite,
                        xPositionInDocument: randomColumnPosition,
                    });
                    return [4 /*yield*/, cuterMasterProcess_1.default()];
                case 3:
                    cuttingMasterProcess = _a.sent();
                    return [2 /*return*/, cuttingMasterProcess];
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5:
                    printInfo_1.default("ERROR: ");
                    console.error("0 window open");
                    return [2 /*return*/, false];
            }
        });
    });
}
exports.default = default_1;
