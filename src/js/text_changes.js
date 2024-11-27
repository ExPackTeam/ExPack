import $ from "jquery";
var backUp;
function ColorChanger(calledElement, className, cssName) {
    console.log("Started Color Changing");
    console.log("Called Element is " + calledElement);
    /*
        New error, className is now returning false
        Reason unknown
    */
    if (calledElement != undefined) {
        if (className == true) {
            console.log("Class name is true");
        } else {
            console.log("Class name is false");
            if (cssName == "background-color") {
                className = $(calledElement).hasClass("bg");
                console.log("class name is " + className);
            } else if (cssName == "color") {
                className = $(calledElement).hasClass("fr");
                console.log("class name is " + className);
            }
        }
    } else {
        console.log("Start called element else statement");
        if (className == true) {
            console.log("Class name is true");
        } else {
            console.log("Class name is false");
            if (cssName == "background-color") {
                className = $(calledElement).hasClass("bg");
                console.log("class name is " + className);
            } else if (cssName == "color") {
                className = $(calledElement).hasClass("fr");
                console.log("class name is " + className);
            }
        }
    }
    
    if (className != undefined) {
        backUp = false;
        $(className).each(function() { // Hopefully this will fix the issue of not adding the `style=""` attribute to the element
            /*
                having it be 
                ```
                    $(this).hasClass(className).each(className, function(){})
                ```
                gave an error 
            */
            console.log("Entering color function"); // remove later, only for debuggin
            // Above console.log() is to make sure that the className function is found
            var regex = new RegExp("^[A-Fa-f0-9]{6}$");
            var match = className.match(regex);
            if (match) {
                console.log("Matched class is " + className); // remove later, only for debugging
                /*
                    Above console.log() is checking to make sure the className is displayed and found
                */
                var hexCode = match[0];
                if (hexCode) {
                    // This if statement is to just make sure hexCode is being found
                    /*
                        The console.logs() below are to check if the hex code and css name are found
                        Remove in v1.0.13
                            - console.log("Color found is " + hexCode); // Puts the found hexCode in the console to check if the hex code in the class
                            - console.log("CSS Name is " + cssName); // Puts the found cssName in the console to check if the code found the css name is found
                            - console.log("Testing hexcode " + /^[A-Fa-f0-9]{6}$/.test(hexCode));
                    */
                    console.log("Color found is " + hexCode); // remove later, only for debugging
                    console.log("CSS Name is " + cssName); // remove later, only for debugging
                    console.log("Testing hexcode " + /^[A-Fa-f0-9]{6}$/.test(hexCode)); // remove later, only for debugging
                    if (/^[A-Fa-f0-9]{6}$/.test(hexCode)) {
                        $(this).css(cssName, `#${hexCode}`);
                    }
                } else if (hexCode == null) {
                    // This is an error function for if hexCode returns null
                    var hexCodeNullError = new Error("Hex code is null");
                    throw hexCodeNullError;
                } else if (hexCode == undefined) {
                    throw new Error("hex code is undefined");
                } else {
                //This is an error function for hexCode returns invalid
                var hexCodeOtherError = new Error("Hex code is invalid or undefined");
                throw hexCodeOtherError;
                }
                return hexCode;
            } else if (match == null) {
                /*
                    This is an error function for if match is null
                */
                const matchNullError = new Error("Match returned null");
                throw matchNullError;
            } else {
                /*  
                    This is an additional error for if the match isn't there or null
                */
                const matchOtherError = new Error("Match is improperly used or undefined");
                throw matchOtherError;
            }
        });
    } else {
        /*
            This will be removed once the issue with jQuery is fixed
        */
        backUp = true;
        const bgElements = document.querySelectorAll("[class*='bg-']");
        bgElements.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("bg-")) {
                    const colorCode = cls.substring(3);
                    if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                        element.style.backgroundColor = `#${colorCode}`;
                    }
                }
            });
        });
        const mnElements = document.querySelectorAll("[class*='fr-']");
        mnElements.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("fr-")) {
                    const colorCode = cls.substring(3);
                    if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                        element.style.color = `#${colorCode}`;
                    }
                }
            });
        });

        const fontWeightClass = document.querySelectorAll("[class^='fw-']");
        fontWeightClass.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("fw-")) {
                    const fwValue = cls.substring(3);
                    if (/^\d+px?$/.test(fwValue)) {
                        element.style.fontWeight = fwValue;
                    }
                }
            });
        });

        const fontSizeValue = document.querySelectorAll("[class*='sz-']");
        fontSizeValue.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("sz-")) {
                    const sizeValue = cls.substring(3);
                    if (/^\d+px?$/.test(sizeValue)) {
                        element.style.fontSize = fwValue;
                    }
                }
            });
        });
    }
    if (calledElement == undefined && className == undefined || calledElement == undefined && className != undefined || calledElement != undefined && className == undefined) {
        var calledElementUndefined = new Error("calledElement is undefined");
        var classNameUndefined = new Error("className is undefined");
        if (calledElement == undefined && className == undefined) {
            throw calledElementUndefined + classNameUndefined;
        } else if (className == undefined && calledElement != undefined) {
            throw classNameUndefined;
        } else {
            throw calledElementUndefined;
        }
    }
    if (className == undefined) {
        throw classNameUndefined;
    }
}
export function TextFunction() {
    ColorChanger("*", "bg", "background-color");
    ColorChanger("*", "fr", "color"); // Will be changed to fg at a later date
    /* TextOptions(false, false, false, "fw", "font-weight"); // Bold uses css
    TextOptions(false, true, true, "sz", "font-size");*/
}