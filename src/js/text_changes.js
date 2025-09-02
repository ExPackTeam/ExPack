import $ from "jquery";
import { TextBackup } from "./backup";
// Retype Count: 9 // This is the amount I have re-written this code FROM scratch
/*
    This code is completed for now.
    Will need to figure out how to make it so the code will immediately change to the backup if it fails
*/
// Needs better documentation
function TextOptions(cssName) {
    const cssProperties = { 
        // This gives what each portion means and allows easier calling in the code later
        "bg": "background-color", // this for page background color
        "fg": "color", // this is for text color
        "fw": "font-weight", // this is for font weight // aka allowing bold and such
        "fs": "font-style" // this is for font styles like italics
    }

    const propertyName = cssProperties[cssName]; // this checks to make sure the property name is properly called
    if (!propertyName) return;
    
    $("body").find("[class]").each(function() {
        const $element = $(this); // this is for easier calling of the elements // saves on having $(this). everywhere
        const classNames = $element.attr("class");
        
        if (!classNames) {
            HandleMissingClasses(cssName, propertyName); // this handles the error message for classes failing to be found // see HandleMissingClasses for more
            return;
        }
        
        const classes = classNames.split(" "); // splits the classes found
        
        for (const cls of classes) {
            if (!cls.startsWith(cssName)) continue; // this is error handling that enables the code to skip if there isn't a class found via cssName
            const value = ExtractedValue(cls, cssName); // this checks for the extracted values, see the ExtractedValue function for how it's done
            if (value) {
                $element.css(propertyName, value); // this inserts the value for the             
            }
        }
    });
}

function ExtractedValue(classNameValue, prefix) {
    const value = classNameValue.substring(prefix.length + 1); // Checks the length of the prefix to the class // this also gets the color called
    
    if (prefix === "bg" || prefix === "fg") {
        return IsValidHex(value) ? `#${value}` : value; // this checks if the value found is a hex code or not // if it is, it will have value of the color be the hexcode
    }
    
    return value; // this will return the value if it isn't a hex code
}

function IsValidHex(color) {
    return /^[0-9A-Fa-f]{6}$/.test(color);
}

function HandleMissingClasses(cssName, propertyName) {
    const jqueryError = new Error("[jQuery] failed to find the class");
    let classError;

    if (propertyName === "background-color" || propertyName === "color") {
       TextBackup("color");
    } else {
        TextBackup("other");
    }
    classError = new Error(`[${cssName}] jquery failed to find the [${cssName}] class, using backup [${cssName}] code`);
    console.error(jqueryError + "\n" + classError);
}

export function TextFunction() {
    ["bg", "fg", "fw", "fs"].forEach(TextOptions);
}
