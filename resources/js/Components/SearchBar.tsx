import TextInput from '@/Components/TextInput';
import { ChangeEvent, useEffect, useState } from 'react';

interface SearchBarProps {
    setQuery: (value: string) => void;
}

const SearchBar = ({ setQuery }: SearchBarProps) => {
    const debounceDelayMs: number = 500;
    const [keyword, setKeyword] = useState<string>('');

    const clearSearch = () => {
        setKeyword('');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    // Debounce search value (pick keyword 500ms after user stops typing)
    useEffect(() => {
        const handler = setTimeout(() => {
            setQuery(keyword);
        }, debounceDelayMs);

        return () => {
            clearTimeout(handler);
            setQuery('');
        };
    }, [keyword, debounceDelayMs]);

    return (
        <div className="flex items-center rounded-lg border-2 border-black/10 bg-gray-200 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>

            <TextInput
                autoFocus
                className="w-full rounded-none border-none shadow-none outline-none ring-0 focus:ring-0"
                placeholder="Search movie by title, description or release date"
                value={keyword}
                onChange={handleChange}
            />

            <span
                className="cursor-pointer rounded-md bg-white px-2 py-1 font-mono text-xs font-bold shadow-sm hover:bg-gray-300"
                onClick={() => clearSearch()}
            >
                X
            </span>
        </div>
    );
};

export default SearchBar;
