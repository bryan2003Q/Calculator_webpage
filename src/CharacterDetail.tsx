

function CharacterDetail({ character, onBack }) {
    if (!character) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-full md:max-w-xl flex flex-col items-center">
                <div className="mb-6">
                    <img
                        className="h-64 w-64 object-cover rounded"
                        src={character.image}
                        alt={character.name}
                    />
                </div>

                <div className="text-center w-full space-y-4">
                    <h2 className="text-3xl font-bold">
                        {character.name}
                    </h2>

                    <div className="flex flex-col gap-3 bg-gray-50 p-4 rounded text-sm">
                        <p className="flex justify-between border-b pb-2">
                            <span className="text-lg font-bold text-gray-500">Status:</span>
                            <span className={`text-lg font-bold ${character.status === 'Alive' ? 'text-green-600' : character.status === 'Dead' ? 'text-red-600' : 'text-gray-600'}`}>
                                {character.status}
                            </span>
                        </p>
                        <p className="flex justify-between border-b pb-2">
                            <span className="text-lg font-bold text-gray-500">Species:</span>
                            <span className="text-lg font-bold">{character.species}</span>
                        </p>
                        <p className="flex justify-between border-b pb-2">
                            <span className="text-lg font-bold text-gray-500">Gender:</span>
                            <span className="text-lg font-bold">{character.gender}</span>
                        </p>
                        <p className="flex justify-between border-b pb-2">
                            <span className="text-lg font-bold text-gray-500">Origin:</span>
                            <span className="text-lg font-bold text-right ml-4">{character.origin?.name}</span>
                        </p>
                        <p className="flex justify-between border-b pb-2">
                            <span className="text-lg font-bold text-gray-500">origin url:</span>
                            <span className="text-lg font-bold text-right ml-4">{character.origin?.url}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-lg font-bold text-gray-500">Last Location:</span>
                            <span className="text-lg font-bold text-right ml-4">{character.location?.name}</span>
                        </p>

                        <p className="flex justify-between">
                            <span className="text-lg font-bold text-gray-500">Created:</span>
                            <span className="text-lg font-bold text-right ml-4">{character.created}</span>
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={onBack}
                className="mt-6 px-6 py-2 bg-gray-800 text-white font-bold rounded"
            >
                ← Back to Gallery
            </button>
        </div>
    );
}

export default CharacterDetail;

