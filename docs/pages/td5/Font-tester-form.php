<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Affichage de Message Personnalisé</title>
</head>
<body>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : "Message par défaut";
    $color = isset($_POST['color']) ? htmlspecialchars($_POST['color']) : "black";
    $size = isset($_POST['size']) ? (int)$_POST['size'] : 12;

    echo "<div style='color: $color; font-size: {$size}px;'>$message</div>";
}
?>

<form method="POST" action="">
    <label for="message">Message :</label><br>
    <textarea id="message" name="message" rows="4" cols="50" required><?= isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '' ?></textarea><br><br>

    <label for="color">Couleur :</label>
    <input type="color" id="color" name="color" value="<?= isset($_POST['color']) ? htmlspecialchars($_POST['color']) : '#000000' ?>"><br><br>

    <label for="size">Taille :</label>
    <input type="number" id="size" name="size" value="<?= isset($_POST['size']) ? htmlspecialchars($_POST['size']) : 12 ?>" min="1"><br><br>

    <button type="submit">Afficher le message</button>
</form>

</body>
</html>