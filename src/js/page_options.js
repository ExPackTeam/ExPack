import $ from "jquery";
import { PageBackup } from "./backup";
// Retype Count: 1 // This is the amount I have re-written this code FROM scratch
// All `console.log()`s are for debugging, they are going to removed once it's ready for the master branch
function PageClasses() {
    var classGet = [];
    var backUp = null;
    var classHasLocations = null;
    const classLook = $("body").find("[class]").each(function () {
        var classSearch = $(this).attr("class");
        const getBackUp = classSearch == undefined ? true : false;
        classGet = classSearch ? classSearch.split(" ") : null;
        backUp = getBackUp;
        console.log("[classGet] is " + classGet + "\n[classGet] is " + typeof classGet);
        console.log("[backUp] is " + backUp);
        if (backUp != true) {
            const classGetSize = classGet.length;
            console.log("[classGetSize] is " + classGetSize);
            if (classGetSize == 1) {
                const classPlace = classGet[0];
                if (classPlace.includes("top") || classPlace.includes("btm") || classPlace.includes("lft") || classPlace.includes("rgt")) {
                    var classLocation = classPlace.includes("top") ? "top" : classPlace.includes("lft") ? "left" : classPlace.includes("btm") ? "btm" : classPlace.includes("rgt") ? "right" : null;
                    var classPart = classPlace.substring(9);
                    classHasLocations = true;
                } else {
                    classPart = classPlace.substring(5);
                    classHasLocations = false;
                }
                if (classHasLocations == true) {
                    classPart = classPlace.substring(9);
                } else {
                    classPart = classPlace.substring(5);
                }
                console.log("[classPart] is " + classPart);
                if (classPlace) {
                    if (classPlace.includes("marg")) {
                        if (classHasLocations == true) {
                            $(this).css(`margin-${classLocation}`, classPart);
                        } else {
                            $(this).css("margin", classPart);
                        }
                    } else if (classPlace.includes("padd")) {
                        if (classHasLocations == true) {
                            $(this).css(`padding-${classLocation}`, classPart);
                        } else {
                            $(this).css("padding", classPart);
                        }
                    } else if (classPlace.includes("indz")) {
                        $(this).css("z-index", classPart)
                    } else if (classPlace.includes("hgt")) {
                        $(this).css("height", classPart);
                    } else if (classPlace.includes("wid")) {
                        $(this).css("width", classPart);
                    } 
                }
            } else if (classGetSize > 1) {
                for (var i = 0; i < classGetSize; i++) {
                    const classPlace = classGet[i];
                    console.log("[i] is " + i);
                    if (classGet.includes("top") || classGet.includes("btm") || classGet.includes("lft") || classGet.includes("rgt")) {
                        var classLocation = classPlace.includes("top") ? "top" : classPlace.includes("lft") ? "left" : classPlace.includes("btm") ? "bottom" : classPlace.includes("rgt") ? "right" : null;
                        classHasLocations = true;
                    } else {
                        classHasLocations = false;
                    }
                    if (classHasLocations == true) {
                        var classPart = classPlace.substring(9);
                    } else {
                        classPart = classPlace.substring(5);
                    }
                    if (classSearch.includes("marg")) {
                        if (classHasLocations == true) {
                            $(this).css(`margin-${classLocation}`, classPart);
                        } else {
                            $(this), css("margin", classPart);
                        }
                    } else if (classSearch.includes("padd")) {
                        if (classHasLocations == true) {
                            $(this).css(`padding-${classLocation}`, classPart);
                        } else {
                            $(this).css("padding", classPart);
                        }
                    } else if (classSearch.includes("indz")) {
                        $(this).css("z-index", classPart);
                    } else if (classPlace.includes("higt")) {
                        $(this).css("height", classPart);
                    } else if (classPlace.includes("widt")) {
                        $(this).css("width", classPart);
                    }
                }
            }
        } else {
            PageBackup("class", "margin");
            PageBackup("class", "padding");
            PageBackup("class", "zIndex");
            PageBackup("class", "height");
            PageBackup("class", "width");
            console.error("encountered an error with trying to run page options classes");
        }
    });
    return classLook;
}
function PageDatas(dataName) {
    // May change to be classes
    // If changed to classes, it will be bord-{function} with bordloc-{location} for where
    var dataGet = [];
    var backUp = null;
    var dataHasLocation = null;
    const dataLook = $("body").find(`[data-${dataName}]`).each(function () {
        const dataSearch = $(this).data(dataName);
        const getBackUp = dataSearch == undefined ? true : false;
        dataGet = dataSearch ? dataSearch.split(" ") : null;
        backUp = getBackUp;
        // In testing, have a console log for both dataSearch, the type of dataSearch (typeof dataSearch) and dataGet
        // In testing have a console.log for backUp
        if (backUp != true) {
            var dataPlace;
            const dataGetSize = dataGet.length;
            console.log(`{CHECK} [dataGetSize] is ${dataGetSize}`);
            if (dataGetSize == 1) {
                dataPlace = dataGet[0];
                if (dataSearch.includes("top") || dataSearch.includes("lft") || dataSearch.includes("btm") || dataSearch.includes("rgt")) {
                    var dataLocation = dataSearch.includes("top") ? "top" : dataSearch.includes("lft") ? "left" : dataSearch.includes("btm") ? "bottom" : dataSearch.includes("rgt") ? "right" : null;
                    dataHasLocation = true;
                } else {
                    dataHasLocation = false;
                }
                if (dataHasLocation == true) {
                    dataPlace = dataSearch.substring(8);
                } else {
                    dataPlace = dataSearch.substring(4);
                }
                if (dataSearch.includes("clr")) {
                    var bordColor;
                    if (/^[0-9A-Fa-f]{6}$/.test(dataPlace)) {
                        bordColor = `#${dataPlace}`;
                    } else {
                        bordColor = dataPlace;
                    }
                    if (dataHasLocation == true) {
                        $(this).css(`border-${dataLocation}-color`, bordColor);
                    } else {
                        $(this).css("border-color", bordColor);
                    }
                } else if (dataSearch.includes("rad")) {
                    if (dataHasLocation == true) {
                        $(this).css(`border-${dataLocation}-radius`, dataPlace);
                    } else {
                        $(this).css("border-radius", dataPlace);
                    }
                } else if (dataSearch.includes('wid')) {
                    if (dataHasLocation == true) {
                        $(this).css(`border-${dataLocation}-width`, dataPlace);
                    } else {
                        $(this).css("border-width", dataPlace);
                    }
                }
            } else if (dataGetSize > 1) {
                for (var i = 0; i < dataGetSize; i++) {
                    var dataPlace = dataGet[i];
                    console.log(`{CHECK} [i] is ${i}`);
                    if (dataSearch.includes("top") || dataSearch.includes("lft") || dataSearch.includes("btm") || dataSearch.includes("rgt")) {
                        console.log("[dataSearch] has a location");
                        var dataLocation = dataSearch.includes("top") ? "top" : dataSearch.includes("lft") ? "left" : dataSearch.includes("btm") ? "btm" : dataSearch.includes("rgt") ? "right" : null;
                        // dataLocation is to get the location, if any are present, while also being quick to reference in the jQuery code
                        console.log(`[dataLocation] is ${dataLocation}`);
                        dataHasLocation = true;
                        console.log(`[dataHasLocation] is ${dataHasLocation}`);
                    } else {
                        dataHasLocation = false;
                    }
                    if (dataHasLocation == true) {
                        dataPlace = dataSearch.substring(8);
                        console.log("{CHECK} location present. [dataPlace] has substring(8)");
                    } else {
                        dataPlace = dataSearch.substring(4);
                        console.log("{CHECK} location not present. [dataPlace] has substring(4)");
                    }
                    console.log(`[dataPlace] is ${dataPlace}`);
                    if (dataSearch.includes("clr")) {
                        console.log("{STATUS} data-bord has [clr]");
                        var bordColor;
                        if (/^[0-9A-Fa-f]{6}$/.test(dataPlace)) {
                            console.log("{STATUS} data-bord has hexadecimal");
                            bordColor = `#${dataPlace}`;
                        } else {
                            console.log("{STATUS} data-bord doesn't have hexadecimal");
                            bordColor = dataPlace;
                        }
                        if (dataHasLocation == true) {
                            $(this).css(`border-${dataLocation}-color`, bordColor);
                        } else {
                            $(this).css("border-color", bordColor);
                        }
                    } else if (dataSearch.includes("rad")) {
                        console.log("{STATUS} data-bord has [rad]");
                        console.log(`{CHECK} radius is ${dataPlace}`);
                        if (dataHasLocation == true) {
                            $(this).css(`border-${dataLocation}-radius`, dataPlace);
                        } else {
                            $(this).css("border-radius", dataPlace);
                        }
                    } else if (dataSearch.includes('wid')) {
                        console.log("{STATUS} data-bord has [siz]");
                        console.log(`{CHECK} border size is ${dataPlace}`);
                        if (dataHasLocation == true) {
                            $(this).css(`border-${dataLocation}-width`, dataPlace);
                        } else {
                            $(this).css("border-width", dataPlace);
                        }
                    }
                }
            }
        } else {
            PageBackup("data", "border");
            console.error("encountered an error with trying to run page options datas");
        }
    });
    return dataLook;
}
export function PageFunction() {
    PageClasses();
    PageDatas("bord");
}