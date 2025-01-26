import $ from "jquery";
// Rewrite Count: 3
// Code works, need to figure out how to have it only affect one modal at a time
// Will figure out how to add the backup code at a later date
export function ModalFunction() {
    if ($("*").hasClass("modal-hid")) {
        $(".modal-cnt").hide();
        $(".close").hide();
    } else if ($("*").hasClass("modal-shn")) {
        $(".modal-cnt").show();
        $(".close").show();
    } else {
        $(".modal-cnt").hide();
        $(".close").hide();
    }
    $(".modal-btn").on("click", function() {
        $(this).closest("[data-popup='modal']").find(".modal-cnt").show();
        $(this).closest("[data-popup='modal']").find(".close").show();
    });
    $(".close").on("click", function() {
        $(this).closest("[data-popup='modal']").find(".modal-cnt").hide();
        $(this).closest("[data-popup='modal']").find(".close").hide();
    });
}