import $ from "jquery";
import { TextBackup } from "./backup";
/*
    All // console.log()s are temporary and only here for debugging.
    In the master branch, these won't be here
*/
function ColorChanger(className, cssName) {
    var classBack = $(this).attr("class", className) ? className : undefined;
    var classGet = $(this).attr("class", className) ? className : undefined;
    var classCall = $(this).attr("class", className) ? true : undefined; // This is here to let there be a boolean for className and className stays a string
    /*  
        retrying with $(this) instead of $("*")
    */
    var backUp = classGet == undefined  ? true : false;
    console.log("Started Color Changing");
    if (backUp == false) {
        if (classCall == true) {
            $(classGet).each(function() {
                var regex = /^[0-9A-Fa-f]{6}$/
                var match = classGet.match(regex);
                if (match) {
                    var hexCode = match[0];
                    if (hexCode) {
                        if (/^[0-9A-Fa-f]{6$/.text(hexCode)) {
                            $(this).css(cssName, hexCode);
                        }
                    } else {
                        console.error("[hexCode] is " + hexCode);
                    }
                } else {
                    console.error("[match] is " + match);
                }
            });
        } else {
            $(classBack).each(function() {
                var regex = /^[0-9A-Fa-f]{6}$/
                var match = classGet.match(regex);
                if (match) {
                    var hexCode = match[0];
                    if (hexCode) {
                        if (/^[0-9A-Fa-f]{6$/.text(hexCode)) {
                            $(this).css(cssName, hexCode);
                        }
                    } else {
                        console.error("[hexCode] is " + hexCode);
                    }
                } else {
                    console.error("[match] is " + match);
                }
            });
        }
    } else if (backUp == true) {
        TextBackup();
        var jqueryScriptFail = new Error("Indended color changing jQuery code failed");
        var undefinedError;
        if (classGet === undefined) {
            undefinedError = new Error("[classGet] in {ColorChanger} is undefined");
        } else if (className === undefined) {
            undefinedError = new Error("[className] in {ColorChanger} is undefined");
        }
        if (this != undefined && className != undefined) {
            console.error(jqueryScriptFail);
        } else if (this === undefined || className === undefined) {
            console.error(jqueryScriptFail + undefinedError);
        }
    }
}
function NumberChanger(className, cssName) {
    var classBack = $(this).attr("class", className) ? className : undefined;
    var classGet = $(this).attr("class",className) ? className : undefined;
    var classCall = $(this).attr("class", className) ? true : false;
    var backUp = classGet == false ? true : false;
    console.log("Starting Numbers");
    console.log("Class Call is " + classCall);
    console.log("Class Get is " + classGet);
    console.log("Backup is " + backUp);
    if (backUp == false) {
        console.log("Class Call is " + classCall);
        if (classCall == true) {
            console.log("Class Get is " + classGet);
            $(classGet).each(function() {
                var regex = /^\d+$/;
                var amount = classGet.match(regex);
                console.log("Amount is " + amount);
                if (!isNaN(amount)) {
                    var fontWeight = amount[0];
                    console.log("font weight is " + fontWeight);
                    if (/^\d+$/.test(fontWeight)) {
                        console.log("Font weight test is successful");
                        $(this).css(cssName, fontWeight);
                    } else {
                        console.error("[fontWeight] returned as " + fontWeight)
                    }
                } else {
                    console.error("[amount] in {NumberChanger, fontWeight} is not a number");
                }
            });
            $(classGet).each(function() {
                regex = new RegExp("^" + className + "/(\d+(\.\d+)?)(px|em|rem|%|vw|vh|pt|cm|mm|in)$/");
                amount = classGet.match(regex);
                console.log("Amount is " + amount);
                if (amount) {
                    var fontSize = amount[0];
                    console.log("font size is " + fontSize);
                    if (/^(\d+(\.\d+)?)(px|em|rem|%|vw|vh|pt|cm|mm|in)$/.test(fontSize)) {
                        console.log("Test of Font Size is successful");
                        $(this).css(cssName, fontSize);
                    } else {
                        console.error("[fontSize] returned as " + fontSize);
                    }
                } else {
                    console.error("[amount] in {NumberChanger, fontSize} is not a valid option");
                }
            });
        } else {
            $(classBack).each(function() {
                var regex = /^\d+$/;
                var amount = classGet.match(regex);
                console.log("Amount is " + amount);
                if (!isNaN(amount)) {
                    var fontWeight = amount[0];
                    console.log("font weight is " + fontWeight);
                    if (/^\d+$/.test(fontWeight)) {
                        console.log("Font weight test is successful");
                        $(this).css(cssName, fontWeight);
                    } else {
                        console.error("[fontWeight] returned as " + fontWeight)
                    }
                } else {
                    console.error("[amount] in {NumberChanger, fontWeight} is not a number");
                }
            });
            $(classBack).each(function() {
                regex = /^d+(\.\d+)?(px|em|rem|%|vw|vh|pt|cm|mm|in)$/;
                amount = classGet.match(regex);
                console.log("Amount is " + amount);
                if (amount) {
                    var fontSize = amount[0];
                    console.log("font size is " + fontSize);
                    if (/^(\d+(\.\d+)?)(px|em|rem|%|vw|vh|pt|cm|mm|in)$/.test(fontSize)) {
                        console.log("Test of Font Size is successful");
                        $(this).css(cssName, fontSize);
                    } else {
                        console.error("[fontSize] returned as " + fontSize);
                    }
                } else {
                    console.error("[amount] in {NumberChanger, fontSize} is not a valid option");
                }
            });
        }
    } else if (backUp == true) {
        TextBackup();
        if (classGet == undefined) {
            console.error("[classGet] in {NumberChanger} is undefined");
        }
    }
}
export function TextFunction() {
    ColorChanger("bg", "background-color");
    ColorChanger("fg", "color");
    NumberChanger("fw", "font-weight");
    NumberChanger("sz", "font-size");
}