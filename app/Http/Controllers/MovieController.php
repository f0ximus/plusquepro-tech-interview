<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function search(Request $request)
    {
        $search_result = Movie::search($request->keyword)->paginateRaw(2); // TODO: Testing, use real pagination value for load-more behavior

        return response()->json([
            'result' => $search_result
        ]);
    }
}
