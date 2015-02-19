/*
Eric Pfister
February 17th, 2015
SDI 1502
Section 01
Conditionals Assignment

*/

//requirements:
//2 different mathmatical operators (+-/*)
//2 different conditionals (one must contain else statement)
//at least one ternary
//at least one logical operator (&&, ||, or !)
//at least three user inputs used in calculations
//all prompts must be validated
//flowchart

var element;
var atomicNumber;
var atomicWeight;
var numProtons;
var numNeutrons;
var numElectrons;
var massNumber;
var information;

//massNumber = rounded atomicWeight = numProtons + numNeutrons
//atomicNumber = numProtons = numElectrons
//

if (atomicNumber = "1") {   //This conditional will load an informational quote into the variable information
    information = ("The most abundant chemical in the universe, Hydrogen has only one proton and neutron.");
    //If the atomic number is one, it is hydrogen and the above quote is set as the value for information
} else {
    if (atomicNumber == "3"||atomicNumber == "11"||atomicNumber == "19"||atomicNumber == "37"||atomicNumber == "55"||atomicNumber == "87") {
        //Determine if the element is a Alkali Metal
        information = ("Alkali Metals are among the most reactive metals. They produce a strong reaction to water, and can even explode upon contact!");
    }
}

//ternary operators:
//(condition) ? do if true : do if false;






