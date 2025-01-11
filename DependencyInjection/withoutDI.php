<?php

class Database
{
  public function connect()
  {
    echo "Database connected!";
  }
}

class UserService
{
  private $database;

  public function __construct()
  {
    $this->database = new Database(); // Tight coupling
  }

  public function getUser()
  {
    $this->database->connect();
    echo "Fetching user data...";
  }
}

$userService = new UserService();
$userService->getUser();
