<?php

namespace App\usuarios;
require "../vendor/autoload.php";

use App\Controller\UserController;
use Firebase\JWT\JWT;


$users = new UserController();

$body = json_decode(file_get_contents('php://input'), true);
$id=isset($_GET['id'])?$_GET['id']:'';
switch($_SERVER["REQUEST_METHOD"]){
    case "POST";
        $resultado = $users->login($body['senha'], $body['email']);
        echo json_encode($resultado);
    break;
    case "GET":
        $headers = getallheaders();
        $token = $headers['Authorization'] ?? null;
        $usuariosController = new UserController();
        $validationResponse = $usuariosController->validarToken($token);
        if ($token === null || !$validationResponse['status']) {
            echo json_encode(['status' => false, 'message' => $validationResponse['message']]);
            exit;
        }
        echo json_encode(['status' => true, 'message' => 'Token válido']);
        exit;
       
    break; 
}