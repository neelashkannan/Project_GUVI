<?php

session_start();
if(isset($_SESSION['username']));{
    echo "hello";
header("location:http://localhost/Project%20Guvi/register.html");}

?>