<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Générateur de Tableau HTML avec Fusion de Cellules</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 5px;
            text-align: center;
        }
    </style>
</head>
<body>

<?php

$htmlTable = "";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
    $rows = isset($_POST['rows']) ? max(1, (int)$_POST['rows']) : 1;
    $columns = isset($_POST['columns']) ? max(1, (int)$_POST['columns']) : 1;

    
    $mergeHorizontally = isset($_POST['merge_horizontally']) ? (int)$_POST['merge_horizontally'] : 1;
    $mergeVertically = isset($_POST['merge_vertically']) ? (int)$_POST['merge_vertically'] : 1;

    
    $htmlTable .= "<table>\n";
    for ($i = 0; $i < $rows; $i++) {
        $htmlTable .= "  <tr>\n";
        for ($j = 0; $j < $columns; $j++) {
         
            if ($mergeHorizontally > 1 && $j + $mergeHorizontally - 1 < $columns) {
                $htmlTable .= "    <td colspan='$mergeHorizontally'>Ligne " . ($i + 1) . ", Colonne " . ($j + 1) . "</td>\n";
                $j += $mergeHorizontally - 1; 
            } elseif ($mergeVertically > 1 && $i + $mergeVertically - 1 < $rows) {
                $htmlTable .= "    <td rowspan='$mergeVertically'>Ligne " . ($i + 1) . ", Colonne " . ($j + 1) . "</td>\n";
                $i += $mergeVertically - 1; 
            } else {
                $htmlTable .= "    <td>Ligne " . ($i + 1) . ", Colonne " . ($j + 1) . "</td>\n";
            }
        }
        $htmlTable .= "  </tr>\n";
    }
    $htmlTable .= "</table>\n";
}
?>


<form method="POST" action="">
    <label for="rows">Nombre de lignes :</label>
    <input type="number" id="rows" name="rows" value="1" min="1" required><br><br>

    <label for="columns">Nombre de colonnes :</label>
    <input type="number" id="columns" name="columns" value="1" min="1" required><br><br>

    <label for="merge_horizontally">Fusionner horizontalement :</label>
    <input type="number" id="merge_horizontally" name="merge_horizontally" value="1" min="1" max="<?= $columns ?>"><br><br>

    <label for="merge_vertically">Fusionner verticalement :</label>
    <input type="number" id="merge_vertically" name="merge_vertically" value="1" min="1" max="<?= $rows ?>"><br><br>

    <button type="submit">Générer le tableau</button>
</form>

<?php if ($htmlTable): ?>

    <h3>Tableau généré :</h3>
    <?= $htmlTable ?>

 
    <label for="table_code">Code HTML du tableau :</label><br>
    <textarea id="table_code" rows="10" cols="80" readonly><?= htmlspecialchars($htmlTable) ?></textarea>
<?php endif; ?>

</body>
</html>