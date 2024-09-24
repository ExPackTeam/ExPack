// import $ from "jquery";
import { modalFunction } from "./modals";
import { loginOption } from "./login.js";
import { unicodeFunction } from "./unicode_character.js"
import { copyClip } from "./copy_clip.js";
function expackExport() {
    document.addEventListener("DOMContentLoaded", () => { 
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

        const closingClass = document.querySelectorAll("[class*='close']");
        closingClass.forEach(element => {
            element.innerHTML = "&times;";
            element.addEventListener("click", function(){
                element.style.visibility = "hidden";
            });
        });
        const elementAlignment = document.querySelectorAll("[class*='align-']");
        elementAlignment.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("align-")) {
                    const alignment = cls.substring(5);
                    if (alignment === "center" || alignment === "left" || alignment === "right") {
                        element.style.textAlign = alignment;
                        $(elementAlignment).css("text-align", alignment);
                    }
                }
            });
        });
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

        const imageDimension = document.querySelectorAll("[data-image]");
        imageDimension.forEach(element => {
            const imageData = element.getAttribute('data-image');
            if (imageData) {
                const parts = imageData.split(" ");
                parts.forEach(part => {
                    if (part.startsWith("height-")) {
                        let imageHeight = part.substring(7);
                        if (imageHeight.includes("%")) {
                            imageHeight += "%";
                        } else if (imageHeight.includes("em") || imageHeight.includes("-em")) {
                            imageHeight += "em";
                        } else {
                            imageHeight += "px";
                        }
                        element.style.height = imageHeight;
                    }
                    if (part.startsWith("width-")) {
                        let imageWidth = part.substring(6);
                        if (imageWidth.includes("%")) {
                            imageWidth += "%";
                        } else if (imageWidth.includes("em") || imageWidth.includes("-em")) {
                            imageWidth += "em";
                        } else {
                            imageWidth += "px";
                        }
                        element.style.width = imageWidth;
                    }
                });
            }
        });

        const marginCheck = document.querySelectorAll("[data-margin]");
        marginCheck.forEach(element => {
            const parts = element.className.split(" ");
            parts.forEach(part => {
                if (part.startsWith("a-")) {
                    const everyMargin = part.substring(5);
                    element.style.margin = everyMargin + "px";
                } else if (part.startsWith("r-")) {
                    const rightMargin = part.substring(5);
                    element.style.marginRight = rightMargin + "px";
                } else if (part.startsWith("l-")) {
                    const leftMargin = part.substring(5);
                    element.style.marginLeft = leftMargin + "px";
                } else if (part.startsWith("t-")) {
                    const topMargin = part.substring(5);
                    element.style.marginTop = topMargin + "px";
                } else if (part.startsWith("b-")) {
                    const bottomMargin = part.substring(5);
                    element.style.marginBottom = bottomMargin + "px";
                }
            });
        });

        const indexValue = document.querySelectorAll("[data-index]");
        indexValue.forEach(element => {
            const indexData = element.getAttribute('data-index');
            if (indexData) {
                const parts = indexData.split(" ");
                parts.forEach(part => {
                    if (part.startsWith("z-")) {
                        const zIndex = part.substring(5);
                        element.style.zIndex = zIndex;
                    }
                });
            }
        });
    });

    modalFunction();
    loginOption();
    unicodeFunction();
    copyClip();
}
export default expackExport();