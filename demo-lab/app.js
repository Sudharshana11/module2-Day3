function validateForm(){
    // Get values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
 
    // check if both fields are not empty
    if (username !== "" && password !== ""){
     // check if username and password meet certain criteria (for eg, length)
     if (username.length >= 5 && password.length >= 8){
        alert("login successful");
     }else{
        alert("username should be atleast 5 characters long, and password should be atleast 8 characters long.")
     }
    }else{
        alert("please enter both username and password.");
    }
}