"use strict";
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
    robotJS.typeStringDelayed(poem, 1000);
    robotJS.keyTap("escape");
    robotJS.typeString("v");
    // set position of text
    var positionPanelWindow = openTransformationPanel();
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
    // set caractere params
    var caracterPanel = openCaracterePanel();
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
        robotJS.keyTap("a", ["command", "shift"]);
    }
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
