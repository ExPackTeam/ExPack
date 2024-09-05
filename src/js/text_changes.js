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
    // FINALLY FUCKING WORKS!!!!!!! 15/08/2024
    const fontWeightClass = document.querySelectorAll("[class^='fw-'");
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
});