import $ from "jquery";
// Rewrite Count: 1
// Code works, need to figure out how to have it only affect one modal at a time
export function ModalFunction() {
    const classLook = $("body").find("[data-popup='modal']").each(function () {
        const closeButtonCheck = $(".close").length > 0;
        const modalButtonCheck = $(".modal-btn").length > 0;
        const modalContentCheck = $(".modal-cnt").length > 0;
        const modalAlertCheck = $("[data-modal='type-alert']").length > 0;
        console.log(`{CHECK} [modalButtonCheck] is ${modalButtonCheck} with type of ${typeof modalButtonCheck} \n[closeCheck] is ${closeButtonCheck} with type of ${typeof closeButtonCheck} \n[modal-ctn] is ${modalContentCheck} with type of ${typeof modalContentCheck} \n[modalAlertCheck] is ${modalAlertCheck} with type of ${typeof modalAlertCheck}`);
        var modalContent = $(".modal-cnt").html();
        console.log(`{CHECK} [modalContent] is ${modalContent}`);
        if (modalButtonCheck) {
            $(".modal-ctn").hide();
            console.log("{STATUS} [modalContent] hidden");
            $(".close").hide();
            console.log("{STATUS} [closeButton] hidden");
        } else {
            $(".modal-ctn").show();
            console.log("{STATUS} [modalContent] shown");
            $(".close").show();
            console.log("{STATUS} [closeButton] shown");
        }
        if (modalAlertCheck) {
            $(".modal-ctn").show();
            $(".close").hide();
            alert(modalContent);
        }
        /*
            # Attempts
            - $(this).closest(CLASS)
            ~> Result: fail
            - const targetModal = $(this).data('modal'); +  $(`${targetModal} CLASS`).show()
            ~> Result: failed
            - $(event.target).children()
            ~> Result: failed
            // Doing $("[data-popup='modal']").children() results in both modals being affected
        */
       console.log(`{CHECK} children of data-popup='modal' is ${$("[data-popup='modal']").children()}`);
        $(".modal-btn").on("click", function () {
            var modalCount = 0;
            $("[data-popup='modal']").each(function() {
                modalCount += 1;
            });
            if (modalCount <= 1) {
                
            }
        });
        $(".close").on("click", function () {
            $(event.target).children().hide();
        });
    });
    return classLook;
}
