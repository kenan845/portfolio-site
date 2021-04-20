function assignment1(){
alert("assignment 1 coming soon");
  }

function assignment2(){
alert("assignment 2 coming soon");
  }

function assignment3(){
alert("assignment 3 coming soon");
  }
          
function assignment4(){
alert("assignment 4 coming soon");
  }

function assignment5(){
alert("assignment 5 coming soon");
  }

function assignment6(){
alert("assignment 6 coming soon");
  }

function assignment7(){
alert("assignment 7 coming soon");
  }

function assignment8(){
alert("assignment 8 coming soon");
  }

function assignment9(){
alert("assignment 9 coming soon");
  }

function largerNumber(){
  let a = parseInt(prompt("enter a positive number"));
  let b = parseInt(prompt("enter a positive number"));
  if (a > b){
    document.getElementById("largerNum").innerHTML = a;
  }
  if (b > a) {
    document.getElementById("largerNum").innerHTML = b; 
  }  
  }


function signOfProduct(){
  let a = parseInt(prompt("enter a number"));
  let b = parseInt(prompt("enter a number"));
  let c = parseInt(prompt("enter a number"));
  if (a, b, c => 0){
  document.getElementById("signOfProduct").innerHTML = "the sign is +";
  }
  if (a < 0){
  document.getElementById("signOfProduct").innerHTML = "the sign is -";
  }
  if (b < 0){
  document.getElementById("signOfProduct").innerHTML = "the sign is -";
  }
  if (c < 0){
  document.getElementById("signOfProduct").innerHTML = "the sign is -"; 
  }
}

function threeNumberSort(){
  let num1 = parseInt(prompt("enter a number"));
  let num2 = parseInt(prompt("enter a number"));
  let num3 = parseInt(prompt("enter a number"));

  if (num1 < num2 && num2 < num3){
    document.getElementById("threeNumberSort").innerHTML = "test"; 
  }
}

function forSumThrees(){
  var i = 0
   for(i = 0; i < 1000; i = i + 3);
}

function whileSumThrees(){
  
}








function encrypt(){
  var plaintext = prompt();
  var re = plaintext.replace(/l/g, "3");
  var re2 = re.replace(/L/g, "f");
  var re3 = re2.replace(/i/g, "N");
  var re4 = re3.replace(/u/g, "7");
  var re5 = re4.replace(/e/g, "j");
  var re6 = re5.replace(/a/g, "Y");
  var re7 = re6.replace(/h/g, "90");
  var re8 = re7.replace(/I/g, "8");
  var re9 = re8.replace(/U/g, "7");
  var re10 = re9.replace(/E/g, "16");
  var re11 = re10.replace(/A/g, "k");
  var re12 = re11.replace(/H/g, "15");
  document.getElementById("encrypt").innerHTML = re12; 

  var sl = re12.slice(7)
  document.getElementById("encrypt").innerHTML = sl; 

  var repeat = sl.repeat(2)
  document.getElementById("encrypt").innerHTML = repeat;
}

function decrypt(){
  var plaintext = prompt();
  var re = plaintext.replace(/3/g, "l");
  var re2 = re.replace(/f/g, "L");
  var re3 = re2.replace(/N/g, "i");
  var re4 = re3.replace(/7/g, "u");
  var re5 = re4.replace(/j/g, "e");
  var re6 = re5.replace(/Y/g, "a");
  var re7 = re6.replace(/90/g, "h");
  var re8 = re7.replace(/8/g, "I");
  var re9 = re8.replace(/7/g, "U");
  var re10 = re9.replace(/16/g, "E");
  var re11 = re10.replace(/k/g, "A");
  var re12 = re11.replace(/15/g, "H");
  document.getElementById("decrypt").innerHTML = re12;

  var sl = re12.slice(-1)
  document.getElementById("decrypt").innerHTML = sl; 

  var repeat = sl.repeat(1)
  document.getElementById("decrypt").innerHTML = repeat;
}