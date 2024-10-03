export function copyClip() {
    var copyText = document.querySelectorAll("[class^='copy-text'");
    copyText.forEach(elements => {
        elements.focus();
        elements.select();
        elements.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(elements.value);
        alert("Copied Text: " + elements.value);
    })
}