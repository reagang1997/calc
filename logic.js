$(document).ready(function () {

    var firstNumber = "";
    var secondNumber = "";
    var operator = "";
    var result;
    var operatorClicked = false;

    // Your code here...
    var $number = $(".number");
    var $secondDiv = $("#second-number");
    var $firstDiv = $("#first-number");
    $number.click(function () {
        if (operatorClicked) {
            //populate secondNumber
            secondNumber += this.value;
            $secondDiv.text(secondNumber);
        }
        else {
            firstNumber += this.value;
            $firstDiv.text(firstNumber);
        }
    })

    var $operator = $(".operator");
    var $operatorDiv = $("#operator");
    $operator.click(function () {
        operatorClicked = true;
        operator = this.value;
        console.log(operator);

        $operatorDiv.text(this.textContent);
    });

    var $clear = $(".clear");
    $clear.click(function(){
        $firstDiv.empty();
        $secondDiv.empty();
        $operatorDiv.empty();
        $resultDiv.empty();

        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = 0;
        operatorClicked = false;
    });

    var $equal = $(".equal");
    var $resultDiv = $("#result");
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
        $resultDiv.text(result);
    });

});