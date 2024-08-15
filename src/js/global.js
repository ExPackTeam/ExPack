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
	const elementAlignment = document.querySelectorAll("[class^='align-']");
	elementAlignment.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("align-")) {
				const alignment = cls.substring(5);
				if (alignment === "center" || alignment === "left" || alignment === "right") {
					element.style.textAlign = alignment;
				}
			}
		});
	});
	const elementPadding = document.querySelectorAll("[class^='pad-']")
	elementPadding.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("pad-")) {
				const padding = cls.substring(5);
				if (/^\d+px?$/.test(paddingValue)) {
                // Apply padding to all sides
					element.style.padding = paddingValue;
				}
			}
		}
	}
});