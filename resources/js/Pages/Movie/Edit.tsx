import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Movie } from '@/types/SearchResult';
import { Head, Link, router, useForm } from '@inertiajs/react';

interface EditProps {
    movie: Movie;
}

export default function Edit({ movie }: EditProps) {
    const { data, setData, put, errors } = useForm({
        original_title: movie.original_title || '',
        overview: movie.overview || '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(route('movies.update', movie.id));
    };

    const destroy = () => {
        if (confirm('Are you sure you want to delete this movie?')) {
            router.delete(route('movies.destroy', movie.id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        {movie.original_title}
                    </h2>
                </div>
            }
        >
            <Head title={movie.original_title} />

            <form name="editForm" onSubmit={submit}>
                <div
                    className="min-h-4 bg-cover bg-center py-12"
                    style={{ backgroundImage: `url(${movie.backdrop_path})` }}
                >
                    <div className="mx-auto max-w-7xl space-y-6 py-12 sm:px-6 lg:px-8"></div>
                </div>
                <div className="py-12">
                    <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                            <input
                                type="text"
                                id="title"
                                className="w-full max-w-full rounded bg-gray-800 px-6 py-4 text-white shadow"
                                name="title"
                                value={data.original_title}
                                onChange={(e) =>
                                    setData('original_title', e.target.value)
                                }
                            />
                            {errors.original_title && (
                                <span className="text-sm text-red-600">
                                    {errors.original_title}
                                </span>
                            )}
                            <div className="mt-4">
                                <textarea
                                    id="overview"
                                    className="min-h-full w-full max-w-full rounded bg-gray-800 px-6 py-4 text-white shadow"
                                    name="overview"
                                    value={data.overview}
                                    onChange={(e) =>
                                        setData('overview', e.target.value)
                                    }
                                />
                                {errors.overview && (
                                    <span className="text-sm text-red-600">
                                        {errors.overview}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="mx-auto max-w-7xl space-y-6">
                        <div className="flex items-center justify-end gap-4 p-4 text-white shadow sm:rounded-lg sm:p-8">
                            <Link href={`/movies/${movie.id}`}>Cancel</Link>

                            <button
                                onClick={destroy}
                                tabIndex={-1}
                                type="button"
                                className="rounded bg-red-500 px-3 py-1.5 text-white hover:bg-red-600"
                            >
                                Delete
                            </button>
                            <button
                                type="submit"
                                className="rounded bg-blue-500 px-3 py-1.5 text-white hover:bg-blue-600"
                            >
                                Update
                            </button>
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
            </form>
        </AuthenticatedLayout>
    );
}
