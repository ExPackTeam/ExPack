var modal = document.getElementsByClassName("modal");
var modalBtn = document.getElementsByClassName("modal-btn");
var closeClick = document.getElementsByClassName("close");
modalBtn.onClick = function() {
	modal.style.display = block;
}
closeClick.onClick = function() {
	element.style.display = none;
}
window.onClick = function(event) {
	if (event.target == modal) {
		modal.style.display = none;
	}
}