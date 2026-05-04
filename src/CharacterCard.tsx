


function CharacterCard({ character, onMoreInfo }) {

    const titleSize = "text-lg flex gap-2 font-bold text-slate-600 mt-2 truncate lg:whitespace-normal ";
    const bodySize = "text-lg font-bold text-slate-600 mt-2 truncate lg:whitespace-normal lg:overflow-visible";
    const labelSize = "text-lg  font-extrabold text-slate-700 leading-tight truncate lg:whitespace-normal lg:overflow-visible"

    return (
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-xl 
    transition-all duration-300 flex flex-col h-full group">

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <img
                    className="w-full h-48 lg:w-28 lg:h-28 object-cover rounded-xl mb-0 lg:mb-0"
                    src={character.image}
                    alt={character.name}
                />
                <div className="flex flex-col min-w-0 flex-1">
                    <h2 className={`${titleSize}`} title={character.name}>
                        <span className={`${labelSize}`}>Name:</span>
                        {character.name}
                    </h2>
                    <h2 className={`${titleSize}`}>
                        <span className={`${labelSize}`}>Species:</span>
                        {character.species}
                    </h2>
                </div>
            </div>


            <div className={` ${bodySize}  border-t border-slate-100 `}>
                <p className="flex gap-2 border-b border-slate-50 pb-1">
                    <span className="font-bold text-slate-700">Estate:</span>
                    <span className={character.status === 'Alive' ? 'text-green-500' : character.status === 'Dead' ? 'text-red-500' : 'text-slate-500'}>
                        {character.status}
                    </span>
                </p>
                <p className="flex gap-2 border-b border-slate-50 pb-1">
                    <span className="font-bold text-slate-700">Gender:</span>
                    <span>{character.gender}</span>
                </p>
                <p className="flex gap-2 border-b border-slate-50 pb-1">
                    <span className="font-bold text-slate-700">Origin:</span>
                    <span>{character.location.name}</span>
                </p>
            </div>


            <div className="flex justify-end mt-auto">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-xl transition-all shadow-md "
                    onClick={() => onMoreInfo(character)}
                >
                    More info
                </button>
            </div>
        </div >
    );
}

export default CharacterCard;
