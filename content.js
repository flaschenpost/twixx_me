document.addEventListener('copy', function(e) {
  console.log("content.js");console.log(e.clipboardData.getData('text/plain'));
    navigator.clipboard.readText().then(text => {
      console.log("content.js: readText = " + text);
      if (text.includes('https://x.com')) {
        var newClipboardText = text.replace('https://x.com', 'https://twitter.com');
        navigator.clipboard.writeText(newClipboardText);
      }
    });
});
