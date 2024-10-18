function addNumber(){

    var OneNumber = parseInt(document.getElementById('numOne').value)
    var TwoNumber = parseInt(document.getElementById('numTwo').value)
    var addition = OneNumber+TwoNumber;
    var output = `Output is ${addition}`
    document.getElementById('result').innerHTML = output

}

function subNumber(){

    var OneNumber = parseInt(document.getElementById('numOne').value)
    var TwoNumber = parseInt(document.getElementById('numTwo').value)
    var Subtraction = OneNumber-TwoNumber;
    var output = `Output is ${Subtraction}`
    document.getElementById('result').innerHTML = output
}
function mulNumber(){

    var OneNumber = parseInt(document.getElementById('numOne').value)
    var TwoNumber = parseInt(document.getElementById('numTwo').value)
    var Multiplication = OneNumber*TwoNumber;
    var output = `Output is ${Multiplication}`
    document.getElementById('result').innerHTML = output
}
function divNumber(){

    var OneNumber = parseInt(document.getElementById('numOne').value)
    var TwoNumber = parseInt(document.getElementById('numTwo').value)
    var Division = OneNumber/TwoNumber;
    var output = `Output is ${Division}`
    document.getElementById('result').innerHTML = output

}