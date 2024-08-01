// Add code to auto detect hex code in an attribute
var elements = document.querySelectorAll("[class*='bg-']");
var data_elements = getAttribute(attributeName);
elements.addEventListener("DOMContentLoaded", () => {
    elements.forEach(elements => {
        const classes = elements.className.split(" ");
        classes.forEach(cl => {
            if (cl.startsWith("bg-")) {
                const colorCode = cls.substring(3);
                if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                    element.style.backgroundColor = `#${colorCode}`;
                };
            };
        });
    });
});