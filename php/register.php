<?php
$add = 5;
$username = $_POST['username'];
$password = $_POST['password'];
$dob = $_POST['dob'];
$phonenumber = $_POST['phonenumber'];
$email = $_POST['email'];
$m = $_POST['dot-1'];
$f = $_POST['dot-2'];
$o = $_POST['dot-3'];
if($m==true){
    $gender='male';
}
if($f==true){
    $gender='female';
}
if($o==true){
    $gender='other';
}
$con = mysqli_connect("localhost","root","","guvi");
$sql="INSERT INTO registration (username ,dob, password,email, number, gender) 
            values('$username','$dob','$password','$email','$phonenumber','$gender')";
$r=mysqli_query($con,$sql);
if($r){
    header("location:http://localhost/Project%20Guvi/profile.html");
}else{
    echo "Details Not Added";
}

?>