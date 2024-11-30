import $ from "jquery";
import { CopyBackup } from "./backup";
/*
    Code is taken from ChatGPT
    Modifying to be more useful
*/
function ToClip(selector) {
    var text = $(selector).text();
    navigator.clipboard.writeText(text).then(function() {
        console.log("Copies " + text);
    }).cache(function() {
        console.error("failed to copy text");
    });
}
function GetCopy() {
    var copyText = $(this).hasClass("copy-text"); // if the $(this) fails, change to "*"
    var copyButton = $("button").hasClass("copy-button");
    let backUp = copyText == undefined ? true : false;
    let backUpTwice = copyButton == undefined ? true : false;
    if (backUp == false && backUpTwice == false) {
        if (copyText) {
            console.log("Copy Text is " + copyText + "\nCopy Button is " + copyButton);
            $(copyText).each(function() {
                var textCopied = $(this).text();
                if (copyButton) {
                    $(copyButton).on("click", function(index) {
                        console.log("clicked"); // remove later
                        ToClip(textCopied);
                    });
                }
            });
        }
    } else {
        CopyBackup();
        if (backUp == true) {
            if (backUpTwice == true) {
                console.error("[copyText] and [copyButton] are undefined");
            } else {
                console.error("[copyText] is undefined");
            }
        } else {
            console.error("[copyButton] is undefined");
        }
    }
}
export function CopyClip() { 
    GetCopy();
}
