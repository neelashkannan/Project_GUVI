function check(){
    var username = document.getElementById("username") ;
    var password = document.getElementById("password") ;
    username.addEventListener('textInput',username_verify);
    password.addEventListener('textInput',password_verify);
    if(username.value.length < 5){
        username.style.border="1px solid red";
        username.focus();
        alert("Invalid username!");
        return false;
    }
    if(password.value.length < 6){
        password.style.border="1px solid red";
        alert("Invalid password!");
        password.focus();
        return false;
    }
    function username_verify(){
        if(Email.value.length>=8){
            username.style.border="1px solid red";
            return true;
        }
    }
    function password_verify(){
        if(password.value.length>=5){
            password.style.border="1px solid silver";
            return true;
        }
}
}