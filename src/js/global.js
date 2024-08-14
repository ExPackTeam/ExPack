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
  /* Issue where it won't change the color of the text with the class='color' */
  const mnElements = document.querySelectorAll("[class*='fr-']");
  mnElements.forEach(element => {
      const classes = element.className.split(" ");
      classes.forEach(cls => {
        if (cls.startsWith("color-")) {
          const colorCode = cls.substring(3);
          if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
            element.style.color = `#${colorCode}`;
          }
        }
      });
  }); //*/
});
