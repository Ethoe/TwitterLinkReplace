chrome.scripting.onCopy.addListener(function (info) {
    // Check if the copied text is a Twitter link
    if (info.selectionText && info.selectionText.startsWith("https://x.com/")) {
        // Modify the URL
        const modifiedLink = info.selectionText.replace(
            "https://x.com/",
            "https://twitter.com/"
        );

        // Write the modified link to the clipboard
        navigator.clipboard.writeText(modifiedLink);
    }
});
