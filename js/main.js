var akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function akanName() {
   var centuary = parseInt(document.getElementById("centuary").value);
   var year = parseInt(document.getElementById("year").value);
   var month = parseInt(document.getElementById("month").value);
   var day = parseInt(document.getElementById("day").value);
   var gender = document.getElementById("gender").value;

   var CC = centuary;
   var YY = year;                                                                         
   var MM = month;
   var DD = day;
   var d = parseInt(((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7

   if (CC < 18 || CC > 20) {
      alert("Not a valid Centuary")
   } else {

      if (YY < 0 || 100 <= YY) {
         alert("Invalid Year")
      }else
      if (MM <= 0 || MM > 12) {
         alert("Enter a valid Month")
      } else
   if (DD <= 0 || DD > 31) {
      alert("Invalid date")
   } else
   if (gender === "Male") {
      alert("Your Akan name is " + akanMaleName[d])
   }
    if (gender === "Female"){
      alert("Your Akan name is " + akanFemaleName[d])
   }
}
}
   