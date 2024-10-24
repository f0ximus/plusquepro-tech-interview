import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Movie } from '@/types/SearchResult';
import { Head, router } from '@inertiajs/react';

interface ShowProps {
    movie: Movie;
}

export default function Show({ movie }: ShowProps) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        {movie.original_title}
                    </h2>
                    <button
                        className="inline-flex items-center rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                        onClick={() => router.visit(`/movies/${movie.id}/edit`)}
                    >
                        <svg
                            className="mr-2 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
                        </svg>
                        <span>Edit</span>
                    </button>
                </div>
            }
        >
            <Head title={movie.original_title} />

            <div
                className="min-h-4 bg-cover bg-center py-12"
                style={{ backgroundImage: `url(${movie.backdrop_path})` }}
            >
                <div className="mx-auto max-w-7xl space-y-6 py-12 sm:px-6 lg:px-8"></div>
            </div>
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 text-white shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <h2>Overview</h2>
                        <div className="mt-4">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 text-white shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <div className="mt-4 flex gap-6">
                            <div className="">
                                <img
                                    src={movie.poster_path}
                                    alt={movie.original_title}
                                    className="h-36 w-28 rounded-lg object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p>
                                    <strong>Original title</strong>:{' '}
                                    {movie.original_title}
                                </p>
                                <p>
                                    <strong>Title</strong>: {movie.title}
                                </p>
                                <p>
                                    <strong>Release date</strong>:{' '}
                                    {movie.release_date}
                                </p>
                                <p>
                                    <strong>Language:</strong>{' '}
                                    {movie.original_language}
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <p>
                                    <strong>Rating:</strong>{' '}
                                    {movie.vote_average}
                                </p>
                                <p>
                                    <strong>Vote count</strong>:{' '}
                                    {movie.vote_count}
                                </p>
                                <p>
                                    <strong>Popularity:</strong>{' '}
                                    {movie.popularity}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
