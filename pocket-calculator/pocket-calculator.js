function insert(num){
  document.calculator.display.value = document.calculator.display.value + num;

  if(document.calculator.display.value.length > 11){
  document.calculator.display.value = "";
  }

  if(document.calculator.display.value.length > 12){
      document.calculator.display.value = "Too many digits";
  }


  if(document.calculator.display.value.length === 3) {
      document.calculator.display.value = document.calculator.display.value + ",";
}
if(document.calculator.display.value.length === 7) {
    document.calculator.display.value = document.calculator.display.value + ",";
}

}

function equal(){
  var exp = document.calculator.display.value;
  if (exp){
    document.calculator.display.value = eval(exp);
  }

  if(document.calculator.display.value === "Infinity") {
    document.calculator.display.value = "Error";
  }
  if(document.calculator.display.value === "undefined") {
    document.calculator.display.value = "Error";
  }
  if(document.calculator.display.value === "NaN") {
    document.calculator.display.value = "Error";
}
}

function clean(){
  document.calculator.display.value = "";
}


function percentage(){
  document.calculator.display.value = document.calculator.display.value/100;
}

function negation(){
document.calculator.display.value = document.calculator.display.value * -1;
}
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
