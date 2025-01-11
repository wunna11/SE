<?php

// Dependency Class
class Database
{
  public function connect()
  {
    echo "Database connected!";
  }
}

// Main Class with Constructor Dependency Injection
class UserService
{
  private $database;

  // Inject the dependency via the constructor
  public function __construct(Database $database)
  {
    $this->database = $database;
  }

  public function getUser()
  {
    $this->database->connect();
    echo "Fetching user data...";
  }
}

// Inject the dependency when creating UserService
$database = new Database();
$userService = new UserService($database);

$userService->getUser();
