import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export function SumComponent({ onBack }) {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);

    const sum = () => {
        const result = numberOne + numberTwo;
        alert(`The result is: ${result}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-xl w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Sum of two numbers</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Number 1</label>
                        <Input
                            type="number"
                            placeholder="Enter first number"

                            onChange={(e) => setNumberOne(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Number 2</label>
                        <Input
                            type="number"
                            placeholder="Enter second number"

                            onChange={(e) => setNumberTwo(Number(e.target.value))}
                        />
                    </div>
                    <Button
                        onClick={sum}
                        className="w-full py-3"
                        variant="primary"
                    >
                        Calculate Result
                    </Button>
                    <Button
                        onClick={onBack}
                        className="w-full py-2"
                        variant="outline"
                    >
                        ← Back to Selection
                    </Button>
                </div>
            </div>
        </div>
    );
}
