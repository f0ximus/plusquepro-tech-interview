<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateMovieRequest;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Movie/Index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        return Inertia::render('Movie/Show', [
            'movie' => $movie,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return Inertia::render('Movie/Edit', [
            'movie' => $movie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMovieRequest $request, Movie $movie)
    {
        $movie->update($request->validated());
        return to_route('movies.show', $movie);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();
        return to_route('movies.index');
    }

    public function search(Request $request)
    {
        if(!$request->keyword) {
            $search_result = Movie::search();
        } else {
            $search_result = Movie::search($request->keyword, function($meiliSearch, string $query, array $options) {
                $options['attributesToHighlight'] = ['original_title', 'overview'];
                return $meiliSearch->search($query, $options);
            });
        }

        return response()->json([
            'result' => $search_result->paginateRaw(10)
        ]);
    }
}
