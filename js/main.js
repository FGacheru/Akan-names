var akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function akanName() {
    // event.preventDefault(); 
    var centuary = parseInt(document.getElementById("centuary").value);
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var gender = document.getElementById("gender").value;

    var CC = centuary;
    var YY = year;
    var MM = month;
    var DD = day;
    var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7

 if (gender==="Male") {
     alert("Akan name is" + akanMaleName[d])
 } 
 if(gender==="Female") {
     alert("Akan name is" + akanFemaleName[d])
 }
 if (DD=>0 || DD<32) {
     alert("Valid date")
 } else {
     alert("Invalid date")
 }
 if (MM=>0 || MM<12 ) {
     alert("Valid Month")
 } else {
     alert("Invalid Month")
 }
 if (CC>18 ||CC<=20) {
     alert("Valid Centuary")
 } else {
    alert("Invalid Centuary") 
 }
 if (YY>00 || YY<=20) {
     alert("Valid Year")
 } else {
    alert("Enter a valid Year") 
 }
}