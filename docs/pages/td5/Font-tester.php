<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Affichage de Message Personnalisé</title>
</head>
<body>

<?php

$message = isset($_GET['message']) ? htmlspecialchars($_GET['message']) : null;
$color = isset($_GET['color']) ? htmlspecialchars($_GET['color']) : "black";
$size = isset($_GET['size']) ? (int)$_GET['size'] : 12;

if ($message !== null) {
    echo "<div style='color: $color; font-size: {$size}px;'>$message</div>";
} else {
    echo "<div style='color: red;'>Erreur : Aucun message n'a été fourni.</div>";
}
?>

<form method="GET" action="">
    <label for="message">Message :</label>
    <input type="text" id="message" name="message" value="<?= htmlspecialchars($message) ?>" required><br>

    <label for="color">Couleur :</label>
    <input type="text" id="color" name="color" value="<?= htmlspecialchars($color) ?>"><br>

    <label for="size">Taille :</label>
    <input type="number" id="size" name="size" value="<?= htmlspecialchars($size) ?>"><br>

    <button type="submit">Afficher</button>
</form>

<a href="?message=Bonjour&color=red&size=15">Message en rouge (taille 15)</a><br>
<a href="?message=Bienvenue&color=green&size=30">Message en vert (taille 30)</a><br>
<a href="?message=Au revoir&color=blue&size=50">Message en bleu (taille 50)</a><br>

<form method="GET" action="">
    <input type="hidden" name="message" value="<?= htmlspecialchars($message) ?>">
    <input type="hidden" name="color" value="<?= htmlspecialchars($color) ?>">
    <input type="hidden" name="size" value="<?= $size + 5 ?>">
    <button type="submit">Augmenter la taille (+)</button>
</form>

<form method="GET" action="">
    <input type="hidden" name="message" value="<?= htmlspecialchars($message) ?>">
    <input type="hidden" name="color" value="<?= htmlspecialchars($color) ?>">
    <input type="hidden" name="size" value="<?= max(1, $size - 5) ?>">
    <button type="submit">Diminuer la taille (-)</button>
</form>

</body>
</html>