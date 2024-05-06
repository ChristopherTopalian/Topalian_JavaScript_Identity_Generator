// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let hrTop = ce('hr');
    mainDiv.append(hrTop);

    //-//

    let femaleNameButton = ce('button');
    femaleNameButton.textContent = 'Female';
    femaleNameButton.id = 'femaleNameButton';
    femaleNameButton.className = 'buttonStyle001';
    femaleNameButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        showNameFull(namesFemaleFirst, namesLast);
    };
    femaleNameButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    mainDiv.append(femaleNameButton);

    //-//

    let maleNameButton = ce('button');
    maleNameButton.textContent = 'Male';
    maleNameButton.id = 'maleNameButton';
    maleNameButton.className = 'buttonStyle001';
    maleNameButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        showNameFull(namesMaleFirst, namesLast);
    };
    maleNameButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    mainDiv.append(maleNameButton);

    //-//

    let femaleIdentityButton = ce('button');
    femaleIdentityButton.textContent = 'Female Identity';
    femaleIdentityButton.id = 'femaleIdentityButton';
    femaleIdentityButton.className = 'buttonStyle001';
    femaleIdentityButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        showIdentity(namesFemaleFirst, namesLast);
    };
    femaleIdentityButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    mainDiv.append(femaleIdentityButton);

    //-//

    let maleIdentityButton = ce('button');
    maleIdentityButton.textContent = 'Male Identity';
    maleIdentityButton.id = 'maleIdentityButton';
    maleIdentityButton.className = 'buttonStyle001';
    maleIdentityButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        showIdentity(namesMaleFirst, namesLast);
    };
    maleIdentityButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    mainDiv.append(maleIdentityButton);

    //-//

    let output = ce('textarea');
    output.id = 'output';
    output.className = 'output';
    mainDiv.append(output);

    //-//

    let fileInputButton = ce('input');
    fileInputButton.textContent = 'fileInput';
    fileInputButton.type = 'file';
    fileInputButton.id = 'fileInput';
    fileInputButton.className = 'buttonStyle001';
    fileInputButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    fileInputButton.oninput = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        openFile();
    };
    fileInputButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
    };
    mainDiv.append(fileInputButton);

    //-//

    let copyButton = ce('button');
    copyButton.textContent = 'Copy';
    copyButton.id = 'copyButton';
    copyButton.className = 'buttonStyle001';
    copyButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    }
    copyButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        copyText();
    };
    mainDiv.append(copyButton);

    //-//

    let downloadButton = ce('button');
    downloadButton.innerHTML = 'Download';
    downloadButton.id = 'downloadButton';
    downloadButton.className = 'buttonStyle001';
    downloadButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    downloadButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        downloadText();
    };
    mainDiv.append(downloadButton);
}

