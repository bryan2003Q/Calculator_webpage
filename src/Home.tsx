function Home({ onShowSum, onShowCalculator, onShowCards }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-8">Welcome Home</h1>

                <div className="flex flex-col gap-4">
                    {/* APP 1: Sum */}
                    <button
                        onClick={onShowSum}
                        className="flex items-center bg-white p-4 rounded text-left w-full"
                    >
                        <span className="text-xl">➕</span>
                        <h3 className="ml-4 text-lg font-bold">Calculator App</h3>
                    </button>

                    {/* APP 2: Calculator */}
                    <button
                        onClick={onShowCalculator}
                        className="flex items-center bg-white p-4 rounded text-left w-full"
                    >
                        <span className="text-xl">🔢</span>
                        <h3 className="ml-4 text-lg font-bold">Advanced Calc</h3>
                    </button>

                    {/* APP 3: Cards */}
                    <button
                        onClick={onShowCards}
                        className="flex items-center bg-white p-4 rounded text-left w-full"
                    >
                        <span className="text-xl">🃏</span>
                        <h3 className="ml-4 text-lg font-bold">Character Cards</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;

