function credcheck() {

    // First the fName input into firstname var.
   var firstName = document.getElementById("fName").value;
   var lastName = document.getElementById("lName").value;
   var badgeNumb = document.getElementById("badgeID").value;
   var fullName = firstName + " " + lastName;
   
    // Name validation.
   if (fullName.length > 19) {
   document.getElementById("loginStatus").innerHTML = "You have too many characters in your full name!";
   } else if (fullName.length < 2) {
   document.getElementById("loginStatus").innerHTML = "You do not have enough characters in your full name!";
   }
   
    // Badge Number validation.
   if (badgeNumb > 999 || badgeNumb < 1) {
   document.getElementById("loginStatus").innerHTML = "Badge number not applicable!";
   }
   
    // Checks all of the information and allows the user into the website.
   if (fullName.length < 20 && fullName.length > 1 && badgeNumb < 1000 && badgeNumb >= 1) {
   alert("Access Granted, welcome " + fullName);
   location.replace("space.html");
   }
   
   }
