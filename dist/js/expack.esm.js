function modalFunction() {
  var modal = document.getElementsByClassName("modal");
  var modalBtn = document.getElementsByClassName("modal-btn");
  var closeClick = document.getElementsByClassName("close");
  modalBtn.onclick = function () {
    modal.style.display = "block";
  };
  closeClick.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function loginOption() {
  var emailClass = document.getElementsByClassName("login-email");
  var passwordClass = document.getElementsByClassName("login-password");
  var usernameClass = document.getElementsByClassName("login-username");
  function hasRequiredClass(elements) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('required')) {
        return true;
      }
    }
    return false;
  }
  var registerBtn = document.getElementsByClassName("register-btn");
  if (registerBtn.length > 0) {
    for (var i = 0; i < registerBtn.length; i++) {
      registerBtn[i].onclick = function () {
        var emailRequired = hasRequiredClass(emailClass);
        var passwordRequired = hasRequiredClass(passwordClass);
        var usernameRequired = hasRequiredClass(usernameClass);
        if (emailRequired && emailClass.length > 0) {
          var emailValue = emailClass[0].value;
          localStorage.setItem("email saved", emailValue);
          document.cookie = "userEmail=".concat(emailValue);
        }
        if (passwordRequired && passwordClass.length > 0) {
          var passwordValue = passwordClass[0].value;
          localStorage.setItem("password saved", passwordValue);
          document.cookie = "userPassword=".concat(passwordValue);
        }
        if (usernameRequired && usernameClass.length > 0) {
          var usernameValue = usernameClass[0].value;
          localStorage.setItem("username saved", usernameValue);
          document.cookie = "userUsername=".concat(usernameValue);
        }
      };
    }
  } else {
    console.log("no register");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var bgElements = document.querySelectorAll("[class*='bg-']");
  bgElements.forEach(function (element) {
    var classes = element.className.split(" ");
    classes.forEach(function (cls) {
      if (cls.startsWith("bg-")) {
        var colorCode = cls.substring(3);
        if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
          element.style.backgroundColor = "#".concat(colorCode);
        }
      }
    });
  });
  var mnElements = document.querySelectorAll("[class*='fr-']");
  mnElements.forEach(function (element) {
    var classes = element.className.split(" ");
    classes.forEach(function (cls) {
      if (cls.startsWith("fr-")) {
        var colorCode = cls.substring(3);
        if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
          element.style.color = "#".concat(colorCode);
        }
      }
    });
  });
  var fontWeightClass = document.querySelectorAll("[class^='fw-'");
  fontWeightClass.forEach(function (element) {
    var classes = element.className.split(" ");
    classes.forEach(function (cls) {
      if (cls.startsWith("fw-")) {
        var fwValue = cls.substring(3);
        if (/^\d+px?$/.test(fwValue)) {
          element.style.fontWeight = fwValue;
        }
      }
    });
  });
  var closingClass = document.querySelectorAll("[class*='close'");
  closingClass.textContent = "&times;";
  /*const elementAlignment = document.querySelectorAll("[class^='align-']");
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
  });*/
  var elementPadding = document.querySelectorAll("[class^='pad-']");
  elementPadding.forEach(function (element) {
    var classes = element.className.split(" ");
    classes.forEach(function (cls) {
      if (cls.startsWith("pad-")) {
        var paddingValue = cls.substring(5);
        if (cls.startsWith("pad-t-")) {
          if (/^\d+px?$/.test(paddingValue)) {
            element.style.paddingTop = paddingValue;
          }
        } else if (cls.startsWith("pad-l-")) {
          // left
          if (/^\d+px?$/.test(paddingValue)) {
            element.style.paddingLeft = paddingValue;
          }
        } else if (cls.startsWith("pad-r-")) {
          // right	
          if (/^\d+px?$/.test(paddingValue)) {
            element.style.paddingRight = paddingValue;
          }
        } else if (cls.startsWith("pad-b-")) {
          // bottom
          if (/^\d+px?$/.test(paddingValue)) {
            element.style.paddingBottom = paddingValue;
          }
        } else {
          if (/^\d+px?$/.test(paddingValue)) {
            // padding all
            element.style.padding = paddingValue;
          }
        }
      }
    });
  });
  // figure out how to have this work for all borders
  var borderElements = document.querySelectorAll("[data-border]");
  borderElements.forEach(function (element) {
    var borderData = element.getAttribute('data-border');
    if (borderData) {
      var parts = borderData.split(" ");
      parts.forEach(function (part) {
        if (part.startsWith("color-")) {
          var colorCode = part.substring(6);
          if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
            element.style.color = "#".concat(colorCode);
          }
        }
        if (part.startsWith("radius-")) {
          var borderRadius = part.substring(7);
          if (borderRadius.includes("%")) {
            borderRadius = borderRadius + "%";
          }
          if (borderRadius) {
            borderRadius = borderRadius + "px";
          }
          element.style.borderRadius = borderRadius;
        }
        if (part.startsWith("size-")) {
          var borderSize = part.substring(7);
          element.style.borderWidth = borderSize;
        }
      });
    }
  });
  var imageDimension = document.querySelectorAll("[data-image]");
  imageDimension.forEach(function (element) {
    var imageData = element.getAttribute('data-image');
    if (imageData) {
      var parts = imageData.split(" ");
      parts.forEach(function (parts) {
        if (part.startsWith("height-")) {
          var imageHeight = part.substring(6);
          if (imageHeight.includes("%")) {
            imageHeight = imageHeight + "%";
          }
          if (imageHeight.includes("em") || imageHeight.includes("-em")) {
            imageHeight = imageHeight + "em";
          } else {
            imageHeight = imageHeight + "px";
          }
          element.style.height = imageHeight;
        }
        if (part.startsWith("width-")) {
          var imageWidth = part.substring(7);
          if (imageWidth.includes("%")) {
            imageWidth = imageWidth + "%";
          }
          if (imageWidth.includes("em") || imageWidth.includes("-em")) {
            imageWidth = imageWidth + "em";
          } else {
            imageWidth = imageWidth + "px";
          }
          element.style.width = imageWidth;
        }
      });
    }
  });
  var marginCheck = document.querySelectorAll("[data-margin]");
  marginCheck.forEach(function (element) {
    var parts = element.className.split(" ");
    if (parts.startsWith("a-")) {
      var everyMargin = parts.cls(5);
      element.style.margin = everyMargin;
    } else if (parts.startsWith("r-")) {
      var rightMargin = parts.cls(5);
      element.style.marginRight = rightMargin;
    } else if (parts.startsWith("l-")) ;
  });
  var indexValue = document.querySelectorAll("[data-index]");
  indexValue.forEach(function (element) {
    var indexData = element.getAttribute('data-index');
    if (indexData) {
      var parts = indexData.split(" ");
      if (parts.startsWith("z-")) {
        zIndex = part.substring(5);
        element.style.zIndex = zIndex;
      }
    }
  });
});
modalFunction();
loginOption();
//# sourceMappingURL=expack.esm.js.map
