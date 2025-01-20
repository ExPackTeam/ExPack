import $ from "jquery";
import { CopyBackup } from "./backup";
/*
    Data-*:
    - Clip [data-clip]
        - Text [data-clip="text"]
        // data-clip="text" defines the whole area that will be added to the clipboard
    Classes:
    - Copy Button [class="copy-btn"]
    // copy-btn is what will copy the text to the clip-board
    - Copy Sel [class="copy-sel"]
    Functions:
    - Look for the copying section [data-clip="text"]
    - Get all text in the section that is copyable [class="copy-sel"]
    // If [data-clip="select"] is made into a class, it will be [class="copy-sel"]
    - When [class="copy-btn"] is clicked, the text is added to the local clip-board
*/
export function CopyClip() { 
    if ($("*").attr("data-clip", "text")) {
    }
    console.log(`{CHECK} [clipText] is ${clipText}`);
}
