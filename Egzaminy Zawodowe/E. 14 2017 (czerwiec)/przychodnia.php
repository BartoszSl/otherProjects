<?php

$pdo = new PDO('mysql:host=localhost;dbname=przychodnia', 'root', '');

$kw1 = $pdo->query("SELECT	id,
imie,
nazwisko
FROM 	pacjenci");

$kw1Dane = $kw1->fetchAll();



?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="przychodnia.css">
</head>
<body>
    <header>
        <h1>PRAKTYKA LEKARZA RODZINNEGO</h1>
    </header>
    <main>
        <div class="left">
            <h3>LISTA PACJENTÓW</h3>
            <br>

            
            
                <?php foreach($kw1Dane as $d): 
                    echo $d['id'] . ' ' . $d['imie'] . ' ' . $d['nazwisko'] . '<br>';
                 endforeach; ?>
            

            <br><br>

            <form action="pacjent.php" method="get">
                <label for="id">Podaj id: </label>
                <input type="number" id="id" name="id">
                <button>Pokaż dane</button>
            </form>
                 <br>
            <h3>LEKARZE</h3>
                 <br>
            <ul>
                <li>pn - śr</li>
                <ol>
                    <li>Anna Kwiatkowska</li>
                    <li>Jan Kowalewski</li>
                </ol>
                <li>czw – pt</li>
                <ol>
                    <li>Krzysztof Nowak</li>
                </ol>
            </ul>
        </div>
        <div class="right">
            <h2>INFORMACJE SZCZEGÓŁOWE O PACJENCIE</h2>
            <br>
            <p>Brak wybranego pacjenta</p>
        </div>
    </main>

    <footer>
        <p>utworzone przez: 12141352463</p>
        <a href="kwarendy.txt">Pobierz plik z kwerendami</a>
    </footer>
</body>
</html>

<?php 
$pdo = null; 
?>