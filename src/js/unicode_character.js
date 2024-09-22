export function unicodeFunction() {
    document.addEventListener("DOMContentLoaded", () => {
        const unicode = document.querySelectorAll("[class*='u-']");
        unicode.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if(cls.startsWith("c")) {
                    const unicodeChar = cls.substring(4);
                    element.textConent = unicodeMap[unicodeChar];
                }
            })
        })
    })
}