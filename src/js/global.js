document.addEventListener("DOMContentLoaded", () => {
    const bg_elements = document.querySelectorAll("[class*='bg-']");
    bg_elements.forEach(element => {
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
    const mn_elements = document.querySelectorAll("[class*='color-']");
    mn_elements.forEach(element => {
        const classes = element.className.split(" ");
        classes.forEach(cls => {
          if (cls.startsWith("color-")) {
            const colorCode = cls.substring(3);
            if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
              element.style.backgroundColor = `#${colorCode}`;
            }
          }
        });
    });
});