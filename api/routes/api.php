<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;

Route::middleware('guest')->prefix('auth')->group(function () {
    Route::post('login', [LoginController::class, 'authenticate']);
    Route::post('register', [UserController::class, 'store']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [LoginController::class, 'logout']);
    Route::resource('users', UserController::class);
});
