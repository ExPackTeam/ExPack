import $ from "jquery";
import { PageClassBackup, PageBorderBackup, PageImageBackup } from "./backup";
function PageClassOptions(placeHolder, className, cssName) {
    let backUp = className == undefined ? true : false;
    if (backUp == false) {
        console.log("Start Class " + className);
        className = $(placeHolder).attr("class");
        console.log("Placeholder is " + placeHolder);
        $(className).each(function() {
            if (placeHolder != undefined) {
                className = className;
                console.log("Class name is " + className);
                console.log("Placeholder is true");
            } else {
                console.log("Placeholder is false");
                if ("*" != undefined) {
                    className = $("*").attr("class");
                    console.log("Class name is " + className);
                } else if ("*" == undefined) {
                    className = $(className).attr("class");
                    console.log("Class name is " + className);
                }
            }
            var regex = new RegExp("^" + className + "-(\\d+)(%|em|px)$");
            console.log("regex is " + regex);
            var match = className.match(regex);
            console.log("Match is " + match);
            if (match) {
                console.log("Found" + className + ": " + classNameClass) // remove later
                var amount = match[2]; // Is for the amount being called
                var unit = match[3]; // The units of what is called
                if(!isNaN(amount)) {
                    $(placeHolder).css(cssName, amount + unit);
                } else {
                    /*
                        Forgot why "*" was added
                        May remove in v1.0.13
                    */
                    var thirdChoice = cssName + amount;
                    amount = match[2];
                    unit = match[3];
                    $(placeHolder).css(thirdChoice, amount + unit);
                }
            }
        });
    } else {
        PageClassBackup();
    }
}
function PageBorders(position, attrSuffix, cssName) {
    /* 
        Will add border image at a later date
        border-image: url("[source url]");
        suffix will be "img"
    */
    /*
        Will add border style at a later date
        border-style: [styleName];
        suffix will be "stl"
    */
    var attrName = $("*").attr("data");
    var regex;
    var match;
    var matchError = new Error("Match is invalid");
    position;
    let backUp = attrSuffix == undefined ? true : false;
    /*
        if (attrName != " " || attrName != undefined) {
            attrSuffix = $(classNameElement).data(attrSuffix);
            if (attrSuffix != " " || attrSuffix != undefined) {
                console.log("Attribute Suffix is " + attrSuffix);
            }
        } else if (attrName == " ") {
            var attrNameEmptyError = new Error("attrName is empty");
            console.log(attrNameEmptyError);
            throw attrNameEmptyError;
        } else {
            var attrNameErrorUndefined = new Error("attrName is undefined");
            throw attrNameErrorUndefined;
        }
    */
    if (backUp == false) {
        $(attrName).each(function() {
            if (position == "none") {
                if (attrSuffix != "clr") {
                    regex = new RegExp("^" + attrSuffix + "-(\\d+)(%|em|px)$"); // Will find what is input
                    match = attrName.match(regex);
                    console.log(match[0]); // remove later, for debugging // checking whole output
                    if (match) {
                        attrSuffix = match[1]; // checks for the first position in match, meant to be the attribute suffix;
                        if (attrSuffix != "" && attrName != undefined) {
                            console.log("Attribute Suffix is " + attrSuffix);
                        }
                        var amount = match[2];
                        var unit = match[3];
                        var amountValid;
                        var unitValid;
                        if (!isNaN(amount)) {
                            console.log("Amount is " + amount); // remove later, for debuggin
                            alert("Amount is " + amount);
                            amountValid = true;
                        } else {
                            amountValid = false;
                            var amountNotValidError = new Error("Amount isn't a valid number");
                            alert(amountNotValidError); // remove later, only for debugging
                            throw amountNotValidError;
                        }
                        console.log(amountValid); // remove later, only for debugging // For making sure amountValid is met or not
                        if (unit != "" && unit != undefined) {
                            unitValid = true;
                            console.log("Unit is " + unit);
                        } else if (unit == "") {
                            var unitEmptyError = new Error("Unit is Empty");
                            console.log(unitEmptyError); // remove later, only for debugging
                            throw unitEmptyError;
                        } else {
                            unitValid = false
                            var unitUndefinedError = new Error("Unit is undefined");
                            console.log (unitUndefinedError); // remove later, only for debugging
                            throw unitUndefinedError;
                        }
                        console.log(unitValid); // remove later, only for debugging // For making sure unitValid is met or not
                        if (amountValid == true && unitValid == true) {
                            console.log("Conditions for amount and units met") // remove later, only for debugging
                            $("*").css(cssName, amount + unit);
                        } else {
                            var validNotMetError = new Error("amount and unit are invalid");
                            throw validNotMetError;
                        }
                    } else {
                        throw matchError;
                    }
                } else if (attrSuffix == "clr") {
                    regex = new RegExp("^[A-Fa-f0-9]{6}$");
                    match = attrName.match(regex);
                    console.log(match[0]); // remove later, checking what match[0] outputs
                    if (match) {
                        var hexCode = match[0];
                        console.log("Hex code is " + hexCode);
                        if (hexCode != "" && hexCode != undefined) {
                            $("*").css(cssName, hexCode);
                        } else if (hexCode == "") {
                            var hexCodeEmptyError = new Error("hexCode is empty");
                            throw hexCodeEmptyError;
                        } else {
                            var hexCodeUndefinedError = new Error("hexCode is undefined");
                            throw hexCodeUndefinedError;
                        }
                    } else {
                        throw matchError;
                    }
                }
            } else if (position != "" && position != "none") {
                if (attrSuffix != "clr" && attrSuffix != "rad") {
                    regex = new RegExp("^" + attrSuffix + "-(\\d+)(%|em|px)$"); // Will find what is input
                    match = attrName.match(regex);
                    console.log(match[0]); // remove later, for debugging // checking whole output
                    if (match) {
                        attrSuffix = match[1]; // checks for the first position in match, meant to be the attribute suffix;
                        if (attrSuffix != "" && attrName != undefined) {
                            console.log("Attribute Suffix is " + attrSuffix);
                        }
                        var amount = match[2];
                        var unit = match[3];
                        var amountValid;
                        var unitValid;
                        if (!isNaN(amount)) {
                            console.log("Amount is " + amount); // remove later, for debuggin
                            alert("Amount is " + amount);
                            amountValid = true;
                        } else {
                            amountValid = false;
                            var amountNotValidError = new Error("Amount isn't a valid number");
                            alert(amountNotValidError); // remove later, only for debugging
                            throw amountNotValidError;
                        }
                        console.log(amountValid); // remove later, only for debugging // For making sure amountValid is met or not
                        if (unit != "" && unit != undefined) {
                            unitValid = true;
                            console.log("Unit is " + unit);
                        } else if (unit == "") {
                            var unitEmptyError = new Error("Unit is Empty");
                            console.log(unitEmptyError); // remove later, only for debugging
                            throw unitEmptyError;
                        } else {
                            unitValid = false
                            var unitUndefinedError = new Error("Unit is undefined");
                            console.log (unitUndefinedError); // remove later, only for debugging
                            throw unitUndefinedError;
                        }
                        console.log(unitValid); // remove later, only for debugging // For making sure unitValid is met or not
                        if (amountValid == true && unitValid == true) {
                            console.log("Conditions for amount and units met") // remove later, only for debugging
                            $("*").css(cssName, amount + unit);
                        } else {
                            var validNotMetError = new Error("amount and unit are invalid");
                            throw validNotMetError;
                        }
                    } else {
                        throw matchError;
                    }
                } else if (attrSuffix == "clr") {
                    regex = new RegExp("^[A-Fa-f0-9]{6}$");
                    match = attrName.match(regex);
                    console.log(match[0]); // remove later, checking what match[0] outputs
                    if (match) {
                        var hexCode = match[0];
                        console.log("Hex code is " + hexCode);
                        if (hexCode != "" && hexCode != undefined) {
                            $("*").css(cssName, hexCode);
                        } else if (hexCode == "") {
                            var hexCodeEmptyError = new Error("hexCode is empty");
                            throw hexCodeEmptyError;
                        } else {
                            var hexCodeUndefinedError = new Error("hexCode is undefined");
                            throw hexCodeUndefinedError;
                        }
                    } else {
                        throw matchError;
                    }
                } else if (attrSuffix == "rad") {
                    var positionError = new Error("Position can't have radius");
                    throw positionError;
                }
            } else if (position == "") {
                var positionEmptyError = new Error("position is empty");
                throw positionEmptyError;
            }
        });
    } else {
        PageBorderBackup();
    }
}
function PageImageOption(placeHolderSpot, attrName, attrSuffix, cssName) {
    /*  
        Will add clip path, aspect ration, and transform in a later version
    */
    var regex;
    var match;
    let backUp = attrName == undefined ? true : false;
    if (backUp == false) {
        $("[data-img]").each(function() {
            var dataOption = $(placeHolderSpot).data("img");
            var dataAttr = $(placeHolderSpot).attr("data");
            regex = new RegExp("^" + attrName + "\\d+(%|em|px)$");
            match = dataOption.match(regex);
            attrSuffix = match[1] // Short for Attribute Suffix
            console.log("Attribute Suffix is " + attrSuffix); // remove later
            if (match) {
                console.log("Found data-img: " + dataOption); // remove later
                var amount = match[2];
                var unit = match[3];
                $("*").css(cssName, amount + unit);
            } else {
                match = dataAttr.match(regex);
                attrSuffix = match[1];
                if (match) {
                    console.log("Found data-img: " + dataAttr);
                    var amount = match[2];
                    var unit = match[3];
                    $("*").css(cssName, amount + unit);
                } else {
                    console.log("Match not working");
                }
            }
        });
    } else {
        PageImageBackup();
    }
}

export function PageOptions() {
    PageClassOptions("*", "marg", "margin");
    PageClassOptions("*", "pad", "padding");
    /* 
        Border Data Options
        ~> Border Data Name = data-bord
        Spot 1: "*" // treat as string
            will always be "*"/"*"Fill
        Spot 2: position // treat as string 
            Where the border will go
            If position is none, apply to every spot
        Spot 3: attrSuffix // treat as string
            The class suffix name
        Spot 4: cssName // treat as string
            The css function name
    */
    // Universal Border
    PageBorders("*", "none", "sz", "border-width");
    PageBorders("*", "none", "rad", "border-radius");
    PageBorders("*", "none", "clr", "border-color");
    // Top Border
    PageBorders("*", "top", "top-sz", "border-top-width");
    PageBorders("*", "top", "top-clr", "border-top-color");
    // Left Border
    PageBorders("*", "left", "lft-sz", "border-left-width");
    PageBorders("*", "left", "lft-clr", "border-left-color");
    // Bottom Border
    PageBorders("*", "bottom", "btm-sz", "border-bottom-width");
    PageBorders("*", "bottom", "btm-clr", "border-bottom-color");
    // Right Border
    PageBorders("*", "right", "rgt-sz", "border-right-width");
    PageBorders("*", "right", "rgt-clr", "border-right-color");
    /*
            Image Data Options
            ~> Image Data Name = data-img
            Spot 1: attrName // treat as string variable
                // For the change being done
                // Choices: height (hgt) and width (wid)
            Spot 2: attrSuffix // treat as string variable
                // Short for attributeSuffix
                // The suffix of what it will do
                    // Invert ~> inv
                    // Height ~> hgt
                    // Width ~> wid
            Spot 5: cssName // treat as string variable
                // The name is CSS for what we want to do
        */
    PageImageOption("*", "height", "hgt", "height");
    PageImageOption("*", "width", "wid", "width");
}