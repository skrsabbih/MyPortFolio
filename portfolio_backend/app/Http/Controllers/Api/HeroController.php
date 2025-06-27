<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\HeroResource;
use App\Models\Hero;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    public function index(){
        $hero = Hero::latest()->first();
        return response()->json([
            'message'=>'Hero Find Successfully',
            'data'=> new HeroResource($hero),
        ]);
    }
}
