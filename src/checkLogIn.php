<?php
 try{
    $bdd = new PDO('mysql:host=localhost;dbname=inscription;charset=utf8','root','root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
   }
  catch(Exception $e)
  {
   die('Erreur : '.$e->getMessage());
 }

 if(isset($_POST['submit'])){
    $req = $db->query("SELECT mail FROM user WHERE mail = '" . $_POST['mail'] . "'");
    $reqPassword = $db->query("SELECT password FROM user WHERE password = '" . $_POST['password'] . "'");
    $data =  $req->fetch();
    $dataPassword = $reqPassword->fetch();
    if($data['mail'] != $_POST['mail']){
            return '<p>Cette adresse mail est inconnu</p>';
    }else if($dataPassword != $_POST['password']){
        return '<p>Votre mot de passe est incorrect</p>';
    }
 }

 ?>