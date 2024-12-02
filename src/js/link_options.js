import $ from "jquery";
export function LinkExport() {
    if ($("a").attr("data-link", "new-tab")) {
        $("a").attr("target", "_blank");
    }
}