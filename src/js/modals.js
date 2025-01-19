import $ from "jquery";
// Rewrite Count: 2
// Code works, need to figure out how to have it only affect one modal at a time
export function ModalFunction() {
    const modalButton = $("*").hasClass("modal-btn"); // Boolean for modal button
    console.log(`modal-btn count is ${$(".modal-btn").length}`);
    const modalContentCheck = $("*").hasClass("modal-cnt"); // Boolean for modal content
    const closeClass = $("*").hasClass("close"); // Boolean for close
    // Change all the classes with .length to $("*").hasClass("className");
    // 
    const modalAlert = $("[data-modal*='alert']").length > 0;
    console.log(`{CHECK} [modalBtn] is ${modalButton} \n [modalCnt] is ${modalContentCheck} \n [closeClass] is ${closeClass}`);
    if (modalContentCheck) {
        console.log("{STATUS} modal content is true");
        var modalSize = $("[data-popup='modal']").length;
        console.log(`{CHECK} [modalSize] is ${modalSize}`);
        console.log(`{CHECK} [modalSize] is ${modalSize}`);
        for (var i = modalSize + 1; i > modalSize; i--) {
            if (modalButton) {
                console.log("{STATUS} modalButton is still valid");
                // Add the button shifting option once the single instance is working
                $(".modal-cnt").hide();
                $(".close").hide();
                $(".modal-btn").on("click", function () {
                    console.log("{STATUS} button was clicked");
                    $(".modal-cnt").show();
                    $(".close").show();
                })
            }
        }
    }
}
