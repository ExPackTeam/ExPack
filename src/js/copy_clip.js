import $ from "jquery";
import { CopyBackup } from "./backup";
/*
    Data-*:
    - Clip [data-clip]
        - Text [data-clip="text"]
        // data-clip="text" defines the whole area that will be added to the clipboard
        - Select [data-clip="select"]
        // data-clip="select" defined the text that will be added to the clipboard
        // Select may change to a class, if it does make it called copy-sel
    Classes:
    - Copy Button [class="copy-btn"]
    // copy-btn is what will copy the text to the clip-board
    Functions:
    - Look for the copying section [data-clip="text"]
    - Get all text in the section that is copyable [data-clip="select"]
    // If [data-clip="select"] is made into a class, it will be [class="copy-sel"]
    - When [class="copy-btn"] is clicked, the text is added to the local clip-board
*/
function GetCopy() {
    const copyArea = $(this).attr("data", "text");
    console.log("[copyArea] is " + copyArea);
}
export function CopyClip() { 
    GetCopy();
}
