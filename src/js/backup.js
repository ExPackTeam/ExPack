/*
    This file is a backup if the jQuery code fails
    The errors aren't included in this file, those are in their respective files.

    Each function will have a comment for which file they belong to
*/
export function TextBackup() {
    // for "./text_changes.js"
    const bgElements = document.querySelectorAll("[class*='bg-']");
    bgElements.forEach(element => {
        // console.log("Background Started");
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
    const mnElements = document.querySelectorAll("[class*='fg-']");
    mnElements.forEach(element => {
        const classes = element.className.split(" ");
        classes.forEach(cls => {
            if (cls.startsWith("fg-")) {
                const colorCode = cls.substring(3);
                if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                    element.style.color = `#${colorCode}`;
                }
            }
        });
    });
    const fontWeightClass = document.querySelectorAll("[class*='fw-']");
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
                    element.style.fontSize = sizeValue;
                }
            }
        });
    });
}
export function PageClassBackup() {
    const marginElements = document.querySelectorAll("[class*='margin-']");
    marginElements.forEach(element => {
        const classes = element.className.split(" ");
        classes.forEach(cls => {
            if (cls.startsWith("margin-")) {
                const marginValue = cls.substring(7);
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(marginValue)) {
                    element.style.margin = `${marginValue}`;
                }
            }
            else if (cls.startsWith("margin-top-")) {
                const topMargin = cls.substring(11);
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(topMargin)) {
                    element.style.marginTop = `${topMargin}`;
                }
            } else if (cls.startsWith("margin-right-")) {
                const rightMargin = cls.substring(13);
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(rightMargin)) {
                    element.style.marginRight = `${rightMargin}`;
                }
            } else if (cls.startsWith("margin-bottom-")) {
                const bottomMargin = cls.substring(14);
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(bottomMargin)) {
                    element.style.marginBottom = `${bottomMargin}`;
                }
            } else if (cls.startsWith("margin-left-")) {
                const leftMargin = cls.substring(12);
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(leftMargin)) {
                    element.style.marginLeft = `${leftMargin}`;
                }
            }
        });
    });
    const paddingElements = document.querySelectorAll("[class*='padding-']");
    paddingElements.forEach(element => {
        const classes = element.className.split(" ");
        classes.forEach(cls => {
            if (cls.startsWith("padding-")) {
                const paddingValue = cls.substring(8); // Get the padding value after "padding-"
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(paddingValue)) {
                    element.style.padding = `${paddingValue}`; // Apply the padding to all sides
                }
            }
            else if (cls.startsWith("padding-top-")) {
                const topPadding = cls.substring(12); // Get the top padding value
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(topPadding)) {
                    element.style.paddingTop = `${topPadding}`; // Apply padding-top
                }
            } else if (cls.startsWith("padding-right-")) {
                const rightPadding = cls.substring(14); // Get the right padding value
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(rightPadding)) {
                    element.style.paddingRight = `${rightPadding}`; // Apply padding-right
                }
            } else if (cls.startsWith("padding-bottom-")) {
                const bottomPadding = cls.substring(15); // Get the bottom padding value
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(bottomPadding)) {
                    element.style.paddingBottom = `${bottomPadding}`; // Apply padding-bottom
                }
            } else if (cls.startsWith("padding-left-")) {
                const leftPadding = cls.substring(13); // Get the left padding value
                if (/^\d+(\.\d+)?(px|em|rem|%)?$/.test(leftPadding)) {
                    element.style.paddingLeft = `${leftPadding}`; // Apply padding-left
                }
            }
        });
    });
}
export function PageBorderBackup() {
    const borderElements = document.querySelectorAll("[data-border]");
    borderElements.forEach(element => {
        const borderData = element.getAttribute("data-border");
        const borderClasses = borderData.split(" ");
        borderClasses.forEach(borderClass => {
            if (borderClass.startsWith("clr")) {
                const colorCode = borderClass.substring(3);
                if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                    element.style.borderTopColor = `#${colorCode}`;
                    element.style.borderLeftColor = `#${colorCode}`;
                    element.style.borderRightColor = `#${colorCode}`;
                    element.style.borderBottomColor = `#${colorCode}`;
                }
            }
            if (borderClass.startsWith("sz")) {
                const size = borderClass.substring(2);
                if (/^\d+(px|em|rem|%)$/.test(size)) {
                    element.style.borderTopWidth = size;
                    element.style.borderLeftWidth = size;
                    element.style.borderRightWidth = size;
                    element.style.borderBottomWidth = size;
                }
            }
            if (borderClass === "top") {
                if (borderClasses.includes("clr")) element.style.borderTopColor = `#${colorCode}`;
                if (borderClasses.includes("sz")) element.style.borderTopWidth = size;
            }
            if (borderClass === "lft") {
                if (borderClasses.includes("clr")) element.style.borderLeftColor = `#${colorCode}`;
                if (borderClasses.includes("sz")) element.style.borderLeftWidth = size;
            }
            if (borderClass === "rgt") {
                if (borderClasses.includes("clr")) element.style.borderRightColor = `#${colorCode}`;
                if (borderClasses.includes("sz")) element.style.borderRightWidth = size;
            }
            if (borderClass === "btm") {
                if (borderClasses.includes("clr")) element.style.borderBottomColor = `#${colorCode}`;
                if (borderClasses.includes("sz")) element.style.borderBottomWidth = size;
            }
        });
    });    
}
export function PageImageBackup() {
    const imgElements = document.querySelectorAll("[class*='data-img']");
    imgElements.forEach(element => {
        const classes = element.className.split(" ");
        classes.forEach(cls => {
            if (cls.startsWith("data-img")) {
                const size = cls.substring(8);
                if (size.startsWith("hgt")) {
                    const height = size.substring(3);
                    if (/^\d+(\.\d+)?(px|em|rem|%|vw|vh)$/.test(height)) {
                        element.style.height = height;
                    }
                }
                if (size.startsWith("wid")) {
                    const width = size.substring(3);
                    if (/^\d+(\.\d+)?(px|em|rem|%|vw|vh)$/.test(width)) {
                        element.style.width = width;
                    }
                }
            }
        });
    });
}
export function CopyBackup() {
    var copyText = document.querySelectorAll("[class^='copy-text']");
    var copyButtons = document.querySelectorAll("[class^='copy-button']");
    copyButtons.forEach((button, index) => {
        button.onclick = function() {
            console.log("clicked")
            if (copyText[index] instanceof HTMLElement) {
                const textElement = copyText[index];
                // Check if the textElement is an input or textarea
                if (textElement instanceof HTMLInputElement || textElement instanceof HTMLTextAreaElement) {
                    textElement.focus();
                    textElement.select();
                    navigator.clipboard.writeText(textElement.value)
                        .then(() => {
                            alert("Copied Text: " + textElement.value);
                        })
                        .catch(err => {
                            console.error('Failed to copy: ', err);
                        });
                } else {
                    // For other types of elements, use textContent or innerText
                    const textToCopy = textElement.textContent || textElement.innerText;
                    navigator.clipboard.writeText(textToCopy)
                        .then(() => {
                            alert("Copied Text: " + textToCopy);
                        })
                        .catch(err => {
                            console.error('Failed to copy: ', err);
                        });
                }
            } else {
                console.error("Not a valid HTML element: ", copyText[index]);
            }
        };
    });
}