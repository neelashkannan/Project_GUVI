const trigger = document.getElementById('trigger');
trigger. addEventListener('click', register);

function register(){
    var username = document.getElementById("username") ;
    var email = document.getElementById("email") ;
    var dob = document.getElementById("dob") ;
    var phonenumber = document.getElementById("phonenumber") ;
    var password = document.getElementById("password") ;
    var Password = document.getElementById("Password") ;
    if(dob.value > '2022-11-11' && dob.value < '2001-11-11'){
        alert("enter a valid Date Of Birth");
    }
    if(phonenumber.value.length != 10){
        alert("enter a valid Phone Number");
        document.location.href = "http://localhost/Project%20Guvi/register.html";
    }
    if(password.value.length < 8){
    if(password.value != Password.value){
         alert("enter the correct password");
         document.location.href = "http://localhost/Project%20Guvi/register.html";
     }
    }

    $.ajax({
        url:"register.php",
        method:"post",
        data: username,
        success: function(res){
            console.log("sending......");
        }
    })
    
    
    
    
         
    
    
    
}