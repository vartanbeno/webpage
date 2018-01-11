function validate() {
    var email = document.getElementById("email").value;
    var interest = document.getElementById("interest").value;

    var emailPattern = /^\S+@\S+\.\S+$/;
    var validEmail = emailPattern.test(email);          // true if valid email
    
    if (validEmail == false) {
        console.log("Something went wrong!");
        document.getElementById("invalid").style.display = "block";
        return false;
    }
    else {
        console.log("Email: " + email);
        console.log("Interested in: " + interest);
        document.getElementById("invalid").style.display = "none";
    }
}