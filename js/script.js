/*
Eric Pfister
February 17th, 2015
SDI 1502
Section 01
Conditionals Assignment

*/

var element;        //user input of name of element
var atomicNumber;   //user input atomic number
var atomicWeight;   //user input atomic weight
var numProtons;     //calculated number of protons
var numNeutrons;    //calculated number of neutrons
var numElectrons;   //calculated number of electrons
var information = "That is not an element known to science.";
var numQuarks;      //calculated number of quarks



//State the objective of the script and prompt for each user input value
console.log("This script will investigate some properties of an element found in the periodic table.");                 //inform user of intention
element = prompt("Please enter the element you wish to investigate: ");                                                 //prompt for element selected
(element == "") ? element = prompt("You didn't enter anything. Please enter the element you wish to investigate: ", "Oxygen"): console.log("You have selected " +(element) + ".");                          //validate element variable or display selected element
atomicNumber = prompt("Please enter the Atomic Number (rounded mass number) of the element you wish to investigate: "); //prompt for element's atomic number
(atomicNumber == "") ? atomicNumber = prompt("You didn't enter anything. Please enter the Atomic Number (rounded mass number) of the element you wish to investigate: ", "8"): console.log("You have selected " +(atomicNumber) + ".");  //validate atomicNumber or display selected atomic number
atomicWeight = prompt("Please enter the atomic weight of the element you wish to investigate: ");                       //prompt for atomic weight
(atomicWeight == "") ? atomicWeight = prompt("You didn't enter anything. Please enter the atomic weight of the element you wish to investigate: ", "16"): console.log("You have selected " +(atomicWeight) + ".");    //validate atomicWeight or display atomic weight

numProtons = atomicNumber;                      //calculate number of Protons
numNeutrons = atomicWeight - atomicNumber;      //calculate number of Neutrons
numElectrons = atomicWeight - numProtons;       //calculate number of electrons
numQuarks = (numProtons + numNeutrons) * (3);   //calculate number of quarks

//Display the following concatenated statements detailing the user's inputs and some basic information
console.log("You have selected the element, " + (element) + ", which has the atomic number " + (atomicNumber) + " and atomic weight " + (atomicWeight) + ".");
console.log("Within the nucleus of " + (element) + " atoms, there are " + (numProtons) + " protons, " + (numNeutrons) + " neutrons, " + (numElectrons) + " electrons.");
console.log("Making up protons and neutrons, Quarks are smaller particles that determine the spin or polarity of the larger particles. \nWithin " + (element) + " atoms, there are " + (numQuarks) + " quarks, three in each proton or neutron.");


/*
Without a database or array containing the entire periodic table, I wanted to make some kind of information display to
give the impression of smarter software. This also satisfied the use of various operators and other assignment
conditions (assuming I have understood the expectations detailed in the rubric).
 */

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
                            information = ("Post-Transition Metals are used to make displays, Pepto-Bismol, and are some of the most common metals in the Earth's crust.");
                        } else {
                            if ((atomicNumber >= 6 && atomicNumber <= 8)||(atomicNumber = 15)||(atomicNumber = 16)||(atomicNumber = 34)) {
                                //determine if the element is a nonmetal
                                information = ("Like Hydrogen, Nonmetals are mostly gases, and include the building blocks of life on Earth.");
                            } else {
                                if ((atomicNumber == 9)||(atomicNumber == 17)||(atomicNumber == 35)||(atomicNumber == 53)||(atomicNumber == 85)||(atomicNumber == 117)) {
                                    //determine if the element is a halogen
                                    information = ("Toxic and nonmetallic, these elements are used as disinfectants and form acids when bonded to Hydrogen.");
                                } else {
                                    if ((atomicNumber = 2)||(atomicNumber = 10)||(atomicNumber = 18)||(atomicNumber = 36)||(atomicNumber = 54)||(atomicNumber = 86)||(atomicNumber = 118)) {
                                        //determine if the element is a noble gas
                                        information = ("The Noble Gases are inert, meaning they are not reactive, and they rarely combine with other elements.")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}

console.log(information);   //Display the results of the information variable determined via the above conditional



/*
Here are some elements to try, in order to test the script functionality...

Element         Atomic Number           Atomic Weight(input the Mass Number, not the Atomic Weight = rounded Atomic Weight)
Hydrogen            1                       1
Sodium              11                      23
Calcium             20                      40
Copper              29                      64
Aluminum            13                      27
Sulfur              16                      32
Krypton             36                      84
Neodymium           60                      144
Uranium             92                      238

These elements will return results from "information" from each of the nested conditionals

 */






