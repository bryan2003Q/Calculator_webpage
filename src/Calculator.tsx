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
    // Clase común para todos los botones para no repetir código
    const btnStyle = "p-4 text-xl font-bold rounded-lg transition-colors duration-200 shadow-sm";
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 font-sans">
            <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Calculator</h2>
                {/* PANTALLA */}
                <div className="bg-slate-800 text-white text-right p-5 rounded-xl text-3xl font-mono mb-6 shadow-inner overflow-hidden">
                    {input}
                </div>
                {/* GRILLA DE BOTONES (4 columnas) */}
                <div className="grid grid-cols-4 gap-3">
                    {/* Fila 1 */}
                    <button onClick={clear} className={`${btnStyle} col-span-2 bg-red-500 text-white hover:bg-red-600`}>AC</button>
                    <button onClick={deleteDigit} className={`${btnStyle} bg-amber-500 text-white hover:bg-amber-600`}>DEL</button>
                    <button onClick={() => addOperator('/')} className={`${btnStyle} bg-orange-400 text-white hover:bg-orange-500`}>/</button>
                    {/* Fila 2 */}
                    <button onClick={() => inputDigit('7')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>7</button>
                    <button onClick={() => inputDigit('8')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>8</button>
                    <button onClick={() => inputDigit('9')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>9</button>
                    <button onClick={() => addOperator('*')} className={`${btnStyle} bg-orange-400 text-white hover:bg-orange-500`}>*</button>
                    {/* Fila 3 */}
                    <button onClick={() => inputDigit('4')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>4</button>
                    <button onClick={() => inputDigit('5')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>5</button>
                    <button onClick={() => inputDigit('6')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>6</button>
                    <button onClick={() => addOperator('-')} className={`${btnStyle} bg-orange-400 text-white hover:bg-orange-500`}>-</button>
                    {/* Fila 4 */}
                    <button onClick={() => inputDigit('1')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>1</button>
                    <button onClick={() => inputDigit('2')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>2</button>
                    <button onClick={() => inputDigit('3')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>3</button>
                    <button onClick={() => addOperator('+')} className={`${btnStyle} bg-orange-400 text-white hover:bg-orange-500`}>+</button>
                    {/* Fila 5 */}
                    <button onClick={() => inputDigit('0')} className={`${btnStyle} col-span-2 bg-slate-200 hover:bg-slate-300 text-slate-800`}>0</button>
                    <button onClick={() => inputDigit('.')} className={`${btnStyle} bg-slate-200 hover:bg-slate-300 text-slate-800`}>.</button>
                    <button onClick={calculeResult} className={`${btnStyle} bg-indigo-600 text-white hover:bg-indigo-700`}>=</button>
                </div>
            </div>
            {/* BOTÓN REGRESAR */}
            <button
                onClick={onReturn}
                className="mt-8 px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors shadow-md"
            >
                ← Back to Home
            </button>
        </div>
    );
}
export default Calculator;
