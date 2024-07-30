import React, { useId } from "react";

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1" htmlFor={id}>{label}</label>}
            <input type={type} className={`px-3 py-2 bg-white border border-1 rounded-lg text-black outline-none focus:bg-gray-50  ${className}`} />
        </div>
    )
})

export default Input;