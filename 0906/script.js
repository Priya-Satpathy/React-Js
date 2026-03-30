// function submit(){
//     var a = parseInt(document.getElementById("first").value);
//     var b = parseInt(document.getElementById("second").value);
//     var c = a+b;
//     document.getElementById("result").innerHTML = "The sum is "+c;

// }

let numOneInput = document.getElementById("first");
let numTwoInput = document.getElementById("second");
let btnSum = document.getElementById("Addition");

let result = document.getElementById("result");
btnSum.addEventListener("input",function(){
    let a  = parseInt(numOneInput.value);
    let b = parseInt(numTwoInput.value);
    let s = a+b;
    result.innerHTML = s;
    

});


