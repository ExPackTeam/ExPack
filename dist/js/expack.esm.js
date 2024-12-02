import $ from"jquery";function t(){document.querySelectorAll("[class*='bg-']").forEach((t=>{t.className.split(" ").forEach((s=>{if(s.startsWith("bg-")){const o=s.substring(3);/^[0-9A-Fa-f]{6}$/.test(o)&&(t.style.backgroundColor=`#${o}`)}}))}));document.querySelectorAll("[class*='fg-']").forEach((t=>{t.className.split(" ").forEach((s=>{if(s.startsWith("fg-")){const o=s.substring(3);/^[0-9A-Fa-f]{6}$/.test(o)&&(t.style.color=`#${o}`)}}))}));document.querySelectorAll("[class*='fw-']").forEach((t=>{t.className.split(" ").forEach((s=>{if(s.startsWith("fw-")){const o=s.substring(3);/^\d+px?$/.test(o)&&(t.style.fontWeight=o)}}))}));document.querySelectorAll("[class*='sz-']").forEach((t=>{t.className.split(" ").forEach((s=>{if(s.startsWith("sz-")){const o=s.substring(3);/^\d+px?$/.test(o)&&(t.style.fontSize=o)}}))}))}function s(s,o){var e=$(this).attr("class"),r=null!=e;console.log("Class Get is "+e+"\nClass Call is "+r);var l=0==r;if(console.log("Started Color Changing"),0==l)console.log("Class Call is "+r),1==r&&(console.log("Class Get is "+e),$(e).each((function(){var t=/^[0-9A-Fa-f]{6}$/,s=e.match(t);if(console.log("regex is "+t),console.log("match is "+s),s){var r=s[0];r?/^[0-9A-Fa-f]{6$/.text(r)&&$(this).css(o,r):console.error("[hexCode] is "+r)}else console.error("[match] is "+s)})));else if(1==l){t();var n,i=new Error("Indended color changing jQuery code failed");void 0===e?n=new Error("[classGet] in {ColorChanger} is undefined"):void 0===s&&(n=new Error("[className] in {ColorChanger} is undefined")),null!=this&&null!=s?console.error(i):void 0!==this&&void 0!==s||console.error(i+" "+n)}}function o(s,o){var e=$(this).attr("class",s),r=$(this).attr("class",s),l=!!$(this).attr("class",s),n=0==l;console.log("Starting Numbers"),console.log("Class Call is "+l),console.log("Class Get is "+r),console.log("Backup is "+n),0==n?(console.log("Class Call is "+l),1==l?(console.log("Class Get is "+r),$(r).each((function(){var t=r.match(/^\d+$/);if(console.log("Amount is "+t),isNaN(t))console.error("[amount] in {NumberChanger, fontWeight} is not a number");else{var s=t[0];console.log("font weight is "+s),/^\d+$/.test(s)?(console.log("Font weight test is successful"),$(this).css(o,s)):console.error("[fontWeight] returned as "+s)}})),$(r).each((function(){if(regex=new RegExp("^"+s+"/(d+(.d+)?)(px|em|rem|%|vw|vh|pt|cm|mm|in)$/"),amount=r.match(regex),console.log("Amount is "+amount),amount){var t=amount[0];console.log("font size is "+t),/^(\d+(\.\d+)?)(px|em|rem|%|vw|vh|pt|cm|mm|in)$/.test(t)?(console.log("Test of Font Size is successful"),$(this).css(o,t)):console.error("[fontSize] returned as "+t)}else console.error("[amount] in {NumberChanger, fontSize} is not a valid option")}))):($(e).each((function(){var t=r.match(/^\d+$/);if(console.log("Amount is "+t),isNaN(t))console.error("[amount] in {NumberChanger, fontWeight} is not a number");else{var s=t[0];console.log("font weight is "+s),/^\d+$/.test(s)?(console.log("Font weight test is successful"),$(this).css(o,s)):console.error("[fontWeight] returned as "+s)}})),$(e).each((function(){if(regex=/^d+(\.\d+)?(px|em|rem|%|vw|vh|pt|cm|mm|in)$/,amount=r.match(regex),console.log("Amount is "+amount),amount){var t=amount[0];console.log("font size is "+t),/^(\d+(\.\d+)?)(px|em|rem|%|vw|vh|pt|cm|mm|in)$/.test(t)?(console.log("Test of Font Size is successful"),$(this).css(o,t)):console.error("[fontSize] returned as "+t)}else console.error("[amount] in {NumberChanger, fontSize} is not a valid option")})))):1==n&&(t(),null==r&&console.error("[classGet] in {NumberChanger} is undefined"))}function e(t,s,o){0==(null==s)?(console.log("Start Class "+s),s=$(t).attr("class"),console.log("Placeholder is "+t),$(s).each((function(){console.log("Class name is "+s),console.log("Placeholder is true");var e=new RegExp("^"+s+"-(\\d+)(%|em|px)$");console.log("regex is "+e);var r=s.match(e);if(console.log("Match is "+r),r){console.log("Found"+s+": "+classNameClass);var l=r[2],n=r[3];if(isNaN(l)){var i=o+l;l=r[2],n=r[3],$(t).css(i,l+n)}else $(t).css(o,l+n)}}))):(document.querySelectorAll("[class*='margin-']").forEach((t=>{t.className.split(" ").forEach((s=>{if(s.startsWith("margin-")){const o=s.substring(7);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.margin=`${o}`)}else if(s.startsWith("margin-top-")){const o=s.substring(11);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.marginTop=`${o}`)}else if(s.startsWith("margin-right-")){const o=s.substring(13);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.marginRight=`${o}`)}else if(s.startsWith("margin-bottom-")){const o=s.substring(14);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.marginBottom=`${o}`)}else if(s.startsWith("margin-left-")){const o=s.substring(12);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.marginLeft=`${o}`)}}))})),document.querySelectorAll("[class*='padding-']").forEach((t=>{t.className.split(" ").forEach((s=>{if(s.startsWith("padding-")){const o=s.substring(8);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.padding=`${o}`)}else if(s.startsWith("padding-top-")){const o=s.substring(12);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.paddingTop=`${o}`)}else if(s.startsWith("padding-right-")){const o=s.substring(14);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.paddingRight=`${o}`)}else if(s.startsWith("padding-bottom-")){const o=s.substring(15);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.paddingBottom=`${o}`)}else if(s.startsWith("padding-left-")){const o=s.substring(13);/^\d+(\.\d+)?(px|em|rem|%)?$/.test(o)&&(t.style.paddingLeft=`${o}`)}}))})))}function r(t,s,o){var e,r,l=$("*").attr("data"),n=new Error("Match is invalid");0==(null==s)?$(l).each((function(){if("clr"!=s&&"rad"!=s){if(e=new RegExp("^"+s+"-(\\d+)(%|em|px)$"),r=l.match(e),console.log(r[0]),!r)throw n;""!=(s=r[1])&&null!=l&&console.log("Attribute Suffix is "+s);var t,i,a=r[2],c=r[3];if(isNaN(a)){t=!1;var d=new Error("Amount isn't a valid number");throw alert(d),d}if(console.log("Amount is "+a),alert("Amount is "+a),t=!0,console.log(t),""==c||null==c){if(""==c){var g=new Error("Unit is Empty");throw console.log(g),g}i=!1;var m=new Error("Unit is undefined");throw console.log(m),m}if(i=!0,console.log("Unit is "+c),console.log(i),1!=t||1!=i)throw new Error("amount and unit are invalid");console.log("Conditions for amount and units met"),$("*").css(o,a+c)}else if("clr"==s){if(e=new RegExp("^[A-Fa-f0-9]{6}$"),r=l.match(e),console.log(r[0]),!r)throw n;var h=r[0];if(console.log("Hex code is "+h),""==h||null==h){if(""==h)throw new Error("hexCode is empty");throw new Error("hexCode is undefined")}$("*").css(o,h)}else if("rad"==s){throw new Error("Position can't have radius")}})):document.querySelectorAll("[data-border]").forEach((t=>{const s=t.getAttribute("data-border").split(" ");s.forEach((o=>{if(o.startsWith("clr")){const s=o.substring(3);/^[0-9A-Fa-f]{6}$/.test(s)&&(t.style.borderTopColor=`#${s}`,t.style.borderLeftColor=`#${s}`,t.style.borderRightColor=`#${s}`,t.style.borderBottomColor=`#${s}`)}if(o.startsWith("sz")){const s=o.substring(2);/^\d+(px|em|rem|%)$/.test(s)&&(t.style.borderTopWidth=s,t.style.borderLeftWidth=s,t.style.borderRightWidth=s,t.style.borderBottomWidth=s)}"top"===o&&(s.includes("clr")&&(t.style.borderTopColor=`#${colorCode}`),s.includes("sz")&&(t.style.borderTopWidth=size)),"lft"===o&&(s.includes("clr")&&(t.style.borderLeftColor=`#${colorCode}`),s.includes("sz")&&(t.style.borderLeftWidth=size)),"rgt"===o&&(s.includes("clr")&&(t.style.borderRightColor=`#${colorCode}`),s.includes("sz")&&(t.style.borderRightWidth=size)),"btm"===o&&(s.includes("clr")&&(t.style.borderBottomColor=`#${colorCode}`),s.includes("sz")&&(t.style.borderBottomWidth=size))}))}))}function l(t,s,o,e){var r,l;0==(null==s)?$("[data-img]").each((function(){var n=$(t).data("img"),i=$(t).attr("data");if(r=new RegExp("^"+s+"\\d+(%|em|px)$"),l=n.match(r),o=l[1],console.log("Attribute Suffix is "+o),l){console.log("Found data-img: "+n);var a=l[2],c=l[3];$("*").css(e,a+c)}else if(l=i.match(r),o=l[1],l){console.log("Found data-img: "+i);a=l[2],c=l[3];$("*").css(e,a+c)}else console.log("Match not working")})):document.querySelectorAll("[class*='data-img']").forEach((t=>{t.className.split(" ").forEach((s=>{if(s.startsWith("data-img")){const o=s.substring(8);if(o.startsWith("hgt")){const s=o.substring(3);/^\d+(\.\d+)?(px|em|rem|%|vw|vh)$/.test(s)&&(t.style.height=s)}if(o.startsWith("wid")){const s=o.substring(3);/^\d+(\.\d+)?(px|em|rem|%|vw|vh)$/.test(s)&&(t.style.width=s)}}}))}))}var n=void $((function(){s("bg","background-color"),s("fg","color"),o("fw","font-weight"),o("sz","font-size"),e("*","marg","margin"),e("*","pad","padding"),r(0,"none","sz"),r(0,"none","rad"),r(0,"none","clr"),r(0,"top","top-sz"),r(0,"top","top-clr"),r(0,"left","lft-sz"),r(0,"left","lft-clr"),r(0,"bottom","btm-sz"),r(0,"bottom","btm-clr"),r(0,"right","rgt-sz"),r(0,"right","rgt-clr"),l("*","height","hgt","height"),l("*","width","wid","width"),$("a").attr("data-link","new-tab")&&$("a").attr("target","_blank")}));export{n as default};
