import $ from"jquery";function o(o,s){var l=$("*").attr("class");$("*").hasClass(o);var e=!!$("*").attr("class")||void 0,a=null==o;if(console.log("Started Color Changing"),console.log("Called Element is *"),console.log("Class Called Name is "+e),console.log("Class Back Name is "+l),1==2*Math.random()&&(a=!1),console.log("Back Up is "+a),0==a)1==e?(console.log("Class name is true (no variable in here)"),o=$("*").hasClass(o)?o:void 0,console.log("Class Name is "+o)):(console.log("Class name is false (no variable in here)"),("background-color"==s||"color"==s)&&(console.log("Class name is "+o),console.log("Class Back Name is "+l)),console.log("Class Backup Name is "+l),null!=e?console.log("Working as indended"):console.log("Class Name still not working properly"),console.log("Class Name is now "+o)),$("."+o).each((function(){console.log("Entering color function");var l=/^[0-9A-Fa-f]{6}$/;console.log("Regex is "+l),console.log("Class Name is (pre-match) "+o);var e=o.match(l);if(console.log("Match is "+e),e){var n=e[0]?n:null;console.log("The hexcode is "+n),n?(console.log("Color found is "+n),console.log("CSS Name is "+s),/^[0-9A-Fa-f]{6}$/.test(n)&&$("*").css(s,`#${n}`)):console.error("hex code is null")}else null==e?(a=!0,console.error("Match is null")):(a=!0,console.error("Match is improperly used or undefined"))}));else if(1==a){document.querySelectorAll("[class*='bg-']").forEach((o=>{o.className.split(" ").forEach((s=>{if(s.startsWith("bg-")){const l=s.substring(3);/^[0-9A-Fa-f]{6}$/.test(l)&&(o.style.backgroundColor=`#${l}`)}}))})),document.querySelectorAll("[class*='fg-']").forEach((o=>{o.className.split(" ").forEach((s=>{if(s.startsWith("fg-")){const l=s.substring(3);/^[0-9A-Fa-f]{6}$/.test(l)&&(o.style.color=`#${l}`)}}))})),document.querySelectorAll("[class*='fw-']").forEach((o=>{o.className.split(" ").forEach((s=>{if(s.startsWith("fw-")){const l=s.substring(3);/^\d+px?$/.test(l)&&(o.style.fontWeight=l)}}))})),document.querySelectorAll("[class*='sz-']").forEach((o=>{o.className.split(" ").forEach((s=>{if(s.startsWith("sz-")){const l=s.substring(3);/^\d+px?$/.test(l)&&(o.style.fontSize=l)}}))}));var n,r=new Error("Indended color changing jQuery code failed");if(void 0===o&&(n=new Error("Class Name is undefined")),null!=o)throw r;if(void 0===o)throw[r,n]}}var s=void $((function(){o("bg","background-color"),o("fg","color")}));export{s as default};
