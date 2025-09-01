import $ from "jquery";
import { TextBackup } from "./backup";
// Retype Count: 9 // This is the amount I have re-written this code FROM scratch
/*
    This code is completed for now.
    Will need to figure out how to make it so the code will immediately change to the backup if it fails
*/
// Needs better documentation
function TextOptions(cssName) {
    // These are to have the basic variables that will be called in the in the function.
    // All are referenced later
    var classGet = [];
    var backUp = null;
    const classLook = $("body").find("[class]").each(function () { // `classSearch` searches the file for the classes found. In testing, you should include a `console.log(classSearch);` to check what classes are found.
        var classSearch = $(this).attr("class"); // `getBackUp` checks if any classes are found, if none are found (undefined) then it returns "true", else it returns false
        const getBackUp = classSearch == undefined ? true : false; // `classGet` gets called to allow the variable to be used. This also splits classSearch to allow specific parts of it to be called.
        classGet = classSearch ? classSearch.split(" ") : null;
        // `backUp` gets called to enable the next time `backUp` is required -- for a later function -- it will have a reference point.
        backUp = getBackUp;
        if (backUp != true) { // This is the function for if `backUp` returned false // Will be tested as something other than an `if`
            const classGetSize = classGet.length; // This gets the size of `classGet` to enable it to call the correct portions to be called later
            if (classGetSize == 1) { // This if statement is for a single class is found
                var classPlace = classGet[0]; // This is to get the whole class's text.
                if (classPlace) {
                    // The if statement for the colors
                    if (classPlace.includes("bg") || classPlace.includes("fg")) { // bg means background and fg means foreground (the text color)
                        var classPart = classPlace.substring(3); // This gets the place where the color will be
                        var color; // This declares the color variable
                        if (/^[0-9A-Fa-f]{6}$/.test(classPart)) {
                            color = `#${classPart}`; // this is if /^[0-9A-Fa-f]{8}/ returns a valid color hexcode 
                        } else {
                            color = classPart; // this is for if the hexcode from line 31 returns an invalid hexcode. 
                            // Will add a check if the hexcode is a valid color
                        }
                        // The if statement for the background color
                        if (classPlace.includes("bg")) {
                            // Inserts the Background color to the webpage
                            $(this).css("background-color", color);
                        // The if statement for the text color
                        } else if (classPlace.includes("fg")) { 
                            // Inserts the text color in the webpage
                            $(this).css("color", color);
                        }
                    // The if statement for font styles
                    } else if (classPlace.includes("fs")) { // fs means font-style
                        var classPart = classPlace.substring(3); // This gets the font style that was input in the class
                        $(this).css("font-size", classPart); 
                    } else if (classPlace.includes("fw")) {
                        var classPart = classPlace.substring(3);
                        $(this).css("font-weight", classPart);
                    }
                }
            } else if (classGetSize > 1) {
                for (var i = 0; i < classGetSize; i++) {
                    var classPlace = classGet[i];
                    if (classPlace.includes("bg") || classPlace.includes("fg")) {
                        var classPart = classPlace.substring(3);
                        var color;
                        if (/^[0-9A-Fa-f]{6}$/.test(classPart)) {
                            color = `#${classPart}`;
                        } else {
                            color = classPart;
                        }
                        if (classPlace.includes("bg")) {
                            $(this).css("background-color", color);
                        } else if (classPlace.includes("fg")) {
                            $(this).css("color", color);
                        }
                    } else if (classPlace.includes("fs")) {
                        var classPart = classPlace.substring(3);
                        $(this).css("font-size", classPart);
                    } else if (classPlace.includes("fw")) {
                        var classPart = classPlace.substring(3);
                        $(this).css("font-weight", classPart);
                    }
                }
            }
        } else {
            var classError;
            const jqueryError = new Error("[jQuery] failed to find the class");
            if (cssName === "background-color" || cssName === "color") {
                TextBackup("color");
                if (cssName === "background-color") {
                    classError = new Error("[bg] jquery failed to find the [bg] class, using backup [bg] code");
                } else if (cssName === "color") {
                    classError = new Error("[fg] jquery failed to find the [fg] class, using backup [fg] code");
                }
            } else if (cssName === "font-weight") {
                TextBackup("other");
                if (cssName === "font-weight") {
                    classError = new Error("[fw] jquery failed to find the [fw] class, using backup [fw] code");
                }
            } else if (cssName === "font-size") {
                TextBackup("other");
                if (cssName === "font-size") {
                    classError = new Error("[fs] jquery failed to find the [fs] class, using backup [fs] code");
                }
            }
            console.error(jqueryError + "\n" + classError);
        }
    }); 
    return classLook;
}
export function TextFunction() {
    TextOptions("bg", "background-color");
    TextOptions("fg", "color");
    TextOptions("fw", "font-weight");
    TextOptions("fs", "font-size");
}
