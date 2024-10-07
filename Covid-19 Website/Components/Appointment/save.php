<?php


$servername = "localhost";
$username = "root";
$password = " ";
$dbname = "corona virus appointment list";

$conn = new mysqli_connect($servername,$username,$password,$dbname);

if ($conn === false) {
    die("ERROR: Could not connect. ". mysqli_connect_error());
}

//start

$name = $_REQUEST['name'];
$gender = $_REQUEST['gender'];
$dob = $_REQUEST['date-of-birth'];
$photoId = $_REQUEST['ids'];
$idNumber = $_REQUEST['id-number'];

//for inserting query
$sql = "INSERT INTO `appointment` /*(`name`, `gender`, `dob`, `photoId`, `idNumber`, `state`, `district`)*/ VALUES ('$name','$gender','$dob','$photoId','$idNumber','$state','$district')";

//for checking data is stored or not

//$result = mysqli_query($con, $sql);

if(mysqli_query($conn, $sql)){
    echo "<h3?>data stored in a database sucessfully." 
        . " Please browse your localhost php my admin"
        . " to view the updated data</h3> ";

    echo nl2br("\n$name\n $gender\n $dob\n $photoId\n $idNumber");
}else{
    echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($conn);
}

mysqli_close($conn);
?>


































































