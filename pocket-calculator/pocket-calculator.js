var evaluateStr = '';
var lastNum = true; var lastSym = false; var lastEql = false;

function insert(num){
  if (lastEql){
    clean(); lastEql = false;
  }
  if (lastNum){
    document.calculator.display.value = (document.calculator.display.value + num);
    lastSym = true;
  } else {
    document.calculator.display.value = (num);
    lastSym = true; lastNum = true;
  }
    evaluateStr = evaluateStr + num;

    if(Number(document.calculator.display.value.length) > 11){
    document.calculator.display.value = "Too many digits";
    }
}
function parseSym(sym){
  if (lastSym){
    document.calculator.display.value = (sym);
    lastSym = false; lastNum = false; lastEql = false; evaluateStr = evaluateStr + sym;
  }
}
function equal(){
  document.calculator.display.value = eval(evaluateStr).toLocaleString("en");
  evaluateStr = eval(evaluateStr); lastNum = false; lastEql = true;
  if(Number(evaluateStr) > 1000000000) {
         let coefficient = 0;
         let degree;
         for(let n = 9; coefficient < 1 || coefficient >= 10; n++) {
           coefficient = evaluateStr / 10 ** n;
           degree = n;
         }
         document.calculator.display.value = String(coefficient) + "e" + String(degree);
  }
}
function clean(){
  document.calculator.display.value = ' ';
  evaluateStr = ''; lastNum = true; lastSym = false;
}
function percentage(){
  document.calculator.display.value = document.calculator.display.value/100;
}

function negation(){
document.calculator.display.value = document.calculator.display.value * -1;
}


// // var evaluateStr = ""
// // var prevStr = ""
// // var ops = []
//
//
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
    // document.calculator.display.value = eval(exp).toLocaleString("en");
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


// function button0(){
// let p = document.getElementbyId("output");
// p.innerHTML = 0;
// }
//
// function button1(){
// let p = document.getElementbyId("output");
// p.innerHTML = 1;
// }
//
// function button2(){
//   let p = document.getElementbyId("output");
//   p.innerHTML = 2;
// }
//
// function button3(){
//   let p = document.getElementbyId("output");
//   p.innerHTML = 3;
// }
//
// function button4(){
//   let p = document.getElementbyId("output");
//   p.innerHTML = 4;
// }
//
// function button5(){
//   let p = document.getElementbyId("output");
//   p.innerHTML = 5;
// }
//
// function button6(){
//   let p = document.getElementbyId("output");
//   p.innerHTML = 6;
// }
//
// function button7(){
//   let p = document.getElementbyId("output");
//   p.innerHTML = 7;
// }
//
// function button8(){
//   let p = document.getElementbyId("output");
//   p.innerHTML = 8;
// }
//
// function button9(){
//   let p = document.getElementbyId("output");
//   p.innerHTML = 9;
// }
