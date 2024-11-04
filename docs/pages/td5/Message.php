<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Affichage de Message</title>
</head>
<body>

<?php
$message = isset($_GET['message']) ? htmlspecialchars($_GET['message']) : "Message par défaut";

echo "<h1>$message</h1>";
?>

<a href="?message=Bonjour!">Afficher le message: Bonjour!</a><br>
<a href="?message=Bienvenue%20sur%20notre%20site">Afficher le message: Bienvenue sur notre site</a><br>
<a href="?message=Au%20revoir!">Afficher le message: Au revoir!</a>

</body>
</html>