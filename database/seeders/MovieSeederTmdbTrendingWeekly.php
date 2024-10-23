<?php

namespace Database\Seeders;

use App\Repositories\TmdbRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieSeederTmdbTrendingWeekly extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(TmdbRepository $tmdbRepository): void
    {
        $movies = $tmdbRepository->getTrendingMoviesWeekly(true);

        DB::table('movies')->truncate();
        DB::table('movies')->insert($movies->toArray());
    }
}
