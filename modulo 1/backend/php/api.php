<?php
header("Content-Type: application/json");
$pdo = new PDO("mysql:host=localhost;dbname=seubanco", "usuario", "senha");

$stmt = $pdo->query("SELECT * FROM produtos");
$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($produtos);
?>
