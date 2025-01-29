import $ from "jquery";
import { TextFunction } from "./text_changes.js";
import { PageFunction } from "./page_options.js";
import { ModalFunction } from "./modals"; // Modals are causing PageFunction to break, reason unknown
import { CopyClip } from "./copy_clip.js";
function ExpackExport() {
    $(function() {
        TextFunction();
        PageFunction();
        LinkExport();
        ModalFunction();
        CopyClip();
    });
}
export default ExpackExport();