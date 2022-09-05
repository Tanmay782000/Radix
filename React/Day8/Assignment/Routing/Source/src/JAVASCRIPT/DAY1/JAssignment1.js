import React from "react";

export default function JAssignment1()
{

    function solve() {
         
        var operators_If = document.getElementsByName("math_Operators");
        var first_TextBox_Value = document.getElementById("number1_TextBox").value;
        var no_two = document.getElementById("number2_TextBox").value; 
         
        if (first_TextBox_Value=="") {
        var math_Results = "Enter the first value";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
        }
         
        else if (no_two=="") {
        var math_Results = "<span class='warning'>Enter the second value.</span>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
        }
         
        if (operators_If[0].checked == true) {
        var sum = parseInt(first_TextBox_Value) + parseInt(no_two);							
        var results = "<span class='message'> The sum of " + first_TextBox_Value 
        + " and " + no_two + " is <b style='color:red;'>" + sum +"</b>.</span>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
        } 
        else if (operators_If[1].checked == true) {
       var diff = parseInt(first_TextBox_Value) - parseInt(no_two);					
        var results = "<span class='message'> The difference between " 
        + first_TextBox_Value + " and " + no_two + " is <b style='color:red;'>" + diff +"</b>.</span>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
        } 
        else if (operators_If[2].checked == true) {
        var product = parseInt(first_TextBox_Value) *parseInt(no_two);					
        var results = "<span class='message'>The product between " 
        + first_TextBox_Value + " and " + no_two + " is <b style='color:red;'>" + product +"</b>.</span>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
        } 
        else if (operators_If[3].checked == true) {
        var quotient = parseInt(first_TextBox_Value) / parseInt(no_two);
        var results = "<span class='message'>The quotient between " 
        + first_TextBox_Value + " and " + no_two + " is" + quotient +"</b>. </span>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
        } 
        else {
        var math_Results = "<span class='warning'>Select your math operators.</span>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
        }
        }
        function reset_Operators() {
        document.getElementById('math_Results').innerHTML = '';
        }
        function clear()
        {
        document.getElementById('math_Results').innerHTML = "";
        var first_TextBox_Value="";
        var no_two="";
        var first_TextBox_Value="";
        }
        function newsolve(){
            return solve()
        }

    return ( 
        <div>
        <form>
        <div>
               <label>First Value</label>
               <input type="number" name="first_TextBox_Value" id="number1_TextBox" autofocus="autofocus"/>
               <br/><br/>
               <label>Second Value</label>
               <input type="number" name="second_TextBox_Value" id="number2_TextBox"/>
           
        </div>
        <h2>Math Operators</h2>
        <div>
           
                <input type="radio" name="math_Operators" onclick="reset_Operators();"/>   <label>Addition</label>
                <input type="radio" name="math_Operators" onclick="reset_Operators();"/>   <label>Subtraction</label>
           
                <input type="radio" name="math_Operators" onclick="reset_Operators();"/>   <label>Multiplication</label>
                <input type="radio" name="math_Operators" onclick="reset_Operators();"/>   <label>Division</label>
           
        </div>
        <br/>
        <br/>
        <input type="submit" value="Solve" onClick={newsolve} />
        <input type="submit" value="Clear" onClick={clear} />
        <br/>
        <br/>
        <div id="math_Results"></div>
        </form>
        </div>
    )
}