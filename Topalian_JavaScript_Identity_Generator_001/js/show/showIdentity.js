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

