export function Input({ value = undefined, onChange, placeholder, type = "text", className = "" }) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-xl pl-4 py-3 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow-md ${className}`}
        />
    );
}
