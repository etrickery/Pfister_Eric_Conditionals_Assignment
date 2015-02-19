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
var information = "That is not an element known to science.";

//massNumber = rounded atomicWeight = numProtons + numNeutrons
//atomicNumber = numProtons = numElectrons

console.log("This script will investigate some properties of an element found in the periodic table.");
element = prompt("Please enter the element you wish to investigate: ", "Oxygen");
atomicNumber = prompt("Please enter the Atomic Number (rounded mass number) of the element you wish to investigate: ", 8);
atomicWeight = prompt("Please enter the atomic weight of the element you wish to investigate: ", 16)

numProtons = atomicNumber;
numNeutrons = atomicWeight - atomicNumber;
numElectrons = atomicWeight - numProtons;

if (atomicNumber == 1) {   //This conditional will load an informational quote into the variable information
    information = ("The most abundant chemical in the universe, Hydrogen has only one proton and neutron.");
    //If the atomic number is one, it is hydrogen and the above quote is set as the value for information
} else {
    if (atomicNumber == 3||atomicNumber == 11||atomicNumber == 19||atomicNumber == 37||atomicNumber == 55||atomicNumber == 87) {
        //Determine if the element is an Alkali Metal
        information = ("Alkali Metals are among the most reactive metals. They produce a strong reaction to water, and can even explode upon contact!");
    } else {
        if (atomicNumber == 4||atomicNumber == 12||atomicNumber == 20||atomicNumber == 38||atomicNumber == 56||atomicNumber == 88) {
            //Determine if the element is an Alkaline Earth Metal
            information = ("Since 2007, scientists have been attempting to synthesize element 120, the next Alkaline Earth Metal (a group of elements that are somewhat reactive).")
        } else {
            if (atomicNumber >= 57 && atomicNumber <= 71) {
                //Determine if the element is a Lanthanide
                information = ("Lanthanides are used in the production of glass, magnets and other important materials.");
            } else {
                if (atomicNumber >= 89 && atomicNumber <= 103) {
                    //determine if the element is a actinide
                    information = ("Actinides are all radioactive and the heavier elements are extremely unstable and do not occur in nature.");
                } else {
                    if ((atomicNumber >= 21 && atomicNumber <= 30)||(atomicNumber >= 39 && atomicNumber <= 48)||(atomicNumber >= 72 && atomicNumber <= 80)||(atomicNumber >= 104 && atomicNumber <= 112)) {
                        //determine if the element is a transition metal
                        information = ("Transitional Metals can be disolved into water to form aqueous solutions. The element can be recovered by allowing the water to evaporate.");
                    } else {
                        if ((atomicNumber == 13)||(atomicNumber == 31)||(atomicNumber == 49)||(atomicNumber == 50)||(atomicNumber >= 81 && atomicNumber <= 83)||(atomicNumber >= 113 && atomicNumber <= 116)) {
                            //determine if the element is a post-transition metal
                            information = ("")
                        }
                    }
                }
            }
        }
    }

}

console.log(information);

//ternary operators:
//(condition) ? do if true : do if false;






