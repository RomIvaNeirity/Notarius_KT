<?php
header('Content-Type: application/json; charset=utf-8');

$API_KEY = "AIzaSyCwsz8ROmlj9GVFJQ8yfyt-FpjS0kEt_Rc";   // твій Google API Key
$PLACE_ID = "ChIJJ8OkkLro1EAR2K-gNSuHZJ0";  // твій Place ID (знаходиш у Google Place ID Finder)

$url = "https://maps.googleapis.com/maps/api/place/details/json?place_id={$PLACE_ID}&fields=name,rating,reviews&key={$API_KEY}";

$response = file_get_contents($url);
if ($response === FALSE) {
    echo json_encode(["error" => "Не вдалося отримати відгуки"]);
    exit;
}

$data = json_decode($response, true);
if (isset($data['result']['reviews'])) {
    echo json_encode($data['result']['reviews']);
} else {
    echo json_encode([]);
}
?>
