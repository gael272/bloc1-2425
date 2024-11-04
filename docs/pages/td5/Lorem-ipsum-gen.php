<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Générateur de Paragraphes</title>
</head>
<body>

<?php
$paragraphs = [
    "Lorem ipsum dolor sit amet,",
    "Nam in nisi justo.",
    "Nunc in lacinia dolor.",
    "Proin malesuada mollis sapien,",
    "Phasellus commodo tristique ultricies.",
    "Ut a neque scelerisque,",
    "Ut sollicitudin eros turpis,",
    "Donec in vehicula nisi.",
    "Mauris imperdiet vehicula volutpat.",
    "Donec porta vitae nibh at ornare.",
    "Morbi non magna tempus,",
    "Sed id sagittis enim.",
    "Sed risus massa,",
    "Aenean vulputate semper leo,",
    "Integer auctor felis at tellus hendrerit,",
    "Mauris ut eros eget velit bibendum maximus vel quis nisi.",
    "Ut non diam scelerisque,",
    "Proin urna ex,",
    "Quisque ac aliquet elit,",
    "Phasellus ac risus fermentum,",
    "Sed nec orci suscipit,",
    "Aenean nec enim tellus.",
    "Integer tempus,",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    "Mauris egestas sapien at lectus egestas volutpat.",
    "Maecenas vitae diam pellentesque,",
    "Fusce tincidunt fermentum sapien sit amet pulvinar.",
 
];


$output = "";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $numParagraphs = isset($_POST['num_paragraphs']) ? (int)$_POST['num_paragraphs'] : 1;
    $numParagraphs = min(max($numParagraphs, 1), 30);
    
    
    $output = implode("\n\n", array_slice($paragraphs, 0, $numParagraphs));
}
?>


<form method="POST" action="">
    <label for="num_paragraphs">Nombre de paragraphes à générer :</label>
    <input type="number" id="num_paragraphs" name="num_paragraphs" value="1" min="1" max="30" required><br><br>
    <button type="submit">Générer</button>
</form>


<label for="generated_text">Texte généré :</label><br>
<textarea id="generated_text" rows="15" cols="80" readonly><?= htmlspecialchars($output) ?></textarea>

</body>
</html>