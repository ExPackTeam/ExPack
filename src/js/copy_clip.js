export function copyClip() {
    const copyText = document.querySelectorAll("[class*='copy-text']");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied Text: " + copyText.value());
}