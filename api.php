<?php
$apiPath = $_ENV['API_URL'];
$apiKey = $_ENV['API_KEY'];

$headers = ['X-AUTH-API-TOKEN: ' . $apiKey];
foreach (getallheaders() as $key => $value) {
    $headers[] = $key . ': ' . $value;
}

$result = @file_get_contents(
    $apiPath . $_SERVER['PATH_INFO'] . ($_SERVER['QUERY_STRING'] ? '?' . $_SERVER['QUERY_STRING'] : ''),
    false,
    stream_context_create([
        'http' => [
            'header' => $headers,
            'method' => $_SERVER['REQUEST_METHOD'],
            'content' => file_get_contents('php://input'),
            'ignore_errors' => true
        ],
    ])
);

foreach ($http_response_header ?? [] as $header) {
    header($header);
}

echo $result;
