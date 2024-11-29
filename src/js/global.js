import $ from "jquery";
import { TextFunction } from "./text_changes.js";
// import { PageOptions } from "./page_options.js";
// import { UnicodeFunction } from "./unicode_character.js";
// import { ModalFunction } from "./modals";
// import { CopyClip } from "./copy_clip.js";
// import { LoginOption } from "./login.js";
function ExpackExport() {
    $(function() {
        TextFunction();
        // PageOptions();
        // CopyClip();
        // ModalFunction();
        // LoginOption();
        // UnicodeFunction();
    });
}
export default ExpackExport();