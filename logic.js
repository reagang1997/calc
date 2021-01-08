$(document).ready(function () {

    var firstNumber = "";
    var secondNumber = "";
    var operator = "";
    var result;
    var operatorClicked = false;

    // Your code here...
    var $number = $(".number");
    $number.click(function () {
        if (operatorClicked) {
            //populate secondNumber
            var $secondDiv = $("#second-number");
            secondNumber += this.value;
            $secondDiv.text(secondNumber);
        }
        else {
            var $firstDiv = $("#first-number");
            firstNumber += this.value;
            $firstDiv.text(firstNumber);
        }
    })

    var $operator = $(".operator");
    $operator.click(function () {
        operatorClicked = true;
        var $operatorDiv = $("#operator");

        operator = this.value;
        console.log(operator);

        $operatorDiv.text(this.textContent);
    });

    var $clear = $(".clear");
    $clear.click(function(){
        
    });

    var $equal = $(".equal");
    $equal.click(function(){
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        if(operator === "plus"){
            result = firstNumber + secondNumber;
        }
        else if(operator === "minus"){
            result = firstNumber - secondNumber;
        }
        else if(operator === "divide"){
            result = firstNumber / secondNumber;
        }
        else if(operator === "times"){
            result = firstNumber * secondNumber;
        }
        else{
            result = firstNumber ** secondNumber;
        }
    });

});