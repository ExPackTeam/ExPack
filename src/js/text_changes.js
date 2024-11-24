import $ from "jquery";
function TextOptions(color, hasUnits, multiVariables, type, cssName) {
    /*
        color, hasUnits, and multiVariables are to be treated as Boolean variables
        This determines whether or not the searched class has a hex code attached to it, if it needs units, or the called function needs multiple variables
    */
   /*
        Is breaking
        Will try and see if multiple functions fixes this 
   */
    type;
    var className = $(this).attr("class");
    $(this).hasClass(type).each(function() {
        if (color === true) {
            var regex = /[A-Fa-f0-9]{6}$/;
        } else {
            if (hasUnits === true) {
                var regex = new RegExp("^" + `"${type}"` + "\\d+(%|em|px)$");
            } 
        }
        var match = className.match(regex);
        var number = match[1];
        if (multiVariables === true) {
            var unit = match[2];
            $(this).css(cssName, number + unit);
        } else {
            if (color === true) {
                $(this).css(cssName, "#" + number);
            } else {
                $(this).css(cssName, number);
            }
        }
    });
}
function ColorOptions(type, cssName) {
    const className = $(this).attr("class");
    console.log(className); // Remove later
    var typeName = $(this).hasClass(type);
    console.log("Type Name is " + typeName);
    $(typeName).each(function() {
        const regex = /[A-Fa-f0-9]{6}$/;
        var match = className.match(regex);
        if (match) {
            console.log("Found Class: " + className);
            const hexCode = match[1];
            console.log("The hex code is " + hexCode);
            $(this).css(cssName, "#" + hexCode);
        }
    })
}
function NumberOptions() {
    
}
export function TextFunction() {
    $(document).ready(function() {
        /* 
            TextOptions(true, false, false, "bg", "background-color");
            TextOptions(true, false, false, "fr", "color");
        */
        ColorOptions("bg", "background-color");
        ColorOptions("fr", "color");
        TextOptions(false, false, false, "fw", "font-weight"); // Bold uses css
        TextOptions(false, true, true, "sz", "font-size");
    });
}