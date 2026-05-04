import { useState } from 'react';

function Calculator({ onReturn }) {

    const [input, setInput] = useState('0');

    const clear = () => {
        setInput('0');
    };

    const deleteDigit = () => {
        if (input.length > 1) {
            setInput(input.slice(0, -1));
        } else {
            setInput('0');
        }
    };


    const inputDigit = (digit) => {
        if (input === '0') {
            setInput(digit);
        } else {
            setInput(input + digit);
        }
    };


    const addOperator = (op) => {

        if (input === '0' && op !== '-') return;

        const lastChar = input.slice(-1);


        if (['+', '-', '*', '/'].includes(lastChar)) {
            setInput(input.slice(0, -1) + op);
        } else {

            setInput(input + op);
        }
    };

    const calculeResult = () => {
        try {

            const result = new Function(`return ${input}`)();
            setInput(String(result));
        } catch (error) {
            setInput('Error');
        }
    };



    /* const calculeResult = () => {
        try {
            // eval resuelve la operación matemática escrita en el texto
            setInput(String(eval(input)));
        } catch (error) {
            setInput("Error");
        }
    };  */
    // Clase común para todos los botones
    const btnStyle = "p-4 text-xl font-bold rounded";

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-6 rounded-xl w-full max-w-xs">
                <h2 className="text-2xl font-bold text-center mb-4">Calculator</h2>
                {/* PANTALLA */}
                <div className="bg-gray-800 text-white text-right p-4 rounded text-3xl mb-4">
                    {input}
                </div>
                {/* GRILLA DE BOTONES (4 columnas) */}
                <div className="grid grid-cols-4 gap-2">
                    {/* Fila 1 */}
                    <button onClick={clear} className={`${btnStyle} col-span-2 bg-red-500 text-white`}>AC</button>
                    <button onClick={deleteDigit} className={`${btnStyle} bg-yellow-500 text-white`}>DEL</button>
                    <button onClick={() => addOperator('/')} className={`${btnStyle} bg-orange-400 text-white`}>/</button>
                    {/* Fila 2 */}
                    <button onClick={() => inputDigit('7')} className={`${btnStyle} bg-gray-200`}>7</button>
                    <button onClick={() => inputDigit('8')} className={`${btnStyle} bg-gray-200`}>8</button>
                    <button onClick={() => inputDigit('9')} className={`${btnStyle} bg-gray-200`}>9</button>
                    <button onClick={() => addOperator('*')} className={`${btnStyle} bg-orange-400 text-white`}>*</button>
                    {/* Fila 3 */}
                    <button onClick={() => inputDigit('4')} className={`${btnStyle} bg-gray-200`}>4</button>
                    <button onClick={() => inputDigit('5')} className={`${btnStyle} bg-gray-200`}>5</button>
                    <button onClick={() => inputDigit('6')} className={`${btnStyle} bg-gray-200`}>6</button>
                    <button onClick={() => addOperator('-')} className={`${btnStyle} bg-orange-400 text-white`}>-</button>
                    {/* Fila 4 */}
                    <button onClick={() => inputDigit('1')} className={`${btnStyle} bg-gray-200`}>1</button>
                    <button onClick={() => inputDigit('2')} className={`${btnStyle} bg-gray-200`}>2</button>
                    <button onClick={() => inputDigit('3')} className={`${btnStyle} bg-gray-200`}>3</button>
                    <button onClick={() => addOperator('+')} className={`${btnStyle} bg-orange-400 text-white`}>+</button>
                    {/* Fila 5 */}
                    <button onClick={() => inputDigit('0')} className={`${btnStyle} col-span-2 bg-gray-200`}>0</button>
                    <button onClick={() => inputDigit('.')} className={`${btnStyle} bg-gray-200`}>.</button>
                    <button onClick={calculeResult} className={`${btnStyle} bg-blue-600 text-white`}>=</button>
                </div>
            </div>
            {/* BOTÓN REGRESAR */}
            <button
                onClick={onReturn}
                className="mt-6 px-6 py-2 bg-gray-800 text-white rounded"
            >
                ← Back to Home
            </button>
        </div>
    );
}
export default Calculator;
