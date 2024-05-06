// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// copyText.js

function copyText()
{
    let textarea = ge("output");

    // select the text inside the textarea
    textarea.select();

    // copy the selected text to clipboard
    let theText = document.execCommand("copy");

    alert("Text has been copied to clipboard.\n\n" + textarea.value);
}

