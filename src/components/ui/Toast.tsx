type Props = {
    toast: {
        message: string;
        type: "success" | "error" | "info";
        isVisible: boolean;
    };
}


const Toast = (props: Props) => {
    const colors = {
        success: "bg-green-500",
        error: "bg-red-500",
        info: "bg-gray-800",
    };
    return (
        <div
        className={`fixed bottom-5 right-5 transition-all duration-500 
        ${props.toast.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
        <div className={`${colors[props.toast.type]} text-white px-4 py-2 rounded shadow`}>
            {props.toast.message}
        </div>
        </div>
    )
}

export default Toast;