<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BackupController;
use App\Http\Controllers\ChartController;   
use App\Http\Controllers\SensorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/prueba2",[BackupController::class,"createBackup"]);
Route::get("/prueba",[ChartController::class,"getData"]);
Route::get("/consumption",[ChartController::class,"getConsumtionData"]);
Route::get("/reading",[ChartController::class,"getReadingData"]);
Route::get("/sensor",[SensorController::class,"getData"]);