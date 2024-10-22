import { SearchResult } from '@/types/SearchResult';

interface PaginationProps {
    results: SearchResult | null;
    paginate: (url: string) => void;
}

const Pagination = ({ results, paginate }: PaginationProps) => {
    return results && results.data.hits.length > 0 ? (
        <>
            <div className="mt-4 flex justify-between border-t border-gray-200 pt-4 font-mono text-xs">
                <div className="flex gap-2">
                    <button
                        type="button"
                        className="rounded-md bg-black px-2 py-1 text-white hover:bg-gray-700"
                        onClick={() => paginate(results.prev_page_url)}
                    >
                        Prev
                    </button>
                    <button
                        type="button"
                        className="rounded-md bg-black px-2 py-1 text-xs text-white hover:bg-gray-700"
                        onClick={() => paginate(results.next_page_url)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
};

export default Pagination;
