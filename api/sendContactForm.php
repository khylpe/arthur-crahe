<?php
ini_set('display_errors', '0');
ini_set('display_startup_errors', '0');

ini_set('log_errors', '1');
ini_set('error_log', './../sendContactFormErrorLogs.log');

// accept cross origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

date_default_timezone_set("Europe/Paris");

require_once './../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

try {
       $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
       $dotenv->load();
} catch (Dotenv\Exception\InvalidPathException $e) {
       exit(json_encode(["status" => "error", "message" => "Could not load .env file. More information : " . $e]));
}

// Get values from fetch 
$dataToJSON = json_decode(file_get_contents('php://input'), true);
$mailFromContactForm = filter_var($dataToJSON['mail'], FILTER_SANITIZE_EMAIL);
$firstNameFromContactForm = htmlspecialchars($dataToJSON['firstName']);
$lastNameFromContactForm = htmlspecialchars($dataToJSON['lastName']);
$companyOrOrganizationOrSchoolFromContactForm = htmlspecialchars($dataToJSON['companyOrOrganizationOrSchool']);
$subjectFromContactForm = htmlspecialchars($dataToJSON['subject']);
$messageFromContactForm = htmlspecialchars($dataToJSON['message']);
$language = $dataToJSON['language'];

// Get current date and time
$datetime = new DateTime('now', new DateTimeZone('Europe/Paris'));
$date = $datetime->format('d/m/Y');
$time = $datetime->format('H:i');

// Check if email is valid
$parts = explode('@', $mailFromContactForm);
if (!filter_var($mailFromContactForm, FILTER_VALIDATE_EMAIL) || empty($mailFromContactForm) || count(explode('.', $parts[1])) < 2) {
       if ($language === 'fr') exit(json_encode(["status" => "error", "message" => "Format d'email invalide"]));
       exit(json_encode(["status" => "error", "message" => "Invalid email format"]));
}

// Check if subject, first name or message is empty
if (empty($subjectFromContactForm) || empty($messageFromContactForm) || empty($firstNameFromContactForm)) {
       if ($language === 'fr') exit(json_encode(["status" => "error", "message" => "L'objet, le prénom ou le message ne peuvent pas être vides"]));
       exit(json_encode(["status" => "error", "message" => "Subject, first name or message cannot be empty"]));
}

$title = "Thanks for contacting me, " . $firstNameFromContactForm . " !";
$textDescription = "I will answer you as soon as possible. In the meantime, you can visit my website to learn more about me and my work.";
$summaryTitle = "Summary of your message";
$yourMailTitle = "Your email";
$subjectTitle = "Subject";
$messageTitle = "Message";
$dateAndTime = "Message sent the $date at $time";
$wrongPersonTitle = "Wrong person ? If you are not <strong>" . $firstNameFromContactForm . " " . $lastNameFromContactForm . "</strong>, please ignore this email. If you think you are being spammed, please contact me through my <a href='https://crahe-arthur.com'>website</a> or click this <a href='https://crahe-arthur.com'>link</a>.";

$AltBody = $title . "\n\n" . $textDescription . "\n\n" . $summaryTitle . " : \n\n" . $yourMailTitle . " : " . $mailFromContactForm . "\n\n" . $subjectTitle . " : " . $subjectFromContactForm . "\n\n" . $messageTitle . " : " . $messageFromContactForm . "\n\n" . "--------------------------------------\n\n" . "Wrong person ? If you are not " . $firstNameFromContactForm . " " . $lastNameFromContactForm . ", please ignore this email. If you think you are being spammed, please contact me through my website : https://crahe-arthur.com or click this link : https://crahe-arthur.com";


if ($language === 'fr') {
       $title = "Merci de m'avoir contacté, " . $firstNameFromContactForm . " !";
       $textDescription = "Je vous répondrai dès que possible. En attendant, vous pouvez visiter mon site web pour en savoir plus sur moi et mon travail.";
       $summaryTitle = "Résumé de votre message";
       $yourMailTitle = "Votre email";
       $subjectTitle = "Sujet";
       $messageTitle = "Objet";
       $dateAndTime = "Message envoyé le $date à $time";
       $wrongPersonTitle = "Mauvaise personne ? Si vous n'êtes pas <strong>" . $firstNameFromContactForm . " " . $lastNameFromContactForm . "</strong>, veuillez ignorer cet email. Si vous pensez être victime de spam, veuillez me contacter via mon <a href='https://crahe-arthur.com'>site web</a> ou cliquez sur ce <a href='https://crahe-arthur.com'>lien</a>.";

       $AltBody = $title . "\n\n" . $textDescription . "\n\n" . $summaryTitle . " : \n\n" . $yourMailTitle . " : " . $mailFromContactForm . "\n\n" . $subjectTitle . " : " . $subjectFromContactForm . "\n\n" . $messageTitle . " : " . $messageFromContactForm . "\n\n" . "--------------------------------------\n\n" . "Mauvaise personne ? Si vous n'êtes pas " . $firstNameFromContactForm . " " . $lastNameFromContactForm . ", veuillez ignorer cet email. Si vous pensez être victime de spam, veuillez me contacter via mon site web : https://crahe-arthur.com ou cliquez sur ce lien : https://crahe-arthur.com";
}

try {
       $mail = new PHPMailer(true); // True is used to throw exceptions on errors, which we need to catch
       $mail->SMTPDebug = 0;
       $mail->isSMTP();
       $mail->Host = $_ENV['MAIL_HOST'];
       $mail->SMTPAuth = true;
       $mail->Username = $_ENV['MAIL_USERNAME'];
       $mail->Password = $_ENV['MAIL_PASSWORD'];

       $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
       $mail->Port = $_ENV['MAIL_PORT'];

       $mail->setFrom($_ENV['MAIL_FROM'], 'Arthur CRAHE');
       $mail->addAddress($_ENV['MAIL_ADDADDRESS'], 'Arthur CRAHE');
       $mail->addAddress($mailFromContactForm, $firstNameFromContactForm . " " . $lastNameFromContactForm . ", working at " . $companyOrOrganizationOrSchoolFromContactForm);
       $mail->addBCC($_ENV['PERSONAL_MAIL']);

       $mail->isHTML(true);                                  //Set email format to HTML
       $mail->CharSet = "UTF-8"; // Set the CharSet to utf8 so that the french accents are not messed up
       $mail->Encoding = 'base64'; // Set the encoding to base64 so that the french accents are not messed up
       $mail->Subject = $subjectFromContactForm;
       $mail->Body    = "<html> <head> <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> <meta http-equiv='x-ua-compatible' content='ie=edge'> <meta name='x-apple-disable-message-reformatting'> <meta name='viewport' content='width=device-width, initial-scale=1'> <meta name='format-detection' content='telephone=no, date=no, address=no, email=no'> <style type='text/css'> body,table,td{font-family:Helvetica,Arial,sans-serif !important}.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:150%}a{text-decoration:none}*{color:inherit}a[x-apple-data-detectors],u+#body a,#MessageViewBody a{color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit}img{-ms-interpolation-mode:bicubic}table:not([class^=s-]){font-family:Helvetica,Arial,sans-serif;mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0px;border-collapse:collapse}table:not([class^=s-]) td{border-spacing:0px;border-collapse:collapse}@media screen and (max-width: 600px){.w-full,.w-full>tbody>tr>td{width:100% !important}.w-16,.w-16>tbody>tr>td{width:64px !important}.p-lg-10:not(table),.p-lg-10:not(.btn)>tbody>tr>td,.p-lg-10.btn td a{padding:0 !important}.pr-4:not(table),.pr-4:not(.btn)>tbody>tr>td,.pr-4.btn td a,.px-4:not(table),.px-4:not(.btn)>tbody>tr>td,.px-4.btn td a{padding-right:16px !important}.pl-4:not(table),.pl-4:not(.btn)>tbody>tr>td,.pl-4.btn td a,.px-4:not(table),.px-4:not(.btn)>tbody>tr>td,.px-4.btn td a{padding-left:16px !important}.pr-6:not(table),.pr-6:not(.btn)>tbody>tr>td,.pr-6.btn td a,.px-6:not(table),.px-6:not(.btn)>tbody>tr>td,.px-6.btn td a{padding-right:24px !important}.pl-6:not(table),.pl-6:not(.btn)>tbody>tr>td,.pl-6.btn td a,.px-6:not(table),.px-6:not(.btn)>tbody>tr>td,.px-6.btn td a{padding-left:24px !important}.pt-8:not(table),.pt-8:not(.btn)>tbody>tr>td,.pt-8.btn td a,.py-8:not(table),.py-8:not(.btn)>tbody>tr>td,.py-8.btn td a{padding-top:32px !important}.pb-8:not(table),.pb-8:not(.btn)>tbody>tr>td,.pb-8.btn td a,.py-8:not(table),.py-8:not(.btn)>tbody>tr>td,.py-8.btn td a{padding-bottom:32px !important}*[class*=s-lg-]>tbody>tr>td{font-size:0 !important;line-height:0 !important;height:0 !important}.s-2>tbody>tr>td{font-size:8px !important;line-height:8px !important;height:8px !important}.s-4>tbody>tr>td{font-size:16px !important;line-height:16px !important;height:16px !important}.s-5>tbody>tr>td{font-size:20px !important;line-height:20px !important;height:20px !important}.s-6>tbody>tr>td{font-size:24px !important;line-height:24px !important;height:24px !important}}</style> </head> <body class='bg-blue-100' style='outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica, Arial, sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #000000; margin: 0; padding: 0; border-width: 0;' bgcolor='#cfe2ff'> <table class='bg-blue-100 body' valign='top' role='presentation' border='0' cellpadding='0' cellspacing='0' style='outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica, Arial, sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #000000; margin: 0; padding: 0; border-width: 0;' bgcolor='#cfe2ff'> <tbody> <tr> <td valign='top' style='line-height: 24px; font-size: 16px; margin: 0;' align='left' bgcolor='#cfe2ff'> <table class='container' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;'> <tbody> <tr> <td align='center' style='line-height: 24px; font-size: 16px; margin: 0; padding: 0 16px;'> <table align='center' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%; max-width: 600px; margin: 0 auto;'> <tbody> <tr> <td style='line-height: 24px; font-size: 16px; margin: 0;' align='left'> <table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> <img class='w-16' src='https://crahe-arthur.com/favicon.ico' style='height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; width: 64px; border-style: none; border-width: 0;' width='64'> <table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> <div class='space-y-4'> <h1 class='text-4xl fw-800' style='padding-top: 0; padding-bottom: 0; font-weight: 800 !important; vertical-align: baseline; font-size: 36px; line-height: 43.2px; margin: 0;' align='left'>$title</h1> <table class='s-4 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 16px; font-size: 16px; width: 100%; height: 16px; margin: 0;' align='left' width='100%' height='16'> &#160; </td></tr></tbody> </table> <p class='' style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'>$textDescription</p><table class='s-4 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 16px; font-size: 16px; width: 100%; height: 16px; margin: 0;' align='left' width='100%' height='16'> &#160; </td></tr></tbody> </table> <table class='btn btn-primary rounded-full px-6' role='presentation' border='0' cellpadding='0' cellspacing='0' style='border-radius: 9999px; border-collapse: separate !important;'> <tbody> <tr> <td style='line-height: 24px; font-size: 16px; border-radius: 9999px; margin: 0;' align='center' bgcolor='#0d6efd'> <a target='blank' href='https://crahe-arthur.com' style='color: #ffffff; font-size: 16px; font-family: Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 9999px; line-height: 20px; display: block; font-weight: normal; white-space: nowrap; background-color: #0d6efd; padding: 8px 24px; border: 1px solid #0d6efd;'> crahe-arthur.com </a> </td></tr></tbody> </table> </div><table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> <table class='card rounded-3xl px-4 py-8 p-lg-10' role='presentation' border='0' cellpadding='0' cellspacing='0' style='border-radius: 24px; border-collapse: separate !important; width: 100%; overflow: hidden; border: 1px solid #e2e8f0;' bgcolor='#ffffff'> <tbody> <tr> <td style='line-height: 24px; font-size: 16px; width: 100%; border-radius: 24px; margin: 0; padding: 40px;' align='left' bgcolor='#ffffff'> <h3 class='fw-900 text-center' style='padding-top: 0; padding-bottom: 0; font-weight: 900 !important; vertical-align: baseline; font-size: 28px; line-height: 33.6px; margin: 0;' align='center'>$summaryTitle</h3> <table class='s-5 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 20px; font-size: 20px; width: 100%; height: 20px; margin: 0;' align='left' width='100%' height='20'> &#160; </td></tr></tbody> </table> <div class=''> <table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> <strong class='fw-700 h4' style='padding-top: 0; padding-bottom: 0; font-weight: 700 !important; text-align: left; vertical-align: baseline; font-size: 24px; line-height: 28.8px; margin: 0;'>$yourMailTitle</strong> <p style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'>$mailFromContactForm</p><p style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'> </p><table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> <strong class='fw-700 h4' style='padding-top: 0; padding-bottom: 0; font-weight: 700 !important; text-align: left; vertical-align: baseline; font-size: 24px; line-height: 28.8px; margin: 0;'>$subjectTitle</strong> <p style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'>$subjectFromContactForm</p><p style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'> </p><table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> <strong class='fw-700 h4' style='padding-top: 0; padding-bottom: 0; font-weight: 700 !important; text-align: left; vertical-align: baseline; font-size: 24px; line-height: 28.8px; margin: 0;'>$messageTitle</strong> <p style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'>$messageFromContactForm</p><p style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'> </p></div><table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> <table class='hr' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;'> <tbody> <tr> <td style='line-height: 24px; font-size: 16px; border-top-width: 1px; border-top-color: #e2e8f0; border-top-style: solid; height: 1px; width: 100%; margin: 0;' align='left'> </td></tr></tbody> </table> <table class='s-2 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 8px; font-size: 8px; width: 100%; height: 8px; margin: 0;' align='left' width='100%' height='8'> &#160; </td></tr></tbody> </table> <p style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'>$dateAndTime</p><table class='s-2 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 8px; font-size: 8px; width: 100%; height: 8px; margin: 0;' align='left' width='100%' height='8'> &#160; </td></tr></tbody> </table> <table class='hr' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;'> <tbody> <tr> <td style='line-height: 24px; font-size: 16px; border-top-width: 1px; border-top-color: #e2e8f0; border-top-style: solid; height: 1px; width: 100%; margin: 0;' align='left'> </td></tr></tbody> </table> <table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> <p style='line-height: 24px; font-size: 16px; width: 100%; margin: 0;' align='left'>$wrongPersonTitle</p></td></tr></tbody> </table> <table class='s-6 w-full' role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;' width='100%'> <tbody> <tr> <td style='line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;' align='left' width='100%' height='24'> &#160; </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </body></html>";
       $mail->AltBody = $AltBody;
       $mail->send();

       echo json_encode(array(
              "status" => "success",
              "message" => "Mail sent"
       ));
} catch (Exception $e) {
       if ($language == "fr") exit(json_encode([
              "status" => "error",
              "message" => "erreur lors de l'envoi du mail : " . $e->getMessage() . " " . "mail error info : " . $mail->ErrorInfo
       ]));

       exit(json_encode([
              "status" => "error",
              "message" => "event error message : " . $e->getMessage() . " " . "mail error info : " . $mail->ErrorInfo
       ]));
}
