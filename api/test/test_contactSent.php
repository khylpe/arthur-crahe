<?php
// Test purpose only ! Will only return a success state

// error reporting : display all errors
error_reporting(E_ALL);
ini_set('display_errors', 'On');

// set the default timezone to use. Available since PHP 5.1
date_default_timezone_set('UTC');

// log errors to file
ini_set('log_errors', 'On');

// specify the path to the error log file
ini_set('error_log', './../sendContactFormErrorLogs.log');

// accept cross origin only from localhost since this is a test file
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

echo json_encode(array(
       "status" => "success",
       "message" => "Mail sent"
));