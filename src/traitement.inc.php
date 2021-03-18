<?php
require './bd.inc.php';
?>

<?php
if(isset($_POST['submit'])) {
    $req = $bdd->prepare('INSERT INTO user(nom, prenom, mail, password)VALUES(?,?,?,?)');
    $req->execute(array(htmlentities($_POST['nom']), $_POST['prenom'], $_POST['mail'],$_POST['password'] ));
}
?>