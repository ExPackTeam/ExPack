import $ from "jquery";
export function LinkExport() {
    if ($("a").attr("data-link", "newtb")) {
        $("a").attr("target", "_blank");
    } else if ($("a").attr("data-link", "parnt")) {
        $("a").attr("target", "_parent");
    } else if ($("a").attr("data-link"))
    if ($("a").attr("data-link", "dowld")) {
        $("a").attr("download");
    }
}