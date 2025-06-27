<?php

use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\HeroController;
use Illuminate\Support\Facades\Route;



// Hero Section route

Route::apiResource('heroes', HeroController::class);

// About Section route

Route::apiResource('abouts', AboutController::class);