<?php

// Calculate count of words

$text = $_POST['text'] ?? '';

$words = explode(' ', $text);
$count = 0;
foreach ($words as $word)
{
    if ($word)
    {
        $count++;
    }
}

echo json_encode((object)['count' => $count]);