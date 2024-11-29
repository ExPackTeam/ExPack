import $ from "jquery";
import { TextBackup } from "./backup";
/*
    All console.log()s are temporary and only here for debugging.
    In the master branch, these won't be here
*/
function ColorChanger(className, cssName) {
    var classBackName = $("*").attr("class");
    var classNameGet = $("*").hasClass(className);
    var classCalledName = $("*").attr("class") ? true : undefined; // This is here to let there be a boolean for className and className stays a string
    var backUp = className == undefined /*classCalledName == undefined || classBackName == undefined*/ ? true : false;
    var classBackUp = classCalledName == undefined ? true : false;
    console.log("Started Color Changing");
    console.log("Called Element is *");
    console.log("Class Called Name is " + classCalledName);
    console.log("Class Back Name is " + classBackName);
    // Backup Check
    /*
        This is here to make sure no errors occur when searching the code
        If the jQuery code fails, it will use the plain JavaScript code
        ~> At a later date a new file called `backups.js` will be made and contain backup functions for every file using plain js
    */
    var debugChance = Math.random() * 2;
    if (debugChance == 1) {
        backUp = false;
    } else {
        backUp = backUp;
    }
    console.log("Back Up is " + backUp);
    if (backUp == false) {
        if (classCalledName == true) {
            classBackUp = false;
            console.log("Class name is true (no variable in here)");
            className = $("*").hasClass(className) ? className : undefined; 
            // the `? className : undefined` is an if statement in the declaration
            console.log("Class Name is " + className);
        } else {
            classBackUp = true;
            console.log("Class name is false (no variable in here)");
            if (cssName == "background-color") {
                classBackName; 
                console.log("Class name is " + className);
                console.log("Class Back Name is " + classBackName);
            } else if (cssName == "color") {
                classBackName;
                console.log("Class name is " + className);
                console.log("Class Back Name is " + classBackName);
            }
            if (classBackName != undefined && typeof(classBackName) == "string") {
                classNameGet = classBackName;
            } else {
                classNameGet = className;
            }
            console.log("Class Backup Name is " + classBackName);
            if (classCalledName != undefined) {
                console.log("Working as indended");
            } else {
                console.log("Class Name still not working properly");
            }
            console.log("Class Name is now " + className);
        }
        $/*("*").attr("class")*/("." + className).each(function() { 
            console.log("Entering color function"); // remove later, only for debugging
            var regex = /^[0-9A-Fa-f]{6}$/; // for getting the hex code in the class
            // console.log("Class Name Get is " + classNameGet);
            console.log("Regex is " + regex);
            console.log("Class Name is (pre-match) " + className)
            var match = className.match(regex);
            console.log("Match is " + match);
            /*
                Match is returning null
                Reason unknown
            */
            if (match) {
                var hexCode = match[0] ? hexCode : null;
                console.log("The hexcode is " + hexCode);
                if (hexCode) {
                    // This if statement is to just make sure hexCode is being found
                    console.log("Color found is " + hexCode); // remove later, only for debugging
                    console.log("CSS Name is " + cssName); // remove later, only for debugging
                    if (/^[0-9A-Fa-f]{6}$/.test(hexCode)) {
                        $("*").css(cssName, `#${hexCode}`);
                    }
                } else {
                    console.error("hex code is null");
                }
            } else if (match == null) {
                backUp = true;
                console.error("Match is null");
            } else {
                backUp = true;
                console.error("Match is improperly used or undefined");
            }
        });
    } else if (backUp == true) {
        TextBackup();
        // Backup Errors
        var jqueryScriptFail = new Error("Indended color changing jQuery code failed");
        var undefinedError;
        if ("*" === undefined) {
            undefinedError = new Error("Called Element is undefined");
        } else if (className === undefined) {
            undefinedError = new Error("Class Name is undefined");
        }
        if ("*" != undefined && className != undefined) {
            throw jqueryScriptFail;
        } else if ("*" === undefined || className === undefined) {
            throw [jqueryScriptFail, undefinedError];
        }
    }
}
export function TextFunction() {
    ColorChanger("bg", "background-color");
    ColorChanger("fg", "color"); // Will be changed to fg at a later date
    /* TextOptions(false, false, false, "fw", "font-weight"); // Bold uses css
    TextOptions(false, true, true, "sz", "font-size");*/
}