
import { useEffect, useRef, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

type Props = {
    id:number;
    value: string;
    isCompleted: boolean;
    onDelete:(id:number) => void;
    editableTaskId: number;
    setEditableTaskId: (id: number)=>void;
    editTask: (id:number, newValue: string)=>void;
    cancelEditionTask: ()=>void;
    toggleTask: (id:number)=>void;

};

const TaskItem = (props: Props) => {
    const [newValue, setNewValue]= useState<string>(props.value);
    const inputRef = useRef<HTMLInputElement>(null);
    


    const onEdit = () => {
        if(!newValue.trim()) return;

        props.editTask(props.id, newValue)
    }

    useEffect(() => {
        if(props.id === props.editableTaskId) {
            setNewValue(props.value);
            inputRef.current?.focus();
        }
    }, [props.editableTaskId, props.value]);


    const isEditing = props.id === props.editableTaskId;

    const baseBtn =
    "px-4 flex items-center justify-center transition duration-200";

    const hoverVisibility =
    "opacity-70 group-hover:opacity-100";

    const toggleBtnClasses = `${baseBtn} ${
        isEditing && "hidden"
    }  ${
        
    props.isCompleted
        ? "bg-gray-200 text-black hover:bg-gray-400 rounded-r"
        : ` ${hoverVisibility} bg-green-500 text-white hover:bg-green-600`
    }`;

    const editBtnClasses = `${baseBtn}  ${
    isEditing
        ? "bg-green-500 hover:bg-green-600 opacity-100 text-white"
        : ` ${hoverVisibility} bg-blue-500 hover:bg-blue-600 text-white`
    }`;

    const deleteBtnClasses = `${baseBtn} ${
    isEditing ? "opacity-100" : hoverVisibility
    } bg-red-500 text-white hover:bg-red-600 rounded-r`;

    return (
        <div className={"flex justify-between items-stretch rounded group mt-4  " + (props.isCompleted ? "bg-green-900" : "bg-gray-700")}>
            {props.id === props.editableTaskId 
            ? <input value={newValue} onKeyDown={(e)=>{if (e.key==="Enter") onEdit()}} onChange={(e)=>{setNewValue(e.target.value)}} ref={inputRef} className={"w-full text-white flex px-4 py-3  rounded-l focus:outline-none bg-gray-600"} />
            : <div className="text-white flex items-center px-4 py-3">{props.value}</div>}
            <div className="flex">
                <button
                onClick={() => props.toggleTask(props.id)}
                className={toggleBtnClasses}
                >
                {props.isCompleted ? <RxCross1 /> : <MdDone />}
                </button>

                {!props.isCompleted && (
                <>
                    <button
                    onClick={() =>
                        isEditing ? onEdit() : props.setEditableTaskId(props.id)
                    }
                    className={editBtnClasses}
                    >
                    {isEditing ? <MdDone /> : <FaRegEdit />}
                    </button>

                    <button
                    onClick={() =>
                        isEditing
                        ? props.cancelEditionTask()
                        : props.onDelete(props.id)
                    }
                    className={deleteBtnClasses}
                    >
                    {isEditing ? <RxCross1 /> : <FaRegTrashAlt />}
                    </button>
                </>
                )}
                
            </ div>
            

            
            
        </div>
    )
}

export default TaskItem;