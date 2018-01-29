<?php
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;
    $db = new mysqli($servername, $username, $password, $database, $dbport);
    
    if ($db->connect_error){
        die("Conection failed".$db->connect_error);
    }
    
    $namef=     $_POST  ['firstname'];
    $namel=     $_POST  ['lastname'] ;
    $usrnm=     $_POST  ['username'] ;
    $email=     $_POST  ['email']    ;
    $crtnm=     $_POST  ['certnum']  ;
    $admin=     $_POST  ['admin']    ;
    $password=  $_POST  ['password'];
    $salt=      (mt_rand());
    $password_digest=      md5($salt.$password);
    
    $sql="INSERT INTO Users (firstname, lastname, username, email, certnum, admin, salt,password_digest) VALUES ('$namef','$namel','$usrnm','$email','$crtnm','$admin','$salt','$password_digest')";
    $db->query($sql) or die("Could not process your Users".$db->error);
    $newURL = 'https://netcentric-electroheart.c9users.io/part3/table.html';
    header('Location: '.$newURL);
    
    
    
    
?>