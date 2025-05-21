<?php
require_once 'config.php';

$data = json_decode(file_get_contents("php://input"), true); // ambil data dari JS
$price = $data['price'] ?? 10000;
$name = $data['name'] ?? 'Program Anak';

// Buat parameter transaksi
$transaction = [
    'transaction_details' => [
        'order_id' => rand(), // atau pakai UUID
        'gross_amount' => $price,
    ],
    'item_details' => [
        [
            'id' => 'prog-1',
            'price' => $price,
            'quantity' => 1,
            'name' => $name,
        ],
    ],
    'customer_details' => [
        'first_name' => 'Guest',
        'email' => 'guest@example.com',
    ],
];

try {
    $snapToken = \Midtrans\Snap::getSnapToken($transaction);
    echo json_encode(['token' => $snapToken]);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
