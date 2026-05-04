

function CharacterDetail({ character, onBack }) {
    if (!character) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl md:max-w-xl w-full flex flex-col items-center">
                <div className="mb-8 group">
                    <img
                        className="h-64 w-64 object-cover rounded-2xl border-4 border-slate-100 shadow-lg group-hover:scale-105 transition-transform duration-300"
                        src={character.image}
                        alt={character.name}
                    />
                </div>

                <div className="text-center w-full space-y-4">
                    <h2 className="text-3xl font-black text-slate-900 leading-tight">
                        {character.name}
                    </h2>

                    <div className="flex flex-col gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm">
                        <p className="flex justify-between border-b border-slate-200 pb-2">
                            <span className="text-lg font-bold text-slate-500">Status:</span>
                            <span className={`text-lg font-bold ${character.status === 'Alive' ? 'text-green-600' : character.status === 'Dead' ? 'text-red-600' : 'text-slate-600'}`}>
                                {character.status}
                            </span>
                        </p>
                        <p className="flex justify-between border-b border-slate-200 pb-2">
                            <span className="text-lg font-bold text-slate-500">Species:</span>
                            <span className="text-lg text-slate-700 font-bold">{character.species}</span>
                        </p>
                        <p className="flex justify-between border-b border-slate-200 pb-2">
                            <span className="text-lg font-bold text-slate-500">Gender:</span>
                            <span className="text-lg text-slate-700 font-bold">{character.gender}</span>
                        </p>
                        <p className="flex justify-between border-b border-slate-200 pb-2">
                            <span className="text-lg font-bold text-slate-500">Origin:</span>
                            <span className="text-lg text-slate-700 font-bold text-right ml-4">{character.origin?.name}</span>
                        </p>
                        <p className="flex justify-between border-b border-slate-200 pb-2">
                            <span className="text-lg font-bold text-slate-500">origin url:</span>
                            <span className="text-lg text-slate-700 font-bold text-right ml-4">{character.origin?.url}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-lg font-bold text-slate-500">Last Location:</span>
                            <span className="text-lg text-slate-700 font-bold text-right ml-4">{character.location?.name}</span>
                        </p>

                        <p className="flex justify-between">
                            <span className="text-lg font-bold text-slate-500">Created:</span>
                            <span className="text-lg text-slate-700 font-bold text-right ml-4">{character.created}</span>
                        </p>



                    </div>
                </div>
            </div>

            <button
                onClick={onBack}
                className="mt-8 px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg active:scale-95"
            >
                ← Back to Gallery
            </button>
        </div>
    );
}

export default CharacterDetail;
