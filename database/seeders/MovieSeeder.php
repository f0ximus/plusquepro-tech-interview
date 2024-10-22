<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('movies')->truncate();
        DB::table('movies')->insert([ // TODO: Replace test data with dynamic IMDB API data
            [
                'imdb_id' => 1,
                'original_title' => 'The Shawshank Redemption',
                'title' => 'The Shawshank Redemption',
                'overview' => 'Framed in the 1940s for the double, Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
                'original_language' => 'en',
                'popularity' => 21.213,
                'vote_average' => 8.7,
                'vote_count' => 185,
                'adult' => false,
                'poster_path' => 'https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
                'backdrop_path' => 'https://image.tmdb.org/t/p/w500/j9XKiZrVeViAixVRzCta7h1VU9W.jpg',
                'release_date' => '1994-09-23',
            ],
            [
                'imdb_id' => 2,
                'original_title' => 'The Godfather',
                'title' => 'The Godfather',
                'overview' => 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch Vito Corleone barely survives an attempt on his life, his youngest son, Michael, steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
                'original_language' => 'en',
                'popularity' => 21.213,
                'vote_average' => 8.7,
                'vote_count' => 185,
                'adult' => false,
                'poster_path' => 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                'backdrop_path' => 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                'release_date' => '1972-03-14',
            ],
            [
                'imdb_id' => 3,
                'original_title' => 'The Dark Knight',
                'title' => 'The Dark Knight',
                'overview' => 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
                'original_language' => 'en',
                'popularity' => 21.213,
                'vote_average' => 8.7,
                'vote_count' => 185,
                'adult' => false,
                'poster_path' => 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
                'backdrop_path' => 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
                'release_date' => '2008-07-18',
            ],
            [
                'imdb_id' => 4,
                'original_title' => 'The Lord of the Rings: The Return of the King',
                'title' => 'The Lord of the Rings: The Return of the King',
                'overview' => 'Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron\'s forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord\'s realm.',
                'original_language' => 'en',
                'popularity' => 21.213,
                'vote_average' => 8.7,
                'vote_count' => 185,
                'adult' => false,
                'poster_path' => 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
                'backdrop_path' => 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
                'release_date' => '2003-12-01',
            ],
            [
                'imdb_id' => 5,
                'original_title' => 'The Lord of the Rings: The Fellowship of the Ring',
                'title' => 'The Lord of the Rings: The Fellowship of the Ring',
                'overview' => 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
                'original_language' => 'en',
                'popularity' => 21.213,
                'vote_average' => 8.7,
                'vote_count' => 185,
                'adult' => false,
                'poster_path' => 'https://image.tmdb.org/t/p/w500/56zTpe2xvaA4alU51sRWPoKPYZy.jpg',
                'backdrop_path' => 'https://image.tmdb.org/t/p/w500/56zTpe2xvaA4alU51sRWPoKPYZy.jpg',
                'release_date' => '2001-12-19',
            ],
        ]);
    }
}
