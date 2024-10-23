<p align="center"><a href="https://www.plus-que-pro.fr/" target="_blank"><img src="https://www.plus-que-pro.fr/image/partial/l/o/g/31a5a42dba3efcd5d8dbb241b10af4d0_logoPQP-L-2024.svg" width="400" alt="Laravel Logo"></a></p>


## Installation

installation should be seamless, just follow the following steps:

- `make install-laravel && make install-scout`


-  insert your TMDB api key in the `.env` file (TMDB_API_KEY=your_api_key)


- `make refresh-movies`

You can now access the application on [http://localhost/login](http://localhost/login)
A test user is created with the following credentials:
- **email**: `test@test.com`
- **password**: `password`

## Artisan commands

- `sail artisan movies:refresh` to fetch trending movies from the TMDB API and update the database

By default, it will fetch the trending movies of the day. You can get the trending movies of the week by adding the `--weekly` option.
- `sail artisan movies:refresh --weekly`

A scheduler is set up to auto-magically sync trending movies of the day every day at 00:00.


## Support
Feel free to contact me at jfo@digitalthings.cc if you have any questions or need help.
