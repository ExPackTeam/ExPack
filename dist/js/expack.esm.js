import $ from"jquery";function s(s){if("color"==s||"bg"==s||"fg"==s){document.querySelectorAll("[class*='bg-']").forEach((s=>{s.className.split(" ").forEach((t=>{if(t.startsWith("bg-")){const i=t.substring(3);/^[0-9A-Fa-f]{6}$/.test(i)&&(s.style.backgroundColor=`#${i}`)}}))}));document.querySelectorAll("[class*='fg-']").forEach((s=>{s.className.split(" ").forEach((t=>{if(t.startsWith("fg-")){const i=t.substring(3);/^[0-9A-Fa-f]{6}$/.test(i)&&(s.style.color=`#${i}`)}}))}))}else{document.querySelectorAll("[class*='fs-']").forEach((s=>{s.className.split(" ").forEach((t=>{if(t.startsWith("fs-")){const i=t.substring(3);/^\d+px?$/.test(i)&&(s.style.fontSize=i)}}))}));document.querySelectorAll("[class*='fw-']").forEach((s=>{s.className.split(" ").forEach((t=>{if(t.startsWith("fw-")){const i=t.substring(3);/^\d+(px|em|rem|pt|in|cm|mm)?$/.test(i)&&(s.style.fontWeight=i)}}))}))}}function t(s,t){if("class"==s)if("margin"==t){document.querySelectorAll("[class*='marg-']").forEach((s=>{s.className.split(" ").forEach((t=>{if(t.startsWith("marg-")){const i=t.substring(5);s.style.margin=`${i}`}else if(t.startsWith("marg-top-")){const i=t.substring(8);s.style.marginTop=`${i}`}else if(t.startsWith("marg-rgt-")){const i=t.substring(8);s.style.marginRight=`${i}`}else if(t.startsWith("margin-btm-")){const i=t.substring(8);s.style.marginBottom=`${i}`}else if(t.startsWith("margin-lft-")){const i=t.substring(8);s.style.marginLeft=`${i}`}}))}))}else if("height"==t){document.querySelectorAll("[class*='higt-']").forEach((s=>{s.className.split(" ").forEach((t=>{const i=substring(5);s.style.height=i}))}))}else if("width"==t){document.querySelectorAll("[class*='widt'").forEach((s=>{s.className.split(" ").forEach((t=>{const i=substring(5);s.style.width=`${i}`}))}))}else if("zindex"==t){document.querySelectorAll("[class*='indz-']").forEach((s=>{s.className.split(" ").forEach((t=>{if(t.startsWith("zind")){const i=t.substring(5);s.style.zIndex=`${i}`}}))}))}else{document.querySelectorAll("[class*='padd-']").forEach((s=>{s.className.split(" ").forEach((t=>{if(t.startsWith("padd-")){const i=t.substring(5);s.style.padding=`${i}`}else if(t.startsWith("padd-top-")){const i=t.substring(8);s.style.paddingTop=`${i}`}else if(t.startsWith("padd-rgt-")){const i=t.substring(8);s.style.paddingRight=`${i}`}else if(t.startsWith("padd-bot")){const i=t.substring(8);s.style.paddingBottom=`${i}`}else if(t.startsWith("padd-lft-")){const i=t.substring(8);s.style.paddingLeft=`${i}`}}))}))}else if("border"==t){document.querySelectorAll("[data-bord]").forEach((s=>{s.getAttribute("data-bord").split(" ").forEach((t=>{if(t.startsWith("clr")){var i=t.substring(4);t.includes("top")?(i=t.substring(4),/^[0-9A-Fa-f]{6}$/.test(i)?s.style.borderTopColor=`#${i}`:s.style.borderTopColor=i):t.includes("lft")?(i=t.substring(4),/^[0-9A-Fa-f]{6}$/.test(i)?s.style.borderLeftColor=`#${i}`:s.style.borderLeftColor=i):t.includes("rgt")?/^[0-9A-Fa-f]{6}$/.test(i)?s.style.borderRightColor=`#${i}`:s.style.borderRightColor=i:/^[0-9A-Fa-f]{6}$/.test(i)?s.style.borderBottomColor=`#${i}`:s.style.borderBottomColor=i}if(t.startsWith("wid")){var e=t.substring(4);if(e.startsWith("top")){const t=e.substring(4);s.style.borderTopWidth=t}else if(e.startsWith("lft")){const t=e.substring(4);s.style.borderLeftWidth=t}else if(e.startsWith("rgt")){const t=e.substring(4);s.style.borderRightWidth=t}else if(e.startsWith("btm")){const t=e.substring(4);s.style.borderBottomWidth=t}else s.style.borderWidth=e}}))}))}}function i(t){var i=[];return $("body").find("[class]").each((function(){var e=$(this).attr("class");const r=null==e;if(i=e?e.split(" "):null,1!=r){const s=i.length;if(1==s){if(n=i[0])if(n.includes("bg")||n.includes("fg")){var l=n.substring(3);c=/^[0-9A-Fa-f]{6}$/.test(l)?`#${l}`:l,n.includes("bg")?$(this).css("background-color",c):n.includes("fg")&&$(this).css("color",c)}else if(n.includes("fs")){l=n.substring(3);$(this).css("font-size",l)}else if(n.includes("fw")){l=n.substring(3);$(this).css("font-weight",l)}}else if(s>1)for(var o=0;o<s;o++){var n;if((n=i[o]).includes("bg")){var c=n.substring(3);c=/^[0-9A-Fa-f]{6}$/.test(l)?`#${l}`:l,n.includes("bg")?$(this).css("background-color",c):n.includes("fg")&&$(this).css("color",c)}else if(n.includes("fg")){c=n.substring(3);c=/^[0-9A-Fa-f]{6}$/.test(l)?`#${l}`:l,n.includes("bg")?$(this).css("background-color",c):n.includes("fg")&&$(this).css("color",c)}else if(n.includes("fs")){l=n.substring(3);$(this).css("font-size",l)}else if(n.includes("fw")){l=n.substring(3);$(this).css("font-weight",l)}}}else{var d;const i=new Error("[jQuery] failed to find the class");"background-color"===t||"color"===t?(s("color"),"background-color"===t?d=new Error("[bg] jquery failed to find the [bg] class, using backup [bg] code"):"color"===t&&(d=new Error("[fg] jquery failed to find the [fg] class, using backup [fg] code"))):"font-weight"===t?(s("other"),"font-weight"===t&&(d=new Error("[fw] jquery failed to find the [fw] class, using backup [fw] code"))):"font-size"===t&&(s("other"),"font-size"===t&&(d=new Error("[fs] jquery failed to find the [fs] class, using backup [fs] code"))),console.error(i+"\n"+d)}}))}function e(){var s,i,e,r;s=[],i=null,$("body").find("[class]").each((function(){var e=$(this).attr("class");const r=null==e;if(s=e?e.split(" "):null,1!=r){const t=s.length;if(1==t){const t=s[0];if(t.includes("top")||t.includes("btm")||t.includes("lft")||t.includes("rgt")){var l=t.includes("top")?"top":t.includes("lft")?"left":t.includes("btm")?"btm":t.includes("rgt")?"right":null,o=t.substring(9);i=!0}else o=t.substring(5),i=!1;o=1==i?t.substring(9):t.substring(5),t&&(t.includes("marg")?1==i?$(this).css(`margin-${l}`,o):$(this).css("margin",o):t.includes("padd")?1==i?$(this).css(`padding-${l}`,o):$(this).css("padding",o):t.includes("indz")?$(this).css("z-index",o):t.includes("hgt")?$(this).css("height",o):t.includes("wid")&&$(this).css("width",o))}else if(t>1)for(var n=0;n<t;n++){const t=s[n];s.includes("top")||s.includes("btm")||s.includes("lft")||s.includes("rgt")?(l=t.includes("top")?"top":t.includes("lft")?"left":t.includes("btm")?"bottom":t.includes("rgt")?"right":null,i=!0):i=!1,o=1==i?t.substring(9):t.substring(5),e.includes("marg")?1==i?$(this).css(`margin-${l}`,o):($(this),css("margin",o)):e.includes("padd")?1==i?$(this).css(`padding-${l}`,o):$(this).css("padding",o):e.includes("indz")?$(this).css("z-index",o):t.includes("higt")?$(this).css("height",o):t.includes("widt")&&$(this).css("width",o)}}else t("class","margin"),t("class","padding"),t("class","zIndex"),t("class","height"),t("class","width"),console.error("encountered an error with trying to run page options classes")})),e=[],r=null,$("body").find("[data-bord]").each((function(){const s=$("[data-bord]").data("bord"),i=null==s;if(e=s?s.split(" "):null,1!=i){if(e){const s=e.length;if(1==s){if(c=e[0]){if(c.includes("top")||c.includes("btm")||c.includes("lft")||c.includes("rgt")){var l=c.includes("top")?"top":c.includes("lft")?"left":c.includes("btm")?"btm":c.includes("rgt")?"right":null,o=c.substring(4);r=!0}else r=!1;c.includes("clr")?1==r?(o=c.substring(8),$(this).css(`border-${l}-color`,`#${o}`)):(o=c.substring(4),$(this).css("border-color",`#${o}`)):c.includes("rad")?1==r?(o=c.substring(8),$(this).css(`border-${l}-radius`,o)):(o=c.substring(4),$(this).css("border-radius",o)):c.includes("wid")&&(1==r?(o=c.substring(8),$(this).css(`border-${l}-width`,o)):(o=c.substring(4),$(this).css("border-width",o)))}}else for(var n=0;n<s;n++){var c;(c=e[n]).includes("top")||c.includes("btm")||c.includes("lft")||c.includes("rgt")?(l=c.includes("top")?"top":c.includes("lft")?"left":c.includes("btm")?"btm":c.includes("rgt")?"right":null,o=c.substring(4),r=!0):r=!1,c.includes("clr")?1==r?(o=c.substring(8),/^[0-9A-Fa-f]{6}$/.test(o)?$(this).css(`border-${l}-color`,`#${o}`):$(this).css(`border-${l}-color`,o)):(o=c.substring(4),/^[0-9A-Fa-f]{6}$/.test(o)?$(this).css("border-color",`#${o}`):$(this).css("border-color",o)):c.includes("rad")?1==r?(o=c.substring(8),$(this).css(`border-${l}-radius`,o)):(o=c.substring(4),$(this).css("border-radius",o)):c.includes("wid")&&(1==r?(o=c.substring(8),$(this).css(`border-${l}-width`,o)):(o=c.substring(4),$(this).css("border-width",o)))}}}else t("data","border")}))}var r=void $((function(){i("bg"),i("fg"),i("fw"),i("fs"),e(),$("a").attr("data-link","newtb")?$("a").attr("target","_blank"):$("a").attr("data-link","parnt")?$("a").attr("target","_parent"):$("a").attr("data-link")&&$("a").attr("data-link","dowld")&&$("a").attr("download"),$("*").hasClass("modal-hid")?($(".modal-cnt").hide(),$(".close").hide()):$("*").hasClass("modal-shn")?($(".modal-cnt").show(),$(".close").show()):($(".modal-cnt").hide(),$(".close").hide()),$(".modal-btn").on("click",(function(){$(this).closest("[data-popup='modal']").find(".modal-cnt").show(),$(this).closest("[data-popup='modal']").find(".close").show()})),$(".close").on("click",(function(){$(this).closest("[data-popup='modal']").find(".modal-cnt").hide(),$(this).closest("[data-popup='modal']").find(".close").hide()})),function(){if($("*").find("[data-clip]")){const s=$("*").find("[data-clip='text']").text().trim().replace(/\s+/g," ");$("[data-clip='button']").on("click",(function(){"alert"===$("*").attr("data-clip")&&alert(`Copied: ${s}`),navigator.clipboard.writeText(s),$("[data-clip='text']").trigger("copy")}))}}()}));export{r as default};
