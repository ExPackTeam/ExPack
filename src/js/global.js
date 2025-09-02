import $ from "jquery";
import { TextFunction } from "./text_changes.js";
import { PageFunction } from "./page_options.js";
import { ModalFunction } from "./modals";
import { CopyClip } from "./copy_clip.js";

function ExpackExport() {
    $(function() {
        TextFunction();
        PageFunction();
        ModalFunction();
        CopyClip();
    });
}

export default ExpackExport; // ✅ Export the function, don't call it
