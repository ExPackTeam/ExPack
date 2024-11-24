import $ from "jquery";
function PageClassOptions(type, cssName) {
    type;
    $(this).hasClass(type).each(function() {
        var typeClass = $(this).attr("class");
        var regex = new RegExp("^" + `"${type}"` + "\\d+(%|em|px)$");
        var match = typeClass.match(regex);
        if (match) {
            console.log("Found" + type + ": " + typeClass) // remove later
            var amount = match[1];
            var unit = match[2];
            if(!isNaN(amount)) {
                $(this).css(`"${cssName}"`, amount + unit);
            } else {
                var thirdChoice = `"${cssName}-"` + amount;
                amount = match[2];
                unit = match[3];
                $(this).css(thirdChoice, amount + unit);
            }
        }
    });
}
function PageBorderOption(number, color, hasPosition, position, typeName, attrSuffix, cssName) {
    /* 
        A later version will include image urls
        // border-image: url("[source url]");
    */
    /*
        number and color are to be treated as Boolean variables
        // number determins if there is a number in the data
        // color determines if there is a hex code needed 
    */
    position;
    console.log(position); // remove later
    var regex;
    var match;
    $("[data-bord]").each(function() {
        var dataOption = $(this).data("bord");
        var dataAttr = $(this).attr("data"); // Backup for if dataOption causes match to return null
        // dataAttr is short for dataAttribute
        /*
            dataOption and dataAttr are declared together to make it easier for calling them later on in this function.
            Saving a few seconds of typing this function out
        */
       if (hasPosition === false) {
            if (number == true && color == false) {
                regex = new RegExp("^" + `"${typeName}"` + "\\d+(%|em|px)$");
                match = dataOption.match(regex);
                attrSuffix = match[1]; // Attribute suffix is for the needed spot for the what is being called in the data
                /*
                    Examples are 
                    clr ~> color, sz ~> width/size, and rad ~> radius
                */
                console.log("Attribute Prexis is " + attrSuffix); // remove later
                if (match) {
                    console.log("Found data-bord: " + dataOption); // remove later
                    var amount = match[2];
                    var unit = match[3];
                    $(this).css(cssName, amount + unit);
                } else {
                    regex = new RegExp("^" + `"${typeName}"` + "\\d+(%|em|px)$");
                    match = dataAttr.match(regex);
                    attrSuffix = match[1];
                    console.log("Attribute Prexis is " + attrSuffix);
                    if (match) {
                        console.log("Found data-" + attrName + ": " + dataAttr); // remove later
                        var amount = match[2];
                        var unit = match[3];
                        $(this).css(cssName, amount + unit);
                    } else {
                        console.log("Match is broken") // comment out later
                    }
                }
            } else if (color == true && number == false) {
                regex = /^[A-Fa-f0-9]{6}$/;
                match = dataOption.match(regex);
                attrSuffix = match[1];
                console.log("Attribute Suffix is " + attrSuffix); // remove later
                if (match) {
                    var attrColor = match[2];
                    $(this).css(cssName, attrColor);
                } else {
                    match = dataAttr.match(regex);
                    if (match) {
                        var attrColor = match[2];
                        $(this).css(cssName, attrColor);
                    } else {
                        console.log("Match is broken") // comment out later
                    }
                }
            } 
        } else {
            if (number == true && color == false) {
                regex = new RegExp("^" + `"${typeName}"` + "\\d+(%|em|px)$");
                match = dataOption.match(regex);
                position = match[1];
                attrSuffix = match[2];
                console.log("Attribute Prexis is " + attrSuffix); // remove later
                if (match) {
                    console.log("Found data-" + attrName + ": " + dataOption); // remove later
                    var amount = match[3];
                    var unit = match[3];
                    $(this).css(cssName, amount + unit);
                } else {
                    regex = new RegExp("^" + `"${typeName}"` + "\\d+(%|em|px)$");
                    match = dataAttr.match(regex);
                    attrSuffix = match[3];
                    console.log("Attribute Prexis is " + attrSuffix);
                    if (match) {
                        console.log("Found data-" + attrName + ": " + dataAttr); // remove later
                        var amount = match[3];
                        var unit = match[4];
                        $(this).css(cssName, amount + unit);
                    } else {
                        console.log("Match is broken") // comment out later
                    }
                }
            } else if (color == true && number == false) {
                regex = /^[A-Fa-f0-9]{6}$/;
                match = dataOption.match(regex);
                attrSuffix = match[2];
                console.log("Attribute Suffix is " + attrSuffix); // remove later
                if (match) {
                    var attrColor = match[3];
                    $(this).css(cssName, attrColor);
                } else {
                    match = dataAttr.match(regex);
                    if (match) {
                        var attrColor = match[3];
                        $(this).css(cssName, attrColor);
                    } else {
                        console.log("Match is broken") // comment out later
                    }
                }
            } 
        }
    });
}
function PageImageOption(typeName, attrSuffix, cssName) {
    /*  
        Will add clip path, aspect ration, and transform in a later version
    */
    var regex;
    var match;
    $("[data-img]").each(function() {
        var dataOption = $(this).data("img");
        var dataAttr = $(this).attr("data");
        regex = new RegExp("^" + `"${typeName}"` + "\\d+(%|em|px)$");
        match = dataOption.match(regex);
        attrSuffix = match[1] // Short for Attribute Suffix
        console.log("Attribute Suffix is " + attrSuffix); // remove later
        if (match) {
            console.log("Found data-img: " + dataOption); // remove later
            var amount = match[2];
            var unit = match[3];
            $(this).css(cssName, amount + unit);
        } else {
            match = dataAttr.match(regex);
            attrSuffix = match[1];
            if (match) {
                console.log("Found data-img: " + dataAttr);
                var amount = match[2];
                var unit = match[3];
                $(this).css(cssName, amount + unit);
            } else {
                console.log("Match not working");
            }
        }
    });
}
export function PageOptions() {
    $(document).ready(function() {
        PageClassOptions("margin", "margin");
        PageClassOptions("pad", "padding");
        /* 
            Border Data Options
            ~> Border Data Name = data-bord
            Spot 1: number // treat as Boolean
            Spot 2: color // treat as Boolean
            Spot 3: hasPosition // treat as Boolean
            Spot 4: position // string variable 
                // if hasPosition is false, put it as "none" 
                // if hasPotion is true, put the position it is in
            Spot 5: typeName // treat as string variable 
                // if color is true, put the identifier
            Spot 6: attrSuffix // treated as string variable
                // short for attributeSuffix
                // The suffix for what the attribute is referred to as
                    // color is clr
                    // size is sz ~> Border is width
                    // radius is rad
            Spot 7: cssName // treat as string variable
                // The css name for what is being done
        */
        // Base Data Options
        PageBorderOption(false, true, false, "none", "none", "clr", "border-color");
        PageBorderOption(true, false, false, "none", "sz", "sz", "border-width");
        PageBorderOption(true, false, false, "none", "rad", "rad", "border-radius");
        /* Position Datas
            // There is no radius options in positions
        */
        // Top Positions
        PageBorderOption(false, true, true, "top", "top-clr", "border-top-color");
        PageBorderOption(true, false, true, "top", "top-sz", "border-top-width");
        // Left Positions
        PageBorderOption(false, true, true, "left", "lft-clr", "border-left-color");
        PageBorderOption(true, false, true, "left", "lft-sz", "border-left-width");
        // Right Positions
        PageBorderOption(false, true, true, "right", "rgt-clr", "border-right-color");
        PageBorderOption(true, false, true, "right", "rgt-sz", "border-right-width");
        // Bottom Positions
        PageBorderOption(false, true, true, "bottom", "btm-clr", "border-bottom-color");
        PageBorderOption(true, false ,true, "bottom", "btm-sz", "border-bottom-width");
        /*
            Image Data Options
            ~> Image Data Name = data-img
            Spot 1: typeName // treat as string variable
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
       PageImageOption("height", "hgt", "height");
       PageImageOption("width", "wid", "width");
    });
}