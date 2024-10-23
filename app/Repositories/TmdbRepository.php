<?php

namespace App\Repositories;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

class TmdbRepository
{
    private string $apiEndpoint;
    private string $imagesBaseUrl;
    private string $token;

    public function __construct()
    {
        $this->token = config('services.tmdb.token');
        $this->apiEndpoint = config('services.tmdb.api_endpoint');
        $this->imagesBaseUrl = config('services.tmdb.images_base_url');
    }

    public function getTrendingMoviesDaily($formatAsSeederData = false)
    {
        $movies = Http::withToken($this->token)
            ->get("$this->apiEndpoint/trending/movie/day")
            ->collect('results');

        if(!$formatAsSeederData) {
            return $movies;
        }

        return $this->formatAsSeederData($movies);
    }

    public function getTrendingMoviesWeek($formatAsSeederData = false)
    {
        $movies = Http::withToken($this->token)
            ->get("$this->apiEndpoint/trending/movie/week")
            ->collect('results');

        if(!$formatAsSeederData) {
            return $movies;
        }

        return $this->formatAsSeederData($movies);
    }


    public function formatAsSeederData(Collection $movies): Collection
    {
        return $movies->map(function ($movie) {
            $movie['imdb_id'] = $movie['id']; // Renamed movie id key so it doesn't conflict with the id column in the database

            $movie['poster_path'] = $this->imagesBaseUrl . $movie['poster_path']; // Set the poster and backdrop paths to the absolute URLs
            $movie['backdrop_path'] = $this->imagesBaseUrl . $movie['backdrop_path'];

            unset($movie['id']); // Remove unused keys
            unset($movie['genre_ids']);
            unset($movie['media_type']);
            unset($movie['video']);
            return $movie;
        });
    }
}
