import { useState, useEffect } from "react";
import CharacterDetail from "./CharacterDetail.tsx";
import CharacterCard from "./CharacterCard.tsx";

function Cards({ onReturn }) {
    const [characters, setCharacters] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const fetchCharacters = (searchQuery = "") => {
        let url = "https://rickandmortyapi.com/api/character/";
        if (searchQuery) {
            url += `?name=${searchQuery}`;
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    setCharacters(data.results);
                } else {
                    setCharacters([]);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    const handleSearch = () => {
        fetchCharacters(query);
    };

    if (selectedCharacter) {
        return (
            <CharacterDetail
                character={selectedCharacter}
                onBack={() => setSelectedCharacter(null)}
            />
        );
    }

    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Characters of Rick and Morty</h2>

            <div className="relative w-full max-w-md mx-auto mb-8">
                <input
                    className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-xl pl-4 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow-md"
                    type="text"
                    placeholder="Research character..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-5 flex items-center rounded-lg bg-slate-900 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>


            <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onMoreInfo={setSelectedCharacter}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-12 mb-6">
                <button
                    onClick={onReturn}
                    className="mt-8 px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors shadow-md"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default Cards;
