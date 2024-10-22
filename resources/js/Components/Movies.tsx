import MovieList from '@/Components/MovieList';
import Pagination from '@/Components/Pagination';
import SearchBar from '@/Components/SearchBar';
import { SearchResult } from '@/types/SearchResult';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Movies = () => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<SearchResult | null>(null);
    useEffect(() => {
        axios
            .post('/search', {
                keyword: query,
            })
            .then((res) => {
                setResults(res.data.result);
            });
    }, [query]);

    const paginate = (url: string) => {
        axios
            .post(url, {
                keyword: query,
            })
            .then((res) => {
                setResults(res.data.result);
            });
    };

    return (
        <>
            <div className="flex max-h-[550px] w-full flex-col overflow-hidden rounded-2xl bg-gray-700 p-4 shadow-xl">
                <SearchBar setQuery={setQuery} />
                <MovieList results={results} />
                <Pagination results={results} paginate={paginate} />
            </div>
        </>
    );
};

export default Movies;
