export function copyClip() {
    var copyText = document.querySelectorAll("[class^='copy-text']");
    var copyButtons = document.querySelectorAll("[class^='copy-button']");

    copyButtons.forEach((button, index) => {
        button.onclick = function() {
            if (copyText[index] instanceof HTMLElement) {
                const textElement = copyText[index];

                // Check if the textElement is an input or textarea
                if (textElement instanceof HTMLInputElement || textElement instanceof HTMLTextAreaElement) {
                    textElement.focus();
                    textElement.select();
                    navigator.clipboard.writeText(textElement.value)
                        .then(() => {
                            //alert("Copied Text: " + textElement.value);
                        })
                        .catch(err => {
                            console.error('Failed to copy: ', err);
                        });
                } else {
                    // For other types of elements, use textContent or innerText
                    const textToCopy = textElement.textContent || textElement.innerText;
                    navigator.clipboard.writeText(textToCopy)
                        .then(() => {
                            //alert("Copied Text: " + textToCopy);
                        })
                        .catch(err => {
                            console.error('Failed to copy: ', err);
                        });
                }
            } else {
                console.error("Not a valid HTML element: ", copyText[index]);
            }
        };
    });
}
