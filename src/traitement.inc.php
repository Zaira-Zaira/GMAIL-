<?php
 try{
    $bdd = new PDO('mysql:host=localhost;dbname=inscription;charset=utf8','root','root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
   }
  catch(Exception $e)
  {
   die('Erreur : '.$e->getMessage());
 }





 try{
   if(isset($_POST['send'])) {
     header('location: ../connection.php');
       $req = $bdd->prepare('INSERT INTO user (nom, prenom, mail, password) VALUES (:nom, :prenom, :mail, :password)');
       return $req->execute(array(
        'nom' => $_POST['nom'],
        'prenom' => $_POST['prenom'],
        'mail' =>  $_POST['mail'],
        'password' => $_POST['password']
    ));
   }
 }catch(Exception $e)
 {
  die('Erreur : '.$e->getMessage());
}



?>