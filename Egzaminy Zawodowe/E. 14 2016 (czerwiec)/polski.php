<?php

$pdo = new PDO('mysql:host=localhost;dbname=szkola', 'root', '');

$kw1 = $pdo->query("SELECT	uczen.imie,
uczen.nazwisko
FROM 	uczen");

$kw1Dane = $kw1->fetchAll();

$kw2 = $pdo->query("SELECT	uczen.imie,
uczen.nazwisko
FROM 	uczen
WHERE	uczen.id = 2");

$kw2Dane = $kw2->fetchAll();

$kw3 = $pdo->query("SELECT	AVG(ocena.ocena) as 'ocena'
FROM 	ocena
WHERE   ocena.uczen_id = 2
AND 	ocena.przedmiot_id = 1");

$kw3Dane = $kw3->fetchAll();

?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Szkoła Ponadgimnazjalna</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h1>Oceny uczniów: Język polski</h1>
    </header>

    <main>
        <div class="left">
            <br>
            <h2>Lista uczniów: </h2>
            <br>
            <ol>
               <?php foreach($kw1Dane as $d): ?>
                <li><?php echo $d['imie'] . ' ' . $d['nazwisko']; ?></li>
                <?php endforeach; ?>
            </ol>
        </div>
        <div class="right">
            <br>
            <h2>Uczeń: <?php foreach($kw2Dane as $d): echo $d['imie'] . ' ' . $d['nazwisko']; endforeach ?></h2>
            <br>
            <p>Średnia ocen z języka polskiego: <?php foreach($kw3Dane as $d): echo $d['ocena']; endforeach ?></p>
        </div>
    </main>

    <footer>
        <h3>Zespół szkół ponadgimnazjalnych</h3>
        <br>
        <p>Stronę wykonał: 1231414134</p>
    </footer>
</body>
</html>