 var fn = document.getElementById('first-value');
 var sn = document.getElementById('second-value');
 var result = document.getElementById('result');
 var addition = document.getElementsByClassName('operator')[0];
 var subtraction = document.getElementsByClassName('operator')[1];
 var multiplication = document.getElementsByClassName('operator')[2];
 var division = document.getElementsByClassName('operator')[3];
 var buttCalc= document.getElementsByClassName('btn-calc')[0];
 var calculationResult;

 addition.addEventListener("click", function (e) {
     calculationResult = parseInt(fn.value) + parseInt(sn.value);
     e.preventDefault();
     return calculationResult;
 });
 subtraction.addEventListener("click", function (e) {
     calculationResult = parseInt(fn.value) - parseInt(sn.value);
     e.preventDefault();
     return calculationResult;
 });
 multiplication.addEventListener("click", function (e) {
     calculationResult = parseInt(fn.value) * parseInt(sn.value);
     e.preventDefault();
     return calculationResult;
 });
 division.addEventListener("click", function (e) {
     calculationResult = parseInt(fn.value) / parseInt(sn.value);
     e.preventDefault();
     return calculationResult;
 });
 buttCalc.addEventListener("click", function (e) {
     result.value = calculationResult;
     e.preventDefault();
 });

