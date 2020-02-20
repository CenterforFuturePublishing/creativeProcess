"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var main_1 = require("./robot/main");
var documentIsCurrentlyPrinting = false;
var arrayOfStandbyPoemData = [];
new app_1.Server(function (jsonData) {
    if (documentIsCurrentlyPrinting) {
        arrayOfStandbyPoemData.push(jsonData);
    }
    else {
        documentIsCurrentlyPrinting = true;
        printPoem(jsonData);
    }
});
function printStandbyPoem() {
    if (arrayOfStandbyPoemData.length > 0) {
        var poemDataToPrint = arrayOfStandbyPoemData.splice(0, 1);
        try {
            printPoem(poemDataToPrint[0]);
        }
        catch (e) {
            console.error("arrayOfStandbyPoemData error: ", e);
        }
    }
}
function printPoem(poemData) {
    try {
        main_1.main(poemData).then(function () {
            console.info("success start to end post request");
            documentIsCurrentlyPrinting = false;
            printStandbyPoem();
        });
    }
    catch (e) {
        console.error("error for post request and printing");
        documentIsCurrentlyPrinting = false;
        printStandbyPoem();
    }
    console.info("arrayOfStandbyPoemData: ", arrayOfStandbyPoemData);
}
