import $ from "jquery";
import { TextFunction } from "./text_changes.js";
import { CopyClip } from "./copy_clip.js";
import { ModalFunction } from "./modals";
import { LoginOption } from "./login.js";
import { UnicodeFunction } from "./unicode_character.js";
import { PageOptions } from "./page_options.js";
function ExpackExport() {
    $(document).ready(function() {
        CopyClip();
        ModalFunction();
        LoginOption();
        UnicodeFunction();
        PageOptions();
        TextFunction();
        /*
            Will be removed later
            const closingClass = document.querySelectorAll("[class*='close']");
            closingClass.forEach(element => {
                element.innerHTML = "&times;";
                element.addEventListener("click", function(){
                    element.style.visibility = "hidden";
                });
            });
        */
    });
}
export default ExpackExport();