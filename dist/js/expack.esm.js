import $ from"jquery";function o(o,e,s){if(console.log("Started Color Changing"),console.log("Called Element is "+o),1==e?console.log("Class name is true"):(console.log("Class name is false"),"background-color"==s?(e=$(o).hasClass("bg"),console.log("class name is "+e)):"color"==s&&(e=$(o).hasClass("fr"),console.log("class name is "+e))),null!=e)$(e).each((function(){console.log("Entering color function");var o=new RegExp("^[A-Fa-f0-9]{6}$"),l=e.match(o);if(l){console.log("Matched class is "+e);var t=l[0];if(!t){if(null==t)throw new Error("Hex code is null");if(null==t)throw new Error("hex code is undefined");throw new Error("Hex code is invalid or undefined")}return console.log("Color found is "+t),console.log("CSS Name is "+s),console.log("Testing hexcode "+/^[A-Fa-f0-9]{6}$/.test(t)),/^[A-Fa-f0-9]{6}$/.test(t)&&$(this).css(s,`#${t}`),t}if(null==l){throw new Error("Match returned null")}throw new Error("Match is improperly used or undefined")}));else{document.querySelectorAll("[class*='bg-']").forEach((o=>{o.className.split(" ").forEach((e=>{if(e.startsWith("bg-")){const s=e.substring(3);/^[0-9A-Fa-f]{6}$/.test(s)&&(o.style.backgroundColor=`#${s}`)}}))}));document.querySelectorAll("[class*='fr-']").forEach((o=>{o.className.split(" ").forEach((e=>{if(e.startsWith("fr-")){const s=e.substring(3);/^[0-9A-Fa-f]{6}$/.test(s)&&(o.style.color=`#${s}`)}}))}));document.querySelectorAll("[class^='fw-']").forEach((o=>{o.className.split(" ").forEach((e=>{if(e.startsWith("fw-")){const s=e.substring(3);/^\d+px?$/.test(s)&&(o.style.fontWeight=s)}}))}));document.querySelectorAll("[class*='sz-']").forEach((o=>{o.className.split(" ").forEach((e=>{if(e.startsWith("sz-")){const s=e.substring(3);/^\d+px?$/.test(s)&&(o.style.fontSize=fwValue)}}))}))}if(null==e){var l=new Error("calledElement is undefined"),t=new Error("className is undefined");throw null==e&&null!=o?t:l}if(null==e)throw t}function e(o,e,s){console.log("Start Class "+e),e=$(o).attr("class"),console.log("Placeholder is "+o),$(e).each((function(){null!=o?(console.log("Class name is "+e),console.log("Placeholder is true")):(console.log("Placeholder is false"),null!=this?(e=$(this).attr("class"),console.log("Class name is "+e)):null==this&&(e=$(e).attr("class"),console.log("Class name is "+e)));var l=new RegExp("^"+e+"-(\\d+)(%|em|px)$");console.log("regex is "+l);var t=e.match(l);if(console.log("Match is "+t),t){console.log("Found"+e+": "+classNameClass);var r=t[2],n=t[3];if(isNaN(r)){var i=s+r;r=t[2],n=t[3],$(o).css(i,r+n)}else $(o).css(s,r+n)}}))}function s(o,e,s,l){var t,r,n=$(o).attr("data"),i=new Error("Match is invalid");$(n).each((function(){if("none"==e){if("clr"!=s){if(t=new RegExp("^"+s+"-(\\d+)(%|em|px)$"),r=n.match(t),console.log(r[0]),!r)throw i;""!=(s=r[1])&&null!=n&&console.log("Attribute Suffix is "+s);var a=r[2],c=r[3];if(isNaN(a)){g=!1;var h=new Error("Amount isn't a valid number");throw alert(h),h}if(console.log("Amount is "+a),alert("Amount is "+a),g=!0,console.log(g),""==c||null==c){if(""==c){var f=new Error("Unit is Empty");throw console.log(f),f}m=!1;var d=new Error("Unit is undefined");throw console.log(d),d}if(m=!0,console.log("Unit is "+c),console.log(m),1!=g||1!=m)throw new Error("amount and unit are invalid");console.log("Conditions for amount and units met"),$(o).css(l,a+c)}else if("clr"==s){if(t=new RegExp("^[A-Fa-f0-9]{6}$"),r=n.match(t),console.log(r[0]),!r)throw i;var u=r[0];if(console.log("Hex code is "+u),""==u||null==u){if(""==u)throw new Error("hexCode is empty");throw new Error("hexCode is undefined")}$(o).css(l,u)}}else if(""!=e&&"none"!=e){if("clr"!=s&&"rad"!=s){if(t=new RegExp("^"+s+"-(\\d+)(%|em|px)$"),r=n.match(t),console.log(r[0]),!r)throw i;""!=(s=r[1])&&null!=n&&console.log("Attribute Suffix is "+s);var g,m;a=r[2],c=r[3];if(isNaN(a)){g=!1;h=new Error("Amount isn't a valid number");throw alert(h),h}if(console.log("Amount is "+a),alert("Amount is "+a),g=!0,console.log(g),""==c||null==c){if(""==c){f=new Error("Unit is Empty");throw console.log(f),f}m=!1;d=new Error("Unit is undefined");throw console.log(d),d}if(m=!0,console.log("Unit is "+c),console.log(m),1!=g||1!=m)throw new Error("amount and unit are invalid");console.log("Conditions for amount and units met"),$(o).css(l,a+c)}else if("clr"==s){if(t=new RegExp("^[A-Fa-f0-9]{6}$"),r=n.match(t),console.log(r[0]),!r)throw i;u=r[0];if(console.log("Hex code is "+u),""==u||null==u){if(""==u)throw new Error("hexCode is empty");throw new Error("hexCode is undefined")}$(o).css(l,u)}else if("rad"==s){throw new Error("Position can't have radius")}}else if(""==e){throw new Error("position is empty")}}))}function l(o,e,s,l){var t,r;$("[data-img]").each((function(){var n=$(o).data("img"),i=$(o).attr("data");if(t=new RegExp("^"+e+"\\d+(%|em|px)$"),r=n.match(t),s=r[1],console.log("Attribute Suffix is "+s),r){console.log("Found data-img: "+n);var a=r[2],c=r[3];$(this).css(l,a+c)}else if(r=i.match(t),s=r[1],r){console.log("Found data-img: "+i);a=r[2],c=r[3];$(this).css(l,a+c)}else console.log("Match not working")}))}var t=void $((function(){!function(){e(this,"marg","margin"),e(this,"pad","padding"),s(this,"none","sz","border-width"),s(this,"none","rad","border-radius"),s(this,"none","clr","border-color"),s(this,"top","top-sz","border-top-width"),s(this,"top","top-clr","border-top-color"),s(this,"left","lft-sz","border-left-width"),s(this,"left","lft-clr","border-left-color"),s(this,"bottom","btm-sz","border-bottom-width"),s(this,"bottom","btm-clr","border-bottom-color"),s(this,"right","rgt-sz","border-right-width"),s(this,"right","rgt-clr","border-right-color"),l(this,"height","hgt","height"),l(this,"width","wid","width")}(),o("*","bg","background-color"),o("*","fr","color")}));export{t as default};
