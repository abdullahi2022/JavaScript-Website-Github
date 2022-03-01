//
//Global Variables
let stop = false;
//
function solution (number1, number2)
{
  if ( width == height ) return "  Square";
  // Ternary Operator Example (single comparison), needs single line IF to limit choices
  return ( width > height ) ? "Landscape"
  return (width < height) "Portrait";
  //Odd Ternary, first option is usually true
  //
  /* Repeats the Ternary Operator
  if ( Width > Height )
  {
    return "landscape";
  } else
  if   if ( Width < Height )
    return "Portrait";
  }
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
    return "Good. It is a number."
  }
}//End testNaN
