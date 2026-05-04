function Home({ onShowSum, onShowCalculator, onShowCards }) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
            <div className="max-w-md w-full text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-10 tracking-tight">
                    Welcome Home
                </h1>

                <div className="flex flex-col gap-4">
                    {/* APP 1: Sum */}
                    <button
                        onClick={onShowSum}
                        className="group flex items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left w-full"
                    >
                        <div className="w-12 h-12 flex-shrink-0 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            <span className="text-xl">➕</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-slate-800">Calculator App</h3>
                        </div>
                    </button>

                    {/* APP 2: Calculator */}
                    <button
                        onClick={onShowCalculator}
                        className="group flex items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left w-full"
                    >
                        <div className="w-12 h-12 flex-shrink-0 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <span className="text-xl">🔢</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-slate-800">Advanced Calc</h3>
                        </div>
                    </button>

                    {/* APP 3: Cards */}
                    <button
                        onClick={onShowCards}
                        className="group flex items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left w-full"
                    >
                        <div className="w-12 h-12 flex-shrink-0 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                            <span className="text-xl">🃏</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-slate-800">Character Cards</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
