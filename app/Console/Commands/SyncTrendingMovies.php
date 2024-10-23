<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class SyncTrendingMovies extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'movies:refresh {--weekly : Sync weekly trending movies, daily by default}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync trending movies from TMDB';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $isWeekly = $this->option('weekly');
        $timeframeLabel = $isWeekly ? 'week' : 'day';
        $seederClass = $isWeekly ? 'MovieSeederTmdbTrendingWeekly' : 'MovieSeederTmdbTrendingDaily';

        // Fetch trending movies from TMDB and seed the database
        $this->line("Syncing trending movies from TMDB for the $timeframeLabel...");
        $seedingExitCode = Artisan::call("db:seed --class=$seederClass");
        if($seedingExitCode === 0) {
            $this->info("Movies updated successfully!");
        } else {
            $this->error("An error occurred while syncing movies.");
            return $seedingExitCode;
        }

        // Flush and re-index meilisearch
        $this->line("Re-indexing Meilisearch...");
        $reindexingExitCode = Artisan::call('scout:flush "App\\\Models\\\Movie"');
        $reindexingExitCode += Artisan::call('scout:import "App\\\Models\\\Movie"');

        if($reindexingExitCode === 0) {
            $this->info("Index up-to-date!");
        } else {
            $this->error("An error occurred while re-indexing movies.");
            return $reindexingExitCode;
        }

        $this->info("All done! Happy watching 🍿🎬");

        return 0;
    }
}
