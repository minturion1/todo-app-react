

type Props = {
    resetCompleted: ()=>void;
    deleteCompleted:()=>void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const BottomButtons = (props: Props) => {
    

    return (
        <div className="flex gap-3 mt-5">
            <button onClick={props.resetCompleted} className="flex-1 p-3 bg-gray-200 hover:bg-gray-300 rounded transition">Reset All Completed</button>
            <button onClick={()=>props.setIsOpen(true)} className="flex-1 p-3 bg-red-600 text-white hover:bg-red-700 rounded transition">Delete All Completed</button>
        </div>
    )
}

export default BottomButtons;