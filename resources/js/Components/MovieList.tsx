import { SearchResult } from '@/types/SearchResult';
import { format } from 'date-fns';

interface MovieListProps {
    results: SearchResult | null;
}

const MovieList = ({ results }: MovieListProps) => {
    return (
        <div
            className={`relative flex max-h-[640px] flex-col gap-4 overflow-y-scroll ${results && results?.data.hits.length > 0 ? 'mt-4' : null}`}
        >
            {results?.data.hits.map((movie) => (
                <div
                    className="flex cursor-pointer gap-4 rounded-xl p-2 transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-sm"
                    key={movie.id}
                >
                    <img
                        src={movie.poster_path}
                        alt={movie.original_title}
                        className="h-36 w-28 rounded-lg object-cover"
                    />
                    <div className="flex flex-col gap-2">
                        {movie._formatted ? (
                            <div
                                className="title gap-2 text-lg font-bold"
                                dangerouslySetInnerHTML={{
                                    __html: movie._formatted.original_title,
                                }}
                            ></div>
                        ) : (
                            <div className="title gap-2 text-lg font-bold">
                                {movie.original_title}
                            </div>
                        )}

                        <span className="text-sm font-bold">Overview</span>

                        {movie._formatted ? (
                            <div
                                className="overview text-sm text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: movie._formatted.overview,
                                }}
                            ></div>
                        ) : (
                            <div className="overview text-sm text-gray-600">
                                {movie.overview}
                            </div>
                        )}

                        <div className="mt-2 flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                                Release date:{' '}
                                {format(
                                    new Date(movie.release_date),
                                    'MMMM d, yyyy',
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;