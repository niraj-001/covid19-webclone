<?php
    $conn = mysqli_connect("localhost","root","","numbers");

    if(!$conn){
        echo "not connected";
    }
?>