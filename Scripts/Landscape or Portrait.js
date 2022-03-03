console.log("You made it to the Landscape and Portrait.js!");
//
//Global Variables
let stop = false;
//
function solution (width, height)
{
  if ( width == height ) return "Square";
  // Ternary Operator Example (single comparison), needs single line IF to limit choices
  return ( width > height ) ? "Landscape": "Portrait";
  //Odd Ternary, first option is usually true
  //
  /* Repeats the Ternary Operator
  if ( width > height )
  {
    return "Landscape";
  } else
  if ( width < height )
  {
    return "Portrait";
  } else
  if ( width = height )
  {
     return "Square"
  */
}//ENd solution
//
function main()
{
  stop = false; //for Screen Refresh
  let firstNumber = document.getElementById("textField1").value;
  let secondNumber = document.getElementById("textField2").value;
  //document.getElementById("CanBeAnything").innerHTML = alert ("You are connected");
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
  if (stop == true)
  {
    document.getElementById("answer").innerHTML = "Restart ... because I said so."
  } else
  {
    document.getElementById("answer").innerHTML = "What did you say?  " + solution(firstNumber, secondNumber);
  }//ENd stop=true
}//End main()
//
function testNaN (number)
{
  if ( number=="" ) //Checking for null, submit-button misfire
  //Variable returns emply string, not null
  {
    stop = true;
    return "Please type a number into the textfield"
  }//End null check
  //
  if ( isNaN(number) ) //Returns a Boolean
  {
    stop = true;
    return "Type a Real Number";
  } else
  {
    return "Landscape" or "Portrait".
  }
}//End testNaN
