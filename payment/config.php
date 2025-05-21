<?php
require_once __DIR__ . '/../vendor/autoload.php'; // sesuaikan path

\Midtrans\Config::$serverKey = 'SB-Mid-server-c0aJfF7wx9edDcwqcktkhM1X'; // Ganti dengan server key dari Midtrans
\Midtrans\Config::$isProduction = false; // true = live, false = sandbox
\Midtrans\Config::$isSanitized = true;
\Midtrans\Config::$is3ds = true;
