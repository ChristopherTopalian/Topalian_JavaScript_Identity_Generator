// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// downloadText.js

function downloadText()
{
    let textarea = ge("output");
    let text = textarea.value;

    // extract the first line to use as the filename
    // splits the text into lines and takes the first one
    let firstLine = text.split('\n')[0];

    let filename = firstLine + ".txt";

    // create a Blob with the textarea content
    let blob = new Blob([text], { type: "text/plain" });

    // create a URL for the Blob
    let url = URL.createObjectURL(blob);

    // create a link element to trigger the download
    let link = ce("a");
    link.href = url;
    link.download = filename;

    // simulate a click event on the link to trigger the download
    // and ensure link doesn't change layout
    link.style.display = 'none';
    ba(link);
    link.click();
    document.body.removeChild(link);

    // revoke the blob URL to free up resources
    URL.revokeObjectURL(url);
}

