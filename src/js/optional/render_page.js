import $ from "jquery";
/*
    This is an optional file and uses it's own thing.
    It is recommended to just copy this to your file. 
    <script src="https://cdn.jsdelivr.net/expack_library@0.0.7/dist/js/render_page.min.js">
*/

document.addEventListener("DOMContentLoaded", () => {
    const linkedFile = $("a.render-link").attr("href");
    
    if (linkedFile) {
        // Create an iframe to load the linked file
        const iframe = document.createElement("iframe");
        iframe.style.width = "auto";
        iframe.style.height = "auto"; // Adjust height as needed
        iframe.src = linkedFile;
        fetch(linkedFile)
        .then(response => response.text())
        .then(html => {
            iframe.srcdoc = html;
        })
        .catch(error => {
            console.error("Error loading linked file:", error);
        });
        // Insert the iframe after the <a> element
        $("a.render-link").after(iframe);
    } else {
        console.error("No linked file found.");
    }
});

