/*
Justin Yee A00983545
This is for COMP1320 Lab2
 */

const canucksRoster = ["Elias Petterson", "Brock Boeser", "Bo Horvat", "Quinn Hughes", "Alex Edler"];
const oilersRoster = ["Connor McDavid", "Leon Draisaitl", "Ryan Nugent-Hopkins", "Darnell Nurse", "Oscar Klefbom"];
let userInput = null;
userInput = "canucks";


    if(userInput.toLowerCase() == "canucks") {
        for (let i = 0; i < canucksRoster.length; i++) {
            console.log(canucksRoster[i]);
        }
    } else if(userInput.toLowerCase() == "oilers") {
        for (let i = 0; i < oilersRoster.length; i++) {
            console.log(oilersRoster[i]);
        }

    } else {
        console.log("please pick either canucks or oilers.")
    }

