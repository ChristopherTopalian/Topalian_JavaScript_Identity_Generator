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

