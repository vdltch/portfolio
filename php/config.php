<?php

$username = 'root';
$pwd = '';
$dbname = 'localhost';


$conn = new mysqli($username, $pwd, $dbname);
if ($conn->error){
    die ("Erreur") . $conn->error;
}
    echo 'ok.'