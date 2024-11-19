import $ from "jquery";
export function ModalFunction() {
  const modal = $("*").attr("data-popup");
  var hiddenContent = $(modalContent).hide();
  var shownContent = $(modalContent).show();
  console.log(modal);
  if (modal === "modal") {
    var modalContent = $("*").attr("data-modal");
  }
  var modalBtn = $("button").hasClass("modal-btn");
  var modalBtnCall = $("*").hasClass("modal-btn");
  console.log(modalBtn);
  var closeClick = $("*").hasClass("close");
  if (modalBtnCall == "undefined") {
    shownContent;
  } else {
    hiddenContent;
    modalBtn.onclick = function() {
      shownContent;
      console.log(shownContent);
    }
  }
  closeClick.onclick = function() {
    hiddenContent;
    console.log(hiddenContent);
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      hiddenContent;
      console.log(hiddenContent);
    }
  }
}