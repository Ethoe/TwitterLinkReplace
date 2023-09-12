document.addEventListener('copy', function () {
    navigator.clipboard.readText().then(text => {

        const replacedText = text.replace(/x\.com/, 'twitter.com');
        navigator.clipboard.writeText(replacedText);
    });
});