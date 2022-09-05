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
    sum = parseInt(first_TextBox_Value) + parseInt(no_two);							
    results = "<span class='message'> The sum of " + first_TextBox_Value 
    + " and " + no_two + " is <b style='color:red;'>" + sum +"</b>.</span>";
    document.getElementById('math_Results').innerHTML = results;
    return false;
    } 
    else if (operators_If[1].checked == true) {
     diff = parseInt(first_TextBox_Value) - parseInt(no_two);					
    results = "<span class='message'> The difference between " 
    + first_TextBox_Value + " and " + no_two + " is <b style='color:red;'>" + diff +"</b>.</span>";
    document.getElementById('math_Results').innerHTML = results;
    return false;
    } 
    else if (operators_If[2].checked == true) {
     product = parseInt(first_TextBox_Value) *parseInt(no_two);					
    results = "<span class='message'>The product between " 
    + first_TextBox_Value + " and " + no_two + " is <b style='color:red;'>" + product +"</b>.</span>";
    document.getElementById('math_Results').innerHTML = results;
    return false;
    } 
    else if (operators_If[3].checked == true) {
     quotient = parseInt(first_TextBx_Value) / parseInt(no_two);
    results = "<span class='message'>The quotient between " 
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
    first_TextBox_Value="";
    no_two="";
    first_TextBox_Value.focus();
    }