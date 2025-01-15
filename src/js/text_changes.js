import $ from "jquery";
import { TextBackup } from "./backup";
// Retype Count: 9 // This is the amount I have re-written this code FROM scratch
// All `console.log()`s are for debugging, they are going to removed once it's ready for the master branch
/*
    This code is completed for now.
    Will need to figure out how to make it so the code will immediately change to the backup if it fails
*/
function TextOptions(cssName) {
    var classGet = [];
    var backUp = null;
    const classLook = $("body").find("[class]").each(function () {
        var classSearch = $(this).attr("class");
        const getBackUp = classSearch == undefined ? true : false;
        classGet = classSearch ? classSearch.split(" ") : null;
        backUp = getBackUp;
        // In testing: put a console.log() check for classGet here, it involves the classGet variable
        // In testing: put a console.log() check for backUp here, it involves the backUp variable
        if (backUp != true) {
            // In testing: put a console.log() check for backUp being false here, it doesn't involve variables
            // In testing: put a console.log() check for classGet here, it involves the classGet variable
            const classGetSize = classGet.length;
            // In testing: put a console.log() check for classGetSize here, it involves the classGetSize variable
            if (classGetSize == 1) {
                // In testing: put a console.log() check for classGetSize being 1 here, it doesn't involve variables
                var classPlace = classGet[0];
                // In testing: put a console.log() check for classPlace here, it involves the classPlace variable
                if (classPlace) {
                    if (classPlace.includes("bg") || classPlace.includes("fg")) {
                        var classPart = classPlace.substring(3);
                        // In testing: put a console.log() check for classPart here, it involves the classPart variable
                        var color;
                        if (/^[0-9A-Fa-f]{6}$/.test(classPart)) {  
                             color = `#${classPart}`;
                        } else {
                            color = classPart; 
                        }
                        // In testing: put a console.log() check for color here, it involves the color variable
                        if (classPlace.includes("bg")) {
                            $(this).css("background-color", color);
                        } else if (classPlace.includes("fg")) {
                            $(this).css("color", color);
                        }
                    } else if (classPlace.includes("fs")) {
                        var classPart = classPlace.substring(3);
                        // In testing: put a console.log() check for classPart here, it involves the classPart variable
                        $(this).css("font-size", classPart);
                    } else if (classPlace.includes("fw")) {
                        var classPart = classPlace.substring(3);
                        // In testing: put a console.log() check for classPart here, it involves the classPart variable
                        $(this).css("font-weight", classPart);
                    }
                }
            } else if (classGetSize > 1) {
                for (var i = 0; i < classGetSize; i++) {
                    // In testing: put a console.log() check for i here, it involves the i variable
                    var classPlace = classGet[i];
                    // In testing: put a console.log() check for classPlace here, it involves the classPlace variable
                    if (classPlace.includes("bg") || classPlace.includes("fg")) {
                        var classPart = classPlace.substring(3);
                        // In testing: put a console.log() check for classPart here, it involves the classPart variable
                        var color;
                        if (/^[0-9A-Fa-f]{6}$/.test(classPart)) {  
                             color = `#${classPart}`;
                        } else {
                            color = classPart; 
                        }
                        // In testing: put a console.log() check for color here, it involves the color variable
                        if (classPlace.includes("bg")) {
                            $(this).css("background-color", color);
                        } else if (classPlace.includes("fg")) {
                            $(this).css("color", color);
                        }
                    } else if (classPlace.includes("fs")) {
                        var classPart = classPlace.substring(3);
                        // In testing: put a console.log() check for classPart here, it involves the classPart variable
                        $(this).css("font-size", classPart);
                    } else if (classPlace.includes("fw")) {
                        var classPart = classPlace.substring(3);
                        // In testing: put a console.log() check for classPart here, it involves the classPart variable
                        $(this).css("font-weight", classPart);
                    }
                }
            }
        } else {
            /*
                Figure out how to have it where the parts where it doesn't function properly will end up doing backup code
            */
            // In testing: put a console.log() check for backUp being true here, it doesn't involve variables
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