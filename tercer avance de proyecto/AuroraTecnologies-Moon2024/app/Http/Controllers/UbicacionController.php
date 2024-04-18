<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ubicaciones;

class UbicacionController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:ver-ubicacion|crear-ubicacion|editar-ubicacion|borrar-ubicacion')->only('index');
        $this->middleware('permission:crear-ubicacion', ['only' => ['create', 'store']]);
        $this->middleware('permission:editar-ubicacion', ['only' => ['edit', 'update']]);
        $this->middleware('permission:borrar-ubicacion', ['only' => ['destroy']]);
    }

    public function index()
    {
        if (auth()->check()) {
            if (auth()->user()->hasRole('Administrador')) {
                $ubicaciones = Ubicaciones::paginate(5);
            } else {
                $user = auth()->user();
                $sensors = $user->sensors()->paginate(5);
            }
            return view('sensors.index', compact('sensors', 'ubicacion'));
        } else {
            return redirect()->route('login');
        }
    }

    public function create()
    {
        // Lógica para mostrar el formulario de creación de ubicación
    }

    public function store(Request $request)
    {
        // Lógica para guardar la ubicación creada en la base de datos
    }

    public function show($id)
    {
        // Lógica para mostrar los detalles de una ubicación específica
    }

    public function edit($id)
    {
        // Lógica para mostrar el formulario de edición de una ubicación específica
    }

    public function update(Request $request, $id)
    {
        // Lógica para actualizar la ubicación en la base de datos
    }

    public function destroy($id)
    {
        // Lógica para eliminar una ubicación de la base de datos
    }
}
