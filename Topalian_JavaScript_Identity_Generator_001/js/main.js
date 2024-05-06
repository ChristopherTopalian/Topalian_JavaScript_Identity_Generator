// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);

    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);

    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);

    return result;
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// worldVariables.js

let online = false;

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// address.js

let address = [
"Washington",
"Davis",
"Leicester"
];

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// namesFemaleFirst.js

let namesFemaleFirst =
[
    "Alison",
    "Amber",
    "Gina",
    "Jane",
    "Jennifer",
    "Joan",
    "Kate",
    "Lois",
    "Melissa",
    "Nicole",
    "Rachel",
    "Rebecca",
    "Samantha",
    "Sandra",
    "Tabitha",
    "Veronica"
];

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// namesLast.js

let namesLast =
[
    "Anderson",
    "Avery",
    "Bradley",
    "Bridges",
    "Brooks",
    "Cameron",
    "Carter",
    "Dalton",
    "Galvin",
    "Glenn",
    "Hanna",
    "Hayden",
    "Hood",
    "Jones",
    "Jordan",
    "Lane",
    "Morrow",
    "Shields",
    "Smith"
];

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// namesMaleFirst.js

let namesMaleFirst =
[
    "Brian",
    "Chris",
    "Frank",
    "Henry",
    "James",
    "Jeff",
    "John",
    "Mitch",
    "Nathan",
    "Robert",
    "Ronald",
    "Ryan",
    "Victor"
];

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// streetType.js

let streetType =
[
    "Street",
    "Road",
    "Ave"
];

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// towns.js

let towns =
[
    "Boston, Massachusetts, 02108",
    "Boston, Massachusetts, 02114",
    "Dallas, Texas, 75051",
    "Dallas, Texas, 75087",
    "Sedona, Arizona, 86339",
    "Sedona, Arizona, 86340"
];

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

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeTitleOfApp.js

function makeTitleOfApp()
{
    // titleContainer
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '10px';
    titleContainer.style.bottom = '5px';
    titleContainer.style.zIndex = 1;
    ba(titleContainer);

    //-//

    // titleOfApp
    let titleOfApp = ce('div');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.innerHTML =
    `<a href = 'https://github.com/christophertopalian/topalian_javascript_identity_generator' target = '_blank'> Topalian JavaScript Identity Generator </a>`;
    titleContainer.append(titleOfApp);
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// randomItemInArray.js

// chooses random item in specified array
function randomItemInArray(whichArray)
{
    let theNumber = Math.floor(Math.random() * whichArray.length);

    let firstName = whichArray[theNumber];

    return firstName;
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// randomNumber.js

// chooses a random number up to 1000
function randomNumber()
{
    let theNumber = Math.floor(Math.random() * 1000);

    return theNumber;
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// showIdentity.js

// shows the full name, address, town and zip code, that was generated
function showIdentity(firstNameArray, lastNameArray)
{
    ge("output").value = randomItemInArray(firstNameArray) + " " + randomItemInArray(lastNameArray) + "\n" +
    randomNumber() + " " +
    randomItemInArray(address) + " " +
    randomItemInArray(streetType) + "\n" +
    randomItemInArray(towns);
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// showNameFull.js

// shows the full name that was generated
function showNameFull(firstNameArray, lastNameArray)
{
    ge("output").value = randomItemInArray(firstNameArray) + " " + randomItemInArray(lastNameArray);
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// audioPlay.js

function audioPlay(whichId, whichVolume)
{
    let audio = ge(whichId);

    if (audio)
    {
        audio.volume = whichVolume;
        audio.play();
    }
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// loadSounds.js

function loadSounds(whichArray)
{
    for (let x = 0; x < whichArray.length; x++)
    {
        let theSound = ce('audio');

        if (online == false)
        {
            theSound.src = whichArray[x].soundFileOffline;
        }
        else
        {
            theSound.src = whichArray[x].soundFileOnline;
        }

        theSound.id = whichArray[x].name;
        theSound.loop = false;
        theSound.volume = 1.0;
        ba(theSound);
    }
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// sounds.js

let sounds =
[
    {
        name: 'sfx_blip_001',
        soundFileOffline: 'media/sounds/sfx_blip_001.mp4',
        soundFileOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/sfx_blip_001.mp4'
    },

    {
        name: 'sfx_warp_001',
        soundFileOffline: 'media/sounds/sfx_warp_001.mp3',
        soundFileOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/sfx_warp_001.mp3'
    }
];

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

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// openFile.js

function openFile()
{
    let fileInput = ge('fileInput');

    let textarea = ge('output');

    let file = fileInput.files[0];

    let reader = new FileReader();
    reader.onload = function(event)
    {
        let contents = event.target.result;
        textarea.value = contents;
    };

    reader.readAsText(file);
}

// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// whenLoaded.js

function whenLoaded()
{
    loadSounds(sounds);

    makeInterface();

    makeTitleOfApp();

    showIdentity(namesFemaleFirst, namesLast);
}

