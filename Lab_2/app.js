function welcomeMsg(){
   let user_name = prompt("Enter your name :")
   console.log(`Enter users namee is ${user_name}`);
   
   let confirmation = confirm(`Do you agree ${user_name} to our terms and conditions`)
   
   if(confirmation == true){
    alert(`welcome to our ABC app ${user_name}`)
}else{
    alert ("you didnt agree to our terms and conditions")
}
   

} 
welcomeMsg()

function hellomsg() {
    let firstnum = Number(prompt("Enter the first number :"));
    let secondnum = Number(prompt(`Enter the second number :`));

    let sum = firstnum+secondnum;
    alert(`The sum of ${firstnum} and ${secondnum} is ${sum}`);
}
hellomsg();

function myletfunc(){
    var userName = "sudharshana"
    userName = "ram"
    console.log(`user's name is ${userName}`);
    
}