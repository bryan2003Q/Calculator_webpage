export function Button({ onClick, children, className = "", variant = "primary" }) {
    let baseClass = "transition-all font-bold rounded ";

    if (variant === "primary") baseClass += "bg-blue-600 hover:bg-blue-700 text-white ";
    else if (variant === "secondary") baseClass += "bg-slate-800 hover:bg-slate-700 text-white shadow-md ";
    else if (variant === "outline") baseClass += "text-gray-500 font-medium ";

    return (
        <button onClick={onClick} className={`${baseClass} ${className}`}>
            {children}
        </button>
    );
}
