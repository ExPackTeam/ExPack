export function borderFunction() {
    const elementPadding = document.querySelectorAll("[class^='pad-']");
    elementPadding.forEach(element => {
        const classes = element.className.split(" ");
        classes.forEach(cls => {
            if (cls.startsWith("pad-")) {
                const paddingValue = cls.substring(5);
                if (cls.startsWith("pad-t-")) {
                    if (/^\d+px?$/.test(paddingValue)) {
                        element.style.paddingTop = paddingValue;
                }
                } else if (cls.startsWith("pad-l-")) { // left
                    if (/^\d+px?$/.test(paddingValue)) {
                        element.style.paddingLeft = paddingValue;
                    }
                } else if (cls.startsWith("pad-r-")) { // right	
                    if (/^\d+px?$/.test(paddingValue)) {
                        element.style.paddingRight = paddingValue;
                    }
                } else if (cls.startsWith("pad-b-")) { // bottom
                    if (/^\d+px?$/.test(paddingValue)) {
                        element.style.paddingBottom = paddingValue;
                    }
                } else {
                    if (/^\d+px?$/.test(paddingValue)) { // padding all
                        element.style.padding = paddingValue;
                    }
                }
            }
        });
    });
    
    // figure out how to have this work for all borders
    const borderElements = document.querySelectorAll("[data-border]");
    borderElements.forEach(element => {
        const borderData = element.getAttribute('data-border');
        if (borderData) {
            const parts = borderData.split(" ");
            parts.forEach(part => {
                if (part.startsWith("color-")) {
                    const colorCode = part.substring(7);
                    if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                        element.style.borderColor = `#${colorCode}`;
                    }
                }
                if (part.startsWith("radius-")) {
                    let borderRadius = part.substring(7);
                    if (borderRadius.includes("%")) {
                        borderRadius += "%";
                    } else {
                        borderRadius += "px";
                    }
                    element.style.borderRadius = borderRadius;
                }
                if (part.startsWith("size-")) {
                    const borderSize = part.substring(7);
                    element.style.borderWidth = borderSize;
                }
            });
        }
    });
}
    