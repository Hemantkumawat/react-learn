import React from "react";

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <Button className={`px-4 y-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
            {children}
        </Button>
    )
}

export default Button;