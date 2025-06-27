<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AboutResource;
use App\Models\About;

class AboutController extends Controller
{
    public function index()
    {
        $about = About::latest()->first();
        return response()->json([
            'message' => 'About Find Successfully',
             'data'=> new AboutResource($about),

        ]);
    }
}
