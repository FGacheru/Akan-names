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

  if(gender==="Male"){
    alert("Your Akan name" + akanMaleName[d])
  
  else {
      alert("Your Akan name" + akanFemaleName[d])
  }
}