function ColorChanger(className, cssName) {
    console.log("Started Color Changing");

    // Logging the className for debugging purposes
    console.log(className);

    // Get all elements with the className
    const elements = document.querySelectorAll(`.${className}`);

    elements.forEach(function (element) {
        console.log("Entering color function"); // for debugging

        // Regex to match a valid hex color code
        const regex = new RegExp("^[A-Fa-f0-9]{6}$");
        const match = className.match(regex);

        if (match) {
            console.log("Matched class is " + className); // for debugging

            const hexCode = match[0];
            if (hexCode) {
                console.log("Color found is " + hexCode); // for debugging
                console.log("CSS Name is " + cssName); // for debugging
                console.log("Testing hexcode " + /^[A-Fa-f0-9]{6}$/.test(hexCode)); // for debugging

                if (/^[A-Fa-f0-9]{6}$/.test(hexCode)) {
                    element.style[cssName] = `#${hexCode}`;
                }
            } else if (hexCode == null) {
                const hexCodeNullError = new Error("Hex code is null");
                throw hexCodeNullError;
            } else if (hexCode == undefined) {
                throw new Error("Hex code is undefined");
            } else {
                const hexCodeOtherError = new Error("Hex code is invalid or undefined");
                throw hexCodeOtherError;
            }
            return hexCode;
        } else if (match == null) {
            const matchNullError = new Error("Match returned null");
            throw matchNullError;
        } else {
            const matchOtherError = new Error("Match is improperly used or undefined");
            throw matchOtherError;
        }
    });

    return { className, cssName };
}

function TextFunctionTest() {
    ColorChanger(this, "bg", "background-color");
    ColorChanger(this, "fr", "color"); // Will be changed to fg at a later date
    // TextOptions(false, false, false, "fw", "font-weight");
    // TextOptions(false, true, true, "sz", "font-size");
}
