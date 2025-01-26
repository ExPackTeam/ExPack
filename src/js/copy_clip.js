import $ from "jquery";
import { CopyBackup } from "./backup";
// Rewrite Count: 3
// Completed with the making this work to copy the text in the variable
// Figure out how to remove the spaces in the copy
export function CopyClip() {
    const dataClip = $("*").find("[data-clip]");
    // check for dataClip
    if (dataClip) {
        const dataText = $("*").find("[data-clip='text']").text().trim().replace(/\s+/g, ' ');
        // check for dataText
        $("[data-clip='button']").on("click", function () {
            if ($("*").attr("data-clip") === "alert") {
                alert(`Copied: ${dataText}`);
            }
            navigator.clipboard.writeText(dataText);
            $("[data-clip='text']").trigger("copy");
        });
    }
}
