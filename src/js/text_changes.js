export function TextFunction() {
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