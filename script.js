// 1st task
let input;
let sentence;
do
{
    input = window.prompt(" 1. \u25ba Reverse\n 2. \u25ba Anagram\n 3. \u25ba Capitalize\n 4. \u25ba Reverse Words\n \u25ba END");
    if(input!== null) input=input.toLowerCase();
    switch(input){
        case "1":
            sentence = prompt("Enter sentence you want to reverse: ");
            if(sentence !== null ) {
                alert("Reversed sentence: " + ReverseWholeSentence(sentence));
            }
            break;
        case "2":
            sentence=prompt("Enter sentence you want to anagram: ");
            if(sentence!==null){
                let message="";
                let result = CountLetters(sentence);
                result.forEach(function(element){
                    message += "Letter: " + element.letter + "- " + element.count + "times\n";
                });
                alert(message);
            }
            break;
        case "3":
            sentence=prompt("Enter sentence you want to capitalize: ");
            if(sentence!==  null){
                alert("Capitalized input: " + Capitalize(sentence));
            }
            break;
        case "4":
            sentence = prompt("Enter sentece for reversing words: ");
            if(sentence !== null){
                alert("Reversed input: " + ReverseWords(sentence));
            }
            break;
        case "end":
            if (confirm("Do you want to quit?")) input = null;
            break;
        case null:
            break;
        default:
            alert("Wrong input!");
            break;
    }

} while( input !== null);

function Quit(){
    let choice = confirm("Do you want to quit?");
    return choice;
}
function ReverseWholeSentence(inputToReverse){
    let reversed='';
    for(let i=inputToReverse.length-1; i>-1;  i--){
        reversed+=inputToReverse.charAt(i).toLowerCase();
    }
    return reversed;
}

function CountLetters(inputToCount){
    let counts={};
    let maxKey=0;
    let myArrayOfLetters=[];
    let key;
    for(let i=0; i< inputToCount.length; i++) {
        key= inputToCount[i];
        if(!counts[key]){
            counts[key] = 0;
        }
        counts[key]++;
        if(maxKey === 0 || counts[key]> counts[maxKey])
        {
            maxKey=key;
        }
    }
    maxKey=counts[maxKey];
    for(let property in counts){
        if( counts[property] === maxKey){
            let newObj = { "letter":property,"count":maxKey}
            myArrayOfLetters.push(newObj);
        }
    };
    return myArrayOfLetters;    
}

function Capitalize(inputToCapitalize){ 
    let splittedString = inputToCapitalize.toLowerCase().split(' ');
    let newString= ' ';
    splittedString.forEach(function(element){
        newString += element.charAt(0).toUpperCase() + element.substring(1) + " ";
    });
    return newString;
}

function ReverseWords(inputToReverse){
    let splittedInput = inputToReverse.split(' ');
    let reversed= ' ';
    splittedInput.forEach(function(element){
        reversed += ReverseWholeSentence(element) + " ";
    });
    return reversed;
}

//2nd task
let array = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male"
    },
    {
        name: "C-3PO",
        height: 167,
        mass: 75,
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a"
    },
    {
        name: "R2-D2",
        height: 96,
        mass: 32,
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a"
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male"
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female"
    }];

let sortedArray = Compare();
console.log("Sorted: ",sortedArray);
console.log("Avg height: " , AverageHeight());

function Compare(){
return(array.sort((a, b) => a.height > b.height ? 1 : -1));
}

function AverageHeight(){
    let sum=0;
    for(let i=0; i<array.length; i++){
        sum+=array[i].height;
    }
    return sum/array.length;
}
