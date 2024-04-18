<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChartData extends Model
{
     // Nombre de la tabla en la base de datos
     protected $table = 'sensorreading';

     // Nombre de las columnas que pueden ser llenadas en la base de datos

 
     // Si tu tabla tiene los campos created_at y updated_at, puedes configurarlos aquí
     // public $timestamps = false;
}
