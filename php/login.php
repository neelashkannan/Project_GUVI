<?php

session_start();
        
  $username=$_POST['username'];
  $Password=$_POST['password'];
  $con=new mysqli("localhost","root","","guvi");
  if($con -> connect_error){
    die("Failed to connect :" .$con->connect_error);
  }else{
    $sql=$con->prepare("select * from registration where username=?");
    $sql->bind_param("s",$username);
    $sql->execute();
    $sql_result=$sql-> get_result();
    if($sql_result->num_rows>0){
      $data=$sql_result->fetch_assoc();
      if($data['password']===$Password){
        $_SESSION['username']=$username;
        header("location:http://localhost/Project%20Guvi/profile.html");
      }else{
        echo "<h2>Invalid username or Password </h2>";
        header("location:http://localhost/Project%20Guvi/login.html");
      }
    }else{
      echo "<h2> Invalid username or Password</h2>";
      header("location:http://localhost/Project%20Guvi/login.html");
}}
?>