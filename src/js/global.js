import $ from "jquery";
import { TextFunction } from "./text_changes.js";
import { PageFunction } from "./page_options.js";
import { LinkExport } from "./link_options.js";
import { ModalFunction } from "./modals"; // Modals are causing PageFunction to break, reason unknown
function ExpackExport() {
    $(function() {
        TextFunction();
        PageFunction();
        LinkExport();
        ModalFunction();
    });
}
export default ExpackExport();