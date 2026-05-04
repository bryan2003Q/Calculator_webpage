import { useState, useEffect } from "react";
import CharacterDetail from "../components/organisms/CharacterDetail";
import CharacterCard from "../components/molecules/CharacterCard";
import { SearchBar } from "../components/molecules/SearchBar";
import { generateUniqueId } from "../utils/generateId";
import { Button } from "../components/atoms/Button";

function CardsPage({ onReturn }: any) {
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
                    // Generate our custom id instead of relying on the api's ID for safety
                    const resultsWithCustomIds = data.results.map((char: any) => ({
                        ...char,
                        customId: generateUniqueId()
                    }));
                    setCharacters(resultsWithCustomIds);
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

            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

            <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
                {characters.map((character: any) => (
                    <CharacterCard
                        key={character.customId}
                        character={character}
                        onMoreInfo={setSelectedCharacter}
                    />
                ))}
            </div>
            
            <div className="flex justify-center mt-12 mb-6">
                <Button
                    onClick={onReturn}
                    className="mt-8 px-6 py-2 rounded-full"
                    variant="secondary"
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
}

export default CardsPage;
