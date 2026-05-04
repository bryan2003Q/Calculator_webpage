import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export function SearchBar({ query, setQuery, onSearch }) {
    return (
        <div className="relative w-full max-w-md mx-auto mb-8">
            <Input
                type="text"
                placeholder="Research character..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pr-28"
            />
            <Button
                className="absolute right-1.5 top-1.5 bottom-1.5 px-5 flex items-center rounded-lg bg-slate-900 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95"
                onClick={onSearch}
                variant="custom" // we provide custom classes
            >
                Search
            </Button>
        </div>
    );
}
