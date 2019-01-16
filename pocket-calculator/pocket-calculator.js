var executed = false;
var expressionArray= [];
var decimalStatus = false;
var piStatus = false;


function insert(num){
 if(executed == false){
 document.calculator.display.value = "";
 executed = true;
}

 expressionArray.push(num)
 console.log(expressionArray.join(''))
 if (num === ".") {
     if (!document.calculator.display.value.includes(".")) {
       document.calculator.display.value = document.calculator.display.value + num;
     }
 } else {
   document.calculator.display.value = document.calculator.display.value + num;
 }

 if(Number(document.calculator.display.value.length <= 10)){
   document.calculator.display.value = document.calculator.display.value;
 }else{
   document.getElementById("zero_button").disabled = true;
   document.getElementById("button1").disabled = true;
   document.getElementById("button2").disabled = true;
   document.getElementById("button3").disabled = true;
   document.getElementById("button4").disabled = true;
   document.getElementById("button5").disabled = true;
   document.getElementById("button6").disabled = true;
   document.getElementById("button7").disabled = true;
   document.getElementById("button8").disabled = true;
   document.getElementById("button9").disabled = true;
 }

 console.log(document.calculator.display.value.split(",").join(""));
console.log(document.calculator.display.value);
let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
document.calculator.display.value = commaInput;
}
function clean(){
 document.calculator.display.value = 0;
 executed = false;
 decimalStatus = false;
 piStatus = false;
   expressionArray = [];
   document.getElementById("zero_button").disabled = false;
   document.getElementById("button1").disabled = false;
   document.getElementById("button2").disabled = false;
   document.getElementById("button3").disabled = false;
   document.getElementById("button4").disabled = false;
   document.getElementById("button5").disabled = false;
   document.getElementById("button6").disabled = false;
   document.getElementById("button7").disabled = false;
   document.getElementById("button8").disabled = false;
   document.getElementById("button9").disabled = false;
   document.getElementById("pi_Button").disabled = false;
}
function clearOnOp(){
 document.calculator.display.value = 0;
 executed = false;
 decimalStatus = false;
 piStatus = false;
 document.getElementById("zero_button").disabled = false;
 document.getElementById("button1").disabled = false;
 document.getElementById("button2").disabled = false;
 document.getElementById("button3").disabled = false;
 document.getElementById("button4").disabled = false;
 document.getElementById("button5").disabled = false;
 document.getElementById("button6").disabled = false;
 document.getElementById("button7").disabled = false;
 document.getElementById("button8").disabled = false;
 document.getElementById("button9").disabled = false;
 document.getElementById("pi_Button").disabled = false;
}
function equal(){
 piStatus = false;
 document.getElementById("zero_button").disabled = true;
 document.getElementById("button1").disabled = true;
 document.getElementById("button2").disabled = true;
 document.getElementById("button3").disabled = true;
 document.getElementById("button4").disabled = true;
 document.getElementById("button5").disabled = true;
 document.getElementById("button6").disabled = true;
 document.getElementById("button7").disabled = true;
 document.getElementById("button8").disabled = true;
 document.getElementById("button9").disabled = true;
 document.getElementById("pi_Button").disabled = true;
 let calcAnswer= eval(expressionArray.join(''));
   expressionArray = [];
   expressionArray = [calcAnswer];
 if(calcAnswer > 999999999){
   document.calculator.display.value = calcAnswer.toExponential(9);
 }else{
   document.calculator.display.value=calcAnswer.toLocaleString("en");
 }

 if(document.calculator.display.value === "Infinity" || document.calculator.display.value === "∞") {
   document.calculator.display.value = "ERROR";
 }
}
function negation(){
   document.calculator.display.value=document.calculator.display.value*-1;
   expressionArray[expressionArray.length -1 ]= expressionArray[expressionArray.length -1] * -1;
   console.log(expressionArray);
}

function percentage(){
 document.calculator.display.value=document.calculator.display.value/100;
 expressionArray[expressionArray.length -1 ]= expressionArray[expressionArray.length -1] /100;
}

function decimalInsert(num){
 if(decimalStatus == false){
   document.calculator.display.value = document.calculator.display.value + num;
   expressionArray.push(num);
   console.log(expressionArray);
   decimalStatus = true;
 }
}
function piInsert(num){
 if(piStatus == false){
   document.calculator.display.value = '';
   document.calculator.display.value = document.calculator.display.value + num;
   expressionArray.push(num);
   console.log(expressionArray);
   piStatus = true;
 }
}




// var evaluateArr = ['','','']; var finalNum = true; var finalSymbol = false; var lastEql = false; currentNum = 0; var nonLoc = []; var currentNum = 0; var numbersX = 0; firstSymbol = false;
// var numDecimals = ".";
//
// function insert(num){
//   if(numbersX < 9){
//   if (lastEql){
//     clean(); lastEql = false; currentNum = 0;
//     }
//   }
//   if (finalNum){
//     let outputNum = Number(nonLoc.join('')).toLocaleString();
//     document.calculator.display.value = (document.calculator.display.value + num);
//     finalSymbol = true; numbersX++;
//   } else {
//     nonLoc.push(num);
//     let outputNum = Number(nonLoc.join('')).toLocaleString();
//     document.calculator.display.value = (outputNum);
//     finalSymbol = true; finalNum = true; numbersX++;
//   }
//
// evaluateArr[currentNum] = evaluateArr[currentNum] + num;
//
//     if(Number(document.calculator.display.value.length) > 11){
//     document.calculator.display.value = "Too many digits";
//     }
// }
//
// function parseDecimal(num){
//   if(finalSymbol){
//     if(finalNum){
//       nonLoc.push('.');
//       let outputNum = Number(nonLoc.join('')).toLocaleString();
//       document.calculator.display.value = outputNum;
//       finalSymbol = true; numbersX++;
//
//     } else {
//   nonLoc.push();
//   let outputNum = Number(nonLoc.join('')).toLocaleString();
//   document.calculator.display.value = (outputNum);
//   finalSymbol = true; finalNum = true; numbersX++;
//   }
//  }
// }
//
// function parseSymbol(sym){
//   if (finalSymbol){
//     if(firstSymbol){
//     document.calculator.display.value = (sym); nonLoc = []; numbersX = 0;
//     finalSymbol = false; finalNum = false; lastEql = false; evaluateArr[1] = evaluateArr[1] + sym; currentNum++; firstSymbol = true;
//   } else if (firstSymbol === false){
//     equal();
//     console.log(evaluateArr);
//     document.calculator.display.value = (sym); nonLoc = []; numbersX = 0;
//     finalSymbol = false; finalNum = false; lastEql = false; evaluateArr[1] = evaluateArr[1] + sym; currentNum++; firstSymbol = false;
//     }
//   }
// }
//
// function equal(){
//   let evaluateStr = eval(evaluateArr.join(''));
//   if (evaluateStr > 999999999){
//   evaluateStr = evaluateStr.toExponential(9)
// }
// document.calculator.display.value = evaluateStr.toLocaleString();
// evaluateArr = ['','','']; evaluateArr[0] = evaluateArr[0] + eval(evaluateStr); currentNum = 1; evaluateStr = ''; finalNum = false; lastEql = true;
//
// if (document.calculator.display.value === "Infinity"){
//   document.calculator.display.value = "ERROR";
//   }
// }
//
// function negation(){
//   document.calculator.display.value = (document.calculator.display.value * -1).toLocaleString();
// console.log(currentNum)
// evaluateArr[currentNum] = (evaluateArr[currentNum] * -1);
// }
//
// function percentage(){
//   if(finalSymbol){
//     document.calculator.display.value = document.calculator.display.value/100;
//     evaluateArr[currentNum] = evaluateArr[currentNum] / 100;
//   }
// }
//
// function clean(){
//   document.calculator.display.value = 0;
//   evaluateArr = ['','','']; finalNum = true; finalSymbol = false; currentNum = 0; nonLoc = []; numbersX = 0;
// }




// var evaluateStr = ""
// var prevStr = ""
// var ops = []


// function insert(num){
//   document.calculator.display.value = document.calculator.display.value + num;
//   // document.calculator.display.value = " "
//   // prevStr = num
//   // evaluateStr = evaluateStr + num;
//
//   if(document.calculator.display.value.length > 12){
//       document.calculator.display.value = "Too many digits";
//   }
//
// }
//
//
//
// function equal(){
//   let exp = document.calculator.display.value;
//   if (exp){
//     document.calculator.display.value = eval(exp).toLocaleString("en");
//   }
//
//   if(document.calculator.display.value === "Infinity") {
//     document.calculator.display.value = "Error";
//   }
//   if(document.calculator.display.value === "undefined") {
//     document.calculator.display.value = "Error";
//   }
//   if(document.calculator.display.value === "NaN") {
//     document.calculator.display.value = "Error";
// }
// }
//
// function clean(){
//   document.calculator.display.value = "";
// }
//
//
// function percentage(){
//   document.calculator.display.value = document.calculator.display.value/100;
// }
//
// function negation(){
// document.calculator.display.value = document.calculator.display.value * -1;
// }
